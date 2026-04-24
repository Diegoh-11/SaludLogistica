import { inventario } from "../model/ProductModel.js";
import { solicitudes } from "../model/SaleModel.js";
import { buscarIndice } from "../utils/storage.js";

export function procesarSolicitudes() {
  console.log("========== PROCESANDO SOLICITUDES ==========\n");

  for (let i = 0; i < solicitudes.length; i++) {
    const solicitud = solicitudes[i];

    console.log("Hospital : " + solicitud.hospital);
    console.log("Producto : " + solicitud.producto);
    console.log("Cantidad : " + solicitud.cantidadRequerida + " unidades");

    const indice = buscarIndice(inventario, solicitud.producto);

    if (indice === -1) {
      console.log("Resultado: RECHAZADA — producto no existe en el inventario.");
    } else {
      const lote = inventario[indice];

      if (lote.estado !== "disponible") {
        console.log("Resultado: RECHAZADA — el lote está en estado \"" + lote.estado + "\".");
      } else if (lote.cantidad >= solicitud.cantidadRequerida) {
        lote.cantidad = lote.cantidad - solicitud.cantidadRequerida;
        lote.estado = "en tránsito";
        console.log("Resultado: APROBADA  — se despacharon " + solicitud.cantidadRequerida + " unidades. Stock restante: " + lote.cantidad + ".");
      } else {
        console.log("Resultado: RECHAZADA — stock insuficiente. Disponible: " + lote.cantidad + ", requerido: " + solicitud.cantidadRequerida + ".");
      }
    }

    console.log("--------------------------------------------\n");
  }

}
