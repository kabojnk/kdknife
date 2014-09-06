var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

var xml = fs.readFileSync('data/kanjidic2.xml', 'utf8');

parser.parseString(xml, function(err, result){
	if (err) {
		console.log(err);
	}
	if (result.kanjidic2.character != null) {
		result.kanjidic2.character.forEach(function(element, index, array){
			console.dir(element);		
		});
	}
	//console.dir(result);
	//console.log(util.inspect(result, false, null));
	console.log('Done');
});

//console.log(xml);