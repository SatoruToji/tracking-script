function getNetworkInfo(): void{
  const CONNECT = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection

  cout('скорость Mbps', CONNECT.downlink)
  cout('max скорость Mbit/s', CONNECT.downlinkMax)
  cout('тип сети', CONNECT.effectiveType)
  cout('ping ms', CONNECT.rtt)
  cout('тип соединения', CONNECT.type)
}