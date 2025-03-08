//----------------------- recebendo classes do html -----------------

let corpoGeral = document.querySelector(".input-Background");
let btnLogin = document.querySelector(".btn-Login");
let corpoLogin = document.querySelector(".input-Login");
let iconFinish = document.querySelector(".icon-Finish");
let btnRegister = document.querySelector(".btn-Register");
let inputRegister = document.querySelector(".input-Register");
let iconeFinish = document.querySelector('.icone-Finish');
let criarConta = document.querySelector('.criar-Link');
let entrarConta = document.querySelector('.login-Link');
let toggleFuncionalidades = document.querySelector('.toggle-funcionalidades');
let navFuncionalidades = document.querySelector('.navFuncionalidades');
let toggleCompanhia = document.querySelector('.toggle-companhia');
let navCompanhia = document.querySelector('.navCompanhia');
let naveGate = document.querySelector('.navegate');


//----------------------- Evento seta da nav -----------------------

toggleCompanhia.addEventListener('click', () =>{
    navCompanhia.classList.toggle('active')
    navFuncionalidades.classList.remove('active');
})

toggleFuncionalidades.addEventListener('click', () => {
    navFuncionalidades.classList.toggle('active');
    navCompanhia.classList.remove('active');
});

//-------------------------- Evento botões login/registrar ------------------------

btnLogin.addEventListener("click", () => {
    corpoGeral.classList.add('active');
    corpoLogin.classList.add('active');
    btnRegister.disabled = true;
    navCompanhia.classList.remove('active');
    navFuncionalidades.classList.remove('active');
    disabledNav();
})

btnRegister.addEventListener("click", () =>{
    inputRegister.classList.add('active');
    corpoGeral.classList.add('active');
    btnLogin.disabled = true;
    navCompanhia.classList.remove('active');
    navFuncionalidades.classList.remove('active');
    disabledNav();
})

//--------------------------- Evento icones form --------------------------------

iconFinish.addEventListener("click", () => {
    corpoGeral.classList.remove('active');
    corpoLogin.classList.remove('active');
    inputRegister.classList.remove('active');
    btnRegister.disabled = false;
    enableNav()
})


iconeFinish.addEventListener("click", ()=> {
   inputRegister.classList.remove('active');
   corpoGeral.classList.remove('active');
   btnLogin.disabled = false;
   enableNav()
})

//----------------------------- Evento input form -------------------------------

criarConta.addEventListener("click", () => {
    inputRegister.classList.add('active');
    corpoLogin.classList.remove('active');
    btnLogin.disabled = true
    btnRegister.disabled = false
})

entrarConta.addEventListener("click", () =>{
    corpoLogin.classList.add('active');
    inputRegister.classList.remove('active');
    btnLogin.disabled = false;
})


//--------------------- Function desabled nav --------------------------

function disabledNav(){
    naveGate.classList.add('disabled');
    navCompanhia.style.pointerEvents = 'none';
    navFuncionalidades.style.pointerEvents = 'none';
}

function enableNav(){
    naveGate.classList.remove('disabled');
    navCompanhia.style.pointerEvents = 'auto';
    navFuncionalidades.style.pointerEvents = 'auto';
}




