<template>
  <div class="home">
    <Board />
  </div>
</template>

<script>
import Board from '@/components/Board/Board';

export default {
  name: 'Home',
  components: { Board },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
