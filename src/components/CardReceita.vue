<template>
  <!-- Artigo representando uma receita -->
  <article class="receita">
    <!-- Cabeçalho da receita -->
    <header class="receita__cabecalho">
      <!-- Imagem da receita -->
      <img
        class="receita__imagem"
        :src="`/imagens/receitas/${receita.imagem}`"
        :alt="`Foto de ${receita.nome}`"
      />
    </header>

    <!-- Corpo da receita -->
    <section class="receita__corpo">
      <!-- Nome da receita -->
      <h2 class="paragrafo receita__nome">
        {{ receita.nome }}
      </h2>
    </section>
  </article>
</template>

<script lang="ts">
import type IReceitas from "../interfaces/IReceitas"; // Importa o tipo IReceitas
import type { PropType } from "vue"; // Importa PropType para definir tipos das props

export default {
  props: {
    // Define a prop 'receita' como um objeto do tipo IReceitas obrigatório
    receita: { type: Object as PropType<IReceitas>, required: true },
  },
};
</script>

<style scoped>
.receita {
  display: flex;
  width: 17.625rem;
  max-width: 19.5rem;
  flex-direction: column;
  align-items: center;

  border-radius: 1rem;
  background: var(--Branco, #fff);
  box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.receita__corpo {
  padding: 2rem 1rem;
}

.receita__imagem {
  width: 100%;
  border-radius: 1rem 1rem 0rem 0rem;
  display: block;
}

.receita__nome {
  font-weight: 700;
  color: var(--cinza, #444);
}
</style>
