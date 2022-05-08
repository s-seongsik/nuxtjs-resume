<template>
    <v-row>
        <v-col cols="12">
            <v-card  elevation="0">
                <v-list>
                    <v-list-item>
                        <h2>Opensource</h2>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>

        <v-col cols="12" v-for="(value,index) in opensource.data" :key="index">
            <v-card elevation="0">
                <v-list>
                    <v-list-item>
                        <h3>{{value.title}}</h3>
                    </v-list-item>
                    <v-list-item>
                        <ul>
                            <li v-for="(list, index) in value.contents" :key="index">
                                <p style="color:lightgray; overflow:auto;" v-if="list.link"><a :href="list.link" target="_blank">{{list.text}}</a></p>
                                <p style="color:lightgray" v-else>{{list.text}}</p>

                                <!-- <p v-if="list.link" class="normal-paragraph" style="color:lightgray"><a :href="list.link" target="_blank">{{list.text}}</a></p>
                                <p v-else class="normal-paragraph" style="color:lightgray" >{{list.text}}</p> -->
                            </li>
                        </ul>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
        <!-- <v-col cols="12" v-for="(value,index) in opensource.data" :key="index">
            <v-card elevation="0">
                <v-list>
                    <v-list-item>
                        <h3>{{value.title}}</h3>
                    </v-list-item>
                    <v-list-item>
                        <ul>
                            <li v-for="(list, index) in value.contents" :key="index">
                                <p style="color:lightgray" v-if="list.link"><a :href="list.link" target="_blank">{{list.text}}</a></p>
                                <p style="color:lightgray" v-else>{{list.text}}</p>
                            </li>
                        </ul>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col> -->
    </v-row>
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