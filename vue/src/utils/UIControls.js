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
  },
  main: {
    fields: [{
      name: 'USERNAME',
      id: 'username',
      label: 'Your Username: ',
      rules: [
        value => !value ? true : false,
      ],
      tempId: String(Date.now()),
      type: 'Textfield',
      value: null,
    }, {
      name: 'NAME',
      id: 'name',
      label: 'Your Name: ',
      rules: [
        value => !value ? true : false,
      ],
      tempId: String(Date.now()),
      type: 'Textfield',
      value: null,
    }],
  },
};
