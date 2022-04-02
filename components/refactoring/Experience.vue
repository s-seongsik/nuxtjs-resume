<template>
    <v-row >
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-card  elevation="0" style="text-align:left; margin-bottom:1rem;" class="mx-auto">
                <h2>Experience</h2>
            </v-card>
        </v-col>
        
        
        <v-col cols="12" sm="12" md="4" lg="4" xl="5">
            <v-card elevation="0">
                <h3>위즈코어</h3>
                <span style="color:gray; display: block;">Frontend Developer</span>
                <span style="color:gray">2019-12 ~ 현재</span>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="8" lg="8" xl="7">
            <v-card elevation="0">
                <h3>실적관리 서비스 개발</h3>
                <p style="color:gray">2019-12 ~ 현재</p>
            </v-card>
            <v-card elevation="0">
                <h4>프로젝트 설명</h4>
                <p style="color:gray">사내 업무 실적을 관리하기 위한 프로그램</p>
            </v-card>
            <v-card elevation="0">
                <h4>프로젝트 역할</h4>
                <p style="color:gray">Vue.js(2)기반으로 프론트엔드 개발</p>
            </v-card>
            <v-card elevation="0">
                <h4>프로젝트 사용기술</h4>
                <p style="color:gray">2019-12 ~ 현재</p>
            </v-card>
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