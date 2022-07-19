<template>
  <div id="stacks">
       <v-container style="max-width:1200px">
          <div class="header text-center my-10">Stacks</div>

          <div class="mb-5 text font-weight-bold secondary--text">Fundamental Languages</div>

          <v-row class="mb-10">
            <v-col v-for="(item, i) in fundamentalLanguages" :key="i" cols="12" sm="4" md="3">
              <v-card>
                <v-card-text class="text-center primary--text">{{item.name}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <div class="mb-5 font-weight-bold secondary--text">Advance Languages and Frameworks</div>

          <v-row class="mb-10">
            <v-col v-for="(item, i) in advanceLanguages" :key="i"  cols="12" sm="4" md="3">
              <v-card>
                <v-card-text class="text-center primary--text">{{item.name}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <div class="mb-5 font-weight-bold secondary--text">Skills</div>
          
          <v-row class="mb-10">
            <v-col v-for="(item, i) in skills" :key="i"  cols="12" sm="4" md="3">
              <v-card>
                <v-card-text class="text-center primary--text">{{item.name}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <div class="mb-5 font-weight-bold secondary--text">Softwares and Programs</div>
          
          <v-row class="mb-10">
            <v-col v-for="(item, i) in softwares" :key="i"  cols="12" sm="4" md="3">
              <v-card>
                <v-card-text class="text-center primary--text">{{item.name}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
       </v-container>
  </div>
</template>

<style scoped>

</style>

<script>
/* eslint-disable */
export default {
  name: "Skills",

  data: () => ({
    fundamentalLanguages: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "PHP",
      },
      {
        name: "Java",
      },
      {
        name: "Python",
      },
    ],
    advanceLanguages: [
      {
        name: "VueJS",
        logo: "",
      },
      {
        name: "Vuetify",
        logo: "",
      },
      {
        name: "NodeJS",
        logo: "",
      },
       {
        name: "Laravel",
        logo: "",
      },
       {
        name: "CodeIgniter",
        logo: "",
      },
       {
        name: "ReactJS",
        logo: "",
      },
    ],

    skills: [
      {
        name: "Web Development",
        logo: "",
      },
      {
        name: "Android/Mobile Development",
        logo: "",
      },
      {
        name: "Git",
        logo: "",
      },
    ],

    softwares: [
      {
        name: "Visual Studio Code",
        logo: "",
      },
      {
        name: "Android Studio",
        logo: "",
      },
      {
        name: "Github",
        logo: "",
      },
      {
        name: "Bitbucket",
        logo: "",
      },
      {
        name: "Jira",
        logo: "",
      },
      {
        name: "Figma",
        logo: "",
      },
      {
        name: "Adobe XD",
        logo: "",
      },
      {
        name: "Adobe Photoshop",
        logo: "",
      },
    ]
  }),
};
</script>
