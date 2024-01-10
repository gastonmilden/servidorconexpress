const productManager = require("./productManager");

const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/products/", (req, res) => {
  const limit =
    parseInt(req.query.limit, 10) || productManager.getProducts().length;

  const productos = productManager.getProducts().slice(0, limit);

  res.send(productos);
});

app.get("/products/:id", (req, res) => {
  let id = req.params.id;

  let producto = productManager.getProductById(id);
  if (!producto) {
    res.status(404).send({ error: "Este producto no existe" });
    return;
  }
  res.send(producto);
});

app.listen(8080, () => {
  console.log("Aplicación funcionando en el puerto 8080");
});
