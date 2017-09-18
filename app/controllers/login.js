import Ember from 'ember';

export default Ember.Controller.extend({

  dession: Ember.inject.service(),
  actions: {
    logguear: function () {
      var correo = this.get('correo');
      var pass = this.get('pass');
      if(this.get('dession').entrar(correo, pass)){
        return this.transitionToRoute('principal');
      }
      else{
        console.log("hubo un error");
      }
    }
  }


});
