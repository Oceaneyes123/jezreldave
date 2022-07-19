/* eslint-disable */
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#0F4C75',
                secondary: '#3282B8',
                accent: '#BBE1FA',
                error: '#FF5252',
            }
        }
    },
};

export default new Vuetify(opts);