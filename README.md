# basic-node-project

Proyecto Node basico pensado como punto de partida para practicar una CI sencilla con GitHub Actions.

## Estructura

```text
basic-node-project/
	package.json
	src/app.js
	test/app.test.js
```

## Requisitos

- Node.js 20+

## Ejecutar en local

Instalar dependencias (si en el futuro se anaden):

```bash
npm install
```

Ejecutar tests:

```bash
npm test
```

Ejecutar la aplicacion:

```bash
npm start
```

Salida esperada:

```text
Hello world!
```

## Idea de CI basica

Para un workflow inicial de GitHub Actions, el becario puede empezar con estos pasos:

1. Checkout del repositorio.
2. Setup de Node.js 20.
3. `npm ci`.
4. `npm test`.
