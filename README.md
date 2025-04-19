# Botón Flotante de WhatsApp (Implementación con GitHub y jsDelivr)

Este repositorio contiene el código necesario para generar un botón flotante que enlaza a tu WhatsApp, el cual puedes integrar fácilmente en cualquier página web con una única línea de código HTML. Funciona utilizando GitHub para almacenar el código y jsDelivr como una Content Delivery Network (CDN) gratuita para servir el script de manera pública.

## 🧩 ¿Cómo Funciona?

La magia detrás de este botón flotante reside en la combinación de GitHub y jsDelivr:

1.  **GitHub: Tu Almacén de Código (`script.js`)**
    * Dentro de este repositorio, el archivo `script.js` contiene todo el código JavaScript necesario para crear y gestionar el botón flotante en tu página web.
    * Actualmente, el script está configurado para redirigir a: `https://wa.me/51986673748`
    * **Recuerda modificar este número en tu archivo `script.js` para que apunte a tu propio número de WhatsApp.**

2.  **jsDelivr: Tu CDN Gratuita**
    * [jsDelivr](https://www.jsdelivr.com/) es una CDN de código abierto que permite servir archivos alojados en repositorios públicos de GitHub de forma rápida y confiable a través de una red global de servidores.
    * jsDelivr interpreta la estructura de tu repositorio y te proporciona una URL pública para acceder directamente a tus archivos.
    * **URL de jsDelivr para este script:**
        ```bash
        https://cdn.jsdelivr.net/gh/tu-usuario/WhatsApp-Floating-Button/dist/script.js
        ```

3.  **Integración en tu HTML**
    * Para utilizar este botón flotante en tu página web, simplemente necesitas incluir la siguiente etiqueta `<script>` en cualquier lugar dentro de las etiquetas `<body>` de tu archivo HTML:
        ```html
        <script src="https://cdn.jsdelivr.net/gh/tu-usuario/WhatsApp-Floating-Button/dist/script.js"></script>
        ```

## 🎨 Características del Botón

* Color verde característico de WhatsApp (#25D366)
* Icono oficial de WhatsApp en SVG
* Texto "Escríbeme" que aparece al hacer hover
* Efecto de brillo y animación flotante
* Diseño responsive para todos los dispositivos
* Animaciones suaves y efectos visuales
* Soporte para modo oscuro
* Modo de alto contraste para accesibilidad
* Estados de foco mejorados
* Efectos hover y ripple al hacer clic
* Posicionamiento fijo en la pantalla
* Adaptación automática en dispositivos táctiles

## 💡 Extras y Posibles Mejoras

* **Minificación del Script:** Para reducir el tamaño del archivo y mejorar aún más el tiempo de carga, puedes minificar el archivo `script.js` y renombrarlo a `script.min.js`.
* **Control de Versiones:** Puedes utilizar las etiquetas de Git para crear versiones de tu script (ej., `v1.0.0`):
    ```html
    <script src="https://cdn.jsdelivr.net/gh/tu-usuario/WhatsApp-Floating-Button@v1.0.0/dist/script.js"></script>
    ```
* **Personalización:**
    * Cambiar colores y estilos
    * Modificar posición del botón
    * Personalizar texto del botón
    * Ajustar tamaño y animaciones

## 🔧 Personalización

Para personalizar el botón, modifica las siguientes secciones en el archivo `whatsapp.js`:

1. **URL de Redirección:**
   ```javascript
   whatsappButton.href = "https://wa.me/TU_NUMERO_DE_WHATSAPP";
   ```

2. **Texto del Botón:**
   ```javascript
   <span class="message-text">Tu texto aquí</span>
   ```

3. **Colores:**
   ```css
   .whatsapp-button {
       background-color: #tu_color;
   }
   ```

4. **Posición:**
   ```css
   .whatsapp-button {
       bottom: 20px;  /* Distancia desde abajo */
       right: 20px;   /* Distancia desde la derecha */
   }
   ```

## 📱 Requisitos

* Navegador web moderno con soporte para JavaScript
* Conexión a Internet para cargar el script desde jsDelivr
* Cuenta de WhatsApp Business o personal

## 🔒 Seguridad

* El botón utiliza el protocolo HTTPS para las redirecciones
* No almacena ningún dato personal del usuario
* Cumple con las políticas de privacidad de WhatsApp
* Compatible con GDPR y CCPA

## 🌐 Compatibilidad

El botón ha sido probado y funciona correctamente en:

* Google Chrome (v80+)
* Mozilla Firefox (v75+)
* Safari (v13+)
* Microsoft Edge (v80+)
* Opera (v67+)
* Navegadores móviles modernos

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un Fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/mejora`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -am 'Añade alguna mejora'`)
5. Push a la rama (`git push origin feature/mejora`)
6. Crea un Pull Request

## 📫 Soporte

* Abre un issue para reportar bugs
* Sugiere nuevas características
* Envía tus preguntas en la sección de Discusiones

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

* A la comunidad de GitHub por su apoyo
* A jsDelivr por proporcionar un servicio CDN gratuito
* A WhatsApp por facilitar la integración con su plataforma

¡Empieza a utilizar este botón flotante y facilita que tus visitantes te contacten por WhatsApp! Recuerda modificar el número de WhatsApp en el archivo para que apunte al tuyo.
