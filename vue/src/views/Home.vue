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
      :dialog="dialog"
      :fields="fields"
      :rows="1"
      :save="save"
      :title="'Set Tic Tac Toe board size'"
      @closeDialog="closeDialog"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Modal from '@/components/DynamicControls/Modal';
import Panel from '@/components/HomeContent/Panel/Panel';

export default {
  name: 'Home',

  components: {
    Modal,
    Panel,
  },

  data() {
    return {
      dialog: false,
      fields: [{
        name: 'BOARD_SIZE',
        label: 'Board size: ',
        rules: {
          required: 'required',
        },
        requireMsg: 'board size field is required',
        tempId: String(Date.now()),
        type: 0,
        value: '',
      }],
    };
  },

  methods: {
    ...mapActions('home', ['SUBMIT_BOARD_SIZE']),

    closeDialog(newValue) {
      this.dialog = newValue;
    },

    openModal() {
      return this.dialog = !this.dialog;
    },

    save() {
      let field = this.fields.find(field => field.name === 'BOARD_SIZE');
      this.SUBMIT_BOARD_SIZE(field.value);
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
