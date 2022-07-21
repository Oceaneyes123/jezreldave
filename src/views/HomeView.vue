<template>
  <div class="body">
    <Home />
    <Stacks />
    <Experience />
    <Portfolio />
  </div>
</template>

<style>
.body {
  font-family: Montserrat, sans-serif;
}
</style>

<script>
/* eslint-disable */
import Home from "../components/Home";
import Stacks from "../components/Stacks";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";

export default {
  components: {
    Home,
    Stacks,
    Experience,
    Portfolio,
  },
};
</script>
