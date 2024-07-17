import Titulo from "@/components/Titulo";
import produtos from "@/mocks/produtos.json";
import { useContext } from "react";
import Produto from "./Produto";
import { CarrinhoContext } from "@/context/CarrinhoContext";

const Produtos = () => {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  function adicionarProduto(produto) {
    const temOProduto = carrinho.some((p) => p.id === produto.id);

    if (!temOProduto) {
      produto.quantidade = 1;
      setCarrinho((carrinhoAnterior) => [...carrinhoAnterior, produto]);
    }
  }
  setCarrinho((carrinhoAnterior) =>
    carrinhoAnterior.map((p) => {
      if (p.id === produto.id) {
        p.quantidade += 1;
      }
      return p;
    })
  );

  return (
    <section role="produtos" aria-label="Produtos que estão bombando!">
      <Titulo>Produtos que estão bombando!</Titulo>
      <div className="container row mx-auto">
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            {...produto}
            adicionarProduto={adicionarProduto}
          />
        ))}
      </div>
    </section>
  );
};

export default Produtos;
