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
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <TicTacToc :numBoard="countBoard" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Constants from '@/utils/Constants.js';
import TicTacToc from '@/components/TicTacToc/TicTacToc';

export default {
  name: 'Board',

  components: { TicTacToc },

  props: {
    source: String,
  },

  computed: {
    countBoard() {
      return Constants.COUNT_BOARD;
    },
  },
}
</script>
