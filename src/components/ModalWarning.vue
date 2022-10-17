<template>
  <ModalDialog>
    <p class="modal__text">{{ text }}</p>
    <template #actions>
      <div class="modal__btns">
        <button class="modal__btn-delete btn" @click="deleteThisRow">Delete</button>
      </div>
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
    ...mapGetters('DiseasesModule', ['getCurrentIndex', "getRow"])
  },
  methods: {
    ...mapActions('DiseasesModule', ['deleteRow']),
    deleteThisRow() {
      this.deleteRow(this.getCurrentIndex);
      addToStorage({key:'patients',value:this.getRow})
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
