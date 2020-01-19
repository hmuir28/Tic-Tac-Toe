<template>
  <div class="home">
    <h1>Tic Tac Toe Building...</h1>
    <Panel
      :btnText="'Configure'"
      :title="'Configure New Tic Tac Toe'"
      :subTitle="'None'"
      :configure="openModal"
    />
    <Modal
      class="dialog"
      :classNames="modalClassNames"
      :dialog="dialog"
      :fields="fields"
      :rows="1"
      :save="save"
      :title="'Set Tic Tac Toe board size'"
      @closeDialog="closeDialog"
      @input="handlerInput"
    />
  </div>
</template>

<script>
import Modal from '@/components/DynamicControls/Modal';
import Panel from '@/components/HomeContent/Panel/Panel';
import UIControls from '@/utils/UIControls.js';

export default {
  name: 'Home',

  components: {
    Modal,
    Panel,
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
  },

  data() {
    // TODO: Isolate custom fields in another config file
    return {
      dialog: false,
      fields: UIControls.home.fields,
    };
  },

  methods: {
    closeDialog(newValue) {
      this.dialog = newValue;
    },

    handlerInput(event) {
      const controlId = event.target.id || event.target.name;
      const field = this.fields.find(f => f.id === controlId);
      field.value = event.target.value;
    },

    openModal() {
      return this.dialog = !this.dialog;
    },

    save() {
      const field = this.fields.find(field => field.name === 'BOARD_SIZE');
      if (field.value) {
        if (field.value < 3) {
          // TODO: replace alert logic
          alert('Please, enter a number greater than 2');
        } else {
          this.$router.push({
            name: 'main',
            params: {
            boardSize: field.value,
            },
          });
        }
      } else alert('Please, enter a number to set the board size.'); // TODO: replace with VeeValidate
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
.modalForm {
  .numberField .numberInput .number-input__input {
    width: 100% !important;
  }
}
</style>
