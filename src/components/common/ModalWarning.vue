<template>
  <ModalDialog>
    <p class="modal__text">{{ text }}</p>
    <template #actions>
      <button class="btn btn-danger ml-2" @click="deleteThisRow">Delete</button>
    </template>
  </ModalDialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ModalDialog from '@/components/common/ModalDialog';
import { addToStorage } from "@/components/common/helpers/localStorage";

export default {
  name: "ModalWarning",

  components: {
    ModalDialog,
  },

  props: {
    text: String,
  },
  computed: {
    ...mapGetters('PatientsModule', ['getCurrentIndex', "getRow"])
  },
  methods: {
    ...mapActions('PatientsModule', ['deleteRow']),
    deleteThisRow() {
      this.deleteRow(this.getCurrentIndex);
      addToStorage({key:'patients',value: this.getRow})
    }
  }
}
</script>
