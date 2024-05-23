import {App} from './components/App.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('app');
    const app = new App(rootElement);
    app.init();
});