<template>
  <div :class="numberField.wrapper">
    <v-text-field
      :class="numberField.input"
      :id="controlId"
      :label="label"
      :rules="rules"
      @input="inputEmitter"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'Textfield',

  computed: {
    numberField() {
      const classNames = this.classNames.numberField || {
        wrapper: '',
        input: '',
      };
      return {
        ...classNames,
      };
    }
  },

  methods: {
    inputEmitter(value) {
      const field = {
        target: {
          id: this.controlId,
          value,
        },
      };
      this.$emit('input', field);
    }
  },

  props: {
    controlId: {
      required: true,
      type: String,
    },
    classNames: {
      default: () => ({
        wrapper: '',
        input: '',
      }),
      type: Object,
    },
    label: {
      required: true,
      type: String,
    },
    rules: {
      default: () => ([]),
      type: Array,
    },
  },
}
</script>
