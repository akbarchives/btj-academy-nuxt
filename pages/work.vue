<template>
  <div class="p-16">
    <h1 class="text-2xl font-medium">Update your work experience</h1>
    <div class="flex flex-col mt-20">
      <div class="flex gap-3">
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="Company ..."
        />
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="Postion"
        />
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="tahun masuk"
        />
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="tahun keluar"
        />
      </div>
    </div>
    <button class="p-5 text-lg font-medium bg-orange-200 mr-5 rounded-lg mt-5">
      Add other work
    </button>
    <button class="p-5 text-lg font-medium bg-blue-500 rounded-lg mt-5">
      Submit
    </button>
  </div>
</template>

<script>
definePageMeta({
  layout: 'default',
});
</script>
