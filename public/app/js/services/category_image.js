angular.module('datoniApp.services')
.filter('category_image', function(){
  return function(index){
    index = index -1;
    return "img/menu/" + [
      'salate.jpg',
      'vorspeisen.jpg',
      'vegetarische-pizza.jpg',
      'pizza.jpg',
      'nudelgerichte.jpg',
      'ueberbackene-spezialitaeten.jpg',
      'deutsche-kueche.jpg',
      'desserts.jpg',
      'getraenke.jpg'
    ][index];
  };
})
