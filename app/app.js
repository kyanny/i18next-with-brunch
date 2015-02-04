function greeting(key) {
  document.getElementById('greeting').innerHTML = i18n.t(key);
}

i18n.init({
  fallbackLng: 'en',
  ns: {
    namespaces: ['translation', 'qs', 'sa']
  },
  resGetPath: '/locales/__lng__/__ns__.json'
}, function(){
  console.log(i18n.t('greeting'));
  greeting('greeting');
});
