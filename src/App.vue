<template>
  <div class="app">
    <the-table></the-table>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import TheTable from '@/components/TheTable';
import {getFromStorage} from "@/components/commons/localStorage";

export default {
  name: 'App',
  components: {
    TheTable
  },
  methods: {
    ...mapActions(['setRow'])
  },
  mounted() {
    if (getFromStorage('patients')) {
      getFromStorage('patients').forEach(patient => this.setRow(patient))
    }

  }
}
</script>

<style lang="scss">

</style>
