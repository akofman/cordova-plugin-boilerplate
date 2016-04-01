exports.defineAutoTests = function() {

  describe('PluginName (window.PluginName)', function () {
    it('should exist', function() {
      expect(PluginName).toBeDefined();
    });

    it('should contain a hello function', function () {
      expect(typeof PluginName.hello).toBeDefined();
      expect(typeof PluginName.hello === 'function').toBe(true);
    });
  });
};

exports.defineManualTests = function(contentEl, createActionButton) {

  createActionButton('Say Hello', function() {
    PluginName.hello(function(hello) {
      contentEl.innerHTML = '<b>' + hello + '</b>';
    }, function(e) {
      console.log('code: ' + e.code + ', message: ' + e.message);
    });
  });
};
