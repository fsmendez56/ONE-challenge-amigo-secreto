# Amigo Secreto

Este proyecto es una aplicación web simple para sortear amigos secretos. Los usuarios pueden ingresar nombres de amigos y luego sortear un amigo secreto al azar.

## Estructura del Proyecto

- **.gitignore**: Archivo para ignorar la carpeta `.vscode`.
- **app.js**: Archivo JavaScript que contiene la lógica para agregar amigos y sortear un amigo secreto.
- **assets/**: Carpeta que contiene imágenes utilizadas en la aplicación.
- **index.html**: Archivo HTML que define la estructura de la página web.
- **style.css**: Archivo CSS que contiene los estilos de la página web.

## Cómo Usar

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.
3. Ingresa los nombres de tus amigos en el campo de texto y haz clic en "Añadir".
4. Una vez que hayas agregado todos los nombres, haz clic en "Sortear amigo" para seleccionar un amigo secreto al azar.

## Funciones Principales

### `addFriend()`

Esta función se llama cuando el usuario hace clic en el botón "Añadir". Toma el valor del campo de entrada, lo agrega a la lista de amigos y actualiza la lista en la interfaz de usuario.

### `clearInputField()`

Limpia el campo de entrada después de que se ha agregado un nombre.

### `updateFriendsList()`

Actualiza la lista de amigos en la interfaz de usuario.

### `raffleSecretFriend()`

Selecciona un amigo secreto al azar de la lista de amigos y muestra el resultado en la interfaz de usuario.

## Estilos

Los estilos están definidos en el archivo [style.css](style.css). Se utilizan variables CSS para definir colores y se aplican estilos a diferentes elementos de la página, como el cuerpo, los botones y las listas.
