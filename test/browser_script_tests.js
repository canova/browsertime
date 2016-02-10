'use strict';

let assert = require('assert'),
  path = require('path'),
  parser = require('../lib/support/browser_script');

const TEST_SCRIPTS_FOLDER = path.resolve(__dirname, 'browserscripts', 'testscripts');

describe('#parseBrowserScripts', function() {
  it('should parse valid scripts', function() {
    return parser.parseScriptDirectory(TEST_SCRIPTS_FOLDER)
      .then((scriptsByCategory) => {
        const categoryNames = Object.keys(scriptsByCategory);

        assert.deepEqual(categoryNames, ['testscripts']);

        const testscriptsCategory = scriptsByCategory.testscripts;
        const scriptNames = Object.keys(testscriptsCategory);

        assert.deepEqual(scriptNames, ['scriptTags']);

        assert.notEqual(testscriptsCategory.script, '');
      });
  });

  it('should get scripts for all categories', function() {
    return parser.getScriptsForCategories(parser.allScriptCategories)
      .then((scriptsByCategory) => {
        const categoryNames = Object.keys(scriptsByCategory);

        assert.deepEqual(categoryNames, ['browser', 'pageinfo', 'performance']);
      });
  });
});
