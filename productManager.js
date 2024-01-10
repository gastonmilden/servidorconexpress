class ProductManager {
  id = 0;
  products = [];

  addProduct(title, price, stock) {
    this.products.push({ id: this.id, title, price, stock });
    this.id = this.id + 1;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find( prod => prod.id == id );
  }

}

let productManager = new ProductManager();

productManager.addProduct("Cuchillo", 1000, 5);
productManager.addProduct("Tenedor", 200, 27);
productManager.addProduct("Cuchara", 500, 14);
productManager.addProduct("Cucharita", 550, 8);
productManager.addProduct("Vaso", 600, 65);
productManager.addProduct("Taza", 800, 95);
productManager.addProduct("Mate", 600, 26);
productManager.addProduct("Termo", 300, 12);
productManager.addProduct("Plato", 20, 44);
productManager.addProduct("Botella", 452, 45);

module.exports = productManager;