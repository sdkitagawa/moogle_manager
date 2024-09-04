<h1 align="center">
    Moogle Manager
    <br />
</h1>

<p align=center>
<img src="https://i.imgur.com/zhNQNG8.png" width="250px" alt="Un Moogle blanco volador sostiene una carta en la mano izquierda y la agenda DK & Friends en la derecha. El Moogle también lleva una identificación que dice Gestor. Tiene las mejillas sonrojadas y una antena con un globo rojo en la parte superior." loading="lazy" />
</p>

<a href="#información-sobre-la-aplicación"><p align="center">Información sobre la Aplicación</p></a>
<a href="#resumen"><p align="center">Resumen</p></a>
<a href="#invite-a-su-servidor"><p align="center">Invite a su servidor</p></a>
<a href="#tecnologías"><p align="center">Tecnologías</p></a>
<a href="#dependencias"><p align="center">Dependencias</p></a>
<a href="#comandos-bot"><p align="center">Comandos Bot</p></a>
<a href="#contacto"><p align="center">Contacto</p></a>
<a href="#licencia"><p align="center">Licensia</p></a>

<br /><br />

<p align="center">
  <a href="#" title="Superando las Pruebas"><img src="https://img.shields.io/badge/build-passing-brightgreen" alt="An image of a half gray (left side) and green (right side) to indicate that the build of the application is passing"></a>
  <a href="https://github.com/sdkitagawa/moogle_manager?tab=GPL-3.0-1-ov-file" title="Licencia"><img src="https://img.shields.io/badge/License-GPL%20v3-blue.svg" alt="Una imagen medio gris (lado izquierdo) y medio naranja (lado derecho) para indicar bajo qué licencia está el proyecto"></a>
  <a href="https://www.javascript.com/" title="Ir a la página de inicio de JavaScript"><img src="https://img.shields.io/badge/Made_with-JavaScript-yellow?logo=javascript&logoColor=white" alt="Una imagen de un medio gris (lado izquierdo) y medio naranja (lado derecho) para indicar que este proyecto se construyó utilizando JavaScript."></a>
  <a href="https://nodejs.org" title="Ir a la página principal de Node.js"><img src="https://img.shields.io/badge/Node.js-%3E=18-green?logo=node.js&logoColor=white" alt="Una imagen de un medio gris (lado izquierdo) y medio naranja (lado derecho) para indicar que este proyecto fue construido usando Node.Js"></a>
  <a href="https://www.mongodb.com/" title="Ir a la página principal de MongoDB"><img src="https://img.shields.io/badge/MongoDB-green?logo=mongodb&logoColor=white" alt="Una imagen de un medio gris (lado izquierdo) y medio naranja (lado derecho) para indicar que este proyecto fue construido usando MongoDB"></a>
</p>

Traducciones
---
<details>
<summary>También disponible en:</summary>

- [Inglés](./README.md)
- [Español](./README-es.md)
- [Portugués](./README-pt-br.md)
- [Japonés](./README-jp.md)
</details>
<br />

## Información sobre la Aplicación
- **Nombre**: [`Moogle Manager`**#1172**](https://discord.com/users/1221986587399815198/)
- **Color de función recomendado**: `#F185B5`
<br /><br />

## Resumen
El **Moogle Manager** es un bot que se desarrolló por primera vez para **The Legend of DK and Friends**, que es un servidor de Discord propiedad de **[dkitagawa](https://discord.com/users/737103505663328356/)**.

**Moogle Manager** viene con comandos de moderación para ayudarte a administrar tu servidor, con comandos de utilidad y mucho más!
<br /><br />

## Invite a su servidor
Invita a Moogle Manager a tu servidor

**Enlace de la invitación**: https://discord.com/oauth2/authorize?client_id=1270239316651675690
<br /><br />

# Tecnologías
- [**Vanilla JavaScript**](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Para el desarrollo general del back-end;
- [**Node.js**]() - Un runtime de JavaScript gratuito y multiplataforma para desarrollar servidores, aplicaciones web, herramientas de línea de comandos y scripts;
- [**Discord.JS**](https://discord.js.org/) - Un módulo Node.js que te permite interactuar con la API de Discord;
- [**MongoDB**](https://www.mongodb.com/company/what-is-mongodb) - Para el servidor de base de datos;
<br /><br />

# Dependencias
- [**Nodemon**](https://nodemon.io/) - Una herramienta de utilidad para Node.js utilizada para supervisar cualquier cambio en su aplicación y reiniciarla automáticamente;
- [**dotenv**](https://www.npmjs.com/package/dotenv) - Un módulo que carga variables de entorno de un archivo `.env` en `process.env`;
- [**pretty-ms**](https://www.npmjs.com/package/pretty-ms) - Una biblioteca para convertir milisegundos, segundos, minutos y horas en texto legible por humanos;
- [**@IamTraction/Google Translate**](https://www.npmjs.com/package/@iamtraction/google-translate) - Una biblioteca Node.js para utilizar la API de Google Translate de forma gratuita;
- [**mongoose**](https://mongoosejs.com/) - Una solución sencilla basada en un esquema MongoDB para modelar los datos de las aplicaciones;
- [**MathJS**](https://mathjs.org/) - Un analizador sintáctico de expresiones matemáticas flexible con soporte para la biblioteca de cálculo simbólico para JavaScript y Node.js.
<br /><br />

# Comandos Bot

### Administration
- `ban`: Banea a un miembro del servidor.
- `echo`: Envía un mensaje a través del bot.
- `kick`: Expulsa a un miembro del servidor..
- `timeout`: Silencia a un miembro del servidor.
- `embed-creator`: Crea un mensaje incrustado dentro de un marco (embed).
- `field-embed`: Crea un mensaje incrustado dentro de un marco (embed) con campos y valores para los campos.

### Miscellaneous
> Los siguientes comandos ofrecen soporte **multilenguaje** para **inglés (norteamericano)** y **portugués (brasileño)**.
- `commands`: Muestra y explica cómo utilizar todos los comandos del Gestor Moogle.
- `developer`: Muestra información sobre el desarrollador de Moogle Manager.
- `ping`: Comprueba el ping actual de tu cliente de Discord y el ping del Websocket de Discord.
- `server-info`: Proporciona información sobre el gremio (servidor).

### Utilities
> Estos comandos ofrecen soporte multilingüe para **inglés (norteamericano)** y **portugués (brasileño)**.
- `calculator`: Abre una interfaz de calculadora.
- `furigana`: Explique qué es Furigana.
- `hiragana-table`: Mostra toda a tabela Hiragana.
- `hiragana`: Cuenta la historia de Hiragana.
- `kanji`: Explica qué son los Kanji.
- `katakana-table`: Muestra toda la tabla Katakana.
- `katakana`: Cuenta la historia del katakana.
- `okurigana`: Explique qué es Okurigana.
- `translate`: Traduce textos utilizando la API de Google Translate.
<br /><br />

# Contacto
### **Learn more about me at:**
- ⚡ [**LinkedIn**](https://linkedin.com/in/douglas-kitagawa/)
- 📫 [**E-mail**](mailto:douglaskitagawa@proton.me)
- 👨🏻‍💻 [**Github**](https://github.com/sdkitagawa)
- 📺 [**Youtube**](https://www.youtube.com/@dkitagawa)
- 📺 [**Twitch**](https://www.twitch.tv/kitbitdots)

# Licencia
Copyright © Douglas Kitagawa's (dkitagawa's) Development - Con licensia [GNU General Public License v3.0](../../LICENSE.bib)
