var tj = require('togeojson');
var fs = require('fs');
// node doesn't have xml parsing or a dom. use jsdom
var jsdom = require('jsdom').jsdom;
var util = require('util');

var kml_files = [
	'3.kml',
	'30.kml'
];

for (var kml_files_index in kml_files) {
	var fn = kml_files[kml_files_index];
	var kml = jsdom(fs.readFileSync(fn, 'utf8'));
	var converted = tj.kml(kml);
	var convertedWithStyles = tj.kml(kml, {
		styles: true
	});

	console.log('==================================================================================');
	console.log(fn);
	console.log('==================================================================================');
	for (var i in convertedWithStyles.features) {
	  var pm = convertedWithStyles.features[i];
	  console.log(pm);
		console.log('');
	}
}
