Vue.component('hijo', {
    template: //html
    `
    <div class="p-3 bg-success m-2"> 
     <h4>{{name}}</h4>
     <button @click="numero++">{{numero}}</button>
    </div>
    `,
    data(){
       return{
            numero:0
       } 
    },
    mounted(){
        this.$emit('aumentar', this.numero)
    },
    props: ['name']
});
