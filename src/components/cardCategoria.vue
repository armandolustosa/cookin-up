<template>
  <!-- Artigo representando uma categoria de ingredientes -->
  <article class="categoria">
    <!-- Cabeçalho da categoria -->
    <header class="categoria__cabecalho">
      <!-- Imagem da categoria -->
      <img
        :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`"
        :alt="`Ícone de ${categoria.imagem}`"
        class="categoria__imagem"
      />

      <!-- Nome da categoria -->
      <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
    </header>

    <!-- Lista de ingredientes da categoria -->
    <ul class="categoria__ingredientes">
      <!-- Para cada ingrediente na categoria, renderiza um componente IngredienteSelecionavel -->
      <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
        <IngredienteSelecionavel
          :ingrediente="ingrediente"
          @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
          @remover-ingrediente="$emit('removerIngrediente', $event)"
        />
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import type { PropType } from "vue"; // Importa PropType para definir tipos das props
import type ICategoria from "../interfaces/ICategoria"; // Importa o tipo ICategoria
import Tag from "./Tag.vue"; // Importa o componente Tag
import IngredienteSelecionavel from "./IngredienteSelecionavel.vue"; // Importa o componente IngredienteSelecionavel

export default {
  name: "CardCategoria",
  components: {
    Tag,
    IngredienteSelecionavel,
  },
  props: {
    // Define a prop 'categoria' como um objeto do tipo ICategoria obrigatório
    categoria: { type: Object as PropType<ICategoria>, required: true },
  },
  // Declara os eventos emitidos pelo componente
  emits: ["adicionarIngrediente", "removerIngrediente"],
};
</script>

<style scoped>
.categoria {
  width: 19.5rem;

  padding: 1rem;

  border-radius: 1rem;

  background: var(--branco, #fff);

  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);

  height: 100%;

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 2rem;
}

.categoria__cabecalho {
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 0.5rem;
}

.categoria__imagem {
  width: 3.5rem;
}

.categoria__nome {
  text-align: center;

  color: var(--verde-medio, #3d6d4a);

  font-weight: 700;
}

.categoria__ingredientes {
  display: flex;

  justify-content: center;

  gap: 0.5rem;

  flex-wrap: wrap;
}
</style>
