import Route from '@ember/routing/route';
import Object from '@ember/object';

var Song = Object.extend({
  title: '',
  band: '',
  rating: ''
});

export default Route.extend({
  model: function() {
    var blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });
    var yellowLedbetter = Song.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });
    var pretender = Song.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });
    return [blackDog, yellowLedbetter, pretender];
  }
});
