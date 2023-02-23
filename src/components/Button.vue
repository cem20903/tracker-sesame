<template>
  <button 
    class="rounded-[12px] px-[38px] text-white text-small w-[110px] h-[27px] box-border"
    :class="{ 'bg-green': type === 'primary', 'bg-salmon': type === 'danger', 'bg-grey-light-1': type === 'neutral' }"
  >
    <slot />
  </button>
</template>

<script>
export default {
 name: 'custom-button',
 props: {
  type: {
    type: String
  }
 }
}
</script>

<style>

</style>
