

// class Usuario{
//     constructor(nombre, telefono, direccion, correo, contraseña)  {
//         this.nombre = nombre;
//         this.telefono = telefono;
//         this.correo = correo;
//         this.direccion = direccion;
//         this.contraseña = contraseña;
//     }

// }
// function guardarUsuario (nombre, telefono, direccion, correo, contraseña){

//     const usuarios = []
// }

// const proveedor = new Usuario(nombre, telefono, direccion, correo, contraseña);

document.addEventListener('DOMContentLoaded', (event) => {
    let userRegister = document.getElementById('userRegister');
    let userPassword = document.getElementById('userPassword');
    let registerButton = document.getElementById('registerButton');

    let saveUsers = []
    registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        const User = {
            user: userRegister.value,
            password: userPassword.value
        }
        
        saveUsers.push(User)
        localStorage.setItem('users', JSON.stringify(saveUsers));
        alert("You successfully registered")
    });
    
});
