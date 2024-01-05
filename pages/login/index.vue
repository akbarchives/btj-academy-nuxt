<template>
  <div class="flex items-center justify-center bg-primary sm:p-24 bg-blue-800">
    <div class="container bg-white sm:rounded-3xl">
      <!-- Navbar -->
      <nav class="flex items-center justify-between p-10">
        <div class="flex items-center gap-3">
          <img
            src="assets/hero.avif"
            alt=""
            id="brandImage"
            class="w-24"
          />
          <p class="text-3xl">Welcome</p>
        </div>
        <ul class="flex gap-3">
          <li>
            <NuxtLink to="/">
              <button
                class="hover:bg-orange-300 rounded-lg border bg-secondary px-4 py-2 transition hover:translate-y-[-5px] hover:transition"
              >
                Home
              </button></NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/login">
              <button
                class="bg-orange-300 rounded-lg border px-4 py-2 transition hover:translate-y-[-5px] hover:transition"
              >
                Login
              </button></NuxtLink
            >
          </li>
        </ul>
      </nav>
      <!-- Main -->
      <main
        class="flex flex-col items-center justify-center gap-8 px-10 py-5 sm:flex-row sm:px-24 sm:py-10"
      >
        <form
          action="/education"
          onsubmit="validateForm(event)"
          class="bg-orange-200 w-[400px] rounded-2xl border p-8"
        >
          <p class="pb-2 text-2xl font-medium">Welcome to our landing page</p>
          <p class="pb-8 text-lg font-normal">
            Please login to access other features
          </p>
          <label
            class="my-1 block font-medium"
            for="username"
            >Username :</label
          >
          <input
            class="mt-1 w-full rounded-lg p-2"
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            onkeyup="usernameValidation()"
          />
          <p
            id="usernameError"
            class="text-sm text-red-600"
          >
            Please fill username
          </p>
          <label
            class="mt-1 block font-medium"
            for="password"
            >Password :</label
          >
          <input
            class="my-1 w-full rounded-lg p-2"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onkeyup="passwordValidation()"
          />
          <p
            id="passwordError"
            class="text-sm text-red-600"
          >
            Please fill password
          </p>

          <div class="my-1">
            <input
              type="checkbox"
              name="showPassword"
              id="showPassword"
            />
            <label
              for="showPassword"
              class="font-medium"
              >Show password</label
            >
          </div>
          <p
            id="capsLockWarning"
            class="invisible text-sm text-yellow-500"
          >
            Capslock is ON
          </p>

          <button
            id="submitForm"
            class="my-1 w-full rounded-lg bg-orange-400 p-2 font-medium text-white transition hover:translate-y-[-5px] hover:transition"
            type="submit"
          >
            Login
          </button>
        </form>
        <div class="flex flex-col items-center justify-center">
          <img
            src="assets/hero.avif"
            alt=""
            width="200px"
          />
          <p class="text-center font-medium">
            "The biggest adventure you can take is to live the life of your
            dreams" - Oprah Winfrey
          </p>
        </div>
      </main>
      <!-- footer -->
      <footer class="bg-secondary sm:rounded-b-2xl">
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
