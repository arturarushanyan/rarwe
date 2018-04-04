import Route from '@ember/routing/route';

export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('bands');
  }
});
