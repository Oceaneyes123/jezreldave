<template>
  <div id="experience">
    <v-container style="max-width:1200px">

        <div class="header text-center my-10">Experiences</div>

        <v-timeline  :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="(item, i) in experiences" :key="i" fill-dot :small="$vuetify.breakpoint.smAndDown">
                <span slot="opposite" class="font-weight-bold">{{item.date}}</span>
                <v-card :color="item.color" dark>
                    <v-card-title style="word-break:keep-all">
                        {{item.title}}
                    </v-card-title>
                    <v-card-subtitle class="accent--text">
                        {{item.company}} <br> <span v-if="$vuetify.breakpoint.smAndDown">{{item.date}}</span>
                    </v-card-subtitle>
                    <v-card-text class="white text--primary pt-5">
                        <p v-html="item.description"></p>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
  </div>
</template>

<style scoped>
    #experience{
        background-color: #BBE1FA;
    }
</style>
    
<script>
/* eslint-disable */
export default {
  name: "Experience",

  data: () => ({
    experiences: [
        {
            title: "Full-Stack Web Developer",
            company: "Tekmonks",
            date: "July 2022 - Present",
            logo: "",
            description: "Currently working here",
            color: "primary",
        },
        {
            title: "Frontend Web Developer",
            company: "Mega English Online, Inc.",
            date: "Jan 2019 - July 2022",
            logo: "",
            description: `&#8226;Collaborated with a team of developers during development
                            processes to confirm creative proposals and design best
                            practices. <br>
                            &#8226;Assembled and addressed technical and design requirements,
                            integrating user-facing and front-end elements to maintain
                            web presence effectiveness. <br>
                            &#8226;Followed the best practices within Agile environment to
                            produce rapid iterations for clients. <br>
                            &#8226;Tested web-based product functionality and delivered iterations
                            to clients. <br>
                            &#8226;Coded using Vue and Vuetify to develop features for both
                            mobile and desktop platforms. <br>
                            &#8226;Identified and resolved website performance flags to improve
                            functionality. <br>
                            &#8226;Delivered responsive web design projects in Agile framework.
                            Identified bottlenecks and bugs and devised solutions.`,
            color: "primary",
        },
        {
            title: "Android Developer",
            company: "Mega English Online, Inc.",
            date: "June 2018 - Dec 2018",
            logo: "",
            description: `&#8226;Designed user interfaces that engaged multiple senses and
                        produced immersive experiences. <br>
                        &#8226;Used third-party libraries, custom libraries and APIs to develop
                        new applications. <br>
                        &#8226;Incorporated offline storage, performance tuning and
                        threading into apps for seamless use. <br>
                        &#8226;Ensure that the android application would run on latest devices
                        and android versions <br>
                        &#8226;Analyzed applications to identify and document weaknesses
                        and errors.`,
            color: "primary",
        }
    ]
  }),
};
</script>
