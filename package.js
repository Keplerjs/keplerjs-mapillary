
Package.describe({
  name: "keplerjs:mapillary",
  summary: "Keplerjs mapillary API",
  version: "1.2.2",
  git: "https://github.com/Keplerjs/keplerjs-mapillary.git"
});

/*Npm.depends({
  "mapillary-js": "2.7.0",
});
*/
Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'keplerjs:core@1.2.2',
  ]);

  api.addFiles([
    'plugin.js',
/*    'i18n/it.js',
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
