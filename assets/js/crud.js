// FUNCION DE VALIDACION DE FORMULARIO
function validateForm() {
    // se obtienen los valores de los campos desde el html
    let email = document.getElementById('inputEmail').value;
    let name = document.getElementById('inputName').value;
    let phone = document.getElementById('inputPhone').value;

    // validar email
    if (email == "") {
        alert('El correo es requerido para continuar')
        return false;
    } else if (!email.includes("@")) {                     //  el correo debe incluir el @
        alert('El correo no es valido debe contener @')
        return false;
    }

    // validar el campo nombre
    if (name == "") {
        alert('El nombre es requerido para continuar')
        return false;
    }

    // validar el campo telefono
    if (phone == "") {
        alert('El telefono es requerido para continuar')
        return false;
    }

    // si pasa todas las validaciones es verdadero
    return true;

}


// FUNCION PARA MOSTRAR TABLA DESDE JS 
function showData() {
    let listPeople;
    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem("listPeople"));    // JSON.parse -> transforma mi objeto en cadena de texto para pasarlo a localStorage
    }
    let html = "";                                       // variable que se utilizara para pintar en el tbody la tabla de la data
    listPeople.forEach(function (element, index) {      // se recorre con forEach la lista de persona y el elemento que encuentre lo almacenara 
        html += "<tr>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.phone + "</td>";
        // agregar acciones a ejecutar (boton)
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Eliminar Datos</button> <button onclick="updateData(' + index + ')" class="btn btn-warning">Editar Datos</button></td>';
        html += "</tr>";
    });
    document.querySelector('#tableData tbody').innerHTML = html;

}
document.onload = showData();   // cuando se recargue muestre la data

