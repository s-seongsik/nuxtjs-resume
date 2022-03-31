<template>
    <v-row >
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-card  elevation="0" style="text-align:left; margin-bottom:1rem;" class="mx-auto">
                <h2>Experience</h2>
            </v-card>
        </v-col>
        
        
        <v-col cols="12" sm="12" md="4" lg="3" xl="3">
            <v-card elevation="0">
                <h3>위즈코어</h3>
                <p style="color:gray; margin-bottom:0;">프론트엔드 개발자</p>
                <p style="color:gray">2019-12 ~ 현재</p>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="8" lg="9" xl="9">
            <ul>
                <li><p style="margin-bottom:0; font-size:1rem; font-weight: 400;"> 자사 서비스 API 개발 및 유지보수, 공장 모니터링 시스템 UX/UI 프론트엔드 개발</p></li>
                <li><p style="margin-bottom:0; font-size:1rem; font-weight: 400;"> 자사 서비스 API 개발 및 유지보수, 공장 모니터링 시스템 UX/UI 프론트엔드 개발</p></li>
                <li><p style="margin-bottom:0; font-size:1rem; font-weight: 400;"> 자사 서비스 API 개발 및 유지보수, 공장 모니터링 시스템 UX/UI 프론트엔드 개발</p></li>
                <li><p style="margin-bottom:0; font-size:1rem; font-weight: 400;"> 자사 서비스 API 개발 및 유지보수, 공장 모니터링 시스템 UX/UI 프론트엔드 개발</p></li>
                <li><p style="margin-bottom:0; font-size:1rem; font-weight: 400;"> 자사 서비스 API 개발 및 유지보수, 공장 모니터링 시스템 UX/UI 프론트엔드 개발</p></li>
            </ul>
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