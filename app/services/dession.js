import Ember from 'ember';

export default Ember.Service.extend({

  isLoggedIn: false,
  entrar: function(correo, pass){
    if(correo=="beto@talentics.com" && pass=='123'){
      this.set('isLoggedIn', true);
    }
    console.log(this.get('isLoggedIn'));
    return this.get('isLoggedIn');
  }

});
