var version = '1.4.1';

Package.describe({
  version: version,
  name: "keplerjs:mapillary",
  summary: "Keplerjs mapillary API",
  git: "https://github.com/Keplerjs/keplerjs-mapillary.git"
});

/*TODONpm.depends({
  "mapillary-js": "2.7.0",
});
*/
Package.onUse(function (api) {
  api.use([
    'keplerjs:core@'+version,
  ]);

  api.versionsFrom("1.5.1");

  api.addFiles([
    'plugin.js',
    /*'i18n/it.js',
    'i18n/en.js',
    'i18n/de.js',
    'i18n/es.js',
    'i18n/fr.js',*/
  ]);

/*  api.addFiles([
  	'client/Place_mapillary.js',
    'client/views/panels.html',
    'client/views/panels.js',
  ],'client');

  api.addFiles([
    'server/Mapillary.js',
  ],'server');*/

});
