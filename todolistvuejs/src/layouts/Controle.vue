<template>
  <q-layout view="hHh Lpr fFf" class="background-primary">
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style lang="stylus">
  body {
    background-color: $primary
  }
</style>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
    }
  }
}
</script>
