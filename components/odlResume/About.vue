<template>
<v-container style="margin-top:2.5rem;">
    <v-row justify="center">
        <v-col sm="3">
            <v-card elevation="0" style="text-align:left;" class="mx-auto">
                <h2 style="font-size:40px; color:rgb(60, 120, 216);">About Me</h2>
            </v-card>
        </v-col>
        
        <v-col sm="9">
            <v-card elevation="0" class="mx-auto" style="padding:5px;">
                <div v-for="(value, index) in about.data" :key="index">
                    <p v-if="index<about.data.length-1" style="margin-bottom: 1.5rem; font-size:20px;">{{value}}</p>
                    <p v-else style="font-size:20px;">{{value}}</p>
                </div>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['about']),
    },
}
</script>

<style>

</style>