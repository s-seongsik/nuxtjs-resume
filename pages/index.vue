<template>
  <v-container>
        <RfProfile/>
        <Profile/>
  </v-container>
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
  }
}
</script>
