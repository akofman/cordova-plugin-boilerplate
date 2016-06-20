import camelCase from 'camel-case';
import fs from 'fs';
import Git from 'simple-git';
import rimraf from 'rimraf';

const git = Git();

export default (pluginName) => {
  const files = [ './plugin.xml',
                  './src/android/Boilerplate.java',
                  './src/ios/Boilerplate.swift',
                  './src/www/boilerplate.js',
                  './tests/tests.js',
                  './tests/plugin.xml',
                  './tests/app/config.xml',
                  './package.json',
                  'boilerplate.js'
                ];
  const upperCamelCaseName = `${pluginName[0].toUpperCase()}${pluginName.substr(1)}`;
  const lowerCamelCaseName = camelCase(pluginName);

  // Replace all occurences of Boilerplate by the plugin name.
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const newContent = content.replace(/Boilerplate/g, upperCamelCaseName).replace(/boilerplate/g, lowerCamelCaseName);

    fs.writeFileSync(file, newContent, 'utf8');
  })

  // Rename files
  fs.rename('./src/android/Boilerplate.java', `./src/android/${upperCamelCaseName}.java`, (err) => {
    if ( err ) console.log('ERROR: ' + err);
  });
  fs.rename('./src/ios/Boilerplate.swift', `./src/ios/${upperCamelCaseName}.swift`, (err) => {
    if ( err ) console.log('ERROR: ' + err);
  });
  fs.rename('./src/www/boilerplate.js', `./src/www/${lowerCamelCaseName}.js`, (err) => {
    if ( err ) console.log('ERROR: ' + err);
  });
  fs.rename('./boilerplate.js', `./${lowerCamelCaseName}.js`, (err) => {
    if ( err ) console.log('ERROR: ' + err);
  });

  // Init an empty git repo
  const pjson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  rimraf.sync('./.git');

  return git.init().then(() =>
    git.addRemote('origin', pjson.repository.url).then(() => {
      console.log('Git repository is well initialized.');
    })
  );
}
