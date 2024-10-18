function getPlugins(): void{
  const PLUGINS: any = navigator.plugins
  let pluginsList: string[] = []

  for(let i = 0; i < PLUGINS.length; i++){
      pluginsList.push(PLUGINS[i].name)
  }

  if(pluginsList.length === 0){
    show('plugins', 'если нету списка расширений, значит такую функцию выпили в новых браузерах')   
  } else{
    show('plugins', pluginsList.join(', ')) 
  }

  console.log(pluginsList)
}
