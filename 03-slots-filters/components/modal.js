Vue.filter('toUSD', function (value) {
  return `$${value *  1.23} `;
});

Vue.component('modal-bootstrap', {
    template: //html
    `
    <div class="modal" id="modalSlot" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot> 
          <button type="button" class="btn-close" data-bs-dismiss="modal" @click="CloseModal"> x </button>
        </div>

        <div class="modal-body">
          <slot></slot>       
        </div>

        <div class="modal-footer">
        <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
  ` ,
  methods: {
    CloseModal(){
      $('#modalSlot').modal('hide');
    },
  }
  })
