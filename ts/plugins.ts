function getPlugins(): void{
  const PLUGINS = navigator.plugins
  let pluginsList = []

  for(let i = 0; i < PLUGINS.length; i++){
      pluginsList.push(PLUGINS[i].name)
  }

  console.log(pluginsList)
}