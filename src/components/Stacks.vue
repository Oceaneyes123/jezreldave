<template>
  <div id="stacks">
    <v-container style="max-width: 1200px">
      <div class="header text-center my-10">Stacks</div>

      <div class="mb-5 text font-weight-bold secondary--text">
        Fundamental Languages
      </div>

      <v-row class="mb-10">
        <v-col
          v-for="(item, i) in fundamentalLanguages"
          :key="i"
          cols="12"
          sm="4"
          md="3"
        >
          <v-card class="d-flex flex-column justify-center align-center pa-5">
            <v-img :src="item.image" max-width="75" eager></v-img>
            <v-card-text class="text-center primary--text">
              {{ item.name }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="mb-5 font-weight-bold secondary--text">
        Advance Languages and Frameworks
      </div>

      <v-row class="mb-10">
        <v-col
          v-for="(item, i) in advanceLanguages"
          :key="i"
          cols="12"
          sm="4"
          md="3"
        >
          <v-card class="d-flex flex-column justify-center align-center pa-5">
            <v-img :src="item.logo" max-width="75" eager></v-img>
            <v-card-text class="text-center primary--text">
              {{ item.name }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="mb-5 font-weight-bold secondary--text">Skills</div>

      <v-row class="mb-10">
        <v-col v-for="(item, i) in skills" :key="i" cols="12" sm="4" md="3">
          <v-card class="d-flex flex-column justify-center align-center pa-5">
            <v-img :src="item.logo" max-width="75" eager></v-img>
            <v-card-text class="text-center primary--text">
              {{ item.name }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="mb-5 font-weight-bold secondary--text">
        Softwares and Programs
      </div>

      <v-row class="mb-10">
        <v-col v-for="(item, i) in softwares" :key="i" cols="12" sm="4" md="3">
          <v-card class="d-flex flex-column justify-center align-center pa-5">
            <v-img :src="item.logo" max-width="75" eager></v-img>
            <v-card-text class="text-center primary--text">
              {{ item.name }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped></style>

<script>
/* eslint-disable */
export default {
  name: "Skills",

  data: () => ({
    fundamentalLanguages: [
      {
        name: "HTML",
        image: require("../assets/stack/html.png"),
      },
      {
        name: "CSS",
        image: require("../assets/stack/css.png"),
      },
      {
        name: "JavaScript",
        image: require("../assets/stack/js.png"),
      },
      {
        name: "PHP",
        image: require("../assets/stack/php.png"),
      },
      {
        name: "Java",
        image: require("../assets/stack/java.png"),
      },
      {
        name: "Python",
        image: require("../assets/stack/python.png"),
      },
    ],
    advanceLanguages: [
      {
        name: "VueJS",
        logo: require("../assets/stack/vue.png"),
      },
      {
        name: "Vuetify",
        logo: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",
      },
      {
        name: "NodeJS",
        logo: require("../assets/stack/node.png"),
      },
      {
        name: "Laravel",
        logo: require("../assets/stack/laravel.png"),
      },
      {
        name: "CodeIgniter",
        logo: require("../assets/stack/codeigniter.svg"),
      },
      {
        name: "ReactJS",
       logo: require("../assets/stack/react.png"),
      },
    ],

    skills: [
      {
        name: "Web Development",
        logo: require("../assets/stack/web.png"),
      },
      {
        name: "Android/Mobile Development",
        logo:  require("../assets/stack/android.png"),
      },
      {
        name: "Git",
        logo:  require("../assets/stack/git.png"),
      },
    ],

    softwares: [
      {
        name: "Visual Studio Code",
        logo: require("../assets/stack/vscode.svg"),
      },
      {
        name: "Android Studio",
        logo:  require("../assets/stack/android.png"),
      },
      {
        name: "Github",
        logo:  require("../assets/stack/github.png"),
      },
      {
        name: "Bitbucket",
        logo:  require("../assets/stack/bitbucket.png"),
      },
      {
        name: "Jira (Atlassian)",
        logo:  require("../assets/stack/jira.png"),
      },
      {
        name: "Figma",
        logo: require("../assets/stack/figma.png"),
      },
      {
        name: "Adobe XD",
        logo: require("../assets/stack/xd.png"),
      },
      {
        name: "Adobe Photoshop",
        logo:  require("../assets/stack/photoshop.png"),
      },
    ],
  }),
};
</script>
