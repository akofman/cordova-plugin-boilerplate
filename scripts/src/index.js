import deploy from './deploy';
import test from './test';
import create from './create';
import removePlatform from './removePlatform';

const showHelp = () => {
  console.error('Usage: create <PluginName> [–-without-platform <android|ios>]');
  console.error('       test <platform>');
  console.error('       deploy <platform>');
}

let error = false;
const args = process.argv.slice(2);
if(args.length > 0) {
  const action = args[0];
  if(action === 'create' && args[1]){
    error = 0;
    create(args[1]).then(() => {
      if(args[2] === '--without-platform' && args[3]){
        removePlatform(args[3]);
      }
    });
  }
  else if (action === 'test'){
    // TODO
  }
  else if (action === 'deploy'){
    // TODO
  }
  else {
    error = true;
  }
} else {
  error = true;
}

if(error){
  showHelp();
  process.exit(1);
}
