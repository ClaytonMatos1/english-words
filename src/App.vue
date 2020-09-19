<template>
  <v-app>
    <v-app-bar
      app
      color="secundary"
      dark
    >
      <v-toolbar-title>English Words!</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <home></home>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';
export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>
