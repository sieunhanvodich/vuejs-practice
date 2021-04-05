import Vue, { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

import {
    ElButton,
    ElContainer,
    ElHeader,
    ElAside,
    ElCard,
    ElForm,
    ElFormItem,
    ElInput,
    ElRow,
    ElCol,
    ElMenu,
    ElTabs,
    ElTabPane,
} from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const components = [
    ElButton,
    ElContainer,
    ElHeader,
    ElAside,
    ElCard,
    ElForm,
    ElFormItem,
    ElInput,
    ElRow,
    ElCol,
    ElMenu,
    ElTabs,
    ElTabPane,
];

export default function createHttp(secured = true) {
    if (secured) {
        return axios.create({
            headers: { Authorization: `bearer ${store.state.token}` },
        });
    } else {
        axios.create();
    }
}

const app = createApp(App);

components.forEach((component) => {
    app.component(component.name, component);
});

app.use(store).use(router);

app.mount('#app');
