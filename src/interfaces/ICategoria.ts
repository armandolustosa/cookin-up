// Interface representando uma categoria de ingredientes
export default interface ICategoria {
  nome: string; // Nome da categoria
  ingredientes: string[]; // Lista de ingredientes pertencentes à categoria
  imagem: string; // Caminho para a imagem representativa da categoria
}
