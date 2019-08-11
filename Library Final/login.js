function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    alert(username + " " + password);
    for (let i = 0; i < library.auth.length; i++) {
        if (username === library.auth[i].username) {
            if (password === library.auth[i].password) {
                switch (library.auth[i].human.role) {
                    case 'student':
                        window.location = 'studentwindow.html';
                        sessionStorage.setItem(username, password);
                        break;
                    case 'faculty':
                        window.location = 'facultywindow.html';
                        sessionStorage.setItem(username, password);
                        break;
                    case 'employee':
                        window.location = 'employeewindow.html';
                        sessionStorage.setItem(username, password);
                        break;
                    default: alert('incorrect role');
                    break;

                }

            } else {
                alert('Your password is not right');
            }
        } else {
            alert('Your username is not right');
        }

    }
}
