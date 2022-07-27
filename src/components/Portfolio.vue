<template>
  <div id="portfolio">
    <v-container style="max-width: 1200px">
      <div class="header text-center my-10">Portfolio</div>

      <div class="mb-5 text font-weight-bold secondary--text">
        <h3>Android Development</h3>
      </div>
      <v-card class="rounded-xl glass">
        <v-row class="px-10 py-10">
          <v-col cols="12" md="6">
            <div class="font-weight-bold mb-8">U Education</div>
            <div>
              U Education is a mobile application providing B2B services for
              online English academies.
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-container>
              <v-row>
                <v-col v-for="(item, i) in android" :key="i" cols="6" sm="3">
                  <v-img
                    :src="item"
                    @click="(androidPhoto = item), (androidPhotoDialog = true)"
                    style="cursor: pointer"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <v-dialog v-model="androidPhotoDialog" max-width="400">
      <v-card width="400">
        <v-img :src="androidPhoto" width="100%"></v-img>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.glass {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.17);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.2px);
  -webkit-backdrop-filter: blur(4.2px);
  border: 1px solid rgba(255, 255, 255, 0.37);
}
</style>

<script>
/* eslint-disable */
export default {
  name: "Portfolio",

  data: () => ({
    androidPhoto: null,
    androidPhotoDialog: false,
    android: [
      require("../assets/android/android1.png"),
      require("../assets/android/android2.png"),
      require("../assets/android/android3.png"),
      require("../assets/android/android4.png"),
      require("../assets/android/android5.png"),
      require("../assets/android/android6.png"),
      require("../assets/android/android7.png"),
      require("../assets/android/android8.png"),
    ],
    websites: [],
    personal: [],
  }),
};
</script>
