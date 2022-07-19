<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
       
      </div>
        <v-layout style="height:100%">
          <v-flex class="d-flex justify-center align-center" style="height:100%">
             <v-img
                alt="Vuetify Logo"
                class="shrink mr-auto"
                contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                transition="scale-transition"
                width="40"
              />

   
              <v-btn depressed class="mr-3 nav-button" color="primary">Home</v-btn>
              <v-btn depressed class="mr-3 nav-button" color="primary">Skills</v-btn>
              <v-btn depressed class="mr-3 nav-button" color="primary">Experiences</v-btn>
              <v-btn depressed class="mr-3 nav-button" color="primary">Portfolio</v-btn>
              <v-btn depressed class="nav-button mr-auto" color="primary">Contact</v-btn>
          </v-flex>
        </v-layout>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>


<style scoped>
    .nav-button{
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
      height: 100% !important;
    }

    v-app {
     font-family: 'Montserrat', sans-serif !important;
    }
</style>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
