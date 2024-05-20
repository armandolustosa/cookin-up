<template>
  <!-- Botão representando um ingrediente selecionável -->
  <button class="ingrediente" @click="aoClicar" :aria-pressed="selecionado">
    <!-- Componente Tag para exibir o nome do ingrediente -->
    <Tag :texto="ingrediente" :ativa="selecionado" />
  </button>
</template>

<script lang="ts">
import Tag from "./Tag.vue"; // Importa o componente Tag

export default {
  name: "IngredienteSelecionavel",
  components: {
    Tag,
  },
  props: {
    // Define a prop 'ingrediente' como uma string obrigatória
    ingrediente: { type: String, required: true },
  },
  data() {
    return {
      selecionado: false, // Inicializa o estado do ingrediente como não selecionado
    };
  },
  methods: {
    // Método chamado quando o botão é clicado para alternar o estado do ingrediente
    aoClicar() {
      this.selecionado = !this.selecionado; // Alterna o estado do ingrediente

      // Emite o evento 'adicionarIngrediente' ou 'removerIngrediente' com base no estado atual do ingrediente
      if (this.selecionado) {
        this.$emit("adicionarIngrediente", this.ingrediente);
      } else {
        this.$emit("removerIngrediente", this.ingrediente);
      }
    },
  },
  // Declara os eventos emitidos pelo componente
  emits: ["adicionarIngrediente", "removerIngrediente"],
};
</script>

<style scoped>
.ingrediente {
  cursor: pointer;
}
</style>
>
