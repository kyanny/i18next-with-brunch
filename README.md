# i18next with brunch

Dead simple example configuration/setup for i18next and brunch.

i18next http://i18next.com/

brunch http://brunch.io/

## Try to run demo

    $ brunch watch --server
    $ open http://localhost:3333/

## Remarks

* i18next tries to load translation resources `translation.json` from path like `/locales/:lang/translation.json`. According to brunch's convention, translation resource files should be organized like below:
  * Create `app/assets/locales` directory.
  * Create `app/assets/locales/:lang` sub directories for each languages you need.
    * e.g. `app/assets/locales/en` for English, `app/assets/locales/es` for Spanish.
  * Put `translation.json` under the sub directories you made.
