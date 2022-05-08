<template>
    <v-row>
        <v-col cols="12">
            <v-card  elevation="0" >
                <v-list>
                    <v-list-item>
                        <h2>Certificate</h2>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>

        <v-col cols="12">
            <v-card elevation="0">
                <v-list>
                    <v-list-item>
                        <h4>정보처리기사</h4>
                        &nbsp;&nbsp;&nbsp;
                        <h5 style="color:gray;">2019. 08</h5>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
        <v-col cols="12">
            <v-card elevation="0">
                <v-list>
                    <v-list-item>
                        <h4>SQL 개발자</h4>
                        &nbsp;&nbsp;&nbsp;
                        <h5 style="color:gray;">2019. 04</h5>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
        <v-col cols="12">
            <v-card elevation="0">
                <v-list>
                    <v-list-item>
                        <h4>데이터 분석 준전문가</h4>
                        &nbsp;&nbsp;&nbsp;
                        <h5 style="color:gray;">2018. 12</h5>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
        <v-col cols="12">
            <v-card elevation="0">
                <v-list>
                    <v-list-item>
                        <h4>품질경영기사</h4>
                        &nbsp;&nbsp;&nbsp;
                        <h5 style="color:gray;">2018. 08</h5>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapState }from "vuex"
export default {
    computed: {
        ...mapState(['certificate'])
    },
}
</script>

<style>

</style>