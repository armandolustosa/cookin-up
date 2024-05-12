<template>
  <footer class="rodape paragrafo">
    Desenvolvido por Armando no curso de Vue da Alura | 2024 - Projeto fictício
    sem fins comerciais.
  </footer>
</template>

<script lang="ts">
export default {
  name: "Rodape",
};
</script>

<style scoped>
.rodape {
  background: var(--verde-escuro, #263a29);
  color: var(--creme, #fffaf3);
  padding: 1.5rem 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1300px) {
  .rodape {
    padding: 1.5rem 3.75rem;
  }
}

@media only screen and (max-width: 767px) {
  .rodape {
    padding: 1.5rem;
  }
}
</style>
