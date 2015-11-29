var jsdom = require('jsdom')
var folder = 'functions/';
var fs = require('fs');
var file_string = "<snippet>\n\t" +
	"<content><![CDATA[|snippet|]]></content>\n\t" +
	"<tabTrigger>|tabTrigger|</tabTrigger>\n\t" +
	"<scope>source.c++</scope>\n\t" +
	"<description>|description|</description>\n" +
	"</snippet>";

var link = "http://www.mpich.org/static/docs/latest/www3/";
jsdom.env(link, function(err, window) {
		var links = [];

		[].slice.call(
			window.document.getElementsByTagName('a'))
			.forEach(e => links.push(e.href));

		links.forEach(function(link, index) {
			jsdom.env(link, function(err, window) {
				var string = window.document.getElementsByTagName('pre')[0].innerHTML.slice(0, -1);

				var fileName = string.match("MPI\\w+(?=\\()")[0];

				var arguments = string
							.substring(string.indexOf('(') + 1, string.indexOf(')'))
							.trim()
							.split(/\s*,\s*/)
							.map(function(s) {
								var m = s.match(/\s([\*a-z]+$)/);
								return m ? m[1] : []
							});
				// console.log(arguments);

				var snippet = '\n' +  fileName + '(' + (arguments.length > 1 ? '\n\t' : '');

				arguments.forEach(function(arg, i, arr) {
					snippet += '${' + (i + 1) + ':' + arg + '}';
					snippet += i < arr.length - 1 ? ',\n\t' : ');${0}'
				});

				var tab = fileName.toLowerCase().replace(/_/g, '');

				string = file_string
					.replace('|snippet|', snippet)
					.replace('|tabTrigger|', tab)
					.replace('|description|', string);

				fs.writeFile(folder + fileName + '.sublime-snippet', string);
				console.log( index );
			});
		});
	});


