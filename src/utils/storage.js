const LIMITE_CRITICO = 50;

// Recorre el inventario y devuelve el índice del producto buscado, o -1 si no existe
export function buscarIndice(inventario, nombreProducto) {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].producto === nombreProducto) {
      return i;
    }
  }
  return -1;
}

// Muestra alertas de productos con stock por debajo del límite crítico
export function mostrarAlertas(inventario) {
  console.log("========== ALERTAS DE STOCK CRÍTICO ==========");
  let hayAlertas = false;

  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].cantidad < LIMITE_CRITICO && inventario[i].estado === "disponible") {
      console.warn("⚠ ALERTA: " + inventario[i].producto + " — solo " + inventario[i].cantidad + " unidades disponibles.");
      hayAlertas = true;
    }
  }

  if (!hayAlertas) {
    console.log("Sin alertas críticas en este momento.");
  }
}

// Muestra el reporte de suministros disponibles agrupados por nivel de prioridad
export function mostrarReportePorPrioridad(inventario) {
  console.log("\n========== REPORTE FINAL: SUMINISTROS DISPONIBLES ==========");

  const niveles = ["alta", "media", "baja"];

  for (let n = 0; n < niveles.length; n++) {
    const nivel = niveles[n];
    let totalUnidades = 0;
    let hayProductos = false;

    console.log("\n  Prioridad " + nivel.toUpperCase() + ":");

    for (let i = 0; i < inventario.length; i++) {
      if (inventario[i].prioridad === nivel && inventario[i].estado === "disponible") {
        console.log("    • " + inventario[i].producto + ": " + inventario[i].cantidad + " unidades");
        totalUnidades = totalUnidades + inventario[i].cantidad;
        hayProductos = true;
      }
    }

    if (!hayProductos) {
      console.log("    (sin productos disponibles)");
    } else {
      console.log("    Total: " + totalUnidades + " unidades");
    }
  }
}
