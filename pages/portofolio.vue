<template>
  <div class="p-16">
    <h1 class="text-2xl font-medium">Update your Portfolio</h1>
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
          placeholder="year"
        />
      </div>
      <textarea
        class="border border-black mt-5 p-5"
        name=""
        id=""
        cols="30"
        rows="10"
      >
....</textarea
      >
    </div>
    <button class="p-5 text-lg font-medium bg-orange-200 mr-5 rounded-lg mt-5">
      Add other portofolio
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
