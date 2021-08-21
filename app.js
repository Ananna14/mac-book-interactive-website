// Extra Memory Cost 
function update(isInteger) {
    const memoryInput = document.getElementById('case-number');
    let memoryNumber = memoryInput.innerText;
    memoryInput.innerText = parseInt(memoryNumber);
    if (isInteger) {
        memoryNumber = 0;
    }
    else {
        memoryNumber = 180;
    }
    memoryInput.innerText = memoryNumber;
    // update-total 
    const totalInput = document.getElementById('total-price');
    totalInput.innerText = memoryNumber + 1299;
    // total 
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = memoryNumber + 1299;
}
document.getElementById('case-input').addEventListener('click', function () {
    update(true);

});
document.getElementById('case-button').addEventListener('click', function () {
    update(false);

});





// Extra Storage Cost 

// document.getElementById('second-case').addEventListener('click', function () {
//     const storageInput = document.getElementById('second-number');
//     let storageNumber = storageInput.innerText;
//     storageInput.innerText = parseInt(storageNumber);
//     storageNumber = 0;
// });
// document.getElementById('third-case').addEventListener('click', function () {
//     const storageInput = document.getElementById('second-number');
//     let storageNumber = storageInput.innerText;
//     storageInput.innerText = parseInt(storageNumber);
//     storageNumber = 100;
// });
// document.getElementById('fourth-case').addEventListener('click', function () {
//     const storageInput = document.getElementById('second-number');
//     let storageNumber = storageInput.innerText;
//     storageInput.innerText = parseInt(storageNumber);
//     storageNumber = 180;
// });
// // update-total 
// const totalInput = document.getElementById('total-price');
// totalInput.innerText = storageNumber + 1299;
// // total 
// const subTotal = document.getElementById('sub-total');
// subTotal.innerText = storageNumber + 1299;




// Delivery Charge 

function delivery(cost) {
    const deliveryInput = document.getElementById('third-number');
    let deliveryNumber = deliveryInput.innerText;
    deliveryInput.innerText = parseInt(deliveryNumber);
    if (cost) {
        deliveryNumber = 0;
    }
    else {
        deliveryNumber = 20;
    }
    deliveryInput.innerText = deliveryNumber;
    // update-total
    const totalInput = document.getElementById('total-price');
    totalInput.innerText = deliveryNumber + 1299;
    // total 
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = deliveryNumber + 1299;
}

document.getElementById('delivery-input').addEventListener('click', function () {
    delivery(true);
})
document.getElementById('delivery-case').addEventListener('click', function () {
    delivery(false);
});


// input 






