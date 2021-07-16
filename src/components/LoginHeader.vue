<template>
  <div class="nav-1">
    <p class="app-name">TESTING|<strong>LANDING PAGE</strong></p>
    <span class="userLogInfo" v-if="isAuthenticated">
      <p>
        Welcome {{ userName }}
        <font-awesome-icon
          class="sign-out-button"
          icon="sign-out-alt"
          @click="logOff"
        />
      </p>
    </span>
    <button class="sign-in-button" v-else @click="logOn">SIGN IN</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "LoginHeader",
  setup() {
    const isAuthenticated = ref(false);
    const userName = ref("");

    const logOn = () => {
      isAuthenticated.value = true;
      userName.value = "Test User";
    };

    const logOff = () => {
      isAuthenticated.value = false;
      userName.value = "";
    };

    return {
      isAuthenticated,
      userName,
      logOn,
      logOff,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-1 {
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: lighten(darkred, 20%);
  color: lighten(darkred, 80%);
  height: 50px;

  .app-name {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    margin-right: auto;
    color: whitesmoke;
  }

  .userLogInfo {
    display: flex;
    margin-left: auto;
    flex-direction: row;
    width: 200px;
  }

  .sign-out-button {
    cursor: pointer;
    margin-left: 20px;
    &:hover {
      color: darken(darkred, 10%);
    }
  }

  .sign-in-button {
    cursor: pointer;
    color: whitesmoke;
    background-color: lighten(darkred, 20%);
    border-color: darkred;
    border-radius: 12px;
    border-width: 4px;
    margin: 10px 10px 10px 10px;
    &:hover {
      background-color: darken(darkred, 10%);
    }
  }
}
</style>
