<template>
<v-container min-width:1000px;>
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
    /** 리팩토링 컴포넌트 */
    RfProfile: () => import('~/components/Profile.vue'),
    RfExperience: () => import('~/components/Experience.vue'),
    RfSkill: () => import('~/components/Skill.vue'),
    RfOpensource: () => import('~/components/Opensource.vue'),
    RfCertificate: () => import('~/components/Certificate.vue'),
    RfEducation: () => import('~/components/Education.vue'),
  }
}
</script>
