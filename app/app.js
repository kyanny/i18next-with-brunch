function greeting(key) {
  document.getElementById('greeting').innerHTML = i18n.t(key);
}

i18n.init({
  load: 'current',
  lngWhitelist: ['en', 'es'],
  fallbackLng: 'en',
  ns: {
    namespaces: ['translation', 'qs', 'sa'],
    defaultNS: 'sa'
  },
  fallbackToDefaultNS: true,
  fallbackNS: 'translation',
  resGetPath: '/locales/__lng__/__ns__.json',
  debug: true
}, function(){
  i18n.setDefaultNamespace('sa');
  greeting('greeting');
});
