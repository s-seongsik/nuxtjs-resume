<template>
<v-container grid-list-md >
  <v-row justify="center">
    <RfProfile/>
    <v-divider></v-divider>
    <RfExperience/> 
    <v-divider></v-divider>
    <RfOpensource/>
    <v-divider></v-divider>
    <RfSkill/>
    <v-divider></v-divider>
    <RfCertificate/>
    <v-divider></v-divider>
    <RfEducation/>
  </v-row>
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
    RfExperience: () => import('~/components/refactoring/Experience.vue'),
    RfSkill: () => import('~/components/refactoring/Skill.vue'),
    RfOpensource: () => import('~/components/refactoring/Opensource.vue'),
    RfCertificate: () => import('~/components/refactoring/Certificate.vue'),
    RfEducation: () => import('~/components/refactoring/Education.vue'),
  }
}
</script>
