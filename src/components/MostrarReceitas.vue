<template>
  <section class="mostrar-receitas">
    <h1 class="cabecalho titulo-receitas">Receitas</h1>

    <!-- Exibe o número de receitas encontradas -->
    <p class="paragrafo-lg resultados-encontrados">
      Resultados encontrados: {{ receitasEncontradas.length }}
    </p>

    <!-- Se houver receitas encontradas, exibe-as -->
    <div v-if="receitasEncontradas.length" class="receitas-wrapper">
      <p class="paragrafo-lg informacoes">
        Veja as opções de receitas que encontramos com os ingredientes que você
        tem por aí!
      </p>

      <!-- Lista de receitas -->
      <ul class="receitas">
        <!-- Para cada receita encontrada, renderiza um CardReceita -->
        <li v-for="receita of receitasEncontradas" :key="receita.nome">
          <CardReceita :receita="receita" />
        </li>
      </ul>
    </div>

    <!-- Se não houver receitas encontradas, exibe uma mensagem e uma imagem -->
    <div v-else class="receitas-nao-encontradas">
      <p class="paragrafo-lg receitas-nao-encontradas__info">
        Ops, não encontramos resultados para sua combinação. Vamos tentar de
        novo?
      </p>

      <img
        src="../assets/imagens/sem-receitas.png"
        alt="Desenho de um ovo quebrado. A gema tem um rosto com uma expressão triste."
      />
    </div>

    <!-- Botão para editar a lista de ingredientes -->
    <BotaoPrincipal texto="Editar lista" @click="$emit('alternarPagina')" />
  </section>
</template>

<script lang="ts">
import { itensDeLista1EstaoEmLista2 } from "../operacoes/listas"; // Importa a função para verificar se os itens de uma lista estão em outra
import type { PropType } from "vue"; // Importa PropType para definir tipos das props
import { obterReceitas } from "../http"; // Importa a função assíncrona para obter as receitas por requisição http
import type IReceitas from "../interfaces/IReceitas"; // Importa o tipo IReceitas
import BotaoPrincipal from "./BotaoPrincipal.vue"; // Importa o componente BotaoPrincipal
import CardReceita from "./CardReceita.vue"; // Importa o componente CardReceita

export default {
  props: {
    // Define a prop 'ingredientes' como um array de strings obrigatório
    ingredientes: { type: Array as PropType<string[]>, required: true },
  },
  data() {
    return {
      receitasEncontradas: [] as IReceitas[], // Inicializa a lista de receitas encontradas como um array vazio
    };
  },
  async created() {
    // Obtém todas as receitas disponíveis
    const receitas = await obterReceitas();

    // Filtra as receitas para encontrar aquelas que podem ser feitas com os ingredientes disponíveis
    this.receitasEncontradas = receitas.filter((receita) => {
      const possoFazerReceita = itensDeLista1EstaoEmLista2(
        receita.ingredientes,
        this.ingredientes
      );

      return possoFazerReceita;
    });
  },
  components: { BotaoPrincipal, CardReceita },
  emits: ["alternarPagina"], // Declara os eventos emitidos pelo componente
};
</script>

<style scoped>
.mostrar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.titulo-receitas {
  color: var(--verde-medio, #3d6d4a);
  margin-bottom: 1.5rem;
}

.resultados-encontrados {
  color: var(--verde-medio, #3d6d4a);
  margin-bottom: 0.5rem;
}

.receitas-wrapper {
  margin-bottom: 3.5rem;
}

.informacoes {
  margin-bottom: 2rem;
}

.receitas {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.receitas-nao-encontradas {
  margin-bottom: 2rem;
}

.receitas-nao-encontradas__info {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
  .receitas-wrapper {
    margin-bottom: 2rem;
  }
}
</style>
