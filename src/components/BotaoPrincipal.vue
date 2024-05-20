<template>
  <!-- Renderiza um botão com as classes "paragrafo-lg" e "botao-principal" -->
  <button class="paragrafo-lg botao-principal">
    <!-- Exibe o texto passado através da prop "texto" -->
    {{ texto }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    // A prop 'texto' é uma string obrigatória
    texto: { type: String, required: true },
  },
};
</script>

<style scoped>
.botao-principal {
  width: 19.5rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 700;
  color: var(--creme, #fffaf3);
  background: var(--coral, #f0633c);
  box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.botao-principal:hover {
  background: var(--ocre-hover, #d1451e);
}
</style>
