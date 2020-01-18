<template>
  <div class="main">
    <Board :boardSize="getBoardSize" />
    <Modal
      class="dialog"
      :classNames="modalClassNames"
      :dialog="dialog"
      :fields="fields"
      :rows="1"
      :save="save"
      :title="'User Information'"
      @closeDialog="closeDialog"
      @input="handlerInput"
    />
  </div>
</template>

<script>
import Board from '@/components/Board/Board';
import Modal from '@/components/DynamicControls/Modal';
import UIControls from '@/utils/UIControls.js';

export default {
  name: 'Main',

  components: {
    Board,
    Modal,
  },

  computed: {
    modalClassNames() {
      return {
        numberField: {
          wrapper: 'numberField',
          input: 'numberInput', 
        },
      };
    },

    getBoardSize() {
      const boardSize = this.$route.params.boardSize || Constants.COUNT_BOARD;
      return +boardSize;
    },
  },

  data() {
    return {
      dialog: true,
      fields: UIControls.main.fields,
    };
  },

  methods: {
    closeDialog: (newValue) => this.dialog = newValue,

    handlerInput: (event) => {
      const controlId = event.target.id || event.target.name;
      const field = this.fields.find(f => f.id === controlId);
      field.value = event.target.value;
    },

    openModal: () => this.dialog = !this.dialog,

    save() {
      const field = this.fields.find(field => field.name === 'USER_NAME');
    },
  },
}
</script>

<style>

</style>