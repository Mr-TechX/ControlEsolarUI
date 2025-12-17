function login() {
        const u = document.getElementById("user").value;
        const p = document.getElementById("pass").value;
        if (u === "s22120190" && p === "20052004") {
            sessionStorage.setItem('auth', 'true');
            window.location.href = 'dashboard.html';
        } else {
            document.getElementById("error").style.display = "block";
        }
    }