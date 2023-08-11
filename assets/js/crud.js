// FUNCION DE VALIDACION

function validateForm(){

    // se obtienen los valores de los campos desde el html
    let email = document.getElementById('inputEmail').value;
    let name = document.getElementById('inputName').value;
    let phone = document.getElementById('inputPhone').value;
    
    // validar email
    if(email==""){
        alert('El correo es requerido para continuar')
        return false;
    }else if(!email.includes("@")){                     //  el correo debe incluir el @
        alert('El correo no es vlaido')
        return false;
    } 

    // validar el campo nombre
    if(name==""){
        alert('El nombre es requerido para continuar')
        return false;
    }

    // validar el campo telefono
    if(phone==""){
    alert('El telefono es requerido para continuar')
    return false;
    }

    // si pasa todas las validaciones es verdadero
    return true;

}