<template>
  <div class="p-16">
    <h1 class="text-2xl font-medium">Update your contact</h1>
    <div class="flex flex-col mt-20">
      <h2 class="text-xl font-medium py-2">Email</h2>
      <div class="flex gap-3">
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="Email"
        />
      </div>
      <h2 class="text-xl font-medium py-2">Linkedin</h2>
      <div class="flex gap-3">
        <input
          class="p-5 border border-black rounded-lg"
          type="text"
          placeholder="URL linkedin"
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
