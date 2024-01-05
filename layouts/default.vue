<template>
  <Navigation />

  <div class="flex w-full h-[90vh]">
    <SidebarContent />
    <div class="w-full flex flex-col justify-between">
      <slot></slot>
      <FooterContent />
    </div>
  </div>
</template>
