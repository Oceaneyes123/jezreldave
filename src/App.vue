<template>
  <v-app class="nav">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>
      <v-layout style="height: 100%">
        <v-flex class="d-flex justify-center align-center" style="height: 100%">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-auto"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <div
            v-if="$vuetify.breakpoint.mdAndUp"
            class="mr-auto montserrat"
            style="height: 100%"
          >
            <v-btn
              depressed
              class="mr-3 nav-button"
              color="primary"
              @click="goTo('main')"
            >
              Home
            </v-btn>
            <v-btn
              depressed
              class="mr-3 nav-button"
              color="primary"
              @click="goTo('stacks')"
            >
              Stacks
            </v-btn>
            <v-btn
              depressed
              class="mr-3 nav-button"
              color="primary"
              @click="goTo('experience')"
            >
              Experiences
            </v-btn>
            <v-btn
              depressed
              class="mr-3 nav-button"
              color="primary"
              @click="goTo('portfolio')"
            >
              Portfolio
            </v-btn>
            <v-btn
              depressed
              class="nav-button"
              color="primary"
              @click="goTo('contact')"
            >
              Contact
            </v-btn>
          </div>

          <div v-else>
            <v-menu offset-y nudge-bottom="12" transition="slide-y-transition">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" large>fa-thin fa-bars</v-icon>
              </template>
              <v-card>
                <v-list>
                  <v-list-item-group v-model="selectedMenu" color="primary">
                    <v-list-item class="montserrat" @click="goTo('main')">
                      Home
                    </v-list-item>
                    <v-list-item class="montserrat" @click="goTo('stacks')">
                      Stacks
                    </v-list-item>
                    <v-list-item class="montserrat" @click="goTo('experience')">
                      Experiences
                    </v-list-item>
                    <v-list-item class="montserrat" @click="goTo('portfolio')">
                      Portfolio
                    </v-list-item>
                    <v-list-item class="montserrat" @click="goTo('contact')">
                      Contact
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-menu>
          </div>
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
.nav-button {
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  height: 100% !important;
}
</style>

<style>
.montserrat {
  font-family: "Montserrat", sans-serif !important;
}

.header {
  font-family: "Montserrat", sans-serif !important;
  font-size: max(2rem, 2vw);
  font-weight: bold;
  text-transform: uppercase;
}
</style>

<script>
export default {
  name: "App",

  data: () => ({
    selectedMenu: 0,
  }),

  methods: {
    goTo(route) {
      this.$vuetify.goTo("#" + route);
    },
  },
};
</script>
