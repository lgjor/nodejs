"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product1 = {
    name: 'Pair of Socks',
    amountInStock: 100,
    unitValue: 5,
};
// Não permite alteração do nome
// product1.name = "Joselito"
// console.log(product1.name)
const productAllOptional = {
    unitValue: 20
};
const productAllRequired = {
    name: 'Jacket',
    amountInStock: 30,
    unitValue: 180,
    barCode: '10293-1293-1'
};
const productOmitStockAndBarCode = {
    name: 'Jeans',
    unitValue: 80
};
const productOnlyNameAndValue = {
    name: 'Jeans',
    unitValue: 80
};
