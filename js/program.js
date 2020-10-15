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
    reset();

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

    if (ship.value == 'aerial') {
        let validate = 0;

        if (productNameAerial.value == '') {
            productNameAerial.classList.add('is-invalid');
        } else {
            productNameAerial.classList.remove('is-invalid');
            productNameAerial.classList.add('is-valid');
            validate++;
        }
        if (productWeightAerial.value == '' || productWeightAerial.value <= 0) {
            productWeightAerial.classList.add('is-invalid');
        } else {
            productWeightAerial.classList.remove('is-invalid');
            productWeightAerial.classList.add('is-valid');
            validate++;
        }
        if (productQuantityAerial.value == '' || productQuantityAerial.value <= 0) {
            productQuantityAerial.classList.add('is-invalid');
        } else {
            productQuantityAerial.classList.remove('is-invalid');
            productQuantityAerial.classList.add('is-valid');
            validate++;
        }
        if (productPriceAerial.value == '' || productPriceAerial.value <= 0) {
            productPriceAerial.classList.add('is-invalid');
        } else {
            productPriceAerial.classList.remove('is-invalid');
            productPriceAerial.classList.add('is-valid');
            validate++;
        }
        if (validate == 4) {
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
    }

    if (ship.value == 'maritime') {
        let validate = 0;

        if (productNameMaritime.value == '') {
            productNameMaritime.classList.add('is-invalid');
        } else {
            productNameMaritime.classList.remove('is-invalid');
            productNameMaritime.classList.add('is-valid');
            validate++;
        }
        if (productWidthMaritime.value == '' || productWidthMaritime.value <= 0) {
            productWidthMaritime.classList.add('is-invalid');
        } else {
            productWidthMaritime.classList.remove('is-invalid');
            productWidthMaritime.classList.add('is-valid');
            validate++;
        }
        if (productHeightMaritime.value == '' || productHeightMaritime.value <= 0) {
            productHeightMaritime.classList.add('is-invalid');
        } else {
            productHeightMaritime.classList.remove('is-invalid');
            productHeightMaritime.classList.add('is-valid');
            validate++;
        }
        if (productLongMaritime.value == '' || productLongMaritime.value <= 0) {
            productLongMaritime.classList.add('is-invalid');

        } else {
            productLongMaritime.classList.remove('is-invalid');
            productLongMaritime.classList.add('is-valid');
            validate++;
        }
        if (productQuantityMaritime.value == '' || productQuantityMaritime.value <= 0) {
            productQuantityMaritime.classList.add('is-invalid');
        } else {
            productQuantityMaritime.classList.remove('is-invalid');
            productQuantityMaritime.classList.add('is-valid');
            validate++;
        }
        if (productPriceMaritime.value == '' || productPriceMaritime.value <= 0) {
            productPriceMaritime.classList.add('is-invalid');
        } else {
            productPriceMaritime.classList.remove('is-invalid');
            productPriceMaritime.classList.add('is-valid');
            validate++;
        }
        if (validate == 6) {
            let articulo = {
                type: 'Maritimo',
                shippingTime: '60 Dias',
                name: productNameMaritime.value,
                width: parseFloat(productWidthMaritime.value),
                height: parseFloat(productHeightMaritime.value),
                long: parseFloat(productLongMaritime.value),
                quantity: parseInt(productQuantityMaritime.value),
                price: parseFloat(productPriceMaritime.value),
                quotation: quote(),
                uPrice: quote() / parseInt(productQuantityMaritime.value)
            }
            articulos.push(articulo);
            reset();
        }
    }
    renderFunction();





}

// --------------------------- end handleSubmit FUNCTION ---------------------------



// --------------------------- start renderFunction ---------------------------

const renderFunction = () => {
    if (articulos != null) {
        localStorage.setItem('art', JSON.stringify(articulos));
        table.innerHTML = '';
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
                <td class="text-right">${'USD '+art.price.toFixed(2)}</td>
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
                <td class="text-right">${'USD '+art.uPrice.toFixed(2)}</td>
            </tr>
            <tr>
                <th>${'Precio Total Final:'}</th>
                <th class="text-right">${'USD '+art.quotation.toFixed(2)}</th>

            </tr>
            </tbody>
            `
        })
    }
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

    productNameAerial.classList.remove('is-valid');
    productWeightAerial.classList.remove('is-valid');
    productQuantityAerial.classList.remove('is-valid');
    productPriceAerial.classList.remove('is-valid');

    productNameMaritime.classList.remove('is-valid');
    productHeightMaritime.classList.remove('is-valid');
    productWidthMaritime.classList.remove('is-valid');
    productLongMaritime.classList.remove('is-valid');
    productQuantityMaritime.classList.remove('is-valid');
    productPriceMaritime.classList.remove('is-valid');

    productNameAerial.classList.remove('is-invalid');
    productWeightAerial.classList.remove('is-invalid');
    productQuantityAerial.classList.remove('is-invalid');
    productPriceAerial.classList.remove('is-invalid');

    productNameMaritime.classList.remove('is-invalid');
    productHeightMaritime.classList.remove('is-invalid');
    productWidthMaritime.classList.remove('is-invalid');
    productLongMaritime.classList.remove('is-invalid');
    productQuantityMaritime.classList.remove('is-invalid');
    productPriceMaritime.classList.remove('is-invalid');
}

const remove = (index) => {
    articulos.splice(index, 1);
    renderFunction();
}

const callStorage = () => {
    articulos = JSON.parse(localStorage.getItem('art'));
    renderFunction();
}

// --------------------------- end other FUNCTIONS ---------------------------



// --------------------------- start EVENTS ---------------------------

$(document).ready(callStorage);
productAddBtn.addEventListener('click', handleSubmit);
ship.addEventListener('change', shippingType);


//------------------------ end EVENTS ---------------------------