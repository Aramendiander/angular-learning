interface Product {
    description: string;
    price: number;
}


const phone: Product = {
    description: "Nokia A1",
    price: 150
}

const tablet: Product = {
    description: "Ipad Air",
    price: 250
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

/* const taxCalculation = (options:  TaxCalculationOptions): [number, number] => { */
/* const taxCalculation = ({tax, products}:  TaxCalculationOptions): [number, number] => { */
const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
    const {tax, products} = options;
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [totalResult, taxResult] = taxCalculation({
    products: shoppingCart,
    tax,
})

console.log(totalResult, taxResult);








export { }