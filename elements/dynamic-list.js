Polymer({
  is: 'dynamic-list',
  properties: {
    items: {
      type: Array,
      value: [{ description: 'loading...' }],
    },
    selected: {
      value: null,
      notify: true,
    },
    noIcons: {
      type: Boolean,
      value: false,
    },
  },
  
  computeIcon: function (selected, key) {
    return 'radio-button-' + ((selected == key) ? 'checked' : 'unchecked');
  },
});
