//                               App del clima.

Aplicacion desarrollada en entorno NodeJs, con JavaScript como lenguaje. Se uso "express" para el inicio del Servidor, "axios" para las solicitudes HTTP , "jest " y "supertest" para el testeo de integracion de las rutas.  

//Incicio del servidor: Para inicirar el Servidor es necesario descargar el node_moduless y luego inciar el servidor en el PUERTO: 3000; 

// Variables de entorno.
Al momento de querer utilizar las rutas que se detallan a continuacion vamos a necesitar tener una clave (KEY) del proveedor de la informacion (https://openweathermap.org/). Cree un usuario y luego de la confirmacion vaya a la pestaña "My API keys" y cree una Key. 

/v1/location: Para poder ejecutar correctamente esta ruta , lo primero que debe hacer es ir a "controllers/traerClimacontrollers" y agregar antes de la funcion "buscarClima"(const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.3303&lon=-60.2269&appid=${LA KEY QUE CREO ANTERIORMENTE, SIN EL SIGNO $ NI LLAVES}'), aparte se requiere ingresar en la url de la api la LATITUD Y LOGITUD de tu zona actual segun IP , esto deberia retornar un JSON con los datos del clima en ese momento en tu zona actual. 

/v1/current: Para poder ejecutar correctamente esta ruta , lo primero que debe hacer es ir a "controllers/climaPorHoraController" y agregar antes de la funcion "climaPorHora"(const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.3303&lon=-60.2269&appid=${LA KEY QUE CREO ANTERIORMENTE, SIN EL SIGNO $ NI LLAVES}'), aparte se requiere ingresar en la url de la api la LATITUD Y LOGITUD de tu zona actual segun IP , esto deberia retornar un JSON con los datos del clima en ese momento en tu zona actual. Te devuelve lo mismo que location, en caso de querer probar el link que nos devuelve el JSON con los proximos 5 dias, en el siguiente link (https://openweathermap.org/api/hourly-forecast) podes registrarte, abonar y utilizarlo. 

/v1/forecast: Para poder ejecutar correctamente esta ruta , lo primero que debe hacer es ir a "controllers/climaPorZona" y agregar antes de la funcion "climaPorZona"(const url = 'http://api.openweathermap.org/data/2.5/weather?q=Montevideo&appid=${LA KEY QUE CREO ANTERIORMENTE, SIN EL SIGNO $ NI LLAVES}'), para poder consultar cualquier ciudad solo se debe reemplazar dond ahora esta "MONTEVIDEO" y pones la ciudad de se desea. 