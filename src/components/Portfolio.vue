<template>
  <div id="portfolio">
    <v-container style="max-width: 1200px">
      <div class="header text-center my-10">Portfolio</div>

      <div class="mb-5 text font-weight-bold secondary--text">
        <h3>Android Development</h3>
      </div>
      <v-card dark class="rounded-xl glass" color="#1b262c"  data-aos="zoom-in-right"  data-aos-duration="1500" >
        <v-container>
          <v-row class="px-10 py-10">
            <v-col cols="12" md="6">
              <div class="font-weight-bold mb-8">
                <h2>U Education</h2>
              </div>
              <div>
                U Education is a mobile application providing B2B services for
                online English academies. This was used by korean students of the company.
              </div>
              <div class="mt-10">
                Stacks:
              </div>
              <div>
                <ul>
                  <li>Java</li>
                  <li>XML</li>
                </ul>
              </div>
              <div class="mt-5">
                Application:
              </div>
              <div>
                <ul>
                  <li>Android Studio</li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-container>
                <v-row>
                  <v-col v-for="(item, i) in android" :key="i" cols="6" sm="3">
                    <v-img :src="item" @click="(androidPhoto = item), (androidPhotoDialog = true)" eager
                      style="cursor: pointer"></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <div class="mt-10 mb-5 text font-weight-bold secondary--text">
        <h3>Web Development</h3>
      </div>
      <v-card dark class="rounded-xl glass pa-5" color="#1b262c"  data-aos="zoom-in-left"  data-aos-duration="1500">
        <v-container fluid>
          <v-row>
            <v-col v-if="$vuetify.breakpoint.smAndDown">
              <h2 class=" font-weight-bold">{{websites[webCarousel].title}}</h2>
            </v-col>
            <v-col cols="12" md="6">
              <v-carousel v-model="webCarousel" class="rounded-xl" cycle>
                <v-carousel-item v-for="(item, i) in websites" :key="i" :src="item">
                  <div class="d-flex justify-center align-center rounded-xl">
                    <v-card class="rounded-xl d-flex align-center justify-center">
                      <v-img :src="item.image" :height="$vuetify.breakpoint.smAndDown ? 'auto' : '100%'" contain eager>
                      </v-img>
                    </v-card>
                  </div>
                </v-carousel-item>
              </v-carousel>
            </v-col>
            <v-col cols="12" md="6">
              <h2 v-if="$vuetify.breakpoint.mdAndUp" class="mt-10 font-weight-bold mb-8">{{websites[webCarousel].title}}</h2>
              <div>{{websites[webCarousel].description}}</div>
              <v-container fluid>
                <v-row>
                  <v-col cols="6" sm="6">
                    <div class="mt-3">
                      Stacks:
                    </div>
                    <ul>
                      <li v-for="(item, i) in websites[webCarousel].stacks" :key="i">{{item}}</li>
                    </ul>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
        <v-row justify="end">
          <v-btn outlined color="accent " class="mb-5 mr-5 rounded-lg" @click="openLink(websites[webCarousel].link)">
            <span class="font-weight-bold">Visit Site</span>
          </v-btn>
        </v-row>
      </v-card>
      <div class="mt-10 mb-5 text font-weight-bold secondary--text">
        <h3>Personal Projects</h3>
      </div>
      <v-card dark class="rounded-xl glass pa-5" color="#1b262c"   data-aos="zoom-in-left"  data-aos-duration="1500">
        <v-container fluid>
          <!-- This is an ongoing section. Will be updated soon. -->

          <v-row>
            <v-col v-if="$vuetify.breakpoint.smAndDown">
              <h2 class=" font-weight-bold">{{personal[personalCarousel].title}}</h2>
            </v-col>
            <v-col cols="12" md="6">
              <v-carousel v-model="personalCarousel" class="rounded-xl" cycle>
                <v-carousel-item v-for="(item, i) in personal" :key="i" :src="item">
                  <div class="d-flex justify-center align-center rounded-xl">
                    <v-card class="rounded-xl d-flex align-center justify-center">
                      <v-img :src="item.image" :height="$vuetify.breakpoint.smAndDown ? 'auto' : '100%'" contain eager>
                      </v-img>
                    </v-card>
                  </div>
                </v-carousel-item>
              </v-carousel>
            </v-col>
            <v-col cols="12" md="6">
              <h2 v-if="$vuetify.breakpoint.mdAndUp" class="mt-10 font-weight-bold mb-8">{{personal[personalCarousel].title}}</h2>
              <div>{{personal[personalCarousel].description}}</div>
              <v-container fluid>
                <v-row>
                  <v-col cols="6" sm="6">
                    <div class="mt-3">
                      Stacks:
                    </div>
                    <ul>
                      <li v-for="(item, i) in personal[personalCarousel].stacks" :key="i">{{item}}</li>
                    </ul>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
          <v-row justify="end">
              <v-btn text color="accent " class="mb-5 mr-5 rounded-lg" @click="openLink(personal[personalCarousel].github)">
                <span class="font-weight-bold">View on Github</span>
              </v-btn>
              <v-btn outlined color="accent " class="mb-5 mr-5 rounded-lg" @click="openLink(personal[personalCarousel].link)">
                <span class="font-weight-bold">Visit Site</span>
              </v-btn>
          </v-row>

          <!--  -->
        </v-container>
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
  import AOS from 'aos'
  import "aos/dist/aos.css";
  export default {
    name: "Portfolio",

    data: () => ({
      androidPhoto: null,
      androidPhotoDialog: false,
      webCarousel: 0,
      personalCarousel: 0,
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
      websites: [{
          title: "Megatalking - Official Website",
          description: "This is a website to be used as an LMS or a Learning Management System to provide smooth coordination between native speaking instructors, domestic operators, and clients.",
          stacks: ["Vuejs", "Vuetify", "Laravel", "HTML", "CSS", "JavaScript"],
          application: ["Visual Studio Code", "Git", "Bitbucket", "Figma"],
          image: require("../assets/web/megatalking.png"),
          link: "https://megatalking.co.kr/",
        },
        {
          title: "Blackhole Korea - Official Website",
          description: "A landing page of a client company.",
          stacks: ["HTML", "CSS", "Bootstrap", "JavaScript"],
          application: ["Visual Studio Code", "Git", "Github"],
          image: require("../assets/web/bhen.png"),
          link: "http://bhen.co.kr/",
        },
        {
          title: "UEDU e-Books",
          description: "A library of materials and references suitable for the course chosen by the client of MegaTalking.",
          stacks: ["Vuejs", "Vuetify", "Laravel", "HTML", "CSS", "JavaScript"],
          application: ["Visual Studio Code", "Git", "Bitbucket", "Figma"],
          image: require("../assets/web/ebook.png"),
          link: "https://ueducms.org/webbooks/#/book-list?enc=MDAxfHN0dWRlbnR8bWVnYXRhbGtpbmc%3D%2F",
        }
      ],
      personal: [
        {
          title: "HTMLite",
          description: "A HTML and CSS compiler made with Vue",
          stacks: ["Vuejs", "Vuetify", "HTML", "CSS", "JavaScript"],
          application: ["Visual Studio Code", "Git", "Bitbucket", "Figma"],
          image: require("../assets/personal/htmlite.png"),
          link: "https://htmlite.vercel.app/",
          github: "https://github.com/Oceaneyes123/HTMLite"
        },
         {
          title: "Jezrel Dave Sondia - Personal Portfolio",
          description: "A portfolio website by Jezrel Dave Sondia",
          stacks: ["Vuejs", "Vuetify", "HTML", "CSS", "JavaScript"],
          application: ["Visual Studio Code", "Git", "Bitbucket", "Figma"],
          image: require("../assets/personal/portfolio.png"),
          link: "https://jezreldave.vercel.app//",
          github: "https://github.com/Oceaneyes123/jezreldave"
        },
        {
          title: "Through the Glass Creatives - Blog Page",
          description: "A simple blog page made for Through the Glass Creatives",
          stacks: ["Vuejs", "Vuetify", "HTML", "CSS", "JavaScript"],
          application: ["Visual Studio Code", "Git", "Bitbucket", "Figma"],
          image: require("../assets/personal/throughtheglass.png"),
          link: "https://throughtheglasscreatives.vercel.app/#/",
          github: "https://github.com/Oceaneyes123/throughtheglasscreatives"
        }
      ],
    }),

    methods: {
      openLink(link) {
        window.open(link, "_blank");
      },
    },
  };
</script>