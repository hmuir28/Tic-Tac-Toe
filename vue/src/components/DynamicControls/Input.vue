<template>
  <div>
    <v-text-field
      v-if="type === 0"
      :rules="rules"
      v-model="value"
      :label="label"
    ></v-text-field>
    <small>{{ requiredMsg }}</small>
  </div>
</template>

<script>
export default {
  name: 'Input',

  props: {
    label: {
      required: true,
      type: String,
    },
    requiredMsg: {
      default: '',
      type: String,
    },
    rules: {
      default: () => ({}),
      type: Object,
    },
    type: {
      required: true,
      type: Number,
    },
    value: {
      required: true,
      type: [Number, String],
    },
  },
}
</script>
