exports.defineAutoTests = function() {

  describe('Boilerplate (window.Boilerplate)', function () {
    it('should exist', function() {
      expect(Boilerplate).toBeDefined();
    });

    it('should contain a hello function', function () {
      expect(typeof Boilerplate.hello).toBeDefined();
      expect(typeof Boilerplate.hello === 'function').toBe(true);
    });
  });
};

exports.defineManualTests = function(contentEl, createActionButton) {

  createActionButton('Say Hello', function() {
    Boilerplate.hello(function(hello) {
      contentEl.innerHTML = '<b>' + hello + '</b>';
    }, function(e) {
      console.log(e);
    });
  });
};
