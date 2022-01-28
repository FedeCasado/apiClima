# App del clima.

Este proyecto es una aplicacion del clima utilizando la API de Open Weather para obtener los datos solicitados. 

El backend esta desarrollado con el lenguaje Javascript, utilizando express, axios y jest.

## Comenzando 🚀

_Estas instrucciones te permitirán levantar el proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

Previamente se deberá instalar Node, express, axios, jest, supertest y dotenv.

para instalar express:
```
npm i express
```
para instalar axios
```
npm i axios
```
para instalar jest
```
npm i -D jest
```
para instalar supertest
```
npm i -D supertest
```
para instalar dotenv
```
npm i dotenv
```

### Instalación 🔧

Para instalar el proyecto se deberá instalar las dependencias del proyecto
```
npm install
 ````

a continuación se debera configurar las variables de entorno de desarrollo, para el projecto de backed creando un archivo .env en la carpeta my-online-store-backend y setearlas siguiendo el siguente ejemplo.

PORT=port
KEY_WEATHER=myApiKey
UrlIp=myUrlIp

Para definir el puerto en el que se va a levantar el Servidor es necesario modificar "port" por el puerto deseado. En mi caso usé el puerto "3000".

Para obtener el valor de KEY_WEATHER se debera registrar en el siguiente link. https://openweathermap.org/.
Luego ir a MIS CLAVES API y crear una clave. 

Para obtener la UrlIp es importante que reemplaze "myUrlIp", por el link de busqueda de ip que utilice.


Por limitaciones de Open Weather, en la Api de backend la ruta que nos deberia devolver el clima a 5 dias no esta dispobible, pero la idea seria tener 3 rutas: La local, definida por coordenadas geograficas, la local a 5 dias, definida por coordenadas o con el parametro opcional en la Ciudad que se quiera consultar y finalmente el Clima del dia en la ciudad que se desee. 

Los parametros necesarios para que obtengamos los datos requeridos son:

/v1/location : Solamente debemos pasarle la url de busqueda de IP a UrlIp y luego las funciones hacen el resto. 

/v1/current/:city? : En este caso PODRIAMOS pasarle una Ciudad o no y nos deveria devolver el clima a 5 dias. 

/v1/forecast/:city? : En este caso tambien podemos o no pasarle una ciudad como parametro y nos debe devolver el clima actual de la ciudad consultada o de la ubicacion del dispositivo. 

¡¡ Importante!!

Para pasarle el parametro de la ciudad simplemente reemplazar ":city?" por el nombre de la Ciudad deseada, en caso de que la ciudad contenga mas de una palabra y requiera poner espacios, si utiliza postman para hacer las pruebas complete esos espacions con %20, de esta manera nos aseguramos el funcionamiento correcto.

CIUDADES PARA CONSULTAR: Montevideo, Londres, Roma, Berlin y Rio de Janeiro. 

Cualquier otra ciudad que elija tambien esta bien!