'use strict';

var _exec = require('cordova/exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.hello = function (success, error) {
  (0, _exec2.default)(success, error, 'Boilerplate', 'hello', []);
};