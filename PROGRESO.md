# Progreso — Curso Backend Developer

## Estado actual
**Bloque:** 1 — JavaScript moderno  
**Sesión:** 4 completada  
**Última actualización:** Sesión 4

---

## Conceptos dominados

### Sesión 1 — Variables, objetos, funciones
- `const` y `let` — cuándo usar cada uno
- Objetos con propiedades (clave: valor)
- Funciones normales y arrow functions
- Operador ternario (`condición ? valor1 : valor2`)
- Separación de responsabilidades: el objeto tiene los datos, la función tiene la lógica

### Sesión 2 — Arrays
- Arrays de objetos
- `forEach` para recorrer
- `filter` para filtrar por condición
- Condiciones combinadas con `&&`

### Sesión 3 — map y encadenamiento
- `map` para transformar arrays sin modificar el original
- Encadenamiento `filter().map()` en una sola expresión
- Cuándo usar cada método: forEach / filter / map
- Ejecutar archivos con `node archivo.js` en terminal

### Sesión 4 — Asincronía
- Por qué existe la asincronía (el servidor no puede paralizarse)
- Promesas — estados: pendiente, resuelta, rechazada
- `async` / `await` con `try` / `catch`
- El Event Loop básico — JS no se paraliza mientras espera
- `Promise.all` para operaciones independientes en paralelo
- Diferencia entre operaciones secuenciales vs paralelas

---

## Errores frecuentes (superados)

- Confundir el array con el parámetro dentro del callback
  - Ejemplo: usar `productos.nombre` en vez de `producto.nombre` dentro de un `forEach`
  - Estado: **mejorado notablemente en las últimas sesiones**
- `ForEach` con F mayúscula — JS es case-sensitive
  - Estado: **corregido**
- Strings sin comillas en objetos
  - Estado: **corregido**
- `await` sin llamar a la función (`await 500` en vez de `await esperar(500)`)
  - Estado: **detectado y corregido en sesión 4**

---

## Hábitos a desarrollar

- Nombrar variables según lo que realmente contienen
  - Ejemplo: `vinilMatte` que en realidad filtraba `terminado === "Brillante"`
- Declarar siempre los arrays con `const`

---

## Estructura de archivos actual

```
backend-curso/
└── sesion-01/
    ├── ejercicios.js
    ├── map.js
    ├── encadenamiento.js
    ├── asincronia.js
    └── final.js
```

---

## Plan de estudios

### Bloque 1 — JavaScript moderno
- [x] Variables, objetos, funciones
- [x] Arrays, forEach, filter
- [x] map, encadenamiento
- [x] Asincronía: promesas, async/await, Promise.all
- [ ] **Módulos: require / export** ← siguiente sesión
- [ ] Event Loop en profundidad

### Bloque 2 — Node.js
- [ ] Qué es Node y cómo funciona
- [ ] npm
- [ ] HTTP desde cero
- [ ] Express: rutas, middlewares

### Bloque 3 — APIs REST
- [ ] Diseño de endpoints
- [ ] Arquitectura por capas
- [ ] Validaciones

### Bloque 4 — Bases de datos
- [ ] SQL desde cero
- [ ] PostgreSQL
- [ ] ORM (Prisma)

### Bloque 5 — Seguridad y autenticación
- [ ] JWT
- [ ] Autorización
- [ ] Buenas prácticas de seguridad

### Bloque 6 — Calidad profesional
- [ ] Testing
- [ ] Docker
- [ ] Linux básico

### Bloque 7 — Infraestructura avanzada
- [ ] Redis
- [ ] Colas
- [ ] WebSockets
- [ ] AWS, CI/CD

### Proyecto final
- [ ] Aplicación backend profesional completa

---

## Ejercicios pendientes
- Ninguno por ahora

## Temas para repasar antes de avanzar
- Ninguno por ahora
