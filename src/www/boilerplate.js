import exec from 'cordova/exec';

exports.hello = (success, error) => {
  exec(success, error, 'Boilerplate',  'hello', [] );
};
