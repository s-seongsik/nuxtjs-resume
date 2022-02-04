<template>
  
  <v-app-bar id="app-bar" app>
    <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <h1>SSS's Portfolio</h1>
        </v-col>


        <v-col sm="12" style="padding:0">
              <v-progress-linear
                v-model="value"
              ></v-progress-linear>
        </v-col>
      </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      show: true,
    }
  },
  methods: {
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = Math.ceil((winScroll / height) * 100);

      this.value = scrolled;
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
/* Helper classes */
.basil {
  background-color: white !important;
}
.basil--text {
  color: #356859 !important;
}
</style>