import Route from '@ember/routing/route';
import { capitalize as capitalizeWords } from '../../../helpers/capitalize';

export default Route.extend({
  model: function() {
    return this.modelFor('bands.band');
  },
  resetController: function(controller) {
    controller.set('songCreationStarted', false);
  },
  actions: {
    didTransition: function() {
      var band = this.modelFor('bands.band');
      var name = capitalizeWords(band.get('name'));
      document.title = `${name} songs - Rock & Roll`;
    },
    createSong: function() {
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');
      var song = this.store.createRecord('song', {
        title: controller.get('title'),
        band: band
      });
      song.save().then(function() {
        controller.set('title', '');
      });
    }
  }
});
