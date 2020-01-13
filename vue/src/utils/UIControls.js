export default {
  home: {
    fields: [{
      name: 'BOARD_SIZE',
      id: 'boardSize',
      label: 'Board size: ',
      rules: [
        value => (!isNaN(+value)) ? true : false,
      ],
      tempId: String(Date.now()),
      type: 'Numberfield',
      value: null,
    }],
  }
};
