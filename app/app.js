function greeting(key) {
  document.getElementById('greeting').innerHTML = i18n.t(key);
}

i18n.init({
  load: 'current',
  lngWhitelist: ['en', 'es'],
  fallbackLng: 'en',
  debug: true
}, function(){
  greeting('greeting');
});
