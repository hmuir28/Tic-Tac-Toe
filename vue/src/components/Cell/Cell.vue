<template>
  <v-btn 
    type="button"
    text
    large
    @click="markSymbol">{{ symbol }}</v-btn>
</template>
<script>

export default {
  name: 'Cell',

  props: {
    col: {
      require: true,
      type: Number,
    },
    row: {
      require: true,
      type: Number,
    },
    symbol: {
      require: true,
      type: String,
    },
  },

  methods: {
    markSymbol() {
      const coordenates = {
        x: this.row,
        y: this.col,
      };
      this.$emit('coordenates', coordenates);
    },
  },
}

</script>
