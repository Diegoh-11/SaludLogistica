import { inventario } from "../../model/ProductModel.js";
import { solicitudes } from "../../model/SaleModel.js";
import { procesarSolicitudes } from "../../controllers/SaleController.js";
import { mostrarAlertas, mostrarReportePorPrioridad } from "../../utils/storage.js";

function mostrarInventario() {
  console.log("========== INVENTARIO ACTUAL ==========");
  for (let i = 0; i < inventario.length; i++) {
    console.log(
      (i + 1) + ". " + inventario[i].producto +
      " | cantidad: " + inventario[i].cantidad +
      " | prioridad: " + inventario[i].prioridad +
      " | estado: " + inventario[i].estado
    );
  }
  console.log("=======================================");
}

function agregarSolicitud() {
  const hospital = prompt("Nombre del hospital:");
  if (!hospital) { console.log("Operación cancelada."); return; }

  const producto = prompt("Nombre exacto del producto:");
  if (!producto) { console.log("Operación cancelada."); return; }

  const entrada = prompt("Cantidad requerida:");
  if (!entrada) { console.log("Operación cancelada."); return; }

  const cantidad = parseInt(entrada);

  if (isNaN(cantidad) || cantidad <= 0) {
    console.log("Cantidad inválida. Debe ser un número mayor a 0.");
    return;
  }

  // Agregar al arreglo manualmente por índice (sin push)
  solicitudes[solicitudes.length] = {
    hospital: hospital,
    producto: producto,
    cantidadRequerida: cantidad
  };

  console.log("Solicitud agregada: " + hospital + " requiere " + cantidad + " unidades de " + producto + ".");
}

// --- MENÚ PRINCIPAL ---

let opcion = "";

while (opcion !== "0" && opcion !== null) {
  opcion = prompt(
    "SALUDLOGÍSTICA — MENÚ PRINCIPAL\n" +
    "================================\n" +
    "1. Ver inventario actual\n" +
    "2. Agregar nueva solicitud\n" +
    "3. Procesar solicitudes\n" +
    "4. Ver alertas de stock crítico\n" +
    "5. Ver reporte por prioridad\n" +
    "0. Salir\n" +
    "================================\n" +
    "Elige una opción:"
  );

  if (opcion === "1") {
    mostrarInventario();
  } else if (opcion === "2") {
    agregarSolicitud();
  } else if (opcion === "3") {
    procesarSolicitudes();
  } else if (opcion === "4") {
    mostrarAlertas(inventario);
  } else if (opcion === "5") {
    mostrarReportePorPrioridad(inventario);
  } else if (opcion === "0" || opcion === null) {
    console.log("Sistema cerrado.");
  } else {
    console.log("Opción \"" + opcion + "\" no válida. Intenta con 0-5.");
  }
}
