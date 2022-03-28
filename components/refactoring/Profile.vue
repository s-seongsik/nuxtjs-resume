<template>
<v-container fluid grid-list-md>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-card elevation="0">
        <v-list>
            <!-- about me -->
            <v-list-item >
                   <h2 style="font-size:30px; color:rgb(60, 120, 216);">🧑‍💻 안녕하세요, 저는 개발자 서성식입니다.</h2>
            </v-list-item>

            <br>

            <v-list-item v-for="(value, index) in about.data" :key="index">
                <p style="font-size:15px;">- {{value}}</p>
            </v-list-item>
            
            <br>

            <!-- contact -->
            <v-list-item v-for="(value, index) in profile.data.contact" :key="index">
                <v-list-item-icon>
                    <v-icon color="indigo">
                    {{value.icon}}
                    </v-icon>
                </v-list-item-icon>
                    <v-list-item-title v-if="value.link"><a :href="value.link" target="_blank">{{value.text}}</a></v-list-item-title>
                    <v-list-item-title v-else>{{value.text}}</v-list-item-title>
            </v-list-item>
          </v-list>
      </v-card>
    </v-flex>
    
  </v-layout>
</v-container>
</template>

<script>
import { mapState }from "vuex"
export default {
    computed: {
        ...mapState(['profile', 'about'])
    }
}
</script>

<style>

</style>