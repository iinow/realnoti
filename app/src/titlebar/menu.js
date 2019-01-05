export const defaultTemplate = [
    {
      id: '1',
      label: 'App',
      submenu: [
        {
          id: '1',
          label: 'Disabled',
          enabled: false,
          after: '2'
        },
        {
          id: '2',
          label: 'Sub Menu',
          // icon: 'https://www.gstatic.com/images/branding/product/1x/keep_48dp.png',
          submenu: [
            {
              label: 'Color Submenu',
              submenu: [
                {
                  label: 'Light',
                  type: 'radio',
                  checked: false,
                  click: (item, win, e) => { document.querySelector('html').style.background = 'rgb(240,240,240)'; }
                },
                {
                  label: 'Dark',
                  type: 'radio',
                  checked: true,
                  click: (item, win, e) => { document.querySelector('html').style.background = 'rgb(64,64,64)'; }
                },
                {
                  label: 'Black',
                  type: 'radio',
                  checked: false,
                  click: (item, win, e) => { document.querySelector('html').style.background = 'rgb(0,0,0)'; }
                }
              ]
            },
            {
              label: 'Random 2',
              // icon: require('../assets/images/icon.png')
            },
            {
              label: 'Random 3',
              submenu: [
                {
                  label: 'Random 4',
                  submenu: [
                    {
                      label: 'Random 7'
                    },
                    {
                      label: 'Random 8'
                    },
                    {
                      label: 'Random 9'
                    },
                    {
                      label: 'Random 10'
                    }
                  ]
                },
                {
                  label: 'Random 5'
                },
                {
                  label: 'Random 6'
                }
              ]
            }
          ]
        },
        {
          id: '4',
          label: 'Not visible',
          visible: false
        },
        {
          id: '3',
          // icon: require('../assets/images/icon.png'),
          label: 'Arguments',
          click: (item, win, e) => { console.log(item, win, e); }
        },
        {
          id: '5',
          label: 'Really Long Menu Label that should be truncated'
        },
        { type: 'separator' },
        {
          label: 'Test Accelerator',
          accelerator: 'CommandOrControl+Y',
          click: (item, win, e) => { ipcRenderer.send('Test'); }
        },
        {
          label: 'Open Dev Tools',
          click: (item, win, e) => { win.openDevTools(); }
        },
        {
          label: 'Resizable',
          type: 'checkbox',
          checked: true,
          click: (item, win, e) => { win.setResizable(item.checked); }
        },
        {
          label: 'Unchecked',
          type: 'checkbox',
          checked: false,
          click: (item, win, e) => { win.setResizable(item.checked); }
        },
        {
          label: 'Quit',
          click: () => { window.close(); }
        }
      ]
    },
    {
      id: '2',
      label: 'Color',
      before: '1',
      submenu: [
        {
          label: 'Light',
          type: 'radio',
          checked: false,
          click: (item, win, e) => { document.querySelector('html').style.background = 'rgb(240,240,240)'; }
        },
        {
          label: 'Dark',
          type: 'radio',
          checked: true,
          click: (item, win, e) => { document.querySelector('html').style.background = 'rgb(64,64,64)'; }
        },
        {
          label: 'Black',
          type: 'radio',
          checked: false,
          click: (item, win, e) => { document.querySelector('html').style.background = 'rgb(0,0,0)'; }
        }
      ]
    },
    {
      label: 'Disabled',
      enabled: false,
      submenu: [
        {
          label: 'Light',
          type: 'radio',
          checked: false,
          click: (item, win, e) => { document.querySelector('html').style.background = 'rgb(240,240,240)'; }
        }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Homepage',
          click: () => { openExternal('https://github.com/Cristian006/frameless-titlebar'); }
        }
      ]
    }
  ];
  