<template>
  <div class="flex items-center justify-center bg-primary md:p-24 bg-blue-800">
    <div class="container bg-white md:rounded-3xl">
      <!-- Navbar -->
      <nav class="flex items-center justify-between p-10">
        <div class="flex items-center gap-3">
          <img
            src="assets/hero.avif"
            alt=""
            class="w-24"
          />
          <p class="text-3xl">Welcome</p>
        </div>
        <ul class="flex gap-3">
          <li>
            <NuxtLink to="/">
              <button
                class="bg-orange-300 rounded-lg border px-4 py-2 transition hover:translate-y-[-5px] hover:transition"
              >
                Home
              </button></NuxtLink
            >
          </li>
          <li>
            <NuxtLink href="/login">
              <button
                class="hover:bg-orange-300 rounded-lg border bg-secondary px-4 py-2 transition hover:translate-y-[-5px] hover:transition"
              >
                Login
              </button></NuxtLink
            >
          </li>
        </ul>
      </nav>
      <!-- Main -->
      <main class="flex flex-col justify-center">
        <section
          id="intro"
          class="flex flex-col items-center justify-center gap-4 p-10 px-10 md:h-fit md:flex-row md:gap-8 md:px-36 lg:h-[100vh]"
        >
          <div
            class="group aspect-square w-2/4 overflow-hidden rounded-full border-4 border-black bg-black shadow-lg transition"
          >
            <img
              src="assets/avatar.jpg"
              class="border-0 shadow-lg transition group-hover:scale-105 md:object-cover"
              alt=""
            />
          </div>
          <div class="md:w-3/5">
            <h3 class="mb-4 text-2xl font-bold">Muhammad Rizqi Akbar</h3>
            <p class="mb-4 font-normal">
              A fresh graduate majoring in Informatics Computer Science.
              Interested in the <mark>world of programming</mark>, especially
              <mark>Web Development</mark> . I also learn to develop application
              from designing in UI/UX stage until the final part. I think being
              a programmer is challenging for me.
            </p>
            <p class="mb-8 font-mono font-extrabold">
              "Tetaplah menjadi bodoh"
            </p>
            <a
              href="https://www.linkedin.com/in/mrizqiakbar/"
              class="mr-4 mb-2 inline-block rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
              >Linkedin</a
            >
            <a
              href="https://github.com/akbarchives"
              class="mb-2 inline-block rounded-lg bg-gray-700 px-4 py-2 text-white hover:bg-gray-800"
              >Github</a
            >
          </div>
        </section>
        <section
          id="education"
          class="bg-orange-200 flex flex-col items-center justify-center gap-8 p-10 md:h-[100vh] md:flex-row md:gap-12 md:px-36"
        >
          <img
            src="assets/education.svg"
            class="w-2/6 transition hover:scale-105 hover:transition"
            alt=""
          />
          <div
            class="flex w-1/2 flex-col items-center justify-center gap-4 text-center"
          >
            <p class="text-2xl font-bold">Education:</p>
            <div
              class="w-full rounded-xl border border-black bg-white p-4 shadow-[10px_10px_black] transition hover:translate-x-[10px] hover:translate-y-[10px] hover:bg-[#ffe0d0] hover:shadow-none hover:transition"
            >
              <p class="font-medium">SMK Telkom Purwokerto</p>
              <p>Software Engineering(2015-2018)</p>
            </div>
            <div
              class="w-full rounded-xl border border-black bg-white p-4 shadow-[10px_10px_black] transition hover:translate-x-[10px] hover:translate-y-[10px] hover:bg-[#ffe0d0] hover:shadow-none hover:transition"
            >
              <p class="font-medium">Telkom University</p>
              <p>Informatics(2018-2022)</p>
            </div>
          </div>
        </section>
        <section
          id="work"
          class="flex flex-col items-center justify-center gap-8 p-10 md:h-[100vh] md:flex-row-reverse md:gap-12 md:px-36"
        >
          <img
            src="assets/work.svg"
            class="w-2/6 transition hover:scale-105 hover:transition"
            alt=""
          />
          <div
            class="flex w-1/2 flex-col items-center justify-center gap-4 text-center"
          >
            <p class="text-2xl font-bold">Work:</p>
            <div
              class="w-full rounded-xl border border-black bg-white p-4 shadow-[10px_10px_black] transition hover:translate-x-[10px] hover:translate-y-[10px] hover:bg-[#ffe0d0] hover:shadow-none hover:transition"
            >
              <p class="font-medium">Telkom University(2021)</p>
              <p>FrontEnd Developer (3 Months)</p>
            </div>
            <div
              class="w-full rounded-xl border border-black bg-white p-4 shadow-[10px_10px_black] transition hover:translate-x-[10px] hover:translate-y-[10px] hover:bg-[#ffe0d0] hover:shadow-none hover:transition"
            >
              <p class="font-medium">Badan Pusat Statistika(2023)</p>
              <p>Entry Data(2 Months)</p>
            </div>
          </div>
        </section>
      </main>
      <!-- footer -->
      <footer class="bg-secondary md:rounded-b-2xl">
        <p class="p-4 text-center font-medium text-white">© 2023 BTJ Academy</p>
      </footer>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: '',
});
</script>
