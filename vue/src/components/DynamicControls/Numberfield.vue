<template>
  <div>
    <number-input
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

  props: {
    controlId: {
      required: true,
      type: String,
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
