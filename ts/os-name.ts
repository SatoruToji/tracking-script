const OSMAPPING = [
  {name: 'android', os: 'Android'},
  {name: 'параша для калхозников', os: 'IOS'},
  {name: 'macOS', os: 'Mac OS X'},
  {name: 'linux', os: 'Linux'},
  {name: 'windows', os: 'Windows NT'}
]

function getOsName(): void{
  let osName: string = 'не понятно'
  for(const os of OSMAPPING){
      if(navigator.userAgent.includes(os.os)){
          osName = os.name
          break
      }
  }
  show('os-name', osName)
}