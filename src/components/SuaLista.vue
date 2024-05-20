<template>
  <section>
    <!-- Texto do subtítulo -->
    <span class="subtitulo-lg sua-lista-texto"> Sua lista: </span>

    <!-- Verifica se há ingredientes na lista -->
    <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
      <!-- Itera (percorrer por cada item ) sobre os ingredientes, renderizando um componente Tag para cada um -->
      <li v-for="ingrediente in ingredientes" :key="ingrediente">
        <Tag :texto="ingrediente" ativa />
      </li>
    </ul>

    <!-- Exibe mensagem e ícone se a lista de ingredientes estiver vazia -->
    <p v-else class="paragrafo lista-vazia">
      <img
        src="../assets/imagens/icones/lista-vazia.svg"
        alt="Ícone de pesquisa"
      />
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </section>
</template>

<script lang="ts">
import type { PropType } from "vue"; // Importa PropType para definição de tipos das props
import Tag from "./Tag.vue"; // Importa o componente Tag

export default {
  name: "SuaLista",
  props: {
    // Define a prop 'ingredientes' como um array de strings obrigatório
    ingredientes: { type: Array as PropType<string[]>, required: true },
  },
  components: {
    Tag, 
  },
};
</script>

<style scoped>
.sua-lista-texto {
  color: var(--coral, #f0633c);

  display: block;

  text-align: center;

  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;

  justify-content: center;

  gap: 1rem 1.5rem;

  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;

  justify-content: center;

  align-items: center;

  flex-wrap: wrap;

  gap: 0.25rem;

  color: var(--coral, #f0633c);

  text-align: center;
}
</style>
