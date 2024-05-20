<template>
  <!-- Renderiza um span com a classe "tag" e uma classe condicional "ativa" se a prop ativa for verdadeira -->
  <span class="tag" :class="{ ativa }">
    <!-- Exibe o texto passado através da prop "texto" -->
    {{ texto }}
  </span>
</template>

<script lang="ts">
export default {
  props: {
    // A prop 'texto' é uma string obrigatória
    texto: { type: String, required: true },
    // A prop 'ativa' é um booleano
    ativa: Boolean,
  },
};
</script>

<style scoped>
.tag {
  display: inline-block;

  border-radius: 0.5rem;

  min-width: 4.25rem;

  padding: 0.5rem;

  text-align: center;

  transition: 0.2s;

  color: var(--cinza);

  background: var(--cinza-claro);

  font-weight: 400;
}

.tag.ativa {
  color: var(--creme, #fffaf3);

  background: var(--coral, #f0633c);

  font-weight: 700;
}
</style>
