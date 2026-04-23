# SaludLogística — Motor Lógico de Inventario

Proyecto educativo en **JavaScript puro (Vanilla JS)** que simula el motor lógico de gestión de inventario para una empresa de logística hospitalaria.

---

## ¿Qué hace?

1. Lee el inventario de suministros médicos.
2. Procesa solicitudes urgentes de hospitales.
3. Aprueba o rechaza cada solicitud según el stock disponible.
4. Emite alertas para productos con menos de 50 unidades.
5. Genera un reporte final agrupado por nivel de prioridad.

Todo el resultado se muestra en la **consola del navegador**.

---

## Cómo ejecutarlo

1. Abre el archivo `index.html` en tu navegador (doble clic o arrástralo al navegador).
2. Presiona **F12** para abrir las herramientas de desarrollador.
3. Ve a la pestaña **Consola**.
4. El sistema se ejecuta automáticamente y verás todos los reportes.

---

## Estructura del proyecto

```
SaludLogistica/
├── index.html      → Punto de entrada (solo carga el script)
├── src/
│   ├── data.js     → Inventario y solicitudes (datos)
│   ├── utils.js    → Funciones auxiliares (búsqueda, alertas, reporte)
│   └── main.js     → Lógica principal del motor
└── README.md
```

---

## Conceptos aplicados

| Concepto            | Dónde se usa                                      |
|---------------------|---------------------------------------------------|
| Objetos literales   | Cada lote del inventario y cada solicitud         |
| Arreglos            | `inventario[]` y `solicitudes[]`                 |
| Ciclos (`for`)      | Recorrer inventario, solicitudes y niveles        |
| Condicionales (`if`)| Aprobar/rechazar solicitudes, emitir alertas      |
| Módulos ES6         | `import` / `export` entre `data`, `utils`, `main`|

---

## Restricciones aplicadas

- Sin manipulación del DOM.
- Sin métodos nativos de arreglos (`push`, `map`, `filter`, etc.).
- Sin clases ni constructores — solo objetos literales.
- Sin Node.js — se ejecuta en el navegador.
- Código 100% síncrono.
