<template>
  <v-app-bar id="app-bar" app elevation="0">
    <v-row justify="center" align="center">
      <v-flex xs12 sm12 >
        <v-toolbar-title>
          <v-progress-linear 
                v-model="value"
                height="50"
              ><h2>경력 기술서</h2>
          </v-progress-linear>
        </v-toolbar-title>
      </v-flex>
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