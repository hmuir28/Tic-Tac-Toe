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
        id: String(Date.now()),
        label: 'Board size: ',
        requireMsg: 'board size field is required',
        type: '',
      }],
    };
  },

  methods: {
    closeDialog(newValue) {
      this.dialog = newValue;
    },

    openModal() {
      return this.dialog = !this.dialog;
    },

    save() {

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
