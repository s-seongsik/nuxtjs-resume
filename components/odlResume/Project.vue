<template>
  <v-container style="margin-top:2.5rem;">
        <v-card  elevation="0" style="text-align:left; margin-bottom:1rem;" class="mx-auto">
            <h2 style="font-size:40px; color:rgb(60, 120, 216);">Project</h2>
        </v-card>
       
        <div v-for="(value,index) in project.data" :key="index">
            <v-row justify="center" style="margin-bottom:5px; margin-top:5px;">
                <v-col cols="12" md="12">
                    <v-card elevation="0" style="text-align:center;" class="mx-auto">
                        <h2 style="font-size:30px; margin-bottom:1rem;">{{value.title}}</h2>
                        <p style="font-size:20px; color:gray; margin-bottom:0;">{{value.company}} - {{value.startDate}} ~ {{value.endDate}}</p>
                    </v-card>
                </v-col>
                
                <v-col sm="6">
                    <v-card elevation="0" class="mx-auto">
                        <v-carousel height="270" show-arrows-on-hover hide-delimiter-background>
                            <v-carousel-item
                            v-for="(image,index) in value.Images"
                            :key="index"
                            :src="image.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>

                <v-col sm="6">
                    <v-card elevation="0" class="mx-auto">
                        <ul>
                            <li v-for="(value, index) in value.contents" :key="index">
                              
                              <p v-if="value.link" style="margin-bottom: 0.5rem; font-size:20px;"><a :href="value.link" target="_blank">{{value.text}}</a></p>
                              <p v-else style="margin-bottom: 0.5rem; font-size:20px;">{{value.text}}</p>
                            </li>
                        </ul>
                    </v-card>
                </v-col>
            </v-row>

            <v-divider v-if="index<project.data.length-1" style="margin:1rem;"></v-divider>
        </div>

</v-container>
</template>

<script>
import { mapState }from "vuex"
export default {
    computed: {
        ...mapState(['project'])
    },
}
</script>

<style>

</style>