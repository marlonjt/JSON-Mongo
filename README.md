# JSON-Mongo — API de Libros

API REST con Node.js, Express y MongoDB que devuelve un catálogo de libros en JSON.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Estado del servidor |
| GET | `/api/libro` | Lista todos los libros |


## Levantar el proyecto

```bash
# Clonar e instalar dependencias
git clone https://github.com/marlonjt/JSON-Mongo.git
cd JSON-Mongo
npm install

# Insertar datos de prueba (solo la primera vez)
mongosh --eval "use libroAPI" --file librosJson.js

# Iniciar servidor (puerto 3000)
npm start
```

## Probar

```bash
# Todos los libros
curl http://localhost:3000/api/libro
```

O abrir en el navegador: `http://localhost:3000/api/libro`

**Respuesta esperada:**
```json
[
  { "_id": "...", "titulo": "Cabaña", "genero": "Terror", "autor": "Juan Perez", "leer": false },
  { "_id": "...", "titulo": "Amor Prohibido", "genero": "Romance", "autor": "Josefa", "leer": false },
  { "_id": "...", "titulo": "Altura", "genero": "Comedia", "autor": "Acción", "leer": false }
]
```

## Dependencias

| Paquete | Versión |
|---------|---------|
| express | ^4.19.2 |
| mongoose | ^5.13.20 |
| nodemon | ^3.1.0 |

---
**Autor:** Marlon Tituaña
