<template>
<v-container grid-list-md >
  <v-row justify="center">
    <RfProfile/>
    <!-- <v-divider></v-divider> -->
    <RfExperience/> 
    <!-- <v-divider></v-divider> -->
    <RfOpensource/>
    <!-- <v-divider></v-divider> -->
    <RfSkill/>
    <!-- <v-divider></v-divider> -->
    <RfCertificate/>
    <!-- <v-divider></v-divider> -->
    <RfEducation/>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  components:{
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
