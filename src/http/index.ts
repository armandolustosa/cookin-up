import type ICategoria from "@/interfaces/ICategoria"; // Importa a interface ICategoria

// Função assíncrona para obter categorias de ingredientes
export async function obterCategorias() {
  // Faz uma requisição HTTP GET para obter os dados das categorias
  const resposta = await fetch(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json "
  );

  // Aguarda a resposta da requisição e converte os dados em formato JSON
  const categorias: ICategoria[] = await resposta.json();

  // Retorna a lista de categorias obtidas
  return categorias;
}

import type IReceita from "@/interfaces/IReceitas"; // Importa a interface IReceita

// Função assíncrona para obter receitas
export async function obterReceitas() {
  // Faz uma requisição HTTP GET para obter os dados das receitas
  const resposta = await fetch(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json "
  );

  // Aguarda a resposta da requisição e converte os dados em formato JSON
  const receitas: IReceita[] = await resposta.json();

  // Retorna a lista de receitas obtidas
  return receitas;
}
