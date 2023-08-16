
///LocalStorage 
class Bd{
    constructor(){
        let id = localStorage.getItem('id');
        if(id === null){
            localStorage.setItem('id', 0);
        };
    };
    getProximoId(){
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;
    };
    gravar(user){
        let id = this.getProximoId();

        localStorage.setItem(id, JSON.stringify(user));
        localStorage.setItem('id', id);
    };
    recuperarUltimoRegistro() {
        let id = localStorage.getItem('id');

        if (id === null) {
            return null;
        };

        let ultimoId = parseInt(id);
        let ultimoRegistro = JSON.parse(localStorage.getItem(ultimoId));

        return ultimoRegistro;
    };
};
let bd = new Bd();

class Aparencia{
    getBackgroundBody(){
        const body = document.body;
        const backgroundColor = getComputedStyle(body).backgroundColor;
        const backgroundColorHex = this.getRGBToHex(backgroundColor);
        return backgroundColorHex
    }
    getRGBToHex(rgb) {
        // Pega os valores numéricos de r, g e b do formato rgb(r, g, b)
        const [r, g, b] = rgb.slice(4, -1).split(", ").map(Number);
        
        // Converte os valores numéricos para formato hexadecimal e junta todos
        return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
    }
}

///Mudar a cor do site
let executarUmaVez = true;

function mudarModoClaro() {

    const elementLight = document.getElementById('btn-light');
    const elementDark = document.getElementById('btn-dark');

    while (executarUmaVez) {
        elementLight.innerHTML = '<i class="fa-solid fa-check"></i> ' + elementLight.innerHTML;
        elementDark.innerHTML = 'Tema escuro';
        executarUmaVez = false;
    }

    const body = document.body;
    body.style.backgroundColor = "#f2f2f2";

    ///Editar scrollBar

    const elementsString = document.querySelectorAll("a, button, h1, h2, h3, h4, h5, h6, span, i, p"
    );
    elementsString.forEach((element) => {
      element.style.color = "#000";
    });

    const header = document.getElementById('header');
    header.style.backgroundColor = "#f2f2f2"

    const activeElement = document.querySelectorAll(".active");
    activeElement.forEach(element => {
        element.style.backgroundColor = "#bdbdbd";
    });

    const activeAltaElement = document.querySelectorAll(".active-alta");
    activeAltaElement.forEach(element => {
        element.style.backgroundColor = "#f2f2f2";
        element.style.borderBottom = "3px solid #292929"
    });

    const searchElements = document.querySelectorAll(".button-search");
    searchElements.forEach(element => {
        element.style.backgroundColor = "#cecece";
    });

    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach(elements => {
        elements.style.borderColor = "#c3c3c3"
    });

    const inputElements = document.querySelectorAll("input")
    inputElements.forEach(elements => {
        elements.style.color = "#000"
    });

    const popupLogin = document.getElementById('login-popup');
    popupLogin.style.backgroundColor = "#e2e2e2";

    const popupAp = document.getElementById('aparencia-popup');
    popupAp.style.backgroundColor = "#e2e2e2";


    const lisNavGener = document.querySelectorAll(".nav-gener li");
    lisNavGener.forEach(li => {
    li.style.backgroundColor = "#e2e2e2"
    });

    const btnRool = document.querySelectorAll('.slide-btn');
    btnRool.forEach(element => {
        element.style.backgroundColor = "#fff";
    })

    const backGener = document.querySelectorAll('.nav-gener');
    backGener.forEach((element) =>{
        element.style.backgroundColor = "#f2f2f2"
    })



    
}

