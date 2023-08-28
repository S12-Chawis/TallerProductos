document.addEventListener('DOMContentLoaded', (event) => {
    let userLogin = document.getElementById('userLogin');
    let passwordLogin = document.getElementById('passwordLogin');
    let login = document.getElementById('login');

    login.addEventListener('click', (e) => {
        e.preventDefault();
        let user = userLogin.value
        let password = passwordLogin.value
        let getUsers = localStorage.getItem('users');
        let data = JSON.parse(getUsers);

        let found = data.find(e => {
            return e.user === user
        })
        
        if (found) {
            if (found.password === password) {
                window.location.href = "home.html"
            } else console.log("Contraseña incorrecta")
            
        } else console.log('No econtrado')

    });
});
