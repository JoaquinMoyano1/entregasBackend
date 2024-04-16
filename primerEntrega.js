class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        // Validar que no se repita el campo "code"
        const codeExists = this.products.some(product => product.code === code);
        if (codeExists) {
            console.error("Ya existe un producto con el mismo código.");
            return;
        }

        // Asignar un id autoincrementable al producto y agregarlo al arreglo
        const product = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado.");
            return null;
        }
    }
}

// Ejemplo de uso
const productManager = new ProductManager();

// Agregar productos
productManager.addProduct("Producto 1", "Descripción del Producto 1", 10, "ruta/imagenDeEjemplo1.jpg", "ABC123", 100);
productManager.addProduct("Producto 2", "Descripción del Producto 2", 20, "ruta/imagenDeEjemplo2.jpg", "DEF456", 50);

// Obtener productos
const products = productManager.getProducts();
console.log(products);

// Obtener producto por id
const product = productManager.getProductById(1);
console.log(product);
