<template>
  <v-container style="margin-top:2.5rem;">
        <v-card  elevation="0" style="text-align:left; margin-bottom:1rem;" class="mx-auto">
            <h2 style="font-size:40px; color:rgb(60, 120, 216);">Education</h2>
        </v-card>
        
        <div v-for="(value,index) in education.data" :key="index">
            <v-row justify="center" style="margin-top:5px">
                <v-col sm="3">
                    <v-card elevation="0" style="text-align:right; color:gray;" class="mx-auto">
                        <h2 style="font-size:25px; margin-bottom:0;">{{value.startDate}} ~ {{value.endDate}}</h2>
                        <p>{{value.subtitle}}</p>
                    </v-card>
                </v-col>
                
                <v-col sm="9">
                    <v-card elevation="0" class="mx-auto" style="padding-left:2rem;">
                        <h2 style="font-size:25px; margin-bottom:0;">{{value.title}}</h2>
                    </v-card>
                </v-col>
            </v-row>
            <v-divider v-if="index<education.data.length-1" style="margin:1rem;"></v-divider>
        </div>

</v-container>
</template>

<script>
import { mapState }from "vuex"
export default {
    computed: {
        ...mapState(['education'])
    },
}
</script>

<style>

</style>