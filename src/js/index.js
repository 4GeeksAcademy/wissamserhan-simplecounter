

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


import "../styles/index.css";


function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="reloj">
        <i className="far fa-clock"></i>
      </div>
      <div className="cuatro">{props.digitoCuatro}</div>
      <div className="tres">{props.digitoTres}</div>
      <div className="dos">{props.digitoDos}</div>
      <div className="uno">{props.digitoUno}</div>
    </div>
  );
}


SimpleCounter.propTypes = {
  digitoCuatro: PropTypes.number,
  digitoTres: PropTypes.number,
  digitoDos: PropTypes.number,
  digitoUno: PropTypes.number,
};


function startCounter() {
  let counter = 0;
  setInterval(() => {
    const cuatro = Math.floor(counter / 1000) % 10;
    const tres = Math.floor(counter / 100) % 10;
    const dos = Math.floor(counter / 10) % 10;
    const uno = Math.floor(counter / 1) % 10;

    ReactDOM.render(
      <SimpleCounter
        digitoUno={uno}
        digitoDos={dos}
        digitoTres={tres}
        digitoCuatro={cuatro}
      />,
      document.querySelector("#app")
    );

    counter++;
  }, 1000);
}


startCounter();
