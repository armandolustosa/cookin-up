import "./assets/main.css"; // Importa o arquivo CSS principal da aplicação

import { createApp } from "vue"; // Importa a função createApp do Vue
import App from "./App.vue"; // Importa o componente principal da aplicação

createApp(App).mount("#app"); // Cria e monta a aplicação Vue, associando-a à div com id 'app' no HTML
