    const app = new Vue({
        el:'#app',
        data: {
            euros: 0,
            message:''
          },
        methods: {
            ShowModal(){
                $('#modalSlot').modal('show');
            },
            CloseModal(){
                $('#modalSlot').modal('hide');
              },
            Accept(){
                $('#modalSlot').modal('hide');
                this.message = 'Heu tancat el Modal'
            }  
        }
    })
