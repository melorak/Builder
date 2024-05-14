const editor = grapesjs.init({
  container: "#editor",
  storageManager: false,
  blockManager: {
    appendTo: "#blocks",
  },

  styleManager: {
    appendTo: "#styles-container",
  },

  layerManager: {
    appendTo: "#layers-container",
  },

  panels: {
    defaults: [
      {
        id: 'basic-actions',
        el: '.panel__basic-actions',
        buttons: [
          {
            id: 'visibility',
            active: true, // active by default
            className: 'btn-toggle-borders',
            label: '<i class="fa fa-clone"></i>',
            command: 'sw-visibility', // Built-in command
          },
        ],
      },
      {
        id: 'panel-devices',
        el: '.panel__devices',
        buttons: [
          {
            id: 'device-desktop',
            label: '<i class="fa fa-television"></i>',
            command: 'set-device-desktop',
            active: true,
            togglable: false,
          },
          {
            id: 'device-mobile',
            label: '<i class="fa fa-mobile"></i>',
            command: 'set-device-mobile',
            togglable: false,
          },
        ],
      },
    ],
  },
  deviceManager: {
    devices: [
      {
        name: 'Desktop',
        width: '',
      },
      {
        name: 'Mobile',
        width: '320px',
        widthMedia: '480px',
      },
    ],
  },
  
  plugins: ['gjs-blocks-basic'],
  pluginsOpts: {
    'gjs-blocks-basic': {},
  },
});

editor.Commands.add('set-device-desktop', {
  run: (editor) => editor.setDevice('Desktop'),
});
editor.Commands.add('set-device-mobile', {
  run: (editor) => editor.setDevice('Mobile'),
});