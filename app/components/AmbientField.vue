<script setup>
/**
 * The single continuous backdrop every glass panel refracts.
 *
 * Reads as a drafting sheet rather than a lava lamp: neutral luminance
 * wash, ruled grid, registration crosshairs, and square scaffolding
 * that traces itself in and dissolves.
 *
 * The one saturated moment on the whole site is the hero's breathing
 * circle. Everything here stays monochrome so that stays the focal point.
 */

const TICK = 7

/** Four corner crosshairs for a w x h frame, as one path. */
function cornerTicks(w, h, t = TICK) {
  return [
    `M0 ${-t} V${t} M${-t} 0 H${t}`,
    `M${w} ${-t} V${t} M${w - t} 0 H${w + t}`,
    `M0 ${h - t} V${h + t} M${-t} ${h} H${t}`,
    `M${w} ${h - t} V${h + t} M${w - t} ${h} H${w + t}`,
  ].join(' ')
}

// x/y are percentages so the frames track the viewport; w/h stay in px
// so stroke weight and tick marks stay crisp at any size. Each frame
// lives in a nested <svg>, which gives it a local origin and lets the
// tick geometry be plain numbers.
const frames = [
  { x: '9%', y: '17%', w: 224, h: 160, delay: '0s' },
  { x: '68%', y: '11%', w: 160, h: 224, delay: '6.5s' },
  { x: '21%', y: '62%', w: 288, h: 144, delay: '12s' },
  { x: '73%', y: '66%', w: 144, h: 144, delay: '3.5s' },
].map(f => ({
  ...f,
  len: 2 * (f.w + f.h), // perimeter, for the stroke-dash draw-on
  ticks: cornerTicks(f.w, f.h),
}))
</script>

<template>
  <div class="ambient-field" aria-hidden="true">
    <!-- 1. Neutral luminance wash. Not decoration: the glass needs light
            variation behind it, or backdrop-filter has nothing to work
            with and every panel reads flat. -->
    <div class="ambient-wash">
      <div
        class="ambient-orb animate-drift-a"
        style="top: -18%; left: -8%; width: 62vw; height: 62vw; background: radial-gradient(circle, var(--wash-light) 0%, transparent 70%);"
      />
      <div
        class="ambient-orb animate-drift-b"
        style="bottom: -20%; right: -10%; width: 58vw; height: 58vw; background: radial-gradient(circle, var(--wash-shade) 0%, transparent 70%);"
      />
      <div
        class="ambient-orb animate-drift-c"
        style="top: 26%; left: 34%; width: 46vw; height: 46vw; background: radial-gradient(circle, var(--wash-cool) 0%, transparent 70%);"
      />
    </div>

    <!-- 2. Ruled sheet: minor 64px, major 256px. -->
    <div class="blueprint-grid" />

    <!-- 3. Registration crosshairs on the major grid. -->
    <svg class="blueprint-marks" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="noktah-registration"
          width="256"
          height="256"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M128 119 V137 M119 128 H137"
            stroke="var(--mark-ink)"
            stroke-width="1"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#noktah-registration)" />
    </svg>

    <!-- 4. Square scaffolding: traces on, holds, then dissolves. -->
    <svg class="blueprint-frames" xmlns="http://www.w3.org/2000/svg">
      <svg
        v-for="(f, i) in frames"
        :key="i"
        :x="f.x"
        :y="f.y"
        :width="f.w"
        :height="f.h"
        overflow="visible"
      >
        <rect
          class="blueprint-frame"
          x="0"
          y="0"
          :width="f.w"
          :height="f.h"
          :style="{ '--len': f.len, animationDelay: f.delay }"
        />
        <path
          class="blueprint-tick"
          :d="f.ticks"
          fill="none"
          :style="{ animationDelay: f.delay }"
        />
      </svg>
    </svg>
  </div>
</template>
