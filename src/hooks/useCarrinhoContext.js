import { CarrinhoContext } from "@/context/CarrinhoContext";
import { useContext } from "react";

export const useCarrinhoContext = () => {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  function mudarQuantidade(id, quantidade) {
    carrinho.map((itemDoCarrinho) => {
      if (itemDoCarrinho.id === id) {
        itemDoCarrinho.quantidade += quantidade;
      }
      return itemDoCarrinho;
    });
    return carrinho;
  }

  function adicionarProduto(novoProduto) {
    const temOProduto = carrinho.some(
      (itemDoCarrinho) => itemDoCarrinho.id === novoProduto.id
    );

    if (!temOProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho((carrinhoAnterior) => [
        ...carrinhoAnterior,
        novoProduto,
      ]);
    }

    const carrinhoAtualizado = mudarQuantidade(novoProduto.id, 1);

    setCarrinho([...carrinhoAtualizado]);
  }

  function removerProduto(id) {
    const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
    const ehOUltimo = produto.quantidade === 1;
    if (ehOUltimo) {
      return setCarrinho((carrinhoAnterior) =>
        carrinhoAnterior.filter((itemDoCarrinho) => itemDoCarrinho.id !== id)
      );
    }
    const carrinhoAtualizado = mudarQuantidade(id, -1);

    setCarrinho([...carrinhoAtualizado]);
  }

  return { carrinho, setCarrinho, adicionarProduto, removerProduto };
};