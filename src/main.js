import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import components from '@/components/UI';
import directives from '@/directives';
import '@/assets/css/reset.css';

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).mount('#app');
