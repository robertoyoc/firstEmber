import Ember from 'ember';

export default Ember.Route.extend({

  dession: Ember.inject.service(),
  beforeModel(transition){
    if(this.get('dession.isLoggedIn')){
      transition.abort();
      this.transitionTo('principal');
    }
    console.log(this.get('dession.isLoggedIn'));
  },
  model(){

  },
  afterModel(){

  },
  setupController(){

  }
});
