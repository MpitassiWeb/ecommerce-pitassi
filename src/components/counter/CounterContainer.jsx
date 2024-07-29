import { useState } from "react";
import { Counter } from "./Counter";

export const CounterContainer = ({ onAdd, stock, initialQuantity = 1}) => {
  const [contador, setContador] = useState(initialQuantity);

  const sumar = () => {
    if(contador < stock){
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  return (
    <Counter
      contador={contador}
      stock={stock}
      sumar={sumar}
      restar={restar}
      onAdd={() => onAdd(contador)}
    />
  );
};
