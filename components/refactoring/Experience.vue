<template>
    <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12 xl12>
            <v-card  elevation="0" style="text-align:left; margin-bottom:1rem;" class="mx-auto">
                <h2 style="font-size:40px; color:rgb(60, 120, 216);">경험</h2>
            </v-card>
        </v-flex>
        
        
        <v-flex xs12 sm3 md2 lg2 xl2>
            <v-card elevation="0">
                <h2 style="font-size:25px; margin-bottom:1rem;">위즈코어</h2>
                <p style="color:gray; margin-bottom:0;">프론트엔드 개발자</p>
                <p style="color:gray">2019-12 ~ 현재</p>
            </v-card>
        </v-flex>
        <v-flex xs12 sm9 md10 lg10 xl10>
            <v-card elevation="0">
                <ul>
                    <li><p style="margin-bottom: 0.5rem; font-size:20px;"> 자사 서비스 API 개발 및 유지보수, 공장 모니터링 시스템 UX/UI 프론트엔드 개발을 메인으로 했습니다. </p></li>
                    <li><p style="margin-bottom: 0.5rem; font-size:20px;"> 자사 서비스 API 개발 및 유지보수, 공장 모니터링 시스템 UX/UI 프론트엔드 개발을 메인으로 했습니다. </p></li>
                    <li><p style="margin-bottom: 0.5rem; font-size:20px;"> 자사 서비스 API 개발 및 유지보수, 공장 모니터링 시스템 UX/UI 프론트엔드 개발을 메인으로 했습니다. </p></li>
                    <li><p style="margin-bottom: 0.5rem; font-size:20px;"> 자사 서비스 API 개발 및 유지보수, 공장 모니터링 시스템 UX/UI 프론트엔드 개발을 메인으로 했습니다. </p></li>
                    <li><p style="margin-bottom: 0.5rem; font-size:20px;"> 자사 서비스 API 개발 및 유지보수, 공장 모니터링 시스템 UX/UI 프론트엔드 개발을 메인으로 했습니다. </p></li>
                </ul>
            </v-card>
        </v-flex>
    </v-layout>
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