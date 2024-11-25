---
sidebar_position: 5
title: Carga de Ventas
---

# Carga de Ventas

En esta sección se describe cómo realizar la **carga de ventas** en el sistema, ideal para gestionar pedidos de artículos como los de rotisería. Este proceso se lleva a cabo desde el módulo **Caja**.

## Instrucciones para Registrar una Venta

1. Desde el **Tablero Principal**, haz clic en el botón **Caja** en el selector principal.
2. Selecciona la pestaña **Ventas** en el selector secundario para acceder a los datos de las ventas.
3. En esta sección, presiona el botón verde **Alta de Venta** ubicado en la esquina superior derecha.

   <div style={{ textAlign: 'center' }}>
      <img 
        src="../../img/alta-venta.png" 
        alt="Alta de Venta" 
        style={{ maxWidth: '700px', border: '1px solid #ddd', borderRadius: '8px' }} 
      />
      <p><em>Vista de la sección de ventas con el botón para dar de alta nuevos pedidos.</em></p>
   </div>

4. Aparecerá un formulario para registrar los detalles del pedido. Completa los siguientes campos:

### Campos del Formulario

- **Cliente y Teléfono**:

  - Puedes ingresar manualmente el nombre y teléfono del cliente.
  - También puedes seleccionar un cliente previamente cargado desde el listado disponible.

- **Tipo de Pago**:

  - Efectivo
  - Transferencia
  - Tarjeta

- **Tipo de Entrega**:

  - Retiro en local
  - Envío a domicilio

- **Hora del Pedido**: Ingresa la hora en que se realiza o solicita el pedido.

- **Monto Total**: Este campo se calcula automáticamente en función de la cantidad de productos seleccionados y sus precios.

- **Comentario Extra**: Campo opcional para agregar notas adicionales relacionadas con el pedido.

- **Listado de Selección de Productos**:
  - Selecciona los productos que forman parte del pedido desde el listado desplegable.
  - Una vez seleccionado un producto, podrás editar:
    - **Cantidad**
    - **Precio Unitario**
  - Al modificar estos valores, el sistema actualizará automáticamente el **Monto Total** del pedido.

5. Una vez completados todos los campos, presiona el botón **Guardar** para registrar la venta.

---

## Ejemplo de Pedido

A continuación, se muestra un ejemplo de un pedido cargado en la sección de ventas:

- Cliente: "Juan Pérez"
- Teléfono: "3511234567"
- Tipo de Pago: Tarjeta
- Tipo de Entrega: Envío a domicilio
- Productos:
  - **Empanadas de Carne**: 12 unidades - $1.200
  - **Pizza Napolitana**: 1 unidad - $1.500
- Comentario: "Entregar antes de las 20:00."
- **Monto Total**: $2.700

---

## Consideraciones Importantes

- **Validación de Campos**: El sistema verificará que los campos obligatorios estén completos antes de permitirte guardar la venta.
- **Edición de Ventas**: Una vez registrada, la venta puede ser editada o anulada desde esta misma sección.

Esta funcionalidad es clave para agilizar la gestión de pedidos y ofrecer un mejor servicio al cliente.

---

### Imagen de Ejemplo

A continuación, se muestra la vista de una venta cargado en la sección **Ventas**:

<div style={{ textAlign: 'center' }}>
  <img 
    src="../../img/alta-venta-form.png" 
    alt="Vista de Venta Cargados" 
    style={{ maxWidth: '700px', border: '1px solid #ddd', borderRadius: '8px' }} 
  />
  <p><small>Vista de formulario de alta de venta.</small></p>
</div>
