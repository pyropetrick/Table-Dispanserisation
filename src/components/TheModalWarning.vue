<template>
  <the-modal>
    <p class="modal__text">{{ text }}</p>
    <div class="modal__btns">
      <button class="modal__btn-cancel btn" @click="closeModal">Cancel</button>
      <button class="modal__btn-delete btn" @click="deleteThisRow">Delete</button>
    </div>
  </the-modal>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {addToStorage} from "@/components/commons/localStorage";

export default {
  name: "TheModalWarning",
  props: ['text'],
  computed: {
    ...mapGetters(['getCurrentIndex', "getRow"])
  },
  methods: {
    ...mapActions(['setModalVisible', 'deleteRow']),
    closeModal() {
      this.setModalVisible({value: false, name: 'warning'});
    },
    deleteThisRow() {
      this.deleteRow(this.getCurrentIndex);
      addToStorage({key:'patients',value:this.getRow})
      this.closeModal();
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  &__text {
    margin: 0;
    padding: 1rem 0;
    text-align: center;
    color: #251c1c;
    font-weight: bold;
  }

  &__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px 0;
  }

  &__btn-delete {
    &:hover {
      background-color: #f16c89;
      color: white;
    }
  }

  &__btn-cancel {
    &:hover {
      background-color: #424c82;
      color: white;
    }
  }
}

.btn {
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all .3s ease-in-out;
}
</style>