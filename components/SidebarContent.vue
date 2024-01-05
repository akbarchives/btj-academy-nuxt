<template>
  <sidebar class="bg-slate-800 text-white w-[30vh]">
    <ul class="flex flex-col gap-5">
      <li class="p-4 border-b-2 border-black">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="p-4 border-b-2 border-black">
        <nuxt-link to="/education">Education</nuxt-link>
      </li>

      <li class="p-4 border-b-2 border-black">
        <nuxt-link to="/work">Work Experience</nuxt-link>
      </li>

      <li class="p-4 border-b-2 border-black">
        <nuxt-link to="/portofolio">Portofolio</nuxt-link>
      </li>

      <li class="p-4 border-b-2 border-black">
        <nuxt-link to="/project">Personal Project</nuxt-link>
      </li>

      <li class="p-4 border-b-2 border-black">
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </sidebar>
</template>
