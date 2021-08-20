// Extra Memory Cost 
function update(isInteger) {
    caseInput = document.getElementById('case-number');
    caseText = caseInput.innerText;
    caseInput.innerText = parseInt(caseText);
    if (isInteger) {
        caseInput.innerText = 0;
    }
    else {
        caseInput.innerText = 180;
    }
}

// Extra Memory Cost 
document.getElementById('case-input').addEventListener('click', function () {
    update(true);
});
document.getElementById('case-button').addEventListener('click', function () {
    update(false);
});




// Extra Storage Cost 
document.getElementById('second-case').addEventListener('click', function () {
    storageInput = document.getElementById('second-number');
    storageNumber = storageInput.innerText;
    storageInput.innerText = parseInt(storageNumber);
    storageInput.innerText = 0;
});
document.getElementById('third-case').addEventListener('click', function () {
    storageInput = document.getElementById('second-number');
    storageNumber = storageInput.innerText;
    storageInput.innerText = parseInt(storageNumber);
    storageInput.innerText = 100;
});
document.getElementById('fourth-case').addEventListener('click', function () {
    storageInput = document.getElementById('second-number');
    storageNumber = storageInput.innerText;
    storageInput.innerText = parseInt(storageNumber);
    storageInput.innerText = 180;
});




// Delivery Charge 
document.getElementById('delivery-input').addEventListener('click', function () {
    deliveryInput = document.getElementById('third-number');
    deliveryNumber = deliveryInput.innerText;
    deliveryInput.innerText = parseInt(deliveryNumber);
    deliveryInput.innerText = 0;
})
document.getElementById('delivery-case').addEventListener('click', function () {
    deliveryInput = document.getElementById('third-number');
    deliveryNumber = deliveryInput.innerText;
    deliveryInput.innerText = parseInt(deliveryNumber);
    deliveryInput.innerText = 20;
});
