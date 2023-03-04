
  //=============================================================================================================//
  //=======================TATTOO STÚDIO==============================================//
  //=============================================================================================================//

//DEFINIÇÃO DE VARIÁVEIS
const fileInput = document.getElementById("photo-file");
const widthInput = document.querySelector(".resizer__input--width");
const heightInput = document.querySelector(".resizer__input--height");
const aspectToggle = document.querySelector(".resizer__aspect");
const canvas = document.getElementById("canvas");
const canvasCtx = canvas.getContext("2d");
const heightLabel = document.getElementById('studio--show--height');
const tattooPrice = document.getElementById('studio--show--price')
const widthDefault = 450;

let activeImage, originalWidthToHeightRatio;

//ADIÇÃO DA FUNÇÃO DE CLICK NO INPUT FILE AO CLICAR NO BOTÃO

document.getElementById('studio--select--image').onclick = function() {
    fileInput.click();
  }


//EVENTO DE MUDANÇA QUE CARREGA A IMAGEM PARA UM SRC

fileInput.addEventListener("change", (e) => {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    openImage(reader.result);
  });
  tattoo = e.target.files[0]
  reader.readAsDataURL(tattoo);

});

//EVENTO DE ALTERAÇÃO DE LARGURA

widthInput.addEventListener("change", () => {
  if (!activeImage) return;

  const heightValue = aspectToggle.checked
    ? widthInput.value / originalWidthToHeightRatio
    : heightInput.value;

  resize(widthInput.value, heightValue);
  console.log(heightInput.value);

});

//EVENTO DE ALTERAÇÃO DE ALTURA

heightInput.addEventListener("change", () => {
  if (!activeImage) return;

  const widthValue = aspectToggle.checked
    ? heightInput.value * originalWidthToHeightRatio
    : widthInput.value;

  resize(widthValue, heightInput.value);

});

//EVENTO DE DE CARREGAMENTO DA IMAGEM EM TELA E ATUALIZAÇÃO DE DIMENSÕES

function openImage(imageSrc) {
  activeImage = new Image();

  activeImage.addEventListener("load", () => {
    originalWidthToHeightRatio = (activeImage.width) / (activeImage.height);
    resize(activeImage.width, activeImage.height);
  });

  activeImage.src = imageSrc;
  
}

//FUNÇÃO DE REDEFINIR O TAMANHO CONFORME INPUT RANGE

function resize(width, height) {
  canvas.width = Math.floor(width*0.254);
  canvas.height = Math.floor(height*0.254);
  widthInput.value = Math.floor(width);
  heightInput.value = Math.floor(height);

  canvasCtx.drawImage(activeImage, 0, 0, Math.floor(width*0.254), Math.floor(height*0.254));
  if (filter.checked) {
    filterImage ();
  }
  canvas.style.maxWidth = Math.floor(width*0.254) + 'px';
  heightLabel.innerText = Math.floor(heightInput.value*0.254)/10 + 'cm';

  tattooPrice.innerText = 'R$' + Math.floor(heightInput.value*0.254/10 * 12) + ',00'
}



//============================FUNÇÃO DE FILTRO=====================================//

//REALIZAR TRANSPARÊNCIA DA IMAGEM IMPORTADA
function filterImage() {
  var imgd = canvasCtx.getImageData(0, 0,  canvas.width, canvas.height),
  pix = imgd.data
  const tolerance = 179
  const referenceColor = {r:255, g:255, b:255}

  for (var i = 0, n = pix.length; i <n; i += 4) {
  var r = pix[i],
      g = pix[i+1],
      b = pix[i+2];


      const color = { r, g, b }
      
    if(distance(color, referenceColor) < tolerance){ 

        pix[i] = color.r;
        pix[i+1] = color.g;
        pix[i+2] = color.b;
        pix[i+3] = color.a;
    }
  }
canvasCtx.putImageData(imgd, 0, 0);
}

//FUNÇÃO MARGEM DE ERRO PARA FILTRO MAIS PRECISO
function distance(color, reference) {
  const diff = { r: reference.r - color.r, g: reference.g - color.g, b:reference.b - color.b}
  const module = Math.sqrt((diff.r * diff.r) + (diff.g * diff.g) + (diff.b * diff.b))
  return module
}


//======================FUNÇÃO DE ESTILIZAÇÃO DO BOTÃO DE FILTRO E MAIS =====================================//

const filter = document.getElementById('studio--opt--filter');
const filterOff = document.getElementById('studio--opt--filter--off')
filter.addEventListener('click', () => {

  $(filter).prop('checked', true);

  filterImage ();

  $(filterOff).removeClass("checked");
  $(filter).toggleClass("checked");

});
filterOff.addEventListener('click', () => {

  $(filter).prop('checked', false);

  $(filter).removeClass("checked");

  $(filterOff).toggleClass("checked");

  canvasCtx.drawImage(activeImage, 0, 0, Math.floor(canvas.width), Math.floor(canvas.height));

});



// //FUNÇÃO DE MOVER OBJETO CANVAS COM O HOLD MOUSE
// canvas.addEventListener('mousedown', mousedown);

// function mousedown() {

