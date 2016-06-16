import fs from 'fs';
import xml2js from 'xml2js';

const parser = new xml2js.Parser();
const builder = new xml2js.Builder({renderOpts:{ 'pretty': true, 'indent': ' ', 'newline': '\n', allowEmpty: true }, allowEmpty: true});

export default (platform) => {
  let platforms = [];
  const plugin = fs.readFileSync('./plugin.xml', 'utf8');

  parser.parseString(plugin, function (err, result) {
    result.plugin.platform.forEach((pf) => {
      if(pf['$'].name !== platform.toLowerCase()){
        platforms.push(pf);
      };
    });
    result.plugin.platform = platforms;

    const xml = builder.buildObject(result);
    fs.writeFileSync('./plugin.xml', xml, 'utf8');
  });
}
