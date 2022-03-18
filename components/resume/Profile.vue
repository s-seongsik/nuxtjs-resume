<template>
<v-container>
    <v-row justify="center" >
        <v-col sm="6">
            <v-card class="mx-auto" max-width="280px" elevation="0" >
                <v-img src="images/profile/seongsik.jpg"></v-img>
                <v-card-text style="text-align:center;">{{profile.data.subText}}</v-card-text>
            </v-card>
        </v-col>

        <v-col sm="6">
            <v-card elevation="0">
                <v-list>
                    <!-- name(position) -->
                    <v-list-item >
                        <v-list-item-content>
                            <v-list-item-title><h1 style="font-size:30px; color:rgb(60, 120, 216);">{{profile.data.name}}</h1></v-list-item-title>
                            <!-- <v-list-item-subtitle>Full-Statck developer</v-list-item-subtitle> -->
                        </v-list-item-content>
                    </v-list-item>
                    
                    <!-- email -->
                    <v-list-item v-for="(value, index) in profile.data.contact" :key="index">
                        <v-list-item-icon>
                            <v-icon color="indigo">
                            {{value.icon}}
                            </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-if="value.link"><a :href="value.link" target="_blank">{{value.text}}</a></v-list-item-title>
                            <v-list-item-title v-else>{{value.text}}</v-list-item-title>
                            <!-- <v-list-item-subtitle>Email</v-list-item-subtitle> -->
                        </v-list-item-content>
                    </v-list-item>

                </v-list>
            </v-card>
        </v-col>
    </v-row>    
</v-container>
</template>

<script>
import { mapState }from "vuex"
export default {
    computed: {
        ...mapState(['profile'])
    }
}
</script>

<style>

</style>