<template>
  <div class="body">
    <Home />
    <Stacks />
    <Experience />
  </div>
</template>

<style >
  .body{
    font-family: Montserrat, sans-serif;
  }
</style>

<script>
/* eslint-disable */
import Home from "../components/Home";
import Stacks from "../components/Stacks";
import Experience from '../components/Experience'

export default {

  components: {
    Home,
    Stacks,
    Experience
  },
};
</script>
