const empleados=()=>{
    const content_card=document.getElementById('content_card');
    const nombre=document.getElementById('nombre');
    const cargo=document.getElementById('cargo');
    const cantidad=document.getElementById('cantidad');
    const valor=document.getElementById('valor');
    const card=document.createElement('section');
    const img=document.createElement('img');
    const nomb=document.createElement('h3');
    const ocupacion=document.createElement('p');
    const salario=document.createElement('p');
    const numeroRandom = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    img.src=`../img/imgEmpleados/${numeroRandom}.jpg`;
    card.classList.add('card');
    img.classList.add('img');
    nomb.textContent=nombre.value;
    ocupacion.textContent=cargo.value;
    salario.textContent="salario: "+parseFloat(valor.value)*parseFloat(cantidad.value);
    card.append(img, nomb, ocupacion, salario);
    content_card.append(card);
}

const celulares=()=>{
    const content_card = document.getElementById('content_card');
    const marcaC = document.getElementById('marcaC');
    const referenciaC = document.getElementById('referenciaC');
    const valorC = document.getElementById('valorC');
    const cantidad = document.getElementById('cantidad');
    const card = document.createElement('section');
    const img = document.createElement('img');
    const marca = document.createElement('h3');
    const referencia = document.createElement('p');
    const valorT = document.createElement('p');
    card.classList.add('card');
    img.classList.add('img');
    const numeroRandom = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    img.src=`../img/imgCelulares/${numeroRandom}.jpg`;
    marca.textContent=marcaC.value;
    referencia.textContent=referenciaC.value;
    valorT.textContent="valor a pagar: "+parseFloat(valorC.value)*parseFloat(cantidad.value);
    card.append(img, marca, referencia, valorT);
    content_card.append(card);
}

const portatiles=()=>{
    const content_card = document.getElementById('content_card');
    const marcaP = document.getElementById('marcaP');
    const referenciaP = document.getElementById('referenciaP');
    const precio = document.getElementById('precio');
    const ram = document.getElementById('ram');
    const procesador = document.getElementById('procesador');
    const discoDuro = document.getElementById('discoDuro');
    const card = document.createElement('section');
    const img = document.createElement('img');
    const text1 = document.createElement('h3');
    const text2 = document.createElement('p');
    const text3 = document.createElement('p');
    const text4 = document.createElement('p');
    const text5 = document.createElement('p');
    const text6 = document.createElement('p');
    card.classList.add('card');
    img.classList.add('img');
    const numeroRandom = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    img.src=`../img/imgPortatiles/${numeroRandom}.jpg`;
    text1.textContent = "marca: "+marcaP.value;
    text2.textContent = "referencia: "+referenciaP.value;
    text3.textContent = "precio: "+precio.value;
    text4.textContent = "ram: "+ram.value;
    text5.textContent = "procesador: "+procesador.value;
    text6.textContent = "disco duro: "+discoDuro.value;
    card.append(img,text1,text2,text3,text4,text5,text6);
    content_card.append(card);
}
