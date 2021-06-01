Vue.component('padre', {
    template: //html
    `
    <div class="p-5 bg-warning">
    <h2>{{ mensajePadre }}</h2>
    <hijo :mensaje="mensajeFill"></hijo>
    </div>
    `,
    data() {
        return{
            mensajePadre: 'Soc el Pare',
            mensajeFill: 'Soc el Fill'
        }
    }
});