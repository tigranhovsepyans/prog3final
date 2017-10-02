var scrapeIt = require("scrape-it");
var jsonfile = require('jsonfile');
var file = 'data/datax.json';

scrapeIt("http://www.4icu.org/ru/", {
    universities: {
        listItem: ".table > tbody > tr",
        data: {
            rank: "td > kbd",
            title: "td > a",
            url: {
                selector: "td > a",
                attr: "href"
            },
            location: "td:nth-child(3)" // body > div > div:nth-child(6) > div.panel-body > div > table > tbody > tr:nth-child(1) > td:nth-child(3)
            
        }
    }
}).then(function (page) {
    console.log(page);
    jsonfile.writeFile(file, page, {spaces: 2, flag: 'a' }, function (err) {
        console.error(err);

    })
});