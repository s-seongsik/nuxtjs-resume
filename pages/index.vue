<template>
  <v-row justify="center">
    <v-col cols="12" md="9">
          <RfProfile/>
          <v-divider></v-divider>
          <RfExperience/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  components:{
    /** 기존 컴포넌트 */
    Profile: () => import('~/components/resume/Profile.vue'),
    About: () => import('~/components/resume/About.vue'),
    Skill: () => import('~/components/resume/Skill.vue'),
    Experience: () => import('~/components/resume/Experience.vue'),
    Project: () => import('~/components/resume/Project.vue'),
    Certificate: () => import('~/components/resume/Certificate.vue'),
    Education: () => import('~/components/resume/Education.vue'),
    Opensource: () => import('~/components/resume/Opensource.vue'),

    /** 리팩토링 컴포넌트 */
    RfProfile: () => import('~/components/refactoring/Profile.vue'),
    RfExperience: () => import('~/components/refactoring/Experience.vue'),
  }
}
</script>
