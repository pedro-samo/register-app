import React from "react";
import { Link } from "react-router-dom";

import "../Styles/Product.scss";

const Clients = () => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(0);

  const [currentClientsRegister, setCurrentClientsRegister] = React.useState(
    JSON.parse(localStorage.getItem("clientsRegister"))
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const productArray = {
      name,
      age,
    };

    if (currentClientsRegister) {
      const newProductArray = [...currentClientsRegister, productArray];
      localStorage.setItem("clientsRegister", JSON.stringify(newProductArray));
      setCurrentClientsRegister(newProductArray);
      return;
    }

    localStorage.setItem("clientsRegister", JSON.stringify([productArray]));
    setCurrentClientsRegister([productArray]);
  };

  const removeProduct = (clientName) => {
    const clientToDelete = currentClientsRegister
      .map((client) => client.name)
      .indexOf(clientName);
    currentClientsRegister.splice(clientToDelete, 1);
    localStorage.setItem(
      "clientsRegister",
      JSON.stringify(currentClientsRegister)
    );
    setCurrentClientsRegister(
      JSON.parse(localStorage.getItem("clientsRegister"))
    );
  };

  return (
    <section className="sessions">
      <div className="product">
        <form className="product_form" onSubmit={handleSubmit}>
          <input
            onBlur={(event) => setName(event.target.value)}
            type="text"
            placeholder="Nome do Cliente"
            required
          />

          <input
            onBlur={(event) => setAge(event.target.value)}
            type="number"
            placeholder="Idade"
            required
          />
          <button type="submit">Cadastrar</button>
        </form>

        <div className="product_list">
          <p className="product_list-title">Clientes Cadastrados: </p>
          {currentClientsRegister &&
            currentClientsRegister.map((client) => (
              <div key={client.name} className="product_list-itens">
                <p>{client.name}</p>
                <button onClick={() => removeProduct(client.name)}>
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

export default Clients;
