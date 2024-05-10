<template>
  <section>
    <span class="subtitulo-lg sua-lista-texto"> Sua lista: </span>

    <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
      <li v-for="ingrediente in ingredientes" :key="ingrediente">
        <button @click="aoRemover">
          <Tag :texto="ingrediente" ativa class="item-na-lista"/>
        </button>
      </li>
    </ul>

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
import type { PropType } from "vue";
import Tag from "./Tag.vue";

export default {
  name: "SuaLista",
  props: {
    ingredientes: { type: Array as PropType<string[]>, required: true },
  },
  components: {
    Tag,
  },
  methods: {
    aoRemover() {
      this.$emit("removerIngrediente", this.ingredientes)
    }
  },
  emits: ["removerIngrediente"]
};
</script>

<style scoped>
.item-na-lista {
  cursor: pointer;
}

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
