<template>
    <v-row >
        <v-col cols="12">
            <v-card  elevation="0">
                <v-list>
                    <v-list-item>
                        <h2>Opensource</h2>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>

        <v-col cols="12">
            <v-card elevation="0">
                <v-list>
                    <v-list-item>
                        <h3>개인 기술 블로그</h3>
                    </v-list-item>
                    <v-list-item>
                        <ul>
                            <li>새로운 기술들을 공부할 때, 트러블 슈팅을 해결할 때, 개발 팁 등 자세히 정리하여 공유도하고 참고 서적으로 사용하기 위함</li>
                            <li>2021년 하반기부터 개발에 관련된 모든 것을 꾸준히 작성하고 있음</li>
                        </ul>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
        <v-col cols="12">
            <v-card elevation="0">
                <v-list>
                    <v-list-item>
                        <h3>nuxtjs-resume</h3>
                    </v-list-item>
                    <v-list-item>
                        <ul>
                            <li>Nuxt.js와 vuetify로 만든 정적 웹 포트폴리오 프로젝트</li>
                            <li>마땅히 마음에 드는게 없어 내가 만들어버린 프로젝트</li>
                            <li>누구나 쉽게 사용할 수 있는 웹 포트폴리오 프로젝트</li>
                        </ul>
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
        ...mapState(['opensource'])
    },
}
</script>

<style>

</style>