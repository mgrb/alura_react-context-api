export const ADD_PRODUTO = "ADD_PRODUTO";
export const REMOVE_PRODUTO = "REMOVE_PRODUTO";
export const UPDATE_QUANTIDADE = "UPDATE_QUANTIDADE";

export const carrinhoReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUTO:
      const novoProduto = action.payload;
      const produto = state.find((p) => p.id === novoProduto.id);
      if (produto === -1) {
        novoProduto.quantidade = 1;
        return [...state, novoProduto];
      } else {
        return state.map((intem, index) =>
          index === produto
            ? { ...intem, quantidade: intem.quantidade + 1 }
            : intem
        );
      }

    case REMOVE_PRODUTO:
      return state.filter((produto) => produto.id !== action.payload);

    case UPDATE_QUANTIDADE:
      return state.map((item) =>
        item.id === action.payload.produtoId
          ? { ...item, quantidade: action.payload.quantidade }
          : item
      );

    default:
      return state;
  }
};
