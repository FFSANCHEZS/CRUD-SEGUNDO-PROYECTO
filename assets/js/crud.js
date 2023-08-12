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

// FUNCION DE AGREGAR DATOS
function addData() {
    if (validateForm() == true) {           // validacion que los campos del formulario sean verdaderos

        let email = document.getElementById('inputEmail').value;
        let name = document.getElementById('inputName').value;
        let phone = document.getElementById('inputPhone').value;

        let listPeople;                   // se declara variable listPeople 

        if (localStorage.getItem('listPeople') == null) {
            listPeople = [];
        } else {
            listPeople = JSON.parse(localStorage.getItem("listPeople"));    // JSON.parse -> transforma mi objeto en cadena de texto para pasarlo a localStorage
        }
        // se construye el objeto y se guarda como cadena de texto
        listPeople.push({
            email: email,         // nombre: valor
            name: name,
            phone: phone,
        });

        // setItem -> cuando reciba una clave y un valor, añadirá estos al almacén, o actualizará el valor si la clave ya existe
        localStorage.setItem('listPeople', JSON.stringify(listPeople));        // stringity -> convierte un objeto o valor de JavaScript en una cadena de texto JSON
        showData();

        document.getElementById('inputEmail').value = "";
        document.getElementById('inputName').value = "";
        document.getElementById('inputPhone').value = "";
    }
}

// FUNCION PARA BORRAR DATOS DE LA LISTA CON EL BOTON BORRAR
function deleteData(index) {
    let listPeople;
    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }
    listPeople.splice(index, 1);                                        // splice -> permite cambiar el contenido del arreglo eliminando o sustituyendo los elementos existentes por otros nuevos
    localStorage.setItem('listPeople', JSON.stringify(listPeople));
    showData();
}


// FUNCION PARA DARLE USO A BOTON ACTUALIZAR 
function updateData(index) {
    document.getElementById("btnAdd").style.display = 'none';                // al actulizar desaparece el boton guardar
    document.getElementById("btnUpdate", btnAdd).style.display = 'block';    // bloquear boton para agregar  

    let listPeople;
    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }
    // rellenar campos del formulario con el editar
    document.getElementById('inputEmail').value = listPeople[index].email;
    document.getElementById('inputName').value = listPeople[index].name;
    document.getElementById('inputPhone').value = listPeople[index].phone;

    // funcion para actulizar los datos
    document.querySelector("#btnUpdate").onclick = function () {
        if (validateForm() == true) {
            //actulizar datos de la lista
            listPeople[index].email = document.getElementById('inputEmail').value
            listPeople[index].name = document.getElementById('inputName').value
            listPeople[index].phone = document.getElementById('inputPhone').value
            // guardar lista actutualizada en localStorage
            localStorage.setItem('listPeople', JSON.stringify(listPeople));

            //actulizar la tabla
            showData();
            document.getElementById('inputEmail').value = "";
            document.getElementById('inputName').value = "";
            document.getElementById('inputPhone').value = "";

            // cambiar visibilidad de los botones
            document.getElementById("btnAdd").style.display = 'block';
            document.getElementById("btnUpdate", btnAdd).style.display = 'none';
        }
    }
}

