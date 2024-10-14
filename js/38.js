//Notification API Example
const button = document.querySelector('#button');

// Event listener for button click
button.addEventListener('click', function () {

  //          Request permission to show notifications
  Notification.requestPermission()
    .then(result => console.log(`el resultado del permiso es: ${result}`)) // Log permission result
});


// If permission is granted, show a notification with an icon and a message
if (Notification.permission == 'granted') {
  new Notification('Esta es una Notificación',{
    icon: 'img/LogoWEB250x250.svg',     // Displays an image/icon next to the notification
    body: 'Oscar Vega \n Introduccion a JavaScript'  // Message in the notification body
  }) 
}

/* Possible results from Notification.requestPermission():
   'granted': User has accepted notifications.
   'denied': User has declined notifications.
   'default': User has closed the request window without making a choice.
*/
