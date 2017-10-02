var scrapeIt = require("scrape-it");
var jsonfile = require('jsonfile');
var file = 'data/data2.json';


scrapeIt("http://www.4icu.org/fr/", {
	franchuniversity: {

		listItem: ".table > tbody > tr",
		data:{

			rank: "td > kbd",

			title: "td > a",

			location: 'td:nth-child(3)',

		}
	}


    
}).then(page => {
    console.log(page);
    jsonfile.writeFile(file, page, {spaces: 2 }, function (err) {
        console.error(err);

    })
});