const editor = grapesjs.init({
  container: "#editor",
  storageManager: false,
  blockManager: {
    appendTo: "#blocks",
  },

  styleManager: {
    appendTo: "#style-view",
  },

  layerManager: {
    appendTo: "#layer-container",
  },

  panels: {
    defaults: [
      {
        id: 'basic-actions',
        el: '.panel__basic-actions',
        buttons: [
          {
            id: 'visibility',
            active: true, 
            className: 'btn-toggle-borders',
            label: '<i class="bi bi-border-all"></i>',
            command: 'sw-visibility', 
          },
        ],
      }, 
      {
        id: 'panel-devices',
        el: '.panel__devices',
        buttons: [
          {
            id: 'device-desktop',
            label: '<i class="bi bi-laptop"></i>',
            command: 'set-device-desktop',
            active: true,
            togglable: false,
          },
          {
            id: 'device-mobile',
            label: '<i class="bi bi-phone"></i>',
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