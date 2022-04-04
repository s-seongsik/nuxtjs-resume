<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="0">
        <v-list>
            <!-- about me -->
            <v-list-item >
                   <h1>🧑‍💻 안녕하세요, 
                    <br>
                   저는 서성식입니다.
                   </h1>
            </v-list-item>

            <br>
            <br>

            <v-list-item v-for="(value, index) in profile.data.text" :key="index">
                <p class="profile-paragraph">{{value}}</p>
            </v-list-item>
            
            <br>

            <!-- contact -->
            <v-list-item v-for="(value, index) in profile.data.contact" :key="index">
                <v-list-item-icon>
                    <v-icon color="primary">
                      {{value.icon}}
                    </v-icon>
                </v-list-item-icon>

                <v-list-item-content v-if="value.link"><a :href="value.link" target="_blank">{{value.text}}</a></v-list-item-content>
                <v-list-item-content v-else>{{value.text}}</v-list-item-content>
            </v-list-item>
          </v-list>
      </v-card>
    </v-col>
  </v-row>
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