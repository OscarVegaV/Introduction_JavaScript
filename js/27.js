//Switch
const paymentMethod = 'cash'
switch (paymentMethod) {
  case 'card':
    console.log('Pagaste con Tarjeta');
    break;
  case 'check':
    console.log('El usuario pagará con Cheque; Se revisarán los fondos primero');
    break;
  case 'bitcoin':
      console.log('Pagaste con Bitcoin');
      break;
  case 'cash':
        console.log('Pagaste con Efectivo'); //Ouput:Pagaste con Efectivo
        break;
  default:
    console.log('Aún no has Pagado')
    break;
};