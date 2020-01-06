<template>
  <div class="tic-tac-toc layout">
    <div class="row" v-for="(num, index) in numBoard" :key="index">
      <div v-for="(num, index) in numBoard" :key="index">
        <Cell />
      </div>
    </div>
  </div>
</template>

<script>
import Cell from '@/components/Cell/Cell';

export default {
  name: 'TicTacToc',

  components: { Cell },

  data() {
    return {
      buttons: [],
    };
  },

  props: {
    numBoard: {
      require: true,
      type: Number,
    },
    source: String,
  },
}
</script>

<style scoped>
.layout {
  display: flex;
}

.row {
  justify-content: center;
  width: 100%;
}
</style>
