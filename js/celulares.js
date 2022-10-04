const venderC = document.getElementById('venderC');

venderC.addEventListener('click', ()=>{
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
});
