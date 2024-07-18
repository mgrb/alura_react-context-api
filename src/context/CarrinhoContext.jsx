import { carrinhoReducer } from "@/reducers/carrinhoReducer";
import { useEffect } from "react";
import { useMemo } from "react";
import { useReducer } from "react";
import { createContext, useState } from "react";

const carrinhoInitState = [];

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, dispatch] = useReducer(carrinhoReducer, carrinhoInitState);
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  const { totalTemp, qtdTemp } = useMemo(() => {
    return carrinho.reduce(
      (acumulador, produto) => ({
        qtdTemp: acumulador.qtdTemp + produto.quantidade,
        totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
      }),
      { totalTemp: 0, qtdTemp: 0 }
    );
  }, [carrinho]);

  useEffect(() => {
    setQuantidade(qtdTemp);
    setValorTotal(totalTemp);
  });

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        dispatch,
        quantidade,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
