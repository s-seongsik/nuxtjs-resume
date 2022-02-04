<template>
  <v-container style="margin-top:2.5rem;">
        <v-card elevation="0" style="text-align:left; margin-bottom:1rem;" class="mx-auto">
            <h2 style="font-size:40px; color:rgb(60, 120, 216);">Skill</h2>
        </v-card>
        
        <div v-for="(value, index) in skill.data" :key="index">
            <v-row justify="center" style="margin-top:5px">
                <v-col sm="3">
                    <v-card elevation="0" style="text-align:right;" class="mx-auto">
                        <h2 style="font-size:30px;">{{value.title}}</h2>
                    </v-card>
                </v-col>
                
                <v-col sm="9">
                    <v-card elevation="0" class="mx-auto" style="padding:5px;">
                        <v-row>
                            <v-col cols="12" sm="3" v-for="(c_value, c_index) in value.contents" :key="c_index">
                                <ul>
                                    <li><p style="font-size:20px;">{{c_value}}</p></li>
                                </ul>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <v-divider v-if="index<skill.data.length-1"></v-divider>
        </div>
</v-container>
</template>

<script>
import { mapState }from "vuex"
export default {
    computed: {
        ...mapState(['skill'])
    }
}
</script>

<style>

</style>