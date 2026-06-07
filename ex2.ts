interface IProduct {
    id: number
    isAvailable: boolean,
    price: number,
    name: string
}

function sortAvailableProducts(products: IProduct[]) {

    let availableProducts = products.filter(product => product.isAvailable);

    availableProducts.sort((a, b) => a.price - b.price)

    return availableProducts;

}

const products: IProduct[] = [

    { id: 1, name: 'Laptop', price: 1000, isAvailable: true },

    { id: 1, name: 'Keyboard', price: 100, isAvailable: false },

    { id: 1, name: 'Mouse', price: 50, isAvailable: true },
]