import deploy from './deploy';
import test from './test';
import create from './create';
import removePlatform from './removePlatform';

const showHelp = () => {
  console.error('Usage: scripts create <PluginName> [–-without-platform <android|ios>]');
  console.error('       scripts test <platform>');
  console.error('       scripts deploy <platform>');
}

const args = process.argv.slice(2);
if(args.length > 0) {
  const action = args[0];
  if(action === 'create' && args[1]){
    create(args[1]);

    if(args[2] === '--without-platform' && args[3]){
      removePlatform(args[3]);
    }

    process.exit();
  }
  else if (action === 'test'){

  }
  else if (action === 'deploy'){

  }
}

showHelp();
process.exit(1);
