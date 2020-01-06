<template>
  <div class="tic-tac-toc layout">
    <div v-for="(row, i) in board" class="grid-row" :key="i">
      <div v-for="(col, j) in row" :key="j">
        <Cell
          :class="paintBoard(j)"
          :col="j"
          :row="i"
          :symbol="col"
          @coordenates="setSymbol"
        />
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
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
    };
  },

  methods: {
    setSymbol(coordenates) {
      // make a copy of the row
      const newRow = this.board[coordenates.x].slice(0);
      // update the value
      newRow[coordenates.y] = 'X';
      // update it in the grid
      this.$set(this.board, coordenates.x, newRow);
    },

    paintBoard() {
      // TODO: algorithm to paint borders within board
    }
  },

  props: {
    symbol: {
      require: true,
      type: String,
    },
    numBoard: {
      require: true,
      type: Number,
    },
    source: String,
  },
}
</script>

<style scoped>
.grid-row {
  display: flex;
  justify-content: center;
  width: 100%;
}
.layout {
  display: block;
}
</style>
