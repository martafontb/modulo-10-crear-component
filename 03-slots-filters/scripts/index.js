    const app = new Vue({
        el:'#app',
        data: {
            euros: 0,
            message:'',
            isValid: true,
            regex: /^$|^[0-9]/
          },
        methods: {
            ShowModal(){
                $('#modalSlot').modal('show');
                this.euros = "";
            },
            CloseModal(){
                $('#modalSlot').modal('hide');
              },
            Accept(){
                $('#modalSlot').modal('hide');
                this.message = 'Heu tancat el Modal';
            },
            Change: function(e){
                const number = e.target.value
                this.isNumberValid(number);
              },
            isNumberValid: function(inputNumber) {
                this.isValid = this.regex.test(inputNumber)
              } 
        }
    })
