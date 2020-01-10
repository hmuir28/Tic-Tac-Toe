<template>
  <div class="panel">
    <v-card
        class="mx-auto"
        max-width="344"
    >
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card-title class="headline">{{ title }}</v-card-title>

            <v-card-subtitle>{{ subTitle }}</v-card-subtitle>

            <v-card-actions>
              <v-btn text @click="configure">{{ btnText }}</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Panel',

  props: {
    btnText: {
      default: '',
      type: String,
    },
    configure: {
      default: () => ({}),
      type: Function,
    },
    subTitle: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
  },
}
</script>

<style>

</style>