//   newWidht = canvas.offsetWidth;
//   newHeight = canvas.offsetHeight;
//   console.log(newWidht);
//   console.log(newHeight);
//   canvas.addEventListener('mousemove', mousemove);
//   canvas.addEventListener('mouseup', mouseup);

//   function mousemove(e) {
//     var x = e.clientX - (newWidht)/2 + 'px';
//     var y = e.clientY - (newWidht) + 'px';
//     this.style.left = x;
//     this.style.top = y;
//   }
  
//   function mouseup(){
//     canvas.removeEventListener('mousemove', mousemove)
//   }

// }



//SISTEMA PARA MOVER E ROTACIONAR CANVAS

rotateLeft = document.getElementById('studio--opt--rotate--left');
rotateRight = document.getElementById('studio--opt--rotate--right');
moveDown = document.getElementById('photo--control--down');
moveUp = document.getElementById('photo--control--up');
moveLeft = document.getElementById('photo--control--left');
moveRight = document.getElementById('photo--control--right');
zoomIn = document.getElementById('studio--opt--zoom--in');
zoomOut = document.getElementById('studio--opt--zoom--out');
photoSpace = document.getElementById('studio--photo--background--space');
rotate = 0;
left = 0;
down = 0;
scale = 1.0;

document.addEventListener("DOMContentLoaded", function(){
  rotateLeft.addEventListener("click", function() {
    if(rotate== 360){
      rotate = 0
    }
    rotate = rotate - 5;
    canvas.style.transform = "rotatez("+rotate+"deg)";
    canvas.style.transitionDuration = '0.4s';
  }) 
  rotateRight.addEventListener("click", function() {
    if(rotate== 360){
      rotate = 0
    }
    rotate = rotate + 5;
    canvas.style.transform = "rotatez("+rotate+"deg)";
    canvas.style.transitionDuration = '0.4s';
  }) 

  moveDown.addEventListener("click", function() {
    down = down + 20;
    canvas.style.top = down + "px"
    canvas.style.transitionDuration = '0.4s';
  }
  )
  moveUp.addEventListener("click", function() {
    down = down - 20;
    canvas.style.top = down + "px";
    canvas.style.transitionDuration = '0.4s';
  }
  )
  moveLeft.addEventListener("click", function() {
    left = left - 20;
    canvas.style.left = left + "px";
    canvas.style.transitionDuration = '0.4s';
  }
  )
  moveRight.addEventListener("click", function() {
    left = left + 20;
    canvas.style.left = left + "px";
    canvas.style.transitionDuration = '0.4s';
  }
  )
  zoomIn.addEventListener('click', () => {
    scale = scale + 0.1;
    photoSpace.style.transitionDuration = '0.4s';
    photoSpace.style.transform = 'scale('+scale+')';
  })
  zoomOut.addEventListener('click', () => {
    scale = scale - 0.1;
    photoSpace.style.transform = 'scale('+scale+')';
    photoSpace.style.transitionDuration = '0.4s';
  })
})

//====================SELEÇÃO DE IMAGEM DE FUNDO========================//

const backgroundImage = document.getElementById('studio--photo--background');


const arraySelectBox = [
    arm1 = 'arm--1',
    arm2 = 'arm--2',
    arm3 = 'arm--3',
    arm4 = 'arm--4',
    body1 = 'body--1',
    body2 = 'body--2',
    leg1 = 'leg--1',
    leg2 = 'leg--2',
    leg3 = 'leg--3',
    leg4 = 'leg--4',
    foot1 = 'foot--1',
    leg4 = 'leg--4',
    leg4 = 'leg--4',
    leg4 = 'leg--4'
]

const selected = document.getElementById('studio--select--body');
selected.onchange = function bodyUpdate() {
    
    let optionValue = selected.options[selected.selectedIndex];
    let value = optionValue.value;

    for (var i = 0 ; i < arraySelectBox.length; i++)
      if(arraySelectBox[i]=selected.selectedIndex) {
      backgroundImage.src = "./img/bodyparts/"+value+".png";

      }
      console.log(value)
}


$('#studio--select--body--button').onclick = function() {
  selected.click();
}
 
//MODALS
//MODAL PRÉ-VISUALIZAÇÃO DA IMAGEM
const previewToDownload = document.getElementById('project--preview--print');
const fileDownload = document.getElementById('download--project--file');


$('#studio--download--preview').click(function () {
  $('#studio--modal--project--preview').toggleClass("show");
  
  html2canvas(document.querySelector("#studio--photo--background--space")).then(canvas => {
    canvas.id = 'canvasToDownload'
    previewToDownload.appendChild(canvas);
  });
}
)
$('#project--preview--close').click(function () {
  $('#studio--modal--project--preview').removeClass("show");
  previewToDownload.innerText = "";
}
)
$(fileDownload).click(function () {
  const a = document.createElement('a');
  const canvas = document.getElementById('canvasToDownload')
  a.href = canvas.toDataURL('image.png');
  a.download = 'image.png';
  a.click();
}
)

//BUTTONS FUNCTION

$('#studio--goto--studio').click(function () {
  $('.studio--tattoo').toggleClass('show');
  $('#studio--instructions').toggleClass('off');
})
$('#studio--agendamento--link').click(function () {
  location.href='./agenda.php';
})

