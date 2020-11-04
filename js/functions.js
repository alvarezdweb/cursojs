



// --------------------------- start shipping type FUNCTION ---------------------------


const shippingType = () => {
    reset();

    if (ship.val() == 'aerial') {
        productAddBtn.slideUp(300);
        maritimeForm.slideUp(300,
            function () {
                aerialForm.slideDown(300)
            });
        productAddBtn.slideDown(300);
    }

    if (ship.val() == 'maritime') {
        productAddBtn.slideUp(300);
        aerialForm.slideUp(300,
            function () {
                maritimeForm.slideDown(300);
            });
        productAddBtn.slideDown(300);
    }

    if (ship.val() != 'maritime' && ship.val() != 'aerial') {

        maritimeForm.slideUp(300);
        aerialForm.slideUp(300);
        productAddBtn.slideUp(300);

    }
}

// --------------------------- end shipping type FUNCTION ---------------------------



// --------------------------- start handleSubmit FUNCTION ---------------------------

const handleSubmit = (e) => {
    e.preventDefault();


    let validateAerial = $('.validateAerial');
    let validateMaritime = $('.validateMaritime');




    if (ship.val() == 'aerial') {

        for (let i = 0; i < validateAerial.length; i++) {
            if (validateAerial[i].value == '' || validateAerial[i].value <= 0) {
                validateAerial[i].classList.add('is-invalid');
            } else {
                validateAerial[i].classList.remove('is-invalid');
                validateAerial[i].classList.add('is-valid');
            }
        }

        if ($('.is-invalid').length == 0) {
            let articulo = {
                type: 'Aereo',
                shippingTime: '15 Dias',
                name: productNameAerial.val(),
                weight: parseFloat(productWeightAerial.val()),
                quantity: parseInt(productQuantityAerial.val()),
                price: parseFloat(productPriceAerial.val()),
                quotation: quote(),
                uPrice: quote() / parseInt(productQuantityAerial.val())
            }
            articulos.push(articulo);
            reset()
        }
    }


    if (ship.val() == 'maritime') {

        for (let i = 0; i < validateMaritime.length; i++) {
            if (validateMaritime[i].value == '' || validateMaritime[i].value <= 0) {
                validateMaritime[i].classList.add('is-invalid');
            } else {
                validateMaritime[i].classList.remove('is-invalid');
                validateMaritime[i].classList.add('is-valid');
            }
        }

        if ($('.is-invalid').length == 0) {
            let articulo = {
                type: 'Maritimo',
                shippingTime: '60 Dias',
                name: productNameMaritime.val(),
                width: parseFloat(productWidthMaritime.val()),
                height: parseFloat(productHeightMaritime.val()),
                long: parseFloat(productLongMaritime.val()),
                quantity: parseInt(productQuantityMaritime.val()),
                price: parseFloat(productPriceMaritime.val()),
                quotation: quote(),
                uPrice: quote() / parseInt(productQuantityMaritime.val())
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


    localStorage.setItem('art', JSON.stringify(articulos));
    table.html('');
    articulos.forEach((art, index) => {
        return table.append(`
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
            `)
    })
}

// --------------------------- end renderFunction ---------------------------



// --------------------------- start other FUNCTIONS ---------------------------


const quote = () => {
    if (ship.val() == 'aerial') {
        let kg = parseFloat(productWeightAerial.val()) * 60;
        let tax = parseFloat(productPriceAerial.val() * 1.04);
        return kg + tax;
    }
    if (ship.val() == 'maritime') {
        let volume = parseFloat((productWidthMaritime.val() * productHeightMaritime.val() * productLongMaritime.val()) * 3200);
        let tax = parseFloat(productPriceMaritime.val() * 1.04);
        return volume + tax;
    }
}

const reset = () => {

    $('.reset').val('');
    $('.reset').removeClass('is-valid is-invalid')

}

const remove = (index) => {
    articulos.splice(index, 1);
    renderFunction();
}

const callStorage = () => {
    if (!localStorage.getItem('art') == '') {
        articulos = JSON.parse(localStorage.getItem('art'));
        renderFunction();
    } else {
        localStorage.setItem('art', '');
    }
}


const validate = (e) => {

    let input = $(`#${e.target.id}`);
    let validate = false;

    if (input.attr('type') == 'text') {
        if (input.val() == '') {
            input.removeClass('is-valid');
            input.addClass('is-invalid');
        } else {
            input.removeClass('is-invalid');
            input.addClass('is-valid');

        }

    }
    if (input.attr('type') == 'number') {
        if (input.val() <= 0) {
            input.removeClass('is-valid');
            input.addClass('is-invalid');
        } else {
            input.removeClass('is-invalid');
            input.addClass('is-valid');

        }
    }

    if (ship.val() == 'aerial' && $('.is-valid').length == 4) {
        validate = true;
    }


    if (ship.val() == 'maritime' && $('.is-valid').length == 6) {
        validate = true;
    }

    console.log(validate);
    return validate;
}


// --------------------------- end other FUNCTIONS ---------------------------



