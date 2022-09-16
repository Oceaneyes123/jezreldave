<template>
  <div id="main">
    <v-layout style="height: 100%">
      <v-flex class="d-flex flex-column justify-center align-center">
        <div class="mb-16">
          <div class="white--text my-name text-center">
            <h3 data-aos="fade-up" data-aos-duration="1500">
              Hi, <br v-if="$vuetify.breakpoint.xsOnly" />I'm
              <span class="accent--text" > Jezrel Dave</span>
            </h3>
          </div>
          <div
            class="white--text text-center mt-5 montserrat"
            style="font-size: 1.3rem"
            data-aos="fade-down" data-aos-duration="3000"
          >
            <span class="accent--text" >Full Stack Web Developer</span>
          </div>
        </div>
        <div style="position: absolute; bottom: 50px">
          <v-btn color="secondary" rounded> Learn More About Me </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
#main {
  height: 95vh;
  background-color: #1b262c;
  position: relative;
}

.my-name {
  font-size: max(2rem, 2vw);
  font-weight: bold;
  color: #fff;
}
</style>

<script>
/* eslint-disable */
import AOS from 'aos'
export default {
 
  name: "Home",

  data: () => ({}),

  created() {
    AOS.init()
  }
};
</script>
