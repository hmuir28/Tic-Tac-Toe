<template>
  <div>
    <v-text-field
      :rules="rules"
      v-model="value"
      :id="controlId"
      :label="label"
      @input="$emit('input', $event)"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'Textfield',

  props: {
    controlId: {
      required: true,
      type: String,
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
