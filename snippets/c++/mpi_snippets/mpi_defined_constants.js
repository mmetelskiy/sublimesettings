var folder = 'defined_constants/';
var fs = require('fs');
var file_string = "<snippet>\n\t" +
	"<content><![CDATA[|snippet|]]></content>\n\t" +
	"<tabTrigger>|tabTrigger|</tabTrigger>\n\t" +
	"<scope>source.c++</scope>\n\t" +
	"<description>|description|</description>\n" +
	"</snippet>";

var constants = [
	"MPI_CHAR",
	"MPI_SHORT",
	"MPI_INT",
	"MPI_LONG",
	"MPI_UNSIGNED_CHAR",
	"MPI_UNSIGNED_SHORT",
	"MPI_UNSIGNED",
	"MPI_UNSIGNED_LONG",
	"MPI_FLOAT",
	"MPI_DOUBLE",
	"MPI_LONG_DOUBLE",
	"MPI_BYTE",
	"MPI_PACKED",

	"MPI_COMM_WORLD",

	"MPI_STATUS_IGNORE",

	"MPI_Status",
	"MPI_Group",
	"MPI_Comm",
	"MPI_Datatype",
];

constants.forEach(function(constant) {
	var tabTrigger = constant.toLowerCase().replace(/_/g, '');
	var string = file_string
		.replace(/\|(snippet|description)\|/g, constant)
		.replace('|tabTrigger|', tabTrigger);

	fs.writeFile(folder + constant + '.sublime-snippet', string);
});
