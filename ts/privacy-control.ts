function getPrivacyControl(): void{
  const PRIVACY = (navigator as any).globalPrivacyControl
  if(PRIVACY){
    show('privacy', PRIVACY)
  } else {
    show('privacy', 'хз(пусто потому что ты отклчил, браузер не поддерживает или еще что мб...)')
  }
  
}
