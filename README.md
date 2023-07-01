# Proyecto Final - React

Este es el repositorio del Proyecto Final desarrollado con React. El proyecto tiene como objetivo la aprobación del curso de React Js impartido por Coderhourse, .


## Autor

Ignacio Iglesias

ignacioiglesias8@gmail.com


## Cuerpo docente

Profesor: Daniel Alanis

Tutor: Rosendo Alves


## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. Clona el repositorio en tu máquina local:

        git clone https://github.com/ignacioiglesias8/PF-React-Iglesias.git

2. Navega al directorio del proyecto:

        cd PF-React-Iglesias

3. Instala las dependencias del proyecto:

        npm install

4. Inicia la aplicación:

        npm start

La aplicación se abrirá en tu navegador en http://localhost:3000.


## Direción local

http://localhost:3000/


## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

    public/: Este directorio contiene los archivos públicos de la aplicación.
    |
    |---src/: Este directorio contiene el código fuente de la aplicación.
    |    |
    |    |---assets/: En esta se encuentran las subcarpetas para almacenar archivos estáticos.
    |    |   |
    |    |   |---img/: Contenedor de imágenes.
    |    |   |
    |    |   |---logo/: Contenedor de logos.
    |    |   |
    |    |   |---txt/: Contenedor archivos o bases de datos con textos.
    |    |       |
    |    |       |---toursText.js: Base de dato con las descripciones de los Tours.
    |    |
    |    |---components/: Aquí se encuentran los componentes reutilizables de la aplicación.
    |    |   |
    |    |   |---Button.jsx: Configuración del Button.
    |    |   |
    |    |   |---CartItem.jsx: Plantilla de tours seleccionados en la page Cart.
    |    |   |
    |    |   |---CartWidget.jsx: Configuración del CartWidget del Navbar.
    |    |   |
    |    |   |---CheckoutForm.jsx: Formulario de Checkout de la page Checkout.
    |    |   |
    |    |   |---CustomAlert.jsx: Alert que advierte que un tour ya fue agregado al carrito.
    |    |   |
    |    |   |---Description.jsx: Plantilla de descripciones del ItemDescriptionContainer.
    |    |   |
    |    |   |---Footer.jsx: Configuración del Footer: Links y routes.
    |    |   |
    |    |   |---Item.jsx: Plantilla de cards del ItemListContainer.
    |    |   |
    |    |   |---ItemCount.jsx: Configuración del counter en cada Description.
    |    |   |
    |    |   |---ItemDescriptionContainer.jsx: Configuración principal del contenedor de cada tour.
    |    |   |
    |    |   |---ItemList.jsx: Map de la base de datos para construir las cards en el ItemListContainer.
    |    |   |
    |    |   |---ItemListContainer.jsx: Configuración principal del contenedor de la page Tour así como también del filtrado por subcategorias.
    |    |   |
    |    |   |---Loader.jsx: Configuración del Loader.
    |    |   |
    |    |   |---NavBar.jsx: Configuración del Navbar (Links, routes) y contiene otros elementos como Cartwidget y logo. 
    |    |
    |    |---context/: Directorio contenedor del patrón de contexto.
    |    |   |
    |    |   |---Context: Configuración del contexto de la aplicación.
    |    |
    |    |---pages/: Directorio contenedor de las diferentes páginas de la aplicación.
    |    |   |
    |    |   |---Cart.jsx: Componente que configura la página del Cart.
    |    |   |
    |    |   |---Checkout.jsx: Componente que configura la página del formulario de Checkout.
    |    |   |
    |    |   |---Home.jsx: Componente que configura la página de inicio o landing.
    |    |   |
    |    |   |---Tours.jsx: Componente que configura la página donde se encuentran los productos.
    |    |
    |    |---router/: Directorio contenedor del componente relacionado a la configuración de las rutas.
    |    |   |
    |    |   |---MainRouter: Configuración de las rutas de la aplicación.
    |    |
    |    |---style/: Aquí se encuentran los estilos CSS y archivos relacionados.
    |    |   |
    |    |   |---App.css: Archivo que contiene reglas CSS que se aplican a todos los componentes.
    |    |   |
    |    |   |---Index.css: Archivo que contiene reglas CSS para definir estilos globales.
    |    |
    |    |---App.jsx: Define la estructura y el comportamiento general de la interfaz de usuario.
    |    |
    |    |---index.js: El archivo que renderiza la aplicación en el navegador.
    |    
    |---index.html: Punto de entrada principal de la aplicación.    

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork de este repositorio.

2. Crea una rama para tu nueva funcionalidad:

        git checkout -b nueva-funcionalidad

3. Realiza tus cambios y realiza commit de los mismos:

        git commit -m "Agregar nueva funcionalidad"

4. Envía tus cambios al repositorio remoto:

        git push origin nueva-funcionalidad

5. Abre una pull request en GitHub.


## Licencia

Este proyecto está bajo la licencia Warmi Sumaj Tours. Para más detalles, consulta el archivo LICENSE.

Por favor, ten en cuenta que este README es solo una plantilla inicial. Asegúrate de personalizarlo según las necesidades y características específicas de tu proyecto.