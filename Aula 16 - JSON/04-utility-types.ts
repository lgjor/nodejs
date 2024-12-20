// import {Produto} from "../Aula 14 - Orientação a objetos 1/01 - oop";
import {Product} from "./produto";

const product1: Readonly<Product> = {
    name: 'Pair of Socks',
    amountInStock: 100,
    unitValue: 5, 
}

// Não permite alteração do nome
// product1.name = "Joselito"
// console.log(product1.name)

const productAllOptional: Partial<Product> = {
    unitValue: 20
}

const productAllRequired: Required<Product> = {
    name: 'Jacket',
    amountInStock: 30,
    unitValue: 180,
    barCode: '10293-1293-1'
}

const productOmitStockAndBarCode: Omit<Product, "amountInStock" | "barCode"> = {
    name: 'Jeans',
    unitValue: 80
}

const productOnlyNameAndValue: Pick<Product, "name" | "unitValue"> = {
    name: 'Jeans',
    unitValue: 80
}

