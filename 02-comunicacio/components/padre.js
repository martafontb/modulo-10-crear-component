Vue.component('padre', {
    template: //html
    `
    <div class="p-5 bg-warning">
    <h2>{{ mensajePadre }}</h2>
    <hijo v-for="item in items" :name="item" @aumentar="numeroSuma = $event" ></hijo>
    </div>
    `,
    data() {
        return{
            mensajePadre: 'Component Pare',
            items: ['item1', 'item2', 'item3'],
            numeroSuma: ''
        }
    }
});