function mudarModoEscuro() {
    const elementLight = document.getElementById('btn-light');
    const elementDark = document.getElementById('btn-dark');

    while (executarUmaVez == false) {
    elementLight.innerHTML = 'Tema claro';
    elementDark.innerHTML = '<i class="fa-solid fa-check"></i> ' + elementDark.innerHTML;
    executarUmaVez = true
    }

    const body = document.body;
    body.style.backgroundColor = "#171717";

    const elementsString = document.querySelectorAll("a, button, h1, h2, h3, h4, h5, h6, span, p, i");
    elementsString.forEach((element) => {
        element.style.color = "#fff";
    });

    const header = document.getElementById('header');
    header.style.backgroundColor = "#171717";

    const activeElement = document.querySelectorAll(".active");
    activeElement.forEach(element => {
        element.style.backgroundColor = "#656565";
    });

    const activeAltaElement = document.querySelectorAll(".active-alta");
    activeAltaElement.forEach(element => {
        element.style.backgroundColor = "#8d8d8d8f";
        element.style.borderBottom = "3px solid #a7a7a7"
    });


    const searchElements = document.querySelectorAll(".button-search");
    searchElements.forEach(element => {
        element.style.backgroundColor = "#383838";
    });

    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach(elements => {
        elements.style.borderColor = "#656565";
    });

    const inputElements = document.querySelectorAll("input")
    inputElements.forEach(elements => {
        elements.style.color = "#fff"
    });

    const popupLogin = document.getElementById('login-popup');
    popupLogin.style.backgroundColor = "#333";

    const popupAp = document.getElementById('aparencia-popup');
    popupAp.style.backgroundColor = "#333";

    const lisNavGener = document.querySelectorAll(".nav-gener li");
    lisNavGener.forEach(li => {
        li.style.backgroundColor = "#333";
    });

    const btnRool = document.querySelectorAll('.slide-btn');
    btnRool.forEach(element => {
        element.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    })

    const backGener = document.querySelectorAll('.nav-gener');
    backGener.forEach((element) =>{
        element.style.backgroundColor = "#171717"
    })

}
///function onmouseover
function hoverEvent(obj) {

    var colorBody = aparencia.getBackgroundBody();

    if (colorBody === "#171717") {
        obj.classList.add("hover");
    } else if (colorBody === "#f2f2f2") {
        obj.classList.add("hover-light");
    } else {
        console.log("Cor desconhecida: " + colorBody);
    }
}
///Function onmouseout 
function hoverEventCont(element) {
    element.classList.remove("hover-light");
    element.classList.remove("hover");
}
let aparencia = new Aparencia();

///////////////////
class Slideshow {
    constructor() {
        this.slideIndex = 0;
        this.showSlides();
    }

    showSlides() {
        const slides = document.querySelectorAll('.slideshow li');

        for (let i = 0; i < slides.length; i++) {
            if (i === this.slideIndex) {
                slides[i].style.display = 'inline';
            } else {
                slides[i].style.display = 'none';
            }
        }
    }

    slide(n) {
        this.slideIndex += n;
        const slides = document.querySelectorAll('.slideshow li');

        if (this.slideIndex >= slides.length) {
            this.slideIndex = 0;
        } else if (this.slideIndex < 0) {
            this.slideIndex = slides.length - 1;
        }

        this.showSlides();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const slideshow = new Slideshow();

    // Exemplo: deslizar para a esquerda ao clicar em um botão com a classe "prev"
    const prevButton = document.querySelector('.prev');
    prevButton.addEventListener('click', function () {
        slideshow.slide(-1);
    });

    // Exemplo: deslizar para a direita ao clicar em um botão com a classe "next"
    const nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', function () {
        slideshow.slide(1);
    });
});
///////////////////////

///Deslogar
function deslogar(){
    window.location.href = "index.html";
};
function logar(){
    const email = document.getElementById('email-input').value;
    const senha = document.getElementById('senha-input').value;

    if(email && senha){
        let user = {
            email: email,
            senha: senha
        };
        bd.gravar(user);
        window.location.href = "inicio.html";
    }else{
        alert("Por favor, preencha o email e a senha.");
    }
};

///Nomear User e email do Login
function nomear(){
    let ultimoR = bd.recuperarUltimoRegistro();

    if(ultimoR && ultimoR.email){
        const userPop = document.getElementById('user');
        const emailPop = document.getElementById('user-email');

        const partesEmail = ultimoR.email.split('@'); ///slice separa o antes e o depois do @
        const parteSDominio = partesEmail[0]; ///Guardar a parte sem @

        const primeiraLetraMaiuscula  = parteSDominio.charAt(0).toUpperCase(); ///Pega a primeira letra (0) e com o uppercase coloca ela em maiuscula
        const parteSDominioM = primeiraLetraMaiuscula + parteSDominio.slice(1); ///junta a primeira letra com o restante da palavra depois da 1ª letra (1)

        userPop.textContent = `${parteSDominioM}`;
        emailPop.textContent = `${ultimoR.email}`;
    } else {
        console.log("Nenhum email encontrado no localStorage.");
    }
};

