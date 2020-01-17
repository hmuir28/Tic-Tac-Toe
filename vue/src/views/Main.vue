<template>
  <div class="main">
    <Board :boardSize="getBoardSize" />
  </div>
</template>

<script>
import Constants from '@/utils/Constants';
import Board from '@/components/Board/Board';

export default {
  name: 'Main',

  components: {
    Board,
  },

  computed: {
    getBoardSize() {
      const boardSize = this.$route.params.boardSize || Constants.COUNT_BOARD;
      return +boardSize;
    },
  },
}
</script>

<style>

</style>