<template>
  <v-container style="margin-top:2.5rem;">
        <v-card  elevation="0" style="text-align:left; margin-bottom:1rem;" class="mx-auto">
            <h2 style="font-size:40px; color:rgb(60, 120, 216);">Opensource</h2>
        </v-card>
        
        <div v-for="(value,index) in opensource.data" :key="index">
            <v-row justify="center" style="margin-top:5px;">
                <v-col sm="3">
                    <v-card elevation="0" style="text-align:right;" class="mx-auto">
                        <h2 style="font-size:30px; margin-bottom:1rem;">{{ value.title }}</h2>
                    </v-card>
                </v-col>
                
                <v-col sm="9">
                    <v-card elevation="0" class="mx-auto" style="padding-left:2rem;">
                        <ul>
                            <li v-for="(list, index) in value.contents" :key="index">
                                <p v-if="list.link" style="margin-bottom: 0.5rem; font-size:20px;"><a :href="list.link" target="_blank">{{list.text}}</a></p>
                                <p v-else style="margin-bottom: 0.5rem; font-size:20px;">{{list.text}}</p>
                            </li>
                        </ul>
                    </v-card>
                </v-col>
            </v-row>

            <v-divider v-if="index<opensource.data.length-1" style="margin:1rem;"></v-divider>
        </div>
</v-container>
</template>

<script>
import { mapState }from "vuex"
export default {
    computed: {
        ...mapState(['opensource'])
    },
}
</script>

<style>

</style>