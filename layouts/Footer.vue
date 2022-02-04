<template>
  <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}asdasdasd</span>
    </v-footer>
</template>

<script>
export default {
    data () {
        return {
        fixed: true,
        }
    }
}
</script>

<style>

</style>