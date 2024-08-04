document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const loginForm = document.getElementById("login-form");
    const closeBtn = document.getElementById("close-btn");
    const loginSubmitBtn = loginForm.querySelector("button[type='submit']");
    const userDropdown = document.getElementById("user-dropdown");
    const userInfo = document.querySelector(".user-info");
    const userName = document.querySelector(".user-name");
    const logoutBtn = document.getElementById("logout-btn");

    loginBtn.addEventListener("click", function() {
        loginForm.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        loginForm.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target != loginBtn && event.target != loginForm && !loginForm.contains(event.target)) {
            loginForm.style.display = "none";
        }
    });

    loginSubmitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        loginBtn.style.display = "none";
        userDropdown.style.display = "block";
        userName.style.display = "inline";
    });

    logoutBtn.addEventListener("click", function() {
        userDropdown.style.display = "none";
        userName.style.display = "none";
        loginBtn.style.display = "inline";
    });

    const links = document.querySelectorAll(".nav-link");
    const moviesContent = document.getElementById("movies-content");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const section = this.id;
            loadContent(section + ".html");
        });
    });

    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                moviesContent.innerHTML = data;
            })
            .catch(error => console.error('Error fetching the content:', error));
    }

    // Resaltar la pestaña activa
    const navLinks = document.querySelectorAll('nav ul li a');
    const submenuLinks = document.querySelectorAll('.submenu ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    submenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            submenuLinks.forEach(submenuLink => submenuLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Cargar la cartelera por defecto al cargar la página
    loadContent("cartelera.html");

    // Lista desplegable
    document.getElementById('citySelect').addEventListener('click', function() {
        document.getElementById('cityOptions').classList.toggle('show');
    });

    document.querySelectorAll('.select-items div').forEach(function(option) {
        option.addEventListener('click', function() {
            document.getElementById('citySelect').innerText = this.innerText;
            document.getElementById('cityOptions').classList.remove('show');
        });
    });

    window.onclick = function(event) {
        if (!event.target.matches('.custom-select')) {
            var dropdowns = document.getElementsByClassName("select-items");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});
