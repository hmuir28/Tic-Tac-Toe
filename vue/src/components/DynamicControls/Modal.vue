<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <ModalForm
          :classNames="modalClassNames"
          :dialog="dialog"
          :fields="fields"
          :rows="rows"
          :save="save"
          :title="title"
          :text="text"
          @closeDialog="setDialog"
          @input="inputEmitter"
        />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import ModalForm from '@/components/DynamicControls/ModalForm';

export default {
  name: 'Modal',

  components: {
    ModalForm,
  },

  computed: {
    modalClassNames() {
      return {
        ...this.classNames,
        modalForm: 'modalForm',
      }
    },
  },

  props: {
    classNames: {
      default: () => ({}),
      type: Object,
    },
    dialog: {
      default: false,
      type: Boolean,
    },
    fields: {
      default: () => ([]),
      type: Array,
    },
    rows: {
      default: 0,
      type: Number,
    },
    save: {
      default: () => ({}),
      type: Function,
    },
    title: {
      default: '',
      type: String,
    },
    text: {
      default: () => ({
        closeText: 'Close',
        saveText: 'Save',
      }),
      type: Object,
    },
  },

  methods: {
    setDialog(newValue) {
      this.$emit('closeDialog', newValue);
    },

    inputEmitter(value) {
      this.$emit('input', value);
    },
  },
}
</script>
