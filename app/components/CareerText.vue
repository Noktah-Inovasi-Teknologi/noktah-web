<template>
  <div class="space-y-4 text-gray-700 dark:text-gray-300">
    <template v-for="(b, i) in blocks" :key="i">
      <ul v-if="b.kind === 'points'" class="space-y-2 pl-5 list-disc marker:text-primary-500">
        <li v-for="(line, n) in b.lines" :key="n">{{ line }}</li>
      </ul>
      <p v-else-if="b.kind === 'lead'" class="font-semibold text-gray-900 dark:text-white">{{ b.lines[0] }}</p>
      <p v-else class="whitespace-pre-line">{{ b.lines.join('\n') }}</p>
    </template>
  </div>
</template>

<script setup lang="ts">
// An Opening's text from the Hub, plain text: a line starting "- " is a point, a line ending ":" just before points is their lead.
const props = defineProps<{ text: string }>()

type Block = { kind: 'text' | 'lead' | 'points'; lines: string[] }

const blocks = computed(() => {
  const out: Block[] = []
  for (const raw of props.text.split(/\r?\n/)) {
    const line = raw.trim()
    const last = out[out.length - 1]
    if (!line) {
      out.push({ kind: 'text', lines: [] })
    } else if (/^[-•]\s+/.test(line)) {
      const point = line.replace(/^[-•]\s+/, '')
      if (last?.kind === 'points') last.lines.push(point)
      else {
        if (last?.kind === 'text' && last.lines.length === 1 && last.lines[0]!.endsWith(':')) last.kind = 'lead'
        out.push({ kind: 'points', lines: [point] })
      }
    } else if (last?.kind === 'text') {
      last.lines.push(line)
    } else {
      out.push({ kind: 'text', lines: [line] })
    }
  }
  return out.filter(b => b.lines.length)
})
</script>
