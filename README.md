# Carrinho de compras

Vitrine de produtos com carrinho, feita em React. Busca produtos numa API
pública, adiciona ao carrinho, remove e soma o total.

🔗 [carrinho-de-compras-delta.vercel.app](https://carrinho-de-compras-delta.vercel.app)

## Como funciona

| Parte | Papel |
| --- | --- |
| `src/api/fetchProducts.js` | única porta de saída para a API |
| `src/context/Provider.jsx` | estado compartilhado: produtos, carrinho, carregando, erro |
| `src/components/Products` | a vitrine |
| `src/components/SearchBar` | busca por texto |
| `src/components/Cart` | o carrinho e o total |

O estado vive num Context, não em props passadas de pai para filho: a busca
escreve a lista que a vitrine lê, e o botão do card escreve no carrinho que o
painel lateral lê, sem que nenhum deles precise conhecer o outro.

## Sobre a API

A primeira versão consultava `api.mercadolibre.com/sites/MLB/search`, que era
aberta. O Mercado Livre fechou esse endpoint, ele passou a responder **403**
para quem não está autenticado, e o site publicado ficou girando o carregando
para sempre — a promise rejeitava e nada tratava a falha.

Hoje o catálogo vem do [DummyJSON](https://dummyjson.com), que é público e
aceita busca por texto. E a falha passou a ter tratamento: se a API não
responder, a tela diz o motivo em vez de girar sem fim.

## Rodando localmente

```bash
npm install
npm start      # http://localhost:3000
npm run build  # build de produção
```

Não precisa de chave nem de arquivo `.env`.
