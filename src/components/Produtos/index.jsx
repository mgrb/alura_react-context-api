import Titulo from "@/components/Titulo";
import produtos from "@/mocks/produtos.json";
import Produto from "./Produto";
import { useCarrinhoContext } from "@/hooks/useCarrinhoContext";

const Produtos = () => {
  const { adicionarProduto } = useCarrinhoContext();
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
