<template>
    <v-row>
        <v-col cols="12">
            <v-card  elevation="0">
                <v-list>
                    <v-list-item>
                        <h2>Education</h2>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>

        <v-col cols="12">
            <v-card elevation="0">
                <v-list>
                    <v-list-item>
                        <h4>데이터 분석 전문가 교육과정</h4>
                        &nbsp;&nbsp;&nbsp;
                        <h5 style="color:gray;">6개월(수료)</h5>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
        <v-col cols="12">
            <v-card elevation="0">
                <v-list>
                    <v-list-item>
                        <h4>인하대학교</h4>
                        &nbsp;&nbsp;&nbsp;
                        <h5 style="color:gray;">산업경영공학과 졸업</h5>
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
        ...mapState(['education'])
    },
}
</script>

<style>

</style>