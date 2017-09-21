var scrapeIt = require("scrape-it");
var jsonfile = require('jsonfile');
var file = 'data1.json';




/*
scrapeIt("http://www.4icu.org/Europe/", {
    title: "head title",
    universities: {
        listItem: ".col-xs-offset-3",
        data: {
            // }, body > div > div:nth-child(6) > div.panel-body > div > table > tbody > tr:nth-child(1)
            title: "a",
            url: {
                selector: "a",
                attr: "href"
            },
            location: "div:nth-child(6)" // body > div > div:nth-child(6) > div > div > div.col-xs-offset-3.col-sm-4.col-sm-offset-2.col-md-3.col-md-offset-3.col-lg-3.col-lg-offset-3
            
        }
    }
}).then(function (page) {
    console.log(page);
    jsonfile.writeFile(file, page, { spaces: 2 }, function (err) {
        console.error(err);

    })
});
*/


function scrapping(){
    scrapeIt("http://www.4icu.org/Europe/", {
    title: "head title",
    countries: {
        listItem: ".col-xs-offset-3 > a",
        data: {
            // }, body > div > div:nth-child(6) > div.panel-body > div > table > tbody > tr:nth-child(1)
            title: {
                attr: "href"
            },
            url: {
                selector: "a > img",
                attr: "href"
            },
            location: "div:nth-child(6)" // body > div > div:nth-child(6) > div > div > div.col-xs-offset-3.col-sm-4.col-sm-offset-2.col-md-3.col-md-offset-3.col-lg-3.col-lg-offset-3
            
        }
    }
}).then(function (page) {
    
    console.log(page);
    jsonfile.writeFile(file, page, { spaces: 2 }, function (err) {
        console.error(err);

    })
});
}

function scrapeloop() {
    for (var i = 1; i <= 5; i++) {
        (function (index) {
            setTimeout(function () {
                console.log(index);
                scraper(index);
            }, index * 3000);
        })(i);
    }
}

//scrapeloop()

