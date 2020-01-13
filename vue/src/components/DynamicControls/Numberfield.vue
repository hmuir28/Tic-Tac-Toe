<template>
  <div :class="numberField.wrapper">
    <number-input
      :class="numberField.input"
      :id="controlId"
      :name="controlId"
      :min="min" 
      :max="max"
      :rules="rules" 
      inline
      controls
      @input="$emit('input', $event)"
    ></number-input>
  </div>
</template>

<script>
export default {
  name: 'Numberfield',

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
    min: {
      default: 0,
      type: Number,
    },
    max: {
      default: 10,
      type: Number,
    },
    rules: {
      default: () => ([]),
      type: Array,
    },
  },
}
</script>
<style scoped>
.numberField .numberInput {
  width: 100%;
}
</style>
<style>
.numberField .numberInput .number-input__input {
  width: 100% !important;
}
</style>
