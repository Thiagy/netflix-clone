var num = 1;
var intervalID;

const widthScreen = window.innerWidth;


function slider() {
    const background_image_main = document.getElementById('container-main');

    if(widthScreen < 600){

        if (num === 1) {
            background_image_main.style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,.75) 45%, rgba(0,0,0,.6) 55%), url('./img/1.1.jpg')";
        } else if (num === 2) {
            background_image_main.style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,.75) 45%, rgba(0,0,0,.6) 55%), url('./img/2.1.jpg')";
        } else if (num === 3) {
            background_image_main.style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,.75) 45%, rgba(0,0,0,.6) 55%), url('./img/3.1.jpg')";
        }

    } else {

        if (num === 1) {
            background_image_main.style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,.75) 45%, rgba(0,0,0,.6) 55%), url('./img/1.jpg')";
        } else if (num === 2) {
            background_image_main.style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,.75) 45%, rgba(0,0,0,.6) 55%), url('./img/2.jpg')";
        } else if (num === 3) {
            background_image_main.style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,.75) 45%, rgba(0,0,0,.6) 55%), url('./img/3.jpg')";
        }

    }
    
}

function nextImage() {
    num = (num % 3) + 1; 
    slider();
}

// Vai para a imagem anterior
function previousImage() {
    num = (num - 1 === 0) ? 3 : num - 1; 
    slider();
}

// Automatiza a troca de imagens a cada 5 segundos
function startSlider() {
    intervalID = setInterval(nextImage, 3000); 
}

// Para a troca automática de imagens
function stopSlider() {
    clearInterval(intervalID); 
}

document.getElementById('box-arrow-left').addEventListener('click', function() {
    previousImage();
    stopSlider(); // Para a troca automática quando a seta é clicada
});

document.getElementById('box-arrow-right').addEventListener('click', function() {
    nextImage();
    stopSlider(); // Para a troca automática quando a seta é clicada
});

startSlider(); // Inicia a troca automática de imagens


//Função que exibe as respostas de respectivas perguntas

// Seleciona todas as tags com a classe "box-quetions"
const questions = document.querySelectorAll('.box-quetions');

// Itera sobre todas as tags "box-quetions"
questions.forEach((question, index) => {

  // Adiciona um evento de clique para cada tag "box-quetions"
  question.addEventListener('click', () => {

    // Seleciona a tag "box-answers" correspondente ao índice atual
    const answer = document.querySelectorAll('.box-answers')[index];
    const box_arrows_options = document.querySelectorAll('.box-arrows-options')[index];


    // Verifica se a resposta está visível ou não
    if (answer.style.display === 'block') {

      answer.style.display = 'none'; 
      box_arrows_options.style.transform = ''; 

    } else {

      answer.style.display = 'block'; 
      box_arrows_options.style.transform = 'rotate(45deg)'; 
      
    }

  });

});