///Ao carregar a pagina ocorre o evento nomear()
window.onload = function() {
    // Verifica se a página "inicio.html" está aberta
    if (window.location.pathname.endsWith("inicio.html" )){
        nomear()    
    }else if(window.location.pathname.endsWith("alta.html" )){
        nomear()
    }else if(window.location.pathname.endsWith("shopping.html" )){
        nomear()
    }else {
        console.log(error);
    }
};

//Abrir e fechar navegação
document.getElementById('btn-header').addEventListener("click", function() {
    const navOpen = document.getElementById('nav');
    const navClose = document.getElementById('nav-curt');

    if (navOpen.style.display === "block") {
        navOpen.style.display = "none";
        navClose.style.display = "block";
    } else if (navClose.style.display === "block") {
        navClose.style.display = "none";
        navOpen.style.display = "block";
    } else {
        navOpen.style.display = "block";
    }
});

///Abrir páginas
document.addEventListener("DOMContentLoaded", function() { //Ver eventos após carregar página
    const menuItens = document.querySelectorAll("#nav li");
    for (const menuItem of menuItens) { //Passar por elementos iteráveis
        menuItem.addEventListener("click", function() { //Ver eventos de click
            let idButton = this.id;
            switch (idButton) {
                case "menu-inicio":
                    window.location.href = "inicio.html";
                    break;
                case "menu-alta":
                    window.location.href = "alta.html";
                    break;  
                default:
                    alert("Está página não está em funcionamento!")             
            }
        });
    }
});

///Abri pagina menu-Curto
function redirecionarInicio() {
    window.location.href = "inicio.html";
}
document.getElementById("menu-inicio-curt").addEventListener("click", redirecionarInicio);


///Marcador de páginas
document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;

    const menuIDs = {
        "menu-inicio": "inicio.html", 
        "menu-alta": "alta.html",
        "menu-inicio-curt": "inicio.html"
    };

    for (const id in menuIDs) {
        const menuItem = document.getElementById(id);
        const menuPath = menuIDs[id];

        if (path.endsWith(menuPath)) {
            menuItem.classList.add("active");
        } else{
            menuItem.classList.remove("active");
        }
    }
});

///Abrir popup
document.getElementById("login").addEventListener("click", function(){
    const popup = document.getElementById("login-popup");
    const popupAp = document.getElementById('aparencia-popup');
    if (popup.style.display === "none"){
        popup.style.display = "block";
        if(popupAp.style.display === "block"){
            popupAp.style.display = "none"
        }
    }else if(popup.style.display === "block"){
        popup.style.display = "none"
    }
});

///Abrir controle de aparencia
function openAparencia() {
    const loginpopup = document.getElementById("login-popup")
    const popupAp = document.getElementById('aparencia-popup')

    loginpopup.style.display = "none";
    popupAp.style.display = "block";
}

///Fechar aparencia e voltar popup-login
document.getElementById("exit-aparencia").addEventListener("click", function(){
    const popup = document.getElementById("login-popup");
    const popupAp = document.getElementById('aparencia-popup');

    if(popupAp.style.display === "block"){
        popupAp.style.display = "none";
        popup.style.display = "block";
    }
});

///Fechar popups ao clicar fora e impedir que o popup seja fechado por engano caso clicado em outros botoes que remetam a ele
window.addEventListener("click", function(event){
    const popup = document.getElementById("login-popup");
    const popupAp = document.getElementById('aparencia-popup');
    const buttonLogin = this.document.getElementById('login');

    const isClickedInsidePopupAparencia = popupAp.contains(event.target);
    const isClickedInsidePopupLogin = popup.contains(event.target);
    const isClickedInsideButtonLogin = buttonLogin.contains(event.target);

    if (!isClickedInsidePopupAparencia && !isClickedInsidePopupLogin && !isClickedInsideButtonLogin) {
        // Clique fora dos pop-ups, então podemos fechar ambos
        popupAp.style.display = "none";
        popup.style.display = "none";
    }
});

///Slide da página alta
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const altaRool = document.querySelector(".alta-rool");
const shorts = document.querySelectorAll(".shorts-alta");

const itemsPerSlide = 4;
let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + itemsPerSlide, shorts.length - itemsPerSlide);
  updateSlidePosition();
});

prevBtn.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - itemsPerSlide, 0);
  updateSlidePosition();
});

function updateSlidePosition() {
  const slideWidth = shorts[0].offsetWidth + 5; // Largura de cada slide mais a margem
  const displacement = -currentIndex * slideWidth;
  altaRool.style.transform = `translateX(${displacement}px)`;
}
