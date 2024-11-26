---
sidebar_position: 7
title: Carga de Egresos
---

# Carga de Egresos

En esta sección se explica cómo realizar la **carga de egresos** en el sistema, para registrar salidas de dinero por diferentes conceptos, como compras o gastos operativos.

## Instrucciones para Registrar un Egreso

1. Desde el **Tablero Principal**, haz clic en el botón **Caja** en el selector principal.
2. Selecciona la pestaña **Egresos** (o el nombre editable que prefiera el cliente, como **Compras**) en el selector secundario para acceder a los datos de los egresos registrados.
3. En esta sección, presiona el botón verde **Alta de Egreso** ubicado en la esquina superior derecha.

   <div style={{ textAlign: 'center' }}>
      <img 
        src="../../../img/alta-egreso.png"
        alt="Alta de Egreso" 
        style={{ maxWidth: '700px', border: '1px solid #ddd', borderRadius: '8px' }} 
      />
      <p><em>Vista de la sección de egresos con el botón para dar de alta nuevos registros.</em></p>
   </div>

4. Aparecerá un formulario donde podrás cargar los detalles del egreso. Completa los siguientes campos:

### Campos del Formulario

- **Tipo**:

  - Selecciona el tipo de egreso desde un menú desplegable.
  - Los tipos deben configurarse previamente desde la sección **Configuraciones**, similar a cómo se cargan las categorías.

- **Detalle**:

  - Selecciona el detalle asociado al egreso desde un menú desplegable.
  - Los detalles deben configurarse previamente desde la sección **Configuraciones**, similar a cómo se cargan las subcategorías.

- **Fecha**:

  - Ingresa la fecha en que se realiza el egreso.
  - El formato recomendado es `DD/MM/AAAA`.

- **N° Factura**:

  - Indica el número de la factura relacionada al egreso (si aplica).

- **Efectivo o Transferencia**:

  - Especifica el tipo de egreso:
    - Si es **efectivo**, ingresa el monto correspondiente.
    - Si es **transferencia**, proporciona el monto pagado.

- **Descripción**:
  - Incluye una breve descripción que detalle el motivo o referencia del egreso.

5. Una vez completados los campos, presiona el botón **Guardar** para registrar el egreso.

---

## Consideraciones Importantes

- **Validación de Campos**: Asegúrate de haber cargado previamente los tipos y detalles desde la sección **Configuraciones**, ya que sin ellos no será posible registrar un egreso.
- **Historial de Egresos**: Una vez registrado, el egreso aparecerá en el listado con sus detalles correspondientes.
- **Edición de Egresos**: Los egresos registrados pueden ser editados o eliminados si se requiere corrección.

---

### Imagen de Ejemplo

A continuación, se muestra la vista de un egreso cargado en la sección **Egresos**:

<div style={{ textAlign: 'center' }}>
  <img 
    src="../../../img/alta-egreso-form.png" 
    alt="Vista de Venta Cargados" 
    style={{ maxWidth: '700px', border: '1px solid #ddd', borderRadius: '8px' }} 
  />
  <p><small>Vista de formulario de alta de ingreso.</small></p>
</div>
