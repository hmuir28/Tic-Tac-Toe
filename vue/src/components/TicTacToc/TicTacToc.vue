<template>
  <div class="tic-tac-toc layout">
    <div v-for="(row, i) in board" 
      class="gridRow" 
      :class="paintRowBorder(i)"
      :key="i">
      <div v-for="(col, j) in row" 
        class="gridCell" 
        :class="paintCellBorder(j)"
        :key="j">
        <Cell
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
      board: [],
    };
  },

  mounted() {
    this.board = [];
    const cols = Array(this.numBoard).fill('');
    cols.forEach(() => this.board.push(cols));
  },

  methods: {
    setSymbol(coordenates, symbol = 'X') {
      // make a copy of the row
      const newRow = this.board[coordenates.x].slice(0);
      // update the value
      newRow[coordenates.y] = symbol;
      // update it in the grid
      this.$set(this.board, coordenates.x, newRow);
    },

    paintRowBorder(coordenateX) {
      let className = '';

      if (coordenateX !== this.board.length - 1) className = 'borderBottom ';

      return className;
    },

    paintCellBorder(coordenateY) {
      let className = '';

      if (coordenateY === 0) {
        className += 'borderRight';
      }

      const totalCell = Math.floor(this.board.length / 2);

      if (totalCell === 1 && (coordenateY === this.board.length - 1)) {
        className += 'borderLeft';
      } else if (totalCell > 1 && (coordenateY === this.board.length - 1)) {
        className += 'borderNone';
      } else if (totalCell > 1 && !className) className += 'borderRight';

      return className;
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
.borderBottom {
  border-bottom: 2px solid;
}
.borderRight {
  border-right: 2px solid;
}
.borderLeft {
  border-left: 2px solid;
}
.gridCell {
  width: 100%;
}
.gridRow {
  display: flex;
  justify-content: center;
  width: 100%;
}
.layout {
  display: block;
}
</style>
