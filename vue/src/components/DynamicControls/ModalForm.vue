<template>
  <v-row justify="center">
    <div :class="classNames.modalForm">
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row v-for="(row, i) in rows" :key="i">
            <v-col v-for="(field, j) in fields" cols="12" sm="6" md="12" :key="j">
              <v-text-field :label="field.label" required></v-text-field>
              <small>{{ field.requireMsg }}</small>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog">{{ text.closeText }}</v-btn>
        <v-btn color="blue darken-1" text @click="save">{{ text.saveText }}</v-btn>
      </v-card-actions>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'ModalForm',

  props: {
    classNames: {
      default: () => ({
        modalForm: 'modalForm'
      }),
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
    title: {
      default: 'Title',
      type: String,
    },
    requireMsg: {
      default: '*indicates required field',
      type: String,
    },
    rows: {
      default: 0,
      type: Number,
    },
    save: {
      default: () => ({}),
      type: Function,
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
    closeDialog() {
      this.$emit('closeDialog', !this.dialog);
    },
  },
}
</script>

<style scoped>
.modalForm {
  width: 90%;
}
</style>
