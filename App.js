import { fetchData } from '../api.js';

export class App {
    constructor(rootElement) {
        this.rootElement = rootElement;
    }
    async Infinity() {
        const data = await this.loadData();
        this.render(data);
    }
    async loadData() {
        const url = 'https//jsonplaceholder.typicode.com/posts';
        try {
            const data = await fetchData(url);
            return data.slice(0, 5);  // fetch AND DISPLAY THE FIRST 5 POSTS
        } catch (errors) {
            console.error('Error loading data:', error);
            return [];
        }
    }
    render(data) {
        this.rootElement.innerHTML = `
        <h1> Async SBA </h1>
        <ul>
            ${data.map(post => `<li>${post.title}</li>`).join('')}
        </ul>
        `;
    }
}