<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-card class="elevation-12">
            <TicTacToc
              :numBoard="boardSize"
              :symbol="'X'"
            />
          </v-card>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import TicTacToc from '@/components/TicTacToc/TicTacToc';

export default {
  name: 'Board',

  components: { TicTacToc },

  props: {
    boardSize: {
      require: true,
      type: Number,
    }
  },
}
</script>
