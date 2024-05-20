<template>
  <main class="conteudo-principal">
    <!-- Componente que exibe a lista de ingredientes -->
    <SuaLista :ingredientes="ingredientes" />

    <!-- KeepAlive mantém o estado dos componentes SelecionarIngredientes e MostrarReceitas enquanto alternamos entre eles -->
    <KeepAlive include="SelecionarIngredientes">
        <SelecionarIngredientes
          v-if="conteudo === 'SelecionarIngredientes'"
          @adicionar-ingrediente="adicionarIngrediente"
          @remover-ingrediente="removerIngrediente"
          @alternar-pagina="alternarPagina('MostrarReceitas')"
        />
        <MostrarReceitas
          v-else-if="conteudo === 'MostrarReceitas'"
          :ingredientes="ingredientes"
          @alternar-pagina="alternarPagina('SelecionarIngredientes')"
        />
    </KeepAlive>
  </main>
</template>

<script lang="ts">
import SelecionarIngredientes from "./SelecionarIngredientes.vue";
import SuaLista from "./SuaLista.vue";
import MostrarReceitas from "./MostrarReceitas.vue";

type Pagina = "SelecionarIngredientes" | "MostrarReceitas";

export default {
  name: "ConteudoPrincipal",
  components: {
    SelecionarIngredientes,
    SuaLista,
    MostrarReceitas,
  },
  data() {
    return {
      ingredientes: [] as string[], // Lista de ingredientes inicialmente vazia
      conteudo: "SelecionarIngredientes" as Pagina, // 'SelecionarIngredientes' está definido como type Pagina
    };
  },
  methods: {
    // Adiciona um ingrediente à lista
    adicionarIngrediente(ingrediente: string) {
      this.ingredientes.push(ingrediente);
    },
    // Remove um ingrediente da lista
    removerIngrediente(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(
        (iLista) => ingrediente !== iLista
      );
    },
    // Alterna entre as páginas 'SelecionarIngredientes' e 'MostrarReceitas'
    alternarPagina(pagina: Pagina) {
      this.conteudo = pagina;
    },
  },
};
</script>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
