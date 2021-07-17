const form = document.getElementById('form');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mesageDisplay = document.getElementById('mesage-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const nome = nomeInput.value;
    if (email == "" && nome == "") {
        mesageDisplay.style.paddingBottom = "1rem";
        mesageDisplay.style.paddingBottom = "0.5rem";
        mesageDisplay.style.textAlign = "center";
        mesageDisplay.innerHTML = "Preencha os campos de Nome e Email";
    } else if (email == "") {
        mesageDisplay.style.paddingBottom = "1rem";
        mesageDisplay.style.paddingBottom = "0.5rem";
        mesageDisplay.style.textAlign = "center";
        mesageDisplay.innerHTML = "Preencha o campo com seu melhor E-mail!";
    } else if (nome == "") {
        mesageDisplay.style.paddingBottom = "1rem";
        mesageDisplay.style.paddingBottom = "0.5rem";
        mesageDisplay.style.textAlign = "center";
        mesageDisplay.innerHTML = "Preencha o campo com seu lindo nome!";
    } else {
        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let data = {
            nome,
            email
        };

        let convertData = JSON.stringify(data);
        localStorage.setItem('DuarteKey', convertData);

        let content = document.getElementById('content');
        let carregando = `<div id="carregando"><h3 class="novidades">Carregando...</h3></div>`;
        let pronto = `<div id="pronto"><h3 class="novidades">Seu cadastro foi concluido, em breve você receberá notícias nossas!</h3></div>`;

        content.innerHTML = carregando;

        setTimeout(() => {
            content.innerHTML = pronto
        }, 1000);
    }
});