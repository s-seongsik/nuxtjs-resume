<template>
  <v-footer padless color="#3c78d8">
    <v-col
      class="text-center"
      cols="12"
    >
      <strong>{{ new Date().getFullYear() }} — Seo SeongSik. All rights reserved</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>

<style>

</style>