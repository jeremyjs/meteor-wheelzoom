Package.describe({
  name: 'jjman505:wheelzoom',
  version: '1.0.0',
  summary: 'A wrapper for the wheelzoom.js library',
  git: 'https://github.com/jjman505/meteor-wheelzoom',
  documentation: 'README.md'
});

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0');
  api.addFiles(['wheelzoom.js'], 'client');

  if (api.export)
      api.export('wheelzoom');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jjman505:wheelzoom');
  api.addFiles('wheelzoom-tests.js');
});
