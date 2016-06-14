/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _deploy = __webpack_require__(2);

	var _deploy2 = _interopRequireDefault(_deploy);

	var _test = __webpack_require__(3);

	var _test2 = _interopRequireDefault(_test);

	var _create = __webpack_require__(32);

	var _create2 = _interopRequireDefault(_create);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var showHelp = function showHelp() {
	  console.error('Usage: scripts create <PluginName>');
	  console.error('       scripts test <platform>');
	  console.error('       scripts deploy <platform>');
	};

	var args = process.argv.slice(2);
	if (args.length > 0) {
	  var action = args[0];
	  if (action === 'create' && args[1]) {
	    (0, _create2.default)(args[1]);
	    process.exit();
	  } else if (action === 'test') {} else if (action === 'deploy') {}
	}

	showHelp();
	process.exit(1);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _shelljs = __webpack_require__(4);

	var _shelljs2 = _interopRequireDefault(_shelljs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (platform) {
	  if (_shelljs2.default.exec('cordova-paramedic --platform ' + platform + ' --plugin ./ --verbose').code !== 0) {
	    _shelljs2.default.echo('Error: cordova-paramedic failed');
	    _shelljs2.default.exit(1);
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	//
	// ShellJS
	// Unix shell commands on top of Node's API
	//
	// Copyright (c) 2012 Artur Adib
	// http://github.com/arturadib/shelljs
	//

	var common = __webpack_require__(5);


	//@
	//@ All commands run synchronously, unless otherwise stated.
	//@

	//@include ./src/cd
	var _cd = __webpack_require__(10);
	exports.cd = common.wrap('cd', _cd);

	//@include ./src/pwd
	var _pwd = __webpack_require__(11);
	exports.pwd = common.wrap('pwd', _pwd);

	//@include ./src/ls
	var _ls = __webpack_require__(8);
	exports.ls = common.wrap('ls', _ls);

	//@include ./src/find
	var _find = __webpack_require__(12);
	exports.find = common.wrap('find', _find);

	//@include ./src/cp
	var _cp = __webpack_require__(13);
	exports.cp = common.wrap('cp', _cp);

	//@include ./src/rm
	var _rm = __webpack_require__(14);
	exports.rm = common.wrap('rm', _rm);

	//@include ./src/mv
	var _mv = __webpack_require__(15);
	exports.mv = common.wrap('mv', _mv);

	//@include ./src/mkdir
	var _mkdir = __webpack_require__(16);
	exports.mkdir = common.wrap('mkdir', _mkdir);

	//@include ./src/test
	var _test = __webpack_require__(17);
	exports.test = common.wrap('test', _test);

	//@include ./src/cat
	var _cat = __webpack_require__(18);
	exports.cat = common.wrap('cat', _cat);

	//@include ./src/to
	var _to = __webpack_require__(19);
	String.prototype.to = common.wrap('to', _to);

	//@include ./src/toEnd
	var _toEnd = __webpack_require__(20);
	String.prototype.toEnd = common.wrap('toEnd', _toEnd);

	//@include ./src/sed
	var _sed = __webpack_require__(21);
	exports.sed = common.wrap('sed', _sed);

	//@include ./src/grep
	var _grep = __webpack_require__(22);
	exports.grep = common.wrap('grep', _grep);

	//@include ./src/which
	var _which = __webpack_require__(23);
	exports.which = common.wrap('which', _which);

	//@include ./src/echo
	var _echo = __webpack_require__(24);
	exports.echo = _echo; // don't common.wrap() as it could parse '-options'

	//@include ./src/dirs
	var _dirs = __webpack_require__(25).dirs;
	exports.dirs = common.wrap("dirs", _dirs);
	var _pushd = __webpack_require__(25).pushd;
	exports.pushd = common.wrap('pushd', _pushd);
	var _popd = __webpack_require__(25).popd;
	exports.popd = common.wrap("popd", _popd);

	//@include ./src/ln
	var _ln = __webpack_require__(26);
	exports.ln = common.wrap('ln', _ln);

	//@
	//@ ### exit(code)
	//@ Exits the current process with the given exit code.
	exports.exit = process.exit;

	//@
	//@ ### env['VAR_NAME']
	//@ Object containing environment variables (both getter and setter). Shortcut to process.env.
	exports.env = process.env;

	//@include ./src/exec
	var _exec = __webpack_require__(27);
	exports.exec = common.wrap('exec', _exec, {notUnix:true});

	//@include ./src/chmod
	var _chmod = __webpack_require__(30);
	exports.chmod = common.wrap('chmod', _chmod);



	//@
	//@ ## Non-Unix commands
	//@

	//@include ./src/tempdir
	var _tempDir = __webpack_require__(28);
	exports.tempdir = common.wrap('tempdir', _tempDir);


	//@include ./src/error
	var _error = __webpack_require__(31);
	exports.error = _error;



	//@
	//@ ## Configuration
	//@

	exports.config = common.config;

	//@
	//@ ### config.silent
	//@ Example:
	//@
	//@ ```javascript
	//@ var sh = require('shelljs');
	//@ var silentState = sh.config.silent; // save old silent state
	//@ sh.config.silent = true;
	//@ /* ... */
	//@ sh.config.silent = silentState; // restore old silent state
	//@ ```
	//@
	//@ Suppresses all command output if `true`, except for `echo()` calls.
	//@ Default is `false`.

	//@
	//@ ### config.fatal
	//@ Example:
	//@
	//@ ```javascript
	//@ require('shelljs/global');
	//@ config.fatal = true;
	//@ cp('this_file_does_not_exist', '/dev/null'); // dies here
	//@ /* more commands... */
	//@ ```
	//@
	//@ If `true` the script will die on errors. Default is `false`.


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var os = __webpack_require__(6);
	var fs = __webpack_require__(7);
	var _ls = __webpack_require__(8);

	// Module globals
	var config = {
	  silent: false,
	  fatal: false
	};
	exports.config = config;

	var state = {
	  error: null,
	  currentCmd: 'shell.js',
	  tempDir: null
	};
	exports.state = state;

	var platform = os.type().match(/^Win/) ? 'win' : 'unix';
	exports.platform = platform;

	function log() {
	  if (!config.silent)
	    console.log.apply(this, arguments);
	}
	exports.log = log;

	// Shows error message. Throws unless _continue or config.fatal are true
	function error(msg, _continue) {
	  if (state.error === null)
	    state.error = '';
	  state.error += state.currentCmd + ': ' + msg + '\n';

	  if (msg.length > 0)
	    log(state.error);

	  if (config.fatal)
	    process.exit(1);

	  if (!_continue)
	    throw '';
	}
	exports.error = error;

	// In the future, when Proxies are default, we can add methods like `.to()` to primitive strings.
	// For now, this is a dummy function to bookmark places we need such strings
	function ShellString(str) {
	  return str;
	}
	exports.ShellString = ShellString;

	// Returns {'alice': true, 'bob': false} when passed a dictionary, e.g.:
	//   parseOptions('-a', {'a':'alice', 'b':'bob'});
	function parseOptions(str, map) {
	  if (!map)
	    error('parseOptions() internal error: no map given');

	  // All options are false by default
	  var options = {};
	  for (var letter in map)
	    options[map[letter]] = false;

	  if (!str)
	    return options; // defaults

	  if (typeof str !== 'string')
	    error('parseOptions() internal error: wrong str');

	  // e.g. match[1] = 'Rf' for str = '-Rf'
	  var match = str.match(/^\-(.+)/);
	  if (!match)
	    return options;

	  // e.g. chars = ['R', 'f']
	  var chars = match[1].split('');

	  chars.forEach(function(c) {
	    if (c in map)
	      options[map[c]] = true;
	    else
	      error('option not recognized: '+c);
	  });

	  return options;
	}
	exports.parseOptions = parseOptions;

	// Expands wildcards with matching (ie. existing) file names.
	// For example:
	//   expand(['file*.js']) = ['file1.js', 'file2.js', ...]
	//   (if the files 'file1.js', 'file2.js', etc, exist in the current dir)
	function expand(list) {
	  var expanded = [];
	  list.forEach(function(listEl) {
	    // Wildcard present on directory names ?
	    if(listEl.search(/\*[^\/]*\//) > -1 || listEl.search(/\*\*[^\/]*\//) > -1) {
	      var match = listEl.match(/^([^*]+\/|)(.*)/);
	      var root = match[1];
	      var rest = match[2];
	      var restRegex = rest.replace(/\*\*/g, ".*").replace(/\*/g, "[^\\/]*");
	      restRegex = new RegExp(restRegex);
	      
	      _ls('-R', root).filter(function (e) {
	        return restRegex.test(e);
	      }).forEach(function(file) {
	        expanded.push(file);
	      });
	    }
	    // Wildcard present on file names ?
	    else if (listEl.search(/\*/) > -1) {
	      _ls('', listEl).forEach(function(file) {
	        expanded.push(file);
	      });
	    } else {
	      expanded.push(listEl);
	    }
	  });
	  return expanded;
	}
	exports.expand = expand;

	// Normalizes _unlinkSync() across platforms to match Unix behavior, i.e.
	// file can be unlinked even if it's read-only, see https://github.com/joyent/node/issues/3006
	function unlinkSync(file) {
	  try {
	    fs.unlinkSync(file);
	  } catch(e) {
	    // Try to override file permission
	    if (e.code === 'EPERM') {
	      fs.chmodSync(file, '0666');
	      fs.unlinkSync(file);
	    } else {
	      throw e;
	    }
	  }
	}
	exports.unlinkSync = unlinkSync;

	// e.g. 'shelljs_a5f185d0443ca...'
	function randomFileName() {
	  function randomHash(count) {
	    if (count === 1)
	      return parseInt(16*Math.random(), 10).toString(16);
	    else {
	      var hash = '';
	      for (var i=0; i<count; i++)
	        hash += randomHash(1);
	      return hash;
	    }
	  }

	  return 'shelljs_'+randomHash(20);
	}
	exports.randomFileName = randomFileName;

	// extend(target_obj, source_obj1 [, source_obj2 ...])
	// Shallow extend, e.g.:
	//    extend({A:1}, {b:2}, {c:3}) returns {A:1, b:2, c:3}
	function extend(target) {
	  var sources = [].slice.call(arguments, 1);
	  sources.forEach(function(source) {
	    for (var key in source)
	      target[key] = source[key];
	  });

	  return target;
	}
	exports.extend = extend;

	// Common wrapper for all Unix-like commands
	function wrap(cmd, fn, options) {
	  return function() {
	    var retValue = null;

	    state.currentCmd = cmd;
	    state.error = null;

	    try {
	      var args = [].slice.call(arguments, 0);

	      if (options && options.notUnix) {
	        retValue = fn.apply(this, args);
	      } else {
	        if (args.length === 0 || typeof args[0] !== 'string' || args[0][0] !== '-')
	          args.unshift(''); // only add dummy option if '-option' not already present
	        retValue = fn.apply(this, args);
	      }
	    } catch (e) {
	      if (!state.error) {
	        // If state.error hasn't been set it's an error thrown by Node, not us - probably a bug...
	        console.log('shell.js: internal error');
	        console.log(e.stack || e);
	        process.exit(1);
	      }
	      if (config.fatal)
	        throw e;
	    }

	    state.currentCmd = 'shell.js';
	    return retValue;
	  };
	} // wrap
	exports.wrap = wrap;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("os");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var path = __webpack_require__(9);
	var fs = __webpack_require__(7);
	var common = __webpack_require__(5);
	var _cd = __webpack_require__(10);
	var _pwd = __webpack_require__(11);

	//@
	//@ ### ls([options ,] path [,path ...])
	//@ ### ls([options ,] path_array)
	//@ Available options:
	//@
	//@ + `-R`: recursive
	//@ + `-A`: all files (include files beginning with `.`, except for `.` and `..`)
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ ls('projs/*.js');
	//@ ls('-R', '/users/me', '/tmp');
	//@ ls('-R', ['/users/me', '/tmp']); // same as above
	//@ ```
	//@
	//@ Returns array of files in the given path, or in current directory if no path provided.
	function _ls(options, paths) {
	  options = common.parseOptions(options, {
	    'R': 'recursive',
	    'A': 'all',
	    'a': 'all_deprecated'
	  });

	  if (options.all_deprecated) {
	    // We won't support the -a option as it's hard to image why it's useful
	    // (it includes '.' and '..' in addition to '.*' files)
	    // For backwards compatibility we'll dump a deprecated message and proceed as before
	    common.log('ls: Option -a is deprecated. Use -A instead');
	    options.all = true;
	  }

	  if (!paths)
	    paths = ['.'];
	  else if (typeof paths === 'object')
	    paths = paths; // assume array
	  else if (typeof paths === 'string')
	    paths = [].slice.call(arguments, 1);

	  var list = [];

	  // Conditionally pushes file to list - returns true if pushed, false otherwise
	  // (e.g. prevents hidden files to be included unless explicitly told so)
	  function pushFile(file, query) {
	    // hidden file?
	    if (path.basename(file)[0] === '.') {
	      // not explicitly asking for hidden files?
	      if (!options.all && !(path.basename(query)[0] === '.' && path.basename(query).length > 1))
	        return false;
	    }

	    if (common.platform === 'win')
	      file = file.replace(/\\/g, '/');

	    list.push(file);
	    return true;
	  }

	  paths.forEach(function(p) {
	    if (fs.existsSync(p)) {
	      var stats = fs.statSync(p);
	      // Simple file?
	      if (stats.isFile()) {
	        pushFile(p, p);
	        return; // continue
	      }

	      // Simple dir?
	      if (stats.isDirectory()) {
	        // Iterate over p contents
	        fs.readdirSync(p).forEach(function(file) {
	          if (!pushFile(file, p))
	            return;

	          // Recursive?
	          if (options.recursive) {
	            var oldDir = _pwd();
	            _cd('', p);
	            if (fs.statSync(file).isDirectory())
	              list = list.concat(_ls('-R'+(options.all?'A':''), file+'/*'));
	            _cd('', oldDir);
	          }
	        });
	        return; // continue
	      }
	    }

	    // p does not exist - possible wildcard present

	    var basename = path.basename(p);
	    var dirname = path.dirname(p);
	    // Wildcard present on an existing dir? (e.g. '/tmp/*.js')
	    if (basename.search(/\*/) > -1 && fs.existsSync(dirname) && fs.statSync(dirname).isDirectory) {
	      // Escape special regular expression chars
	      var regexp = basename.replace(/(\^|\$|\(|\)|<|>|\[|\]|\{|\}|\.|\+|\?)/g, '\\$1');
	      // Translates wildcard into regex
	      regexp = '^' + regexp.replace(/\*/g, '.*') + '$';
	      // Iterate over directory contents
	      fs.readdirSync(dirname).forEach(function(file) {
	        if (file.match(new RegExp(regexp))) {
	          if (!pushFile(path.normalize(dirname+'/'+file), basename))
	            return;

	          // Recursive?
	          if (options.recursive) {
	            var pp = dirname + '/' + file;
	            if (fs.lstatSync(pp).isDirectory())
	              list = list.concat(_ls('-R'+(options.all?'A':''), pp+'/*'));
	          } // recursive
	        } // if file matches
	      }); // forEach
	      return;
	    }

	    common.error('no such file or directory: ' + p, true);
	  });

	  return list;
	}
	module.exports = _ls;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var fs = __webpack_require__(7);
	var common = __webpack_require__(5);

	//@
	//@ ### cd('dir')
	//@ Changes to directory `dir` for the duration of the script
	function _cd(options, dir) {
	  if (!dir)
	    common.error('directory not specified');

	  if (!fs.existsSync(dir))
	    common.error('no such file or directory: ' + dir);

	  if (!fs.statSync(dir).isDirectory())
	    common.error('not a directory: ' + dir);

	  process.chdir(dir);
	}
	module.exports = _cd;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var path = __webpack_require__(9);
	var common = __webpack_require__(5);

	//@
	//@ ### pwd()
	//@ Returns the current directory.
	function _pwd(options) {
	  var pwd = path.resolve(process.cwd());
	  return common.ShellString(pwd);
	}
	module.exports = _pwd;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var fs = __webpack_require__(7);
	var common = __webpack_require__(5);
	var _ls = __webpack_require__(8);

	//@
	//@ ### find(path [,path ...])
	//@ ### find(path_array)
	//@ Examples:
	//@
	//@ ```javascript
	//@ find('src', 'lib');
	//@ find(['src', 'lib']); // same as above
	//@ find('.').filter(function(file) { return file.match(/\.js$/); });
	//@ ```
	//@
	//@ Returns array of all files (however deep) in the given paths.
	//@
	//@ The main difference from `ls('-R', path)` is that the resulting file names
	//@ include the base directories, e.g. `lib/resources/file1` instead of just `file1`.
	function _find(options, paths) {
	  if (!paths)
	    common.error('no path specified');
	  else if (typeof paths === 'object')
	    paths = paths; // assume array
	  else if (typeof paths === 'string')
	    paths = [].slice.call(arguments, 1);

	  var list = [];

	  function pushFile(file) {
	    if (common.platform === 'win')
	      file = file.replace(/\\/g, '/');
	    list.push(file);
	  }

	  // why not simply do ls('-R', paths)? because the output wouldn't give the base dirs
	  // to get the base dir in the output, we need instead ls('-R', 'dir/*') for every directory

	  paths.forEach(function(file) {
	    pushFile(file);

	    if (fs.statSync(file).isDirectory()) {
	      _ls('-RA', file+'/*').forEach(function(subfile) {
	        pushFile(subfile);
	      });
	    }
	  });

	  return list;
	}
	module.exports = _find;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var fs = __webpack_require__(7);
	var path = __webpack_require__(9);
	var common = __webpack_require__(5);
	var os = __webpack_require__(6);

	// Buffered file copy, synchronous
	// (Using readFileSync() + writeFileSync() could easily cause a memory overflow
	//  with large files)
	function copyFileSync(srcFile, destFile) {
	  if (!fs.existsSync(srcFile))
	    common.error('copyFileSync: no such file or directory: ' + srcFile);

	  var BUF_LENGTH = 64*1024,
	      buf = new Buffer(BUF_LENGTH),
	      bytesRead = BUF_LENGTH,
	      pos = 0,
	      fdr = null,
	      fdw = null;

	  try {
	    fdr = fs.openSync(srcFile, 'r');
	  } catch(e) {
	    common.error('copyFileSync: could not read src file ('+srcFile+')');
	  }

	  try {
	    fdw = fs.openSync(destFile, 'w');
	  } catch(e) {
	    common.error('copyFileSync: could not write to dest file (code='+e.code+'):'+destFile);
	  }

	  while (bytesRead === BUF_LENGTH) {
	    bytesRead = fs.readSync(fdr, buf, 0, BUF_LENGTH, pos);
	    fs.writeSync(fdw, buf, 0, bytesRead);
	    pos += bytesRead;
	  }

	  fs.closeSync(fdr);
	  fs.closeSync(fdw);

	  fs.chmodSync(destFile, fs.statSync(srcFile).mode);
	}

	// Recursively copies 'sourceDir' into 'destDir'
	// Adapted from https://github.com/ryanmcgrath/wrench-js
	//
	// Copyright (c) 2010 Ryan McGrath
	// Copyright (c) 2012 Artur Adib
	//
	// Licensed under the MIT License
	// http://www.opensource.org/licenses/mit-license.php
	function cpdirSyncRecursive(sourceDir, destDir, opts) {
	  if (!opts) opts = {};

	  /* Create the directory where all our junk is moving to; read the mode of the source directory and mirror it */
	  var checkDir = fs.statSync(sourceDir);
	  try {
	    fs.mkdirSync(destDir, checkDir.mode);
	  } catch (e) {
	    //if the directory already exists, that's okay
	    if (e.code !== 'EEXIST') throw e;
	  }

	  var files = fs.readdirSync(sourceDir);

	  for (var i = 0; i < files.length; i++) {
	    var srcFile = sourceDir + "/" + files[i];
	    var destFile = destDir + "/" + files[i];
	    var srcFileStat = fs.lstatSync(srcFile);

	    if (srcFileStat.isDirectory()) {
	      /* recursion this thing right on back. */
	      cpdirSyncRecursive(srcFile, destFile, opts);
	    } else if (srcFileStat.isSymbolicLink()) {
	      var symlinkFull = fs.readlinkSync(srcFile);
	      fs.symlinkSync(symlinkFull, destFile, os.platform() === "win32" ? "junction" : null);
	    } else {
	      /* At this point, we've hit a file actually worth copying... so copy it on over. */
	      if (fs.existsSync(destFile) && !opts.force) {
	        common.log('skipping existing file: ' + files[i]);
	      } else {
	        copyFileSync(srcFile, destFile);
	      }
	    }

	  } // for files
	} // cpdirSyncRecursive


	//@
	//@ ### cp([options ,] source [,source ...], dest)
	//@ ### cp([options ,] source_array, dest)
	//@ Available options:
	//@
	//@ + `-f`: force
	//@ + `-r, -R`: recursive
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ cp('file1', 'dir1');
	//@ cp('-Rf', '/tmp/*', '/usr/local/*', '/home/tmp');
	//@ cp('-Rf', ['/tmp/*', '/usr/local/*'], '/home/tmp'); // same as above
	//@ ```
	//@
	//@ Copies files. The wildcard `*` is accepted.
	function _cp(options, sources, dest) {
	  options = common.parseOptions(options, {
	    'f': 'force',
	    'R': 'recursive',
	    'r': 'recursive'
	  });

	  // Get sources, dest
	  if (arguments.length < 3) {
	    common.error('missing <source> and/or <dest>');
	  } else if (arguments.length > 3) {
	    sources = [].slice.call(arguments, 1, arguments.length - 1);
	    dest = arguments[arguments.length - 1];
	  } else if (typeof sources === 'string') {
	    sources = [sources];
	  } else if ('length' in sources) {
	    sources = sources; // no-op for array
	  } else {
	    common.error('invalid arguments');
	  }

	  var exists = fs.existsSync(dest),
	      stats = exists && fs.statSync(dest);

	  // Dest is not existing dir, but multiple sources given
	  if ((!exists || !stats.isDirectory()) && sources.length > 1)
	    common.error('dest is not a directory (too many sources)');

	  // Dest is an existing file, but no -f given
	  if (exists && stats.isFile() && !options.force)
	    common.error('dest file already exists: ' + dest);

	  if (options.recursive) {
	    // Recursive allows the shortcut syntax "sourcedir/" for "sourcedir/*"
	    // (see Github issue #15)
	    sources.forEach(function(src, i) {
	      if (src[src.length - 1] === '/')
	        sources[i] += '*';
	    });

	    // Create dest
	    try {
	      fs.mkdirSync(dest, parseInt('0777', 8));
	    } catch (e) {
	      // like Unix's cp, keep going even if we can't create dest dir
	    }
	  }

	  sources = common.expand(sources);

	  sources.forEach(function(src) {
	    if (!fs.existsSync(src)) {
	      common.error('no such file or directory: '+src, true);
	      return; // skip file
	    }

	    // If here, src exists
	    if (fs.statSync(src).isDirectory()) {
	      if (!options.recursive) {
	        // Non-Recursive
	        common.log(src + ' is a directory (not copied)');
	      } else {
	        // Recursive
	        // 'cp /a/source dest' should create 'source' in 'dest'
	        var newDest = path.join(dest, path.basename(src)),
	            checkDir = fs.statSync(src);
	        try {
	          fs.mkdirSync(newDest, checkDir.mode);
	        } catch (e) {
	          //if the directory already exists, that's okay
	          if (e.code !== 'EEXIST') {
	            common.error('dest file no such file or directory: ' + newDest, true);
	            throw e;
	          }
	        }

	        cpdirSyncRecursive(src, newDest, {force: options.force});
	      }
	      return; // done with dir
	    }

	    // If here, src is a file

	    // When copying to '/path/dir':
	    //    thisDest = '/path/dir/file1'
	    var thisDest = dest;
	    if (fs.existsSync(dest) && fs.statSync(dest).isDirectory())
	      thisDest = path.normalize(dest + '/' + path.basename(src));

	    if (fs.existsSync(thisDest) && !options.force) {
	      common.error('dest file already exists: ' + thisDest, true);
	      return; // skip file
	    }

	    copyFileSync(src, thisDest);
	  }); // forEach(src)
	}
	module.exports = _cp;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var fs = __webpack_require__(7);

	// Recursively removes 'dir'
	// Adapted from https://github.com/ryanmcgrath/wrench-js
	//
	// Copyright (c) 2010 Ryan McGrath
	// Copyright (c) 2012 Artur Adib
	//
	// Licensed under the MIT License
	// http://www.opensource.org/licenses/mit-license.php
	function rmdirSyncRecursive(dir, force) {
	  var files;

	  files = fs.readdirSync(dir);

	  // Loop through and delete everything in the sub-tree after checking it
	  for(var i = 0; i < files.length; i++) {
	    var file = dir + "/" + files[i],
	        currFile = fs.lstatSync(file);

	    if(currFile.isDirectory()) { // Recursive function back to the beginning
	      rmdirSyncRecursive(file, force);
	    }

	    else if(currFile.isSymbolicLink()) { // Unlink symlinks
	      if (force || isWriteable(file)) {
	        try {
	          common.unlinkSync(file);
	        } catch (e) {
	          common.error('could not remove file (code '+e.code+'): ' + file, true);
	        }
	      }
	    }

	    else // Assume it's a file - perhaps a try/catch belongs here?
	      if (force || isWriteable(file)) {
	        try {
	          common.unlinkSync(file);
	        } catch (e) {
	          common.error('could not remove file (code '+e.code+'): ' + file, true);
	        }
	      }
	  }

	  // Now that we know everything in the sub-tree has been deleted, we can delete the main directory.
	  // Huzzah for the shopkeep.

	  var result;
	  try {
	    // Retry on windows, sometimes it takes a little time before all the files in the directory are gone
	    var start = Date.now();
	    while (true) {
	      try {
	        result = fs.rmdirSync(dir);
	        if (fs.existsSync(dir)) throw { code: "EAGAIN" }
	        break;
	      } catch(er) {
	        // In addition to error codes, also check if the directory still exists and loop again if true
	        if (process.platform === "win32" && (er.code === "ENOTEMPTY" || er.code === "EBUSY" || er.code === "EPERM" || er.code === "EAGAIN")) {
	          if (Date.now() - start > 1000) throw er;
	        } else if (er.code === "ENOENT") {
	          // Directory did not exist, deletion was successful
	          break;
	        } else {
	          throw er;
	        }
	      }
	    }
	  } catch(e) {
	    common.error('could not remove directory (code '+e.code+'): ' + dir, true);
	  }

	  return result;
	} // rmdirSyncRecursive

	// Hack to determine if file has write permissions for current user
	// Avoids having to check user, group, etc, but it's probably slow
	function isWriteable(file) {
	  var writePermission = true;
	  try {
	    var __fd = fs.openSync(file, 'a');
	    fs.closeSync(__fd);
	  } catch(e) {
	    writePermission = false;
	  }

	  return writePermission;
	}

	//@
	//@ ### rm([options ,] file [, file ...])
	//@ ### rm([options ,] file_array)
	//@ Available options:
	//@
	//@ + `-f`: force
	//@ + `-r, -R`: recursive
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ rm('-rf', '/tmp/*');
	//@ rm('some_file.txt', 'another_file.txt');
	//@ rm(['some_file.txt', 'another_file.txt']); // same as above
	//@ ```
	//@
	//@ Removes files. The wildcard `*` is accepted.
	function _rm(options, files) {
	  options = common.parseOptions(options, {
	    'f': 'force',
	    'r': 'recursive',
	    'R': 'recursive'
	  });
	  if (!files)
	    common.error('no paths given');

	  if (typeof files === 'string')
	    files = [].slice.call(arguments, 1);
	  // if it's array leave it as it is

	  files = common.expand(files);

	  files.forEach(function(file) {
	    if (!fs.existsSync(file)) {
	      // Path does not exist, no force flag given
	      if (!options.force)
	        common.error('no such file or directory: '+file, true);

	      return; // skip file
	    }

	    // If here, path exists

	    var stats = fs.lstatSync(file);
	    if (stats.isFile() || stats.isSymbolicLink()) {

	      // Do not check for file writing permissions
	      if (options.force) {
	        common.unlinkSync(file);
	        return;
	      }

	      if (isWriteable(file))
	        common.unlinkSync(file);
	      else
	        common.error('permission denied: '+file, true);

	      return;
	    } // simple file

	    // Path is an existing directory, but no -r flag given
	    if (stats.isDirectory() && !options.recursive) {
	      common.error('path is a directory', true);
	      return; // skip path
	    }

	    // Recursively remove existing directory
	    if (stats.isDirectory() && options.recursive) {
	      rmdirSyncRecursive(file, options.force);
	    }
	  }); // forEach(file)
	} // rm
	module.exports = _rm;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var fs = __webpack_require__(7);
	var path = __webpack_require__(9);
	var common = __webpack_require__(5);

	//@
	//@ ### mv(source [, source ...], dest')
	//@ ### mv(source_array, dest')
	//@ Available options:
	//@
	//@ + `f`: force
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ mv('-f', 'file', 'dir/');
	//@ mv('file1', 'file2', 'dir/');
	//@ mv(['file1', 'file2'], 'dir/'); // same as above
	//@ ```
	//@
	//@ Moves files. The wildcard `*` is accepted.
	function _mv(options, sources, dest) {
	  options = common.parseOptions(options, {
	    'f': 'force'
	  });

	  // Get sources, dest
	  if (arguments.length < 3) {
	    common.error('missing <source> and/or <dest>');
	  } else if (arguments.length > 3) {
	    sources = [].slice.call(arguments, 1, arguments.length - 1);
	    dest = arguments[arguments.length - 1];
	  } else if (typeof sources === 'string') {
	    sources = [sources];
	  } else if ('length' in sources) {
	    sources = sources; // no-op for array
	  } else {
	    common.error('invalid arguments');
	  }

	  sources = common.expand(sources);

	  var exists = fs.existsSync(dest),
	      stats = exists && fs.statSync(dest);

	  // Dest is not existing dir, but multiple sources given
	  if ((!exists || !stats.isDirectory()) && sources.length > 1)
	    common.error('dest is not a directory (too many sources)');

	  // Dest is an existing file, but no -f given
	  if (exists && stats.isFile() && !options.force)
	    common.error('dest file already exists: ' + dest);

	  sources.forEach(function(src) {
	    if (!fs.existsSync(src)) {
	      common.error('no such file or directory: '+src, true);
	      return; // skip file
	    }

	    // If here, src exists

	    // When copying to '/path/dir':
	    //    thisDest = '/path/dir/file1'
	    var thisDest = dest;
	    if (fs.existsSync(dest) && fs.statSync(dest).isDirectory())
	      thisDest = path.normalize(dest + '/' + path.basename(src));

	    if (fs.existsSync(thisDest) && !options.force) {
	      common.error('dest file already exists: ' + thisDest, true);
	      return; // skip file
	    }

	    if (path.resolve(src) === path.dirname(path.resolve(thisDest))) {
	      common.error('cannot move to self: '+src, true);
	      return; // skip file
	    }

	    fs.renameSync(src, thisDest);
	  }); // forEach(src)
	} // mv
	module.exports = _mv;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var fs = __webpack_require__(7);
	var path = __webpack_require__(9);

	// Recursively creates 'dir'
	function mkdirSyncRecursive(dir) {
	  var baseDir = path.dirname(dir);

	  // Base dir exists, no recursion necessary
	  if (fs.existsSync(baseDir)) {
	    fs.mkdirSync(dir, parseInt('0777', 8));
	    return;
	  }

	  // Base dir does not exist, go recursive
	  mkdirSyncRecursive(baseDir);

	  // Base dir created, can create dir
	  fs.mkdirSync(dir, parseInt('0777', 8));
	}

	//@
	//@ ### mkdir([options ,] dir [, dir ...])
	//@ ### mkdir([options ,] dir_array)
	//@ Available options:
	//@
	//@ + `p`: full path (will create intermediate dirs if necessary)
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ mkdir('-p', '/tmp/a/b/c/d', '/tmp/e/f/g');
	//@ mkdir('-p', ['/tmp/a/b/c/d', '/tmp/e/f/g']); // same as above
	//@ ```
	//@
	//@ Creates directories.
	function _mkdir(options, dirs) {
	  options = common.parseOptions(options, {
	    'p': 'fullpath'
	  });
	  if (!dirs)
	    common.error('no paths given');

	  if (typeof dirs === 'string')
	    dirs = [].slice.call(arguments, 1);
	  // if it's array leave it as it is

	  dirs.forEach(function(dir) {
	    if (fs.existsSync(dir)) {
	      if (!options.fullpath)
	          common.error('path already exists: ' + dir, true);
	      return; // skip dir
	    }

	    // Base dir does not exist, and no -p option given
	    var baseDir = path.dirname(dir);
	    if (!fs.existsSync(baseDir) && !options.fullpath) {
	      common.error('no such file or directory: ' + baseDir, true);
	      return; // skip dir
	    }

	    if (options.fullpath)
	      mkdirSyncRecursive(dir);
	    else
	      fs.mkdirSync(dir, parseInt('0777', 8));
	  });
	} // mkdir
	module.exports = _mkdir;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var fs = __webpack_require__(7);

	//@
	//@ ### test(expression)
	//@ Available expression primaries:
	//@
	//@ + `'-b', 'path'`: true if path is a block device
	//@ + `'-c', 'path'`: true if path is a character device
	//@ + `'-d', 'path'`: true if path is a directory
	//@ + `'-e', 'path'`: true if path exists
	//@ + `'-f', 'path'`: true if path is a regular file
	//@ + `'-L', 'path'`: true if path is a symboilc link
	//@ + `'-p', 'path'`: true if path is a pipe (FIFO)
	//@ + `'-S', 'path'`: true if path is a socket
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ if (test('-d', path)) { /* do something with dir */ };
	//@ if (!test('-f', path)) continue; // skip if it's a regular file
	//@ ```
	//@
	//@ Evaluates expression using the available primaries and returns corresponding value.
	function _test(options, path) {
	  if (!path)
	    common.error('no path given');

	  // hack - only works with unary primaries
	  options = common.parseOptions(options, {
	    'b': 'block',
	    'c': 'character',
	    'd': 'directory',
	    'e': 'exists',
	    'f': 'file',
	    'L': 'link',
	    'p': 'pipe',
	    'S': 'socket'
	  });

	  var canInterpret = false;
	  for (var key in options)
	    if (options[key] === true) {
	      canInterpret = true;
	      break;
	    }

	  if (!canInterpret)
	    common.error('could not interpret expression');

	  if (options.link) {
	    try {
	      return fs.lstatSync(path).isSymbolicLink();
	    } catch(e) {
	      return false;
	    }
	  }

	  if (!fs.existsSync(path))
	    return false;

	  if (options.exists)
	    return true;

	  var stats = fs.statSync(path);

	  if (options.block)
	    return stats.isBlockDevice();

	  if (options.character)
	    return stats.isCharacterDevice();

	  if (options.directory)
	    return stats.isDirectory();

	  if (options.file)
	    return stats.isFile();

	  if (options.pipe)
	    return stats.isFIFO();

	  if (options.socket)
	    return stats.isSocket();
	} // test
	module.exports = _test;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var fs = __webpack_require__(7);

	//@
	//@ ### cat(file [, file ...])
	//@ ### cat(file_array)
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ var str = cat('file*.txt');
	//@ var str = cat('file1', 'file2');
	//@ var str = cat(['file1', 'file2']); // same as above
	//@ ```
	//@
	//@ Returns a string containing the given file, or a concatenated string
	//@ containing the files if more than one file is given (a new line character is
	//@ introduced between each file). Wildcard `*` accepted.
	function _cat(options, files) {
	  var cat = '';

	  if (!files)
	    common.error('no paths given');

	  if (typeof files === 'string')
	    files = [].slice.call(arguments, 1);
	  // if it's array leave it as it is

	  files = common.expand(files);

	  files.forEach(function(file) {
	    if (!fs.existsSync(file))
	      common.error('no such file or directory: ' + file);

	    cat += fs.readFileSync(file, 'utf8') + '\n';
	  });

	  if (cat[cat.length-1] === '\n')
	    cat = cat.substring(0, cat.length-1);

	  return common.ShellString(cat);
	}
	module.exports = _cat;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var fs = __webpack_require__(7);
	var path = __webpack_require__(9);

	//@
	//@ ### 'string'.to(file)
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ cat('input.txt').to('output.txt');
	//@ ```
	//@
	//@ Analogous to the redirection operator `>` in Unix, but works with JavaScript strings (such as
	//@ those returned by `cat`, `grep`, etc). _Like Unix redirections, `to()` will overwrite any existing file!_
	function _to(options, file) {
	  if (!file)
	    common.error('wrong arguments');

	  if (!fs.existsSync( path.dirname(file) ))
	      common.error('no such file or directory: ' + path.dirname(file));

	  try {
	    fs.writeFileSync(file, this.toString(), 'utf8');
	  } catch(e) {
	    common.error('could not write to file (code '+e.code+'): '+file, true);
	  }
	}
	module.exports = _to;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var fs = __webpack_require__(7);
	var path = __webpack_require__(9);

	//@
	//@ ### 'string'.toEnd(file)
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ cat('input.txt').toEnd('output.txt');
	//@ ```
	//@
	//@ Analogous to the redirect-and-append operator `>>` in Unix, but works with JavaScript strings (such as
	//@ those returned by `cat`, `grep`, etc).
	function _toEnd(options, file) {
	  if (!file)
	    common.error('wrong arguments');

	  if (!fs.existsSync( path.dirname(file) ))
	      common.error('no such file or directory: ' + path.dirname(file));

	  try {
	    fs.appendFileSync(file, this.toString(), 'utf8');
	  } catch(e) {
	    common.error('could not append to file (code '+e.code+'): '+file, true);
	  }
	}
	module.exports = _toEnd;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var fs = __webpack_require__(7);

	//@
	//@ ### sed([options ,] search_regex, replacement, file)
	//@ Available options:
	//@
	//@ + `-i`: Replace contents of 'file' in-place. _Note that no backups will be created!_
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ sed('-i', 'PROGRAM_VERSION', 'v0.1.3', 'source.js');
	//@ sed(/.*DELETE_THIS_LINE.*\n/, '', 'source.js');
	//@ ```
	//@
	//@ Reads an input string from `file` and performs a JavaScript `replace()` on the input
	//@ using the given search regex and replacement string or function. Returns the new string after replacement.
	function _sed(options, regex, replacement, file) {
	  options = common.parseOptions(options, {
	    'i': 'inplace'
	  });

	  if (typeof replacement === 'string' || typeof replacement === 'function')
	    replacement = replacement; // no-op
	  else if (typeof replacement === 'number')
	    replacement = replacement.toString(); // fallback
	  else
	    common.error('invalid replacement string');

	  if (!file)
	    common.error('no file given');

	  if (!fs.existsSync(file))
	    common.error('no such file or directory: ' + file);

	  var result = fs.readFileSync(file, 'utf8').replace(regex, replacement);
	  if (options.inplace)
	    fs.writeFileSync(file, result, 'utf8');

	  return common.ShellString(result);
	}
	module.exports = _sed;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var fs = __webpack_require__(7);

	//@
	//@ ### grep([options ,] regex_filter, file [, file ...])
	//@ ### grep([options ,] regex_filter, file_array)
	//@ Available options:
	//@
	//@ + `-v`: Inverse the sense of the regex and print the lines not matching the criteria.
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ grep('-v', 'GLOBAL_VARIABLE', '*.js');
	//@ grep('GLOBAL_VARIABLE', '*.js');
	//@ ```
	//@
	//@ Reads input string from given files and returns a string containing all lines of the
	//@ file that match the given `regex_filter`. Wildcard `*` accepted.
	function _grep(options, regex, files) {
	  options = common.parseOptions(options, {
	    'v': 'inverse'
	  });

	  if (!files)
	    common.error('no paths given');

	  if (typeof files === 'string')
	    files = [].slice.call(arguments, 2);
	  // if it's array leave it as it is

	  files = common.expand(files);

	  var grep = '';
	  files.forEach(function(file) {
	    if (!fs.existsSync(file)) {
	      common.error('no such file or directory: ' + file, true);
	      return;
	    }

	    var contents = fs.readFileSync(file, 'utf8'),
	        lines = contents.split(/\r*\n/);
	    lines.forEach(function(line) {
	      var matched = line.match(regex);
	      if ((options.inverse && !matched) || (!options.inverse && matched))
	        grep += line + '\n';
	    });
	  });

	  return common.ShellString(grep);
	}
	module.exports = _grep;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var fs = __webpack_require__(7);
	var path = __webpack_require__(9);

	// Cross-platform method for splitting environment PATH variables
	function splitPath(p) {
	  for (i=1;i<2;i++) {}

	  if (!p)
	    return [];

	  if (common.platform === 'win')
	    return p.split(';');
	  else
	    return p.split(':');
	}

	function checkPath(path) {
	  return fs.existsSync(path) && fs.statSync(path).isDirectory() == false;
	}

	//@
	//@ ### which(command)
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ var nodeExec = which('node');
	//@ ```
	//@
	//@ Searches for `command` in the system's PATH. On Windows looks for `.exe`, `.cmd`, and `.bat` extensions.
	//@ Returns string containing the absolute path to the command.
	function _which(options, cmd) {
	  if (!cmd)
	    common.error('must specify command');

	  var pathEnv = process.env.path || process.env.Path || process.env.PATH,
	      pathArray = splitPath(pathEnv),
	      where = null;

	  // No relative/absolute paths provided?
	  if (cmd.search(/\//) === -1) {
	    // Search for command in PATH
	    pathArray.forEach(function(dir) {
	      if (where)
	        return; // already found it

	      var attempt = path.resolve(dir + '/' + cmd);
	      if (checkPath(attempt)) {
	        where = attempt;
	        return;
	      }

	      if (common.platform === 'win') {
	        var baseAttempt = attempt;
	        attempt = baseAttempt + '.exe';
	        if (checkPath(attempt)) {
	          where = attempt;
	          return;
	        }
	        attempt = baseAttempt + '.cmd';
	        if (checkPath(attempt)) {
	          where = attempt;
	          return;
	        }
	        attempt = baseAttempt + '.bat';
	        if (checkPath(attempt)) {
	          where = attempt;
	          return;
	        }
	      } // if 'win'
	    });
	  }

	  // Command not found anywhere?
	  if (!checkPath(cmd) && !where)
	    return null;

	  where = where || path.resolve(cmd);

	  return common.ShellString(where);
	}
	module.exports = _which;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);

	//@
	//@ ### echo(string [,string ...])
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ echo('hello world');
	//@ var str = echo('hello world');
	//@ ```
	//@
	//@ Prints string to stdout, and returns string with additional utility methods
	//@ like `.to()`.
	function _echo() {
	  var messages = [].slice.call(arguments, 0);
	  console.log.apply(this, messages);
	  return common.ShellString(messages.join(' '));
	}
	module.exports = _echo;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var _cd = __webpack_require__(10);
	var path = __webpack_require__(9);

	// Pushd/popd/dirs internals
	var _dirStack = [];

	function _isStackIndex(index) {
	  return (/^[\-+]\d+$/).test(index);
	}

	function _parseStackIndex(index) {
	  if (_isStackIndex(index)) {
	    if (Math.abs(index) < _dirStack.length + 1) { // +1 for pwd
	      return (/^-/).test(index) ? Number(index) - 1 : Number(index);
	    } else {
	      common.error(index + ': directory stack index out of range');
	    }
	  } else {
	    common.error(index + ': invalid number');
	  }
	}

	function _actualDirStack() {
	  return [process.cwd()].concat(_dirStack);
	}

	//@
	//@ ### pushd([options,] [dir | '-N' | '+N'])
	//@
	//@ Available options:
	//@
	//@ + `-n`: Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated.
	//@
	//@ Arguments:
	//@
	//@ + `dir`: Makes the current working directory be the top of the stack, and then executes the equivalent of `cd dir`.
	//@ + `+N`: Brings the Nth directory (counting from the left of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
	//@ + `-N`: Brings the Nth directory (counting from the right of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ // process.cwd() === '/usr'
	//@ pushd('/etc'); // Returns /etc /usr
	//@ pushd('+1');   // Returns /usr /etc
	//@ ```
	//@
	//@ Save the current directory on the top of the directory stack and then cd to `dir`. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
	function _pushd(options, dir) {
	  if (_isStackIndex(options)) {
	    dir = options;
	    options = '';
	  }

	  options = common.parseOptions(options, {
	    'n' : 'no-cd'
	  });

	  var dirs = _actualDirStack();

	  if (dir === '+0') {
	    return dirs; // +0 is a noop
	  } else if (!dir) {
	    if (dirs.length > 1) {
	      dirs = dirs.splice(1, 1).concat(dirs);
	    } else {
	      return common.error('no other directory');
	    }
	  } else if (_isStackIndex(dir)) {
	    var n = _parseStackIndex(dir);
	    dirs = dirs.slice(n).concat(dirs.slice(0, n));
	  } else {
	    if (options['no-cd']) {
	      dirs.splice(1, 0, dir);
	    } else {
	      dirs.unshift(dir);
	    }
	  }

	  if (options['no-cd']) {
	    dirs = dirs.slice(1);
	  } else {
	    dir = path.resolve(dirs.shift());
	    _cd('', dir);
	  }

	  _dirStack = dirs;
	  return _dirs('');
	}
	exports.pushd = _pushd;

	//@
	//@ ### popd([options,] ['-N' | '+N'])
	//@
	//@ Available options:
	//@
	//@ + `-n`: Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated.
	//@
	//@ Arguments:
	//@
	//@ + `+N`: Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.
	//@ + `-N`: Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ echo(process.cwd()); // '/usr'
	//@ pushd('/etc');       // '/etc /usr'
	//@ echo(process.cwd()); // '/etc'
	//@ popd();              // '/usr'
	//@ echo(process.cwd()); // '/usr'
	//@ ```
	//@
	//@ When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
	function _popd(options, index) {
	  if (_isStackIndex(options)) {
	    index = options;
	    options = '';
	  }

	  options = common.parseOptions(options, {
	    'n' : 'no-cd'
	  });

	  if (!_dirStack.length) {
	    return common.error('directory stack empty');
	  }

	  index = _parseStackIndex(index || '+0');

	  if (options['no-cd'] || index > 0 || _dirStack.length + index === 0) {
	    index = index > 0 ? index - 1 : index;
	    _dirStack.splice(index, 1);
	  } else {
	    var dir = path.resolve(_dirStack.shift());
	    _cd('', dir);
	  }

	  return _dirs('');
	}
	exports.popd = _popd;

	//@
	//@ ### dirs([options | '+N' | '-N'])
	//@
	//@ Available options:
	//@
	//@ + `-c`: Clears the directory stack by deleting all of the elements.
	//@
	//@ Arguments:
	//@
	//@ + `+N`: Displays the Nth directory (counting from the left of the list printed by dirs when invoked without options), starting with zero.
	//@ + `-N`: Displays the Nth directory (counting from the right of the list printed by dirs when invoked without options), starting with zero.
	//@
	//@ Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if +N or -N was specified.
	//@
	//@ See also: pushd, popd
	function _dirs(options, index) {
	  if (_isStackIndex(options)) {
	    index = options;
	    options = '';
	  }

	  options = common.parseOptions(options, {
	    'c' : 'clear'
	  });

	  if (options['clear']) {
	    _dirStack = [];
	    return _dirStack;
	  }

	  var stack = _actualDirStack();

	  if (index) {
	    index = _parseStackIndex(index);

	    if (index < 0) {
	      index = stack.length + index;
	    }

	    common.log(stack[index]);
	    return stack[index];
	  }

	  common.log(stack.join(' '));

	  return stack;
	}
	exports.dirs = _dirs;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var fs = __webpack_require__(7);
	var path = __webpack_require__(9);
	var common = __webpack_require__(5);
	var os = __webpack_require__(6);

	//@
	//@ ### ln(options, source, dest)
	//@ ### ln(source, dest)
	//@ Available options:
	//@
	//@ + `s`: symlink
	//@ + `f`: force
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ ln('file', 'newlink');
	//@ ln('-sf', 'file', 'existing');
	//@ ```
	//@
	//@ Links source to dest. Use -f to force the link, should dest already exist.
	function _ln(options, source, dest) {
	  options = common.parseOptions(options, {
	    's': 'symlink',
	    'f': 'force'
	  });

	  if (!source || !dest) {
	    common.error('Missing <source> and/or <dest>');
	  }

	  source = path.resolve(process.cwd(), String(source));
	  dest = path.resolve(process.cwd(), String(dest));

	  if (!fs.existsSync(source)) {
	    common.error('Source file does not exist', true);
	  }

	  if (fs.existsSync(dest)) {
	    if (!options.force) {
	      common.error('Destination file exists', true);
	    }

	    fs.unlinkSync(dest);
	  }

	  if (options.symlink) {
	    fs.symlinkSync(source, dest, os.platform() === "win32" ? "junction" : null);
	  } else {
	    fs.linkSync(source, dest, os.platform() === "win32" ? "junction" : null);
	  }
	}
	module.exports = _ln;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var _tempDir = __webpack_require__(28);
	var _pwd = __webpack_require__(11);
	var path = __webpack_require__(9);
	var fs = __webpack_require__(7);
	var child = __webpack_require__(29);

	// Hack to run child_process.exec() synchronously (sync avoids callback hell)
	// Uses a custom wait loop that checks for a flag file, created when the child process is done.
	// (Can't do a wait loop that checks for internal Node variables/messages as
	// Node is single-threaded; callbacks and other internal state changes are done in the
	// event loop).
	function execSync(cmd, opts) {
	  var tempDir = _tempDir();
	  var stdoutFile = path.resolve(tempDir+'/'+common.randomFileName()),
	      codeFile = path.resolve(tempDir+'/'+common.randomFileName()),
	      scriptFile = path.resolve(tempDir+'/'+common.randomFileName()),
	      sleepFile = path.resolve(tempDir+'/'+common.randomFileName());

	  var options = common.extend({
	    silent: common.config.silent
	  }, opts);

	  var previousStdoutContent = '';
	  // Echoes stdout changes from running process, if not silent
	  function updateStdout() {
	    if (options.silent || !fs.existsSync(stdoutFile))
	      return;

	    var stdoutContent = fs.readFileSync(stdoutFile, 'utf8');
	    // No changes since last time?
	    if (stdoutContent.length <= previousStdoutContent.length)
	      return;

	    process.stdout.write(stdoutContent.substr(previousStdoutContent.length));
	    previousStdoutContent = stdoutContent;
	  }

	  function escape(str) {
	    return (str+'').replace(/([\\"'])/g, "\\$1").replace(/\0/g, "\\0");
	  }

	  if (fs.existsSync(scriptFile)) common.unlinkSync(scriptFile);
	  if (fs.existsSync(stdoutFile)) common.unlinkSync(stdoutFile);
	  if (fs.existsSync(codeFile)) common.unlinkSync(codeFile);

	  var execCommand = '"'+process.execPath+'" '+scriptFile;
	  var execOptions = {
	    env: process.env,
	    cwd: _pwd(),
	    maxBuffer: 20*1024*1024
	  };

	  if (typeof child.execSync === 'function') {
	    var script = [
	      "var child = require('child_process')",
	      "  , fs = require('fs');",
	      "var childProcess = child.exec('"+escape(cmd)+"', {env: process.env, maxBuffer: 20*1024*1024}, function(err) {",
	      "  fs.writeFileSync('"+escape(codeFile)+"', err ? err.code.toString() : '0');",
	      "});",
	      "var stdoutStream = fs.createWriteStream('"+escape(stdoutFile)+"');",
	      "childProcess.stdout.pipe(stdoutStream, {end: false});",
	      "childProcess.stderr.pipe(stdoutStream, {end: false});",
	      "childProcess.stdout.pipe(process.stdout);",
	      "childProcess.stderr.pipe(process.stderr);",
	      "var stdoutEnded = false, stderrEnded = false;",
	      "function tryClosing(){ if(stdoutEnded && stderrEnded){ stdoutStream.end(); } }",
	      "childProcess.stdout.on('end', function(){ stdoutEnded = true; tryClosing(); });",
	      "childProcess.stderr.on('end', function(){ stderrEnded = true; tryClosing(); });"
	    ].join('\n');

	    fs.writeFileSync(scriptFile, script);

	    if (options.silent) {
	      execOptions.stdio = 'ignore';
	    } else {
	      execOptions.stdio = [0, 1, 2];
	    }

	    // Welcome to the future
	    child.execSync(execCommand, execOptions);
	  } else {
	    cmd += ' > '+stdoutFile+' 2>&1'; // works on both win/unix

	    var script = [
	      "var child = require('child_process')",
	      "  , fs = require('fs');",
	      "var childProcess = child.exec('"+escape(cmd)+"', {env: process.env, maxBuffer: 20*1024*1024}, function(err) {",
	      "  fs.writeFileSync('"+escape(codeFile)+"', err ? err.code.toString() : '0');",
	      "});"
	    ].join('\n');

	    fs.writeFileSync(scriptFile, script);

	    child.exec(execCommand, execOptions);

	    // The wait loop
	    // sleepFile is used as a dummy I/O op to mitigate unnecessary CPU usage
	    // (tried many I/O sync ops, writeFileSync() seems to be only one that is effective in reducing
	    // CPU usage, though apparently not so much on Windows)
	    while (!fs.existsSync(codeFile)) { updateStdout(); fs.writeFileSync(sleepFile, 'a'); }
	    while (!fs.existsSync(stdoutFile)) { updateStdout(); fs.writeFileSync(sleepFile, 'a'); }
	  }

	  // At this point codeFile exists, but it's not necessarily flushed yet.
	  // Keep reading it until it is.
	  var code = parseInt('', 10);
	  while (isNaN(code)) {
	    code = parseInt(fs.readFileSync(codeFile, 'utf8'), 10);
	  }

	  var stdout = fs.readFileSync(stdoutFile, 'utf8');

	  // No biggie if we can't erase the files now -- they're in a temp dir anyway
	  try { common.unlinkSync(scriptFile); } catch(e) {}
	  try { common.unlinkSync(stdoutFile); } catch(e) {}
	  try { common.unlinkSync(codeFile); } catch(e) {}
	  try { common.unlinkSync(sleepFile); } catch(e) {}

	  // some shell return codes are defined as errors, per http://tldp.org/LDP/abs/html/exitcodes.html
	  if (code === 1 || code === 2 || code >= 126)  {
	      common.error('', true); // unix/shell doesn't really give an error message after non-zero exit codes
	  }
	  // True if successful, false if not
	  var obj = {
	    code: code,
	    output: stdout
	  };
	  return obj;
	} // execSync()

	// Wrapper around exec() to enable echoing output to console in real time
	function execAsync(cmd, opts, callback) {
	  var output = '';

	  var options = common.extend({
	    silent: common.config.silent
	  }, opts);

	  var c = child.exec(cmd, {env: process.env, maxBuffer: 20*1024*1024}, function(err) {
	    if (callback)
	      callback(err ? err.code : 0, output);
	  });

	  c.stdout.on('data', function(data) {
	    output += data;
	    if (!options.silent)
	      process.stdout.write(data);
	  });

	  c.stderr.on('data', function(data) {
	    output += data;
	    if (!options.silent)
	      process.stdout.write(data);
	  });

	  return c;
	}

	//@
	//@ ### exec(command [, options] [, callback])
	//@ Available options (all `false` by default):
	//@
	//@ + `async`: Asynchronous execution. Defaults to true if a callback is provided.
	//@ + `silent`: Do not echo program output to console.
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ var version = exec('node --version', {silent:true}).output;
	//@
	//@ var child = exec('some_long_running_process', {async:true});
	//@ child.stdout.on('data', function(data) {
	//@   /* ... do something with data ... */
	//@ });
	//@
	//@ exec('some_long_running_process', function(code, output) {
	//@   console.log('Exit code:', code);
	//@   console.log('Program output:', output);
	//@ });
	//@ ```
	//@
	//@ Executes the given `command` _synchronously_, unless otherwise specified.
	//@ When in synchronous mode returns the object `{ code:..., output:... }`, containing the program's
	//@ `output` (stdout + stderr)  and its exit `code`. Otherwise returns the child process object, and
	//@ the `callback` gets the arguments `(code, output)`.
	//@
	//@ **Note:** For long-lived processes, it's best to run `exec()` asynchronously as
	//@ the current synchronous implementation uses a lot of CPU. This should be getting
	//@ fixed soon.
	function _exec(command, options, callback) {
	  if (!command)
	    common.error('must specify command');

	  // Callback is defined instead of options.
	  if (typeof options === 'function') {
	    callback = options;
	    options = { async: true };
	  }

	  // Callback is defined with options.
	  if (typeof options === 'object' && typeof callback === 'function') {
	    options.async = true;
	  }

	  options = common.extend({
	    silent: common.config.silent,
	    async: false
	  }, options);

	  if (options.async)
	    return execAsync(command, options, callback);
	  else
	    return execSync(command, options);
	}
	module.exports = _exec;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var os = __webpack_require__(6);
	var fs = __webpack_require__(7);

	// Returns false if 'dir' is not a writeable directory, 'dir' otherwise
	function writeableDir(dir) {
	  if (!dir || !fs.existsSync(dir))
	    return false;

	  if (!fs.statSync(dir).isDirectory())
	    return false;

	  var testFile = dir+'/'+common.randomFileName();
	  try {
	    fs.writeFileSync(testFile, ' ');
	    common.unlinkSync(testFile);
	    return dir;
	  } catch (e) {
	    return false;
	  }
	}


	//@
	//@ ### tempdir()
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ var tmp = tempdir(); // "/tmp" for most *nix platforms
	//@ ```
	//@
	//@ Searches and returns string containing a writeable, platform-dependent temporary directory.
	//@ Follows Python's [tempfile algorithm](http://docs.python.org/library/tempfile.html#tempfile.tempdir).
	function _tempDir() {
	  var state = common.state;
	  if (state.tempDir)
	    return state.tempDir; // from cache

	  state.tempDir = writeableDir(os.tempDir && os.tempDir()) || // node 0.8+
	                  writeableDir(process.env['TMPDIR']) ||
	                  writeableDir(process.env['TEMP']) ||
	                  writeableDir(process.env['TMP']) ||
	                  writeableDir(process.env['Wimp$ScrapDir']) || // RiscOS
	                  writeableDir('C:\\TEMP') || // Windows
	                  writeableDir('C:\\TMP') || // Windows
	                  writeableDir('\\TEMP') || // Windows
	                  writeableDir('\\TMP') || // Windows
	                  writeableDir('/tmp') ||
	                  writeableDir('/var/tmp') ||
	                  writeableDir('/usr/tmp') ||
	                  writeableDir('.'); // last resort

	  return state.tempDir;
	}
	module.exports = _tempDir;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);
	var fs = __webpack_require__(7);
	var path = __webpack_require__(9);

	var PERMS = (function (base) {
	  return {
	    OTHER_EXEC  : base.EXEC,
	    OTHER_WRITE : base.WRITE,
	    OTHER_READ  : base.READ,

	    GROUP_EXEC  : base.EXEC  << 3,
	    GROUP_WRITE : base.WRITE << 3,
	    GROUP_READ  : base.READ << 3,

	    OWNER_EXEC  : base.EXEC << 6,
	    OWNER_WRITE : base.WRITE << 6,
	    OWNER_READ  : base.READ << 6,

	    // Literal octal numbers are apparently not allowed in "strict" javascript.  Using parseInt is
	    // the preferred way, else a jshint warning is thrown.
	    STICKY      : parseInt('01000', 8),
	    SETGID      : parseInt('02000', 8),
	    SETUID      : parseInt('04000', 8),

	    TYPE_MASK   : parseInt('0770000', 8)
	  };
	})({
	  EXEC  : 1,
	  WRITE : 2,
	  READ  : 4
	});

	//@
	//@ ### chmod(octal_mode || octal_string, file)
	//@ ### chmod(symbolic_mode, file)
	//@
	//@ Available options:
	//@
	//@ + `-v`: output a diagnostic for every file processed//@
	//@ + `-c`: like verbose but report only when a change is made//@
	//@ + `-R`: change files and directories recursively//@
	//@
	//@ Examples:
	//@
	//@ ```javascript
	//@ chmod(755, '/Users/brandon');
	//@ chmod('755', '/Users/brandon'); // same as above
	//@ chmod('u+x', '/Users/brandon');
	//@ ```
	//@
	//@ Alters the permissions of a file or directory by either specifying the
	//@ absolute permissions in octal form or expressing the changes in symbols.
	//@ This command tries to mimic the POSIX behavior as much as possible.
	//@ Notable exceptions:
	//@
	//@ + In symbolic modes, 'a-r' and '-r' are identical.  No consideration is
	//@   given to the umask.
	//@ + There is no "quiet" option since default behavior is to run silent.
	function _chmod(options, mode, filePattern) {
	  if (!filePattern) {
	    if (options.length > 0 && options.charAt(0) === '-') {
	      // Special case where the specified file permissions started with - to subtract perms, which
	      // get picked up by the option parser as command flags.
	      // If we are down by one argument and options starts with -, shift everything over.
	      filePattern = mode;
	      mode = options;
	      options = '';
	    }
	    else {
	      common.error('You must specify a file.');
	    }
	  }

	  options = common.parseOptions(options, {
	    'R': 'recursive',
	    'c': 'changes',
	    'v': 'verbose'
	  });

	  if (typeof filePattern === 'string') {
	    filePattern = [ filePattern ];
	  }

	  var files;

	  if (options.recursive) {
	    files = [];
	    common.expand(filePattern).forEach(function addFile(expandedFile) {
	      var stat = fs.lstatSync(expandedFile);

	      if (!stat.isSymbolicLink()) {
	        files.push(expandedFile);

	        if (stat.isDirectory()) {  // intentionally does not follow symlinks.
	          fs.readdirSync(expandedFile).forEach(function (child) {
	            addFile(expandedFile + '/' + child);
	          });
	        }
	      }
	    });
	  }
	  else {
	    files = common.expand(filePattern);
	  }

	  files.forEach(function innerChmod(file) {
	    file = path.resolve(file);
	    if (!fs.existsSync(file)) {
	      common.error('File not found: ' + file);
	    }

	    // When recursing, don't follow symlinks.
	    if (options.recursive && fs.lstatSync(file).isSymbolicLink()) {
	      return;
	    }

	    var perms = fs.statSync(file).mode;
	    var type = perms & PERMS.TYPE_MASK;

	    var newPerms = perms;

	    if (isNaN(parseInt(mode, 8))) {
	      // parse options
	      mode.split(',').forEach(function (symbolicMode) {
	        /*jshint regexdash:true */
	        var pattern = /([ugoa]*)([=\+-])([rwxXst]*)/i;
	        var matches = pattern.exec(symbolicMode);

	        if (matches) {
	          var applyTo = matches[1];
	          var operator = matches[2];
	          var change = matches[3];

	          var changeOwner = applyTo.indexOf('u') != -1 || applyTo === 'a' || applyTo === '';
	          var changeGroup = applyTo.indexOf('g') != -1 || applyTo === 'a' || applyTo === '';
	          var changeOther = applyTo.indexOf('o') != -1 || applyTo === 'a' || applyTo === '';

	          var changeRead   = change.indexOf('r') != -1;
	          var changeWrite  = change.indexOf('w') != -1;
	          var changeExec   = change.indexOf('x') != -1;
	          var changeSticky = change.indexOf('t') != -1;
	          var changeSetuid = change.indexOf('s') != -1;

	          var mask = 0;
	          if (changeOwner) {
	            mask |= (changeRead ? PERMS.OWNER_READ : 0) + (changeWrite ? PERMS.OWNER_WRITE : 0) + (changeExec ? PERMS.OWNER_EXEC : 0) + (changeSetuid ? PERMS.SETUID : 0);
	          }
	          if (changeGroup) {
	            mask |= (changeRead ? PERMS.GROUP_READ : 0) + (changeWrite ? PERMS.GROUP_WRITE : 0) + (changeExec ? PERMS.GROUP_EXEC : 0) + (changeSetuid ? PERMS.SETGID : 0);
	          }
	          if (changeOther) {
	            mask |= (changeRead ? PERMS.OTHER_READ : 0) + (changeWrite ? PERMS.OTHER_WRITE : 0) + (changeExec ? PERMS.OTHER_EXEC : 0);
	          }

	          // Sticky bit is special - it's not tied to user, group or other.
	          if (changeSticky) {
	            mask |= PERMS.STICKY;
	          }

	          switch (operator) {
	            case '+':
	              newPerms |= mask;
	              break;

	            case '-':
	              newPerms &= ~mask;
	              break;

	            case '=':
	              newPerms = type + mask;

	              // According to POSIX, when using = to explicitly set the permissions, setuid and setgid can never be cleared.
	              if (fs.statSync(file).isDirectory()) {
	                newPerms |= (PERMS.SETUID + PERMS.SETGID) & perms;
	              }
	              break;
	          }

	          if (options.verbose) {
	            log(file + ' -> ' + newPerms.toString(8));
	          }

	          if (perms != newPerms) {
	            if (!options.verbose && options.changes) {
	              log(file + ' -> ' + newPerms.toString(8));
	            }
	            fs.chmodSync(file, newPerms);
	          }
	        }
	        else {
	          common.error('Invalid symbolic mode change: ' + symbolicMode);
	        }
	      });
	    }
	    else {
	      // they gave us a full number
	      newPerms = type + parseInt(mode, 8);

	      // POSIX rules are that setuid and setgid can only be added using numeric form, but not cleared.
	      if (fs.statSync(file).isDirectory()) {
	        newPerms |= (PERMS.SETUID + PERMS.SETGID) & perms;
	      }

	      fs.chmodSync(file, newPerms);
	    }
	  });
	}
	module.exports = _chmod;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(5);

	//@
	//@ ### error()
	//@ Tests if error occurred in the last command. Returns `null` if no error occurred,
	//@ otherwise returns string explaining the error
	function error() {
	  return common.state.error;
	};
	module.exports = error;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _camelCase = __webpack_require__(33);

	var _camelCase2 = _interopRequireDefault(_camelCase);

	var _fs = __webpack_require__(7);

	var _fs2 = _interopRequireDefault(_fs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Replaces all occurences of Boilerplate by the plugin name.
	**/

	exports.default = function (pluginName) {
	  var files = ['./plugin.xml', './src/android/Boilerplate.java', './src/ios/Boilerplate.swift', './src/www/boilerplate.js', './tests/tests.js', './tests/plugin.xml', './tests/app/config.xml', './package.json'];
	  var upperCamelCaseName = '' + pluginName[0].toUpperCase() + pluginName.substr(1);
	  var lowerCamelCaseName = (0, _camelCase2.default)(pluginName);

	  files.forEach(function (file) {
	    var content = _fs2.default.readFileSync(file, 'utf8');
	    var newContent = content.replace(/Boilerplate/g, upperCamelCaseName).replace(/boilerplate/g, lowerCamelCaseName);

	    _fs2.default.writeFileSync(file, newContent, 'utf8');
	  });

	  _fs2.default.rename('./src/android/Boilerplate.java', './src/android/' + upperCamelCaseName + '.java', function (err) {
	    if (err) console.log('ERROR: ' + err);
	  });
	  _fs2.default.rename('./src/ios/Boilerplate.swift', './src/ios/' + upperCamelCaseName + '.swift', function (err) {
	    if (err) console.log('ERROR: ' + err);
	  });
	  _fs2.default.rename('./src/www/boilerplate.js', './src/www/' + lowerCamelCaseName + '.js', function (err) {
	    if (err) console.log('ERROR: ' + err);
	  });
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var upperCase = __webpack_require__(34)
	var noCase = __webpack_require__(35)

	/**
	 * Camel case a string.
	 *
	 * @param  {string} value
	 * @param  {string} [locale]
	 * @return {string}
	 */
	module.exports = function (value, locale, mergeNumbers) {
	  var result = noCase(value, locale)

	  // Replace periods between numeric entities with an underscore.
	  if (!mergeNumbers) {
	    result = result.replace(/ (?=\d)/g, '_')
	  }

	  // Replace spaces between words with an upper cased character.
	  return result.replace(/ (.)/g, function (m, $1) {
	    return upperCase($1, locale)
	  })
	}


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Special language-specific overrides.
	 *
	 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
	 *
	 * @type {Object}
	 */
	var LANGUAGES = {
	  tr: {
	    regexp: /[\u0069]/g,
	    map: {
	      '\u0069': '\u0130'
	    }
	  },
	  az: {
	    regexp: /[\u0069]/g,
	    map: {
	      '\u0069': '\u0130'
	    }
	  },
	  lt: {
	    regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
	    map: {
	      '\u0069\u0307': '\u0049',
	      '\u006A\u0307': '\u004A',
	      '\u012F\u0307': '\u012E',
	      '\u0069\u0307\u0300': '\u00CC',
	      '\u0069\u0307\u0301': '\u00CD',
	      '\u0069\u0307\u0303': '\u0128'
	    }
	  }
	}

	/**
	 * Upper case a string.
	 *
	 * @param  {String} str
	 * @return {String}
	 */
	module.exports = function (str, locale) {
	  var lang = LANGUAGES[locale]

	  str = str == null ? '' : String(str)

	  if (lang) {
	    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
	  }

	  return str.toUpperCase()
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var lowerCase = __webpack_require__(36)

	var NON_WORD_REGEXP = __webpack_require__(37)
	var CAMEL_CASE_REGEXP = __webpack_require__(38)
	var CAMEL_CASE_UPPER_REGEXP = __webpack_require__(39)

	/**
	 * Sentence case a string.
	 *
	 * @param  {string} str
	 * @param  {string} locale
	 * @param  {string} replacement
	 * @return {string}
	 */
	module.exports = function (str, locale, replacement) {
	  if (str == null) {
	    return ''
	  }

	  replacement = replacement || ' '

	  function replace (match, index, value) {
	    if (index === 0 || index === (value.length - match.length)) {
	      return ''
	    }

	    return replacement
	  }

	  str = String(str)
	    // Support camel case ("camelCase" -> "camel Case").
	    .replace(CAMEL_CASE_REGEXP, '$1 $2')
	    // Support odd camel case ("CAMELCase" -> "CAMEL Case").
	    .replace(CAMEL_CASE_UPPER_REGEXP, '$1 $2')
	    // Remove all non-word characters and replace with a single space.
	    .replace(NON_WORD_REGEXP, replace)

	  // Lower case the entire string.
	  return lowerCase(str, locale)
	}


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Special language-specific overrides.
	 *
	 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
	 *
	 * @type {Object}
	 */
	var LANGUAGES = {
	  tr: {
	    regexp: /\u0130|\u0049|\u0049\u0307/g,
	    map: {
	      '\u0130': '\u0069',
	      '\u0049': '\u0131',
	      '\u0049\u0307': '\u0069'
	    }
	  },
	  az: {
	    regexp: /[\u0130]/g,
	    map: {
	      '\u0130': '\u0069',
	      '\u0049': '\u0131',
	      '\u0049\u0307': '\u0069'
	    }
	  },
	  lt: {
	    regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
	    map: {
	      '\u0049': '\u0069\u0307',
	      '\u004A': '\u006A\u0307',
	      '\u012E': '\u012F\u0307',
	      '\u00CC': '\u0069\u0307\u0300',
	      '\u00CD': '\u0069\u0307\u0301',
	      '\u0128': '\u0069\u0307\u0303'
	    }
	  }
	}

	/**
	 * Lowercase a string.
	 *
	 * @param  {String} str
	 * @return {String}
	 */
	module.exports = function (str, locale) {
	  var lang = LANGUAGES[locale]

	  str = str == null ? '' : String(str)

	  if (lang) {
	    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
	  }

	  return str.toLowerCase()
	}


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = /[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９]+/g


/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = /([a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯա-ևᏸ-ᏽᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞵꞷꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９])([A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞭꞰ-ꞴꞶＡ-Ｚ])/g


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = /([A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞭꞰ-ꞴꞶＡ-Ｚ]+)([A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞭꞰ-ꞴꞶＡ-Ｚ][a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯա-ևᏸ-ᏽᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞵꞷꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ])/g


/***/ }
/******/ ]);