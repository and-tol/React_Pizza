// Core
import { useState, useEffect } from 'react';
// Libraries
import axios from 'axios';

export const useHome = () => {
  const [pizzas, setPizzas] = useState([]);

  //* With Promoces
  // useEffect(() => {
  //   fetch('http://localhost:3000/db.json')
  //     .then(response => response.json())
  //     .then(results => {
  //       setPizzas(results.pizzas);
  //     });

  // }, []);
  //* With async/await
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/db.json');
  //       const { pizzas } = await response.json();

  //       setPizzas(pizzas);
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   })();
  // }, []);
  // * With axios
  useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => {
        setPizzas(data.pizzas);
    });
  }, []);

  return {
    pizzas,
  };
};
