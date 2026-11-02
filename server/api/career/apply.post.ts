// The multipart body is never parsed here: the stream goes to hub-api as it is (spec 033 contracts).
const MAX_BODY = 12 * 1024 * 1024

export default defineEventHandler(async (event) => {
  const length = Number(getRequestHeader(event, 'content-length') ?? 0)
  if (length > MAX_BODY) {
    setResponseStatus(event, 422)
    return { error: 'unreadable_file' }
  }
  return relay(event, () => fetch(hubUrl(event, '/public/applications'), {
    method: 'POST',
    headers: hubHeaders(event, {
      'content-type': getRequestHeader(event, 'content-type') ?? '',
      ...(length ? { 'content-length': String(length) } : {}),
    }),
    body: getRequestWebStream(event),
    // @ts-expect-error duplex is required for a streamed body and missing from the DOM typings
    duplex: 'half',
  }))
})
