function show(getIdTag: string, getBrowserName: string): void{
    const name = document.getElementById(getIdTag) as HTMLDivElement
    name.innerHTML = getBrowserName
    console.log(getBrowserName)
}

function cout(info:string, value:string): void{
    console.log(info, `: ${value}`)
}

document.getElementById('show__browser-name')?.addEventListener('click', ()=>{
    getBrowserName()
    getOsName()
    getGeolocation()
    getCoordinates()
    getPrivacyControl()
})