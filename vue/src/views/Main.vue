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
import { mapActions, mapGetters } from 'vuex';
import { cloneDeep } from 'lodash';
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
    ...mapGetters('main', ['getPlayers']),

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
    ...mapActions('main', ['sendUserInfo']),

    closeDialog(newValue) {
      return this.dialog = newValue;
    },

    handlerInput(event) {
      const controlId = event.target.id || event.target.name;
      const field = this.fields.find(f => f.id === controlId);
      field.value = event.target.value;
    },

    openModal() {
      return this.dialog = !this.dialog;
    },

    async save() {
      const fields = cloneDeep(this.fields);
      const userInfo = this._setUserInfo(fields);
      await this.sendUserInfo(userInfo);

      if (this.getPlayers) this.dialog = !this.dialog;
    },

    _setUserInfo(fields) {
      return fields.reduce((previous, field) => {
        const {
          id,
          value,
        } = field;

        if (id && value) previous[id] = { value };

        return previous;
      }, {});
    }
  },
}
</script>
