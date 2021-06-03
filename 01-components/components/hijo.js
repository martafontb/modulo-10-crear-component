Vue.component('hijo', {
    template: //html
    `
    <div class="p-3 bg-success m-2"> 
     <h4>{{mensaje}}</h4>
    </div>
    `,
    props: ['mensaje']
});
