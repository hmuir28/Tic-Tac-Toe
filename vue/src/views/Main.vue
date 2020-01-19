<template>
  <div class="main">
    <Spinner :loading="getLoading" />
    <Board 
      :boardSize="getBoardSize"
      v-if="!getLoading"
    />
    <Modal
      class="dialog"
      :classNames="modalClassNames"
      :dialog="dialog"
      :fields="fields"
      :rows="1"
      :save="save"
      :title="'User Information'"
      :text="modalButtonText"
      @closeDialog="back"
      @input="handlerInput"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { cloneDeep } from 'lodash';
import Board from '@/components/Board/Board';
import Modal from '@/components/DynamicControls/Modal';
import UIControls from '@/utils/UIControls.js';
import Spinner from '@/components/Spinner/Spinner';

export default {
  name: 'Main',

  components: {
    Board,
    Modal,
    Spinner,
  },

  computed: {
    ...mapGetters('main', ['getPlayers']),
    ...mapGetters('loading', ['getLoading']),

    modalClassNames() {
      return {
        numberField: {
          wrapper: 'numberField',
          input: 'numberInput', 
        },
      };
    },

    modalButtonText() {
      return {
        closeText: 'Back',
        saveText: 'Save',
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
    ...mapMutations('loading', ['SET_LOADING']),

    back(newValue) {
      this.$router.go(-1);
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

      if (this.getPlayers) {
        this.dialog = !this.dialog;

        if (this.getPlayers.length < 2) {
          this.SET_LOADING(true);
        }
      }
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
