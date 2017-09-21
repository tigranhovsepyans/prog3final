var scrapeIt = require("scrape-it");
var jsonfile = require('jsonfile');
var file = 'datax.json';

scrapeIt("http://www.4icu.org/ru/", {
    title: "head title",
    universities: {
        listItem: ".table > tbody > tr",
        data: {
            // rank: {
            //     selector: "tbody tr td kbd ",
            //     how: 'html',
            // }, body > div > div:nth-child(6) > div.panel-body > div > table > tbody > tr:nth-child(1)
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
    jsonfile.writeFile(file, page, { spaces: 2 }, function (err) {
        console.error(err);

    })
});