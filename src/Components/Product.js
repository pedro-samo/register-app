import React from "react";
import { Link } from "react-router-dom";

import "../Styles/Product.scss";

const Product = () => {
  const [product, setProduct] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

  const [currentProductRegister, setCurrentProductRegister] = React.useState(
    JSON.parse(localStorage.getItem("productsRegister"))
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const productArray = {
      name: product,
      type: category,
      price,
      quantity,
    };

    if (currentProductRegister) {
      const newProductArray = [...currentProductRegister, productArray];
      localStorage.setItem("productsRegister", JSON.stringify(newProductArray));
      setCurrentProductRegister(newProductArray);
      return;
    }

    localStorage.setItem("productsRegister", JSON.stringify([productArray]));
    setCurrentProductRegister([productArray]);
  };

  const removeProduct = (productName) => {
    const productToDelete = currentProductRegister
      .map((product) => product.name)
      .indexOf(productName);
    currentProductRegister.splice(productToDelete, 1);
    localStorage.setItem(
      "productsRegister",
      JSON.stringify(currentProductRegister)
    );
    setCurrentProductRegister(
      JSON.parse(localStorage.getItem("productsRegister"))
    );
  };

  return (
    <section className="sessions">
      <div className="product">
        <form className="product_form" onSubmit={handleSubmit}>
          <input
            onBlur={(event) => setProduct(event.target.value)}
            type="text"
            placeholder="Nome do Produto"
            required
          />
          <select
            placeholder="Selecione a categoria"
            onBlur={(event) => setCategory(event.target.value)}
            required
          >
            <option value="">Selecione a categoria</option>
            <option value="cervejas">Cervejas</option>
            <option value="gin">Gin</option>
            <option value="vodka">Vodka</option>
            <option value="whisky">Whisky</option>
          </select>
          <input
            onBlur={(event) => setPrice(event.target.value)}
            type="text"
            placeholder="Preço"
            required
          />
          <input
            onBlur={(event) => setQuantity(event.target.value)}
            type="number"
            placeholder="Quantidade"
            required
          />
          <button type="submit">Cadastrar</button>
        </form>

        <div className="product_list">
          <p className="product_list-title">Produtos Cadastrados: </p>
          {currentProductRegister &&
            currentProductRegister.map((product) => (
              <div key={product.name} className="product_list-itens">
                <p>{product.name}</p>
                <button onClick={() => removeProduct(product.name)}>
                  Excluir
                </button>
              </div>
            ))}
        </div>
      </div>
        <Link className="back" to="/">
          Voltar
        </Link>
    </section>
  );
};

export default Product;
