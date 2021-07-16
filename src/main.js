import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faSignInAlt,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faUserSecret, faSignInAlt, faSignOutAlt, faUser]);

const app = createApp(App);
app.config.css = {
  loaderOptions: {
    sass: {
      prependData: `@import "@styles/_variables.scss";`,
    },
  },
};
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
