var scrapeIt = require("scrape-it");
var jsonfile = require('jsonfile');
var file = 'datax.json';

scrapeIt("http://www.4icu.org/ru/russian-universities.htm", {
    title: "head title",
    universities: {
        listItem: ".panel-body",
        data: {
            // rank: {
            //     selector: "tbody tr td kbd ",
            //     how: 'html',
            // }, body > div > div:nth-child(6) > div.panel-body > div > table > tbody > tr:nth-child(1)
            row: {
                selector: "div.panel-body > div > table > tbody > tr",
                how: "html",
            }
        }
    }
}).then(function (page) {
    console.log(page);
    jsonfile.writeFile(file, page, { spaces: 2 }, function (err) {
        console.error(err);

    })
});