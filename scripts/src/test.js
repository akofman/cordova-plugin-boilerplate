import shelljs from 'shelljs';

export default (platform) => {
  if (shelljs.exec('cordova-paramedic --platform ' + platform + ' --plugin ./ --verbose').code !== 0) {
    shelljs.echo('Error: cordova-paramedic failed');
    shelljs.exit(1);
  }
}
