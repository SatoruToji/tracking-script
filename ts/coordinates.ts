function getCoordinates(): void{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude: any = position.coords.latitude
        const longitude: any = position.coords.longitude
        
        const timestamp = position.timestamp
        const date = new Date(timestamp)

        console.log(`Широта: ${latitude}`)
        console.log(`Долгота: ${longitude}`)

        show('width', latitude)
        show('height', longitude)
    }, (error) => {
        console.error('Не смог достать местоположения:', error)
    })
  } else {
    console.error('Геолокация не поддерживается твоим браузером.')
  }
}