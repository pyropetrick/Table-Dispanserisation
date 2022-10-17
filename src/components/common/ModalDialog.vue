<template>
  <b-modal ref="modalDialogRef" hide-footer>
    <slot />
    <button class="btn btn-secondary" @click="hideModal">Cancel</button>
    <slot name="actions"></slot>
  </b-modal>
</template>

<script>
export default {
  name: "ModalDialog",

  methods: {
    showModal() {
      this.$refs.modalDialogRef.show();
    },

    hideModal() {
      this.$refs.modalDialogRef.hide();
    }
  }
}
</script>
