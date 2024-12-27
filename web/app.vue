<script setup>
import { ref } from "vue";

const text = ref(null);
const msg = ref(null);

function greet() {
  msg.value = "Hello " + text.value;
}
</script>

<template>
  <div class="bg-[#F2EFE9] min-h-screen p-10 h-auto w-screen">
    <div class="text-7xl font-bold">NOKTAH</div>
    <Divider
      class="bg-black border-4 border-black before:border-black rounded-full"
      style="height: 0px"
    />
    <div>
      <div>
        <div class="text-9xl font-bold">
          <p>Noktah</p>
          <p>Inovasi</p>
          <p>Teknologi</p>
        </div>
      </div>
      <div class="text-2xl">
        Combining technology and creativity to create something extraordinary
      </div>
    </div>
    <Divider
      class="bg-black border-4 border-black before:border-black rounded-full"
      style="height: 0px"
    />
    <div class="flex flex-col">
      <div class="flex flex-row">
        <div class="basis-1/3">About</div>
        <div class="basis-2/3">
          Noktah Inovasi Teknologi, known as Noktah, is a startup company that
          focuses on providing innovative solutions and services to the
          Indonesian market. Our main priority is to help and solve problems
          using technology and creativity, two things that are usually decoupled
          from each other, but not at Noktah. We believe that by combining
          technology and creativity, we can create something more simple and
          intuitive yet effective in solving real-world problems.
        </div>
      </div>
      <div class="flex flex-row">
        <div class="basis-1/3">History</div>
        <div class="basis-2/3">
          Noktah emerged from a simple question, "Why does every tech services
          and products has limited creativity on solving real-world problems?".
          Turns out, most companies focused mainly on their technologies,
          sidelining the creativity aspect. We realized that it was time to
          change the game. And so, Noktah was born. Noktah is founded by a group
          of young entrepreneurs who are passionate on integrating technology
          and creativity. Started from Digital Creative Solutions for
          businesses, and expanding to tech-related services and products.
        </div>
      </div>
      <div class="flex flex-row">
        <div class="basis-1/3">Value</div>
        <div class="flex flex-row basis-2/3">
          <div
            class="flex flex-col w-full p-8 border-black border-2 rounded-[64px]"
          >
            <div class="flex flex-row justify-between items-center">
              <div class="p-6 bg-black text-white rounded-full">A</div>
              <div class="text-5xl">Quality</div>
            </div>
            <br />
            <br />
            <div class="text-2xl">
              Noktah prioritizes quality in everything we do, from our products
              and services to our team members. We believe that quality is the
              key to success, and we work tirelessly to ensure that our products
              and services meet the highest standards of excellence. No matter
              what challenge we face, we are committed to delivering the best
              possible solution.
            </div>
          </div>
          <div
            class="flex flex-col w-full p-8 border-black border-2 rounded-[64px]"
          >
            <div class="flex flex-row justify-between items-center">
              <div class="p-6 bg-black text-white rounded-full">A</div>
              <div class="text-5xl">Quality</div>
            </div>
            <br />
            <br />
            <div class="text-2xl">
              Noktah prioritizes quality in everything we do, from our products
              and services to our team members. We believe that quality is the
              key to success, and we work tirelessly to ensure that our products
              and services meet the highest standards of excellence. No matter
              what challenge we face, we are committed to delivering the best
              possible solution.
            </div>
          </div>
          <div
            class="flex flex-col w-full p-8 border-black border-2 rounded-[64px]"
          >
            <div class="flex flex-row justify-between items-center">
              <div class="p-6 bg-black text-white rounded-full">A</div>
              <div class="text-5xl">Quality</div>
            </div>
            <br />
            <br />
            <div class="text-2xl">
              Noktah prioritizes quality in everything we do, from our products
              and services to our team members. We believe that quality is the
              key to success, and we work tirelessly to ensure that our products
              and services meet the highest standards of excellence. No matter
              what challenge we face, we are committed to delivering the best
              possible solution.
            </div>
          </div>
        </div>
      </div>
    </div>
    <Divider
      class="bg-black border-4 border-black before:border-black rounded-full"
      style="height: 0px"
    />
    <!-- <div class="flex items-center justify-center min-h-screen p-10">
            <section class="bg-white dark:bg-surface-900 p-10 rounded-xl flex flex-col gap-8 max-w-3xl">
                <h1 class="text-4xl text-black dark:text-white font-bold text-center">Tailwind CSS + PrimeVue</h1>
                <div class="flex gap-4">
                    <InputText v-model="text" maxlength="20" fluid />
                    <Button label="Submit" @click="greet" class="min-w-20" :disabled="!text" />
                </div>
                <div class="h-8 text-center text-primary text-xl">
                    {{ msg }}
                </div>
            </section>
        </div> -->
  </div>
</template>
