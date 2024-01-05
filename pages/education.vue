<template>
  <div class="p-16">
    <h1 class="text-2xl font-medium">Update your education</h1>
    <div class="flex flex-col mt-20">
      <h2 class="text-xl font-medium py-2">SMA</h2>
      <div class="flex gap-3">
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="SMA..."
        />
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="tahun masuk"
        />
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="tahun lulus"
        />
      </div>
      <h2 class="text-xl font-medium py-2">Kuliah</h2>
      <div class="flex gap-3">
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="Universitas..."
        />
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="Jurusan"
        />
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="tahun masuk"
        />
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="tahun lulus"
        />
      </div>
    </div>
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
