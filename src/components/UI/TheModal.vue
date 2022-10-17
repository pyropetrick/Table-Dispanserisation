<template>
  <teleport to="body">
    <div
      class="modal__background"
      @click="closeModal"
    ></div>
    <div class="modal">
      <slot></slot>
    </div>
  </teleport>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "TheModal",
  methods: {
    ...mapActions(['setModalVisible']),
    closeModal() {
      this.setModalVisible({value: false, name: ['form', 'warning', 'listDiseases']});
    },
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 500px;
  background: grey;
  color: black;
  position: fixed;
  top: 25%;
  left: 40%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: 0.875rem;


  &__background {
    position: fixed;
    background-color: rgba(black, 0.8);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }
}
</style>