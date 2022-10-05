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

