const BROWSERMAPPING = [
  {name: 'yandex', browser: 'YaBrowser'},
  {name: 'opera', browser: 'OPR'},
  {name: 'firefox', browser: 'Firefox'},
  {name: 'chrome', browser: 'Chrome'},
  {name: 'safari', browser: 'Safari'}
]

function getBrowserName(): void{
  let browserName: string = 'чзх'
  for(const browser of BROWSERMAPPING){
      if(navigator.userAgent.includes(browser.browser)){
          browserName = browser.name
          break
      }
  }
  show('browser-name', browserName)
}