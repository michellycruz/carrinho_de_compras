// A primeira versao buscava em api.mercadolibre.com/sites/MLB/search, que era
// aberta. O Mercado Livre fechou esse endpoint e ele passou a responder 403
// para quem nao esta autenticado -- foi o que derrubou a listagem.
//
// O catalogo agora vem do DummyJSON, que e publico, aceita busca por texto e
// devolve o que a tela usa: id, titulo, preco e imagem.
const BASE_URL = 'https://dummyjson.com/products/search';

const fetchProducts = async (query) => {
  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&limit=24`;

  let response;

  try {
    response = await fetch(url);
  } catch {
    // Sem rede ou com a API fora do ar o fetch rejeita com uma mensagem do
    // navegador, em ingles. Quem le a tela nao tem nada a ver com isso.
    throw new Error('Não foi possível falar com a API de produtos.');
  }

  // Sem esta checagem, um erro da API virava `data.results === undefined` e a
  // tela ficava girando para sempre em vez de dizer o que aconteceu.
  if (!response.ok) {
    throw new Error(`A busca de produtos falhou (HTTP ${response.status}).`);
  }

  const data = await response.json();

  return data.products.map(({ id, title, price, thumbnail }) => ({
    id,
    title,
    price,
    thumbnail,
  }));
};

export default fetchProducts;