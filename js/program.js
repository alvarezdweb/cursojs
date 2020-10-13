// --------------------------- start VARIABLES ---------------------------

let ship = document.querySelector('#shipping__type');
let productAddBtn = document.querySelector('#product__add');
let aerialForm = document.querySelector('#aerialForm');
let maritimeForm = document.querySelector('#maritimeForm');
let table = document.querySelector('#table');

// AERIAL
let productNameAerial = document.querySelector('#product__name__aerial');
let productWeightAerial = document.querySelector('#product__weight__aerial');
let productQuantityAerial = document.querySelector('#product__quantity__aerial');
let productPriceAerial = document.querySelector('#product__price__aerial');

//MARITIME
let productNameMaritime = document.querySelector('#product__name__maritime');
let productWidthMaritime = document.querySelector('#product__width__maritime');
let productHeightMaritime = document.querySelector('#product__height__maritime');
let productLongMaritime = document.querySelector('#product__long__maritime');
let productQuantityMaritime = document.querySelector('#product__quantity__maritime');
let productPriceMaritime = document.querySelector('#product__price__maritime');

//ARRAYS
let articulos = [];

// --------------------------- end VARIABLES ---------------------------



// --------------------------- start shipping type FUNCTION ---------------------------


const shippingType = () => {
    console.log(ship.value);

    if (ship.value == 'aerial') {
        aerialForm.classList.remove('dNone');
        maritimeForm.classList.add('dNone');
        productAddBtn.classList.remove('dNone');

    }

    if (ship.value == 'maritime') {
        aerialForm.classList.add('dNone');
        maritimeForm.classList.remove('dNone');
        productAddBtn.classList.remove('dNone');

    }

    if (ship.value != 'maritime' && ship.value != 'aerial') {
        aerialForm.classList.add('dNone');
        maritimeForm.classList.add('dNone');
        productAddBtn.classList.add('dNone');


    }
}

// --------------------------- end shipping type FUNCTION ---------------------------



// --------------------------- start handleSubmit FUNCTION ---------------------------

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);



    if (ship.value == 'aerial') {
        let articulo = {
            type: 'Aereo',
            shippingTime: '15 Dias',
            name: productNameAerial.value,
            weight: parseFloat(productWeightAerial.value),
            quantity: parseInt(productQuantityAerial.value),
            price: parseFloat(productPriceAerial.value),
            quotation: quote(),
            uPrice: quote() / parseInt(productQuantityAerial.value)
        }
        articulos.push(articulo);
        reset();

    }
    if (ship.value == 'maritime') {
        let articulo = {
            type: 'Maritimo',
            shippingTime: '60 Dias',
            name: productNameMaritime.value,
            width: productWidthMaritime.value,
            height: productHeightMaritime.value,
            long: productLongMaritime.value,
            quantity: productQuantityMaritime.value,
            price: productPriceMaritime.value,
            quotation: quote(),
            uPrice: quote() / parseInt(productQuantityMaritime.value)

        }
        articulos.push(articulo);
        reset();
    }
    renderFunction();


}

// --------------------------- end handleSubmit FUNCTION ---------------------------




// --------------------------- start renderFunction ---------------------------

const renderFunction = () => {
    console.log(articulos);

    table.innerHTML = '';
    // <th><a onclick="remove(${index})" class="itemRemove">(x)</a></th>
    articulos.forEach((art, index) => {

        return table.innerHTML += `

            <thead>
                <tr class="table-active">
                    <th>${art.name}</th>
                    <th class="text-right">
                    <a onclick="remove(${index})" class="itemRemove">
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </a>
                    </th>
                    
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>${'Precio FOB:'}</td>
                <td class="text-right">${'U$D'+art.price}</td>

            </tr>

            <tr>
            <td>${'Tipo de envio:'}</td>
            <td class="text-right">${art.type+' - '+art.shippingTime}</td>
            </tr>

            <tr>
                <td>${'Cantidad: '}</td>
                <td class="text-right">${art.quantity+' Unidades'}</td>
            </tr>

            <tr>
                <td>${'Precio Unitario Final:'}</td>
                <td class="text-right">${'U$D'+art.uPrice}</td>
            </tr>

            <tr>
                <th>${'Precio Total Final:'}</th>
                <th class="text-right">${'U$D'+art.quotation}</th>

            </tr>
            </tbody>

    
            `
    })

}

// --------------------------- end renderFunction ---------------------------




// --------------------------- start other FUNCTIONS ---------------------------


const quote = () => {
    if (ship.value == 'aerial') {
        let kg = parseFloat(productWeightAerial.value) * 60;
        let tax = parseFloat(productPriceAerial.value * 1.04);

        return kg + tax;
    }
    if (ship.value == 'maritime') {
        let volume = parseFloat((productWidthMaritime.value * productHeightMaritime.value * productLongMaritime.value) * 3200);
        let tax = parseFloat(productPriceMaritime.value * 1.04);
        return volume + tax;
    }
}

const reset = () => {
    productNameAerial.value = '';
    productWeightAerial.value = '';
    productQuantityAerial.value = '';
    productPriceAerial.value = '';
    productNameMaritime.value = '';
    productWidthMaritime.value = '';
    productHeightMaritime.value = '';
    productLongMaritime.value = '';
    productQuantityMaritime.value = '';
    productPriceMaritime.value = '';

}

const remove = (index) => {
    articulos.splice(index, 1);
    renderFunction();

}

// --------------------------- end other FUNCTIONS ---------------------------



// --------------------------- start EVENTS ---------------------------

productAddBtn.addEventListener('click', handleSubmit);
ship.addEventListener('change', shippingType);

//------------------------ end EVENTS ---------------------------