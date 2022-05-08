<template>
    <v-row>
        <v-col cols="12">
            <v-card  elevation="0">
                <v-list>
                    <v-list-item>
                        <h2>Experience</h2>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>

        <v-col cols="12">
            <v-row v-for="(value,index) in experience.data" :key="index">
                <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                    <v-card elevation="0">
                        <v-list>
                            <v-list-item>
                                <h3>{{value.title}}</h3>
                            </v-list-item>
                            <v-list-item>
                                <span style="color:lightgray; display: block;">{{value.position}}
                                <br>
                                    {{value.startDate}} ~ {{value.endDate}}
                                </span>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                    <div v-for="(p_value,p_index) in value.project" :key="p_index">
                        <v-divider v-if="p_index>0"></v-divider>
                        <v-card elevation="0">
                            <v-list>
                                <v-list-item>
                                    <h4>{{p_value.title}}</h4>
                                </v-list-item>
                                <v-list-item>
                                    <span style="color:lightgray; display: block;">{{p_value.startDate}} ~ {{p_value.endDate}}</span>
                                </v-list-item>
                            </v-list>
                        </v-card>
                        
                        <v-card elevation="0">
                            <v-list>
                                    <v-list-item>
                                        <h5>프로젝트 설명</h5>
                                    </v-list-item>
                                    <v-list-item>
                                        <p class="normal-paragraph" style="color:lightgray">{{p_value.description}}</p>
                                    </v-list-item>
                            </v-list>
                        </v-card>
                        
                        <v-card elevation="0">
                            <v-list>
                                <v-list-item>
                                    <h5>프로젝트 역할</h5>
                                </v-list-item>
                                <ul>
                                    <li v-for="(r_value,r_index) in p_value.role" :key="r_index"><p class="normal-paragraph" style="color:lightgray">{{r_value}}</p></li>
                                </ul>
                            </v-list>
                        </v-card>
                        
                        <v-card elevation="0">
                            <v-list>
                                    <v-list-item>
                                        <h5>프로젝트 사용기술</h5>
                                    </v-list-item>
                                    <v-list-item>
                                        <p class="normal-paragraph" style="color:lightgray">{{p_value.tech}}</p>
                                    </v-list-item>
                            </v-list>
                        </v-card>
                    </div>
                </v-col>
            </v-row>   
        </v-col>
    </v-row>
</template>

<script>
import { mapState }from "vuex"
export default {
    computed: {
        ...mapState(['experience'])
    },
}
</script>

<style>

</style>