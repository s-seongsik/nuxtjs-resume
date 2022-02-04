<template>
  <v-container>
    <v-row justify="center" >
      <v-col cols="12" md="8">
        <Profile/>
        <About/>
        <Skill/>
        <Experience/>
        <Project/>
        <Opensource/>
        <Certificate/>
        <Education/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  components:{
    Profile: () => import('~/components/resume/Profile.vue'),
    About: () => import('~/components/resume/About.vue'),
    Skill: () => import('~/components/resume/Skill.vue'),
    Experience: () => import('~/components/resume/Experience.vue'),
    Project: () => import('~/components/resume/Project.vue'),
    Certificate: () => import('~/components/resume/Certificate.vue'),
    Education: () => import('~/components/resume/Education.vue'),
    Opensource: () => import('~/components/resume/Opensource.vue'),
  }
}
</script>
