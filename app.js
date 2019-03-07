//app.js
var common = require('utils/common.js')
App({
  url: 'https://请在此输入url/index.php?s=/',
  PHPSESSID: '',
  onLaunch: function () {
    common.initApp(this.url, true)
  }
})