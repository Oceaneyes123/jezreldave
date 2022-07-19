/* eslint-disable */
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

const opts = {
    theme: {
        themes: {
            light: {
                primary: "#0F4C75",
                secondary: "#3282B8",
                accent: "#FFA500",
                error: "#FF5252",
            },
        },
    },
    //   icons: {
    //     iconfont: "fa",
    //   },
};

export default new Vuetify(opts);