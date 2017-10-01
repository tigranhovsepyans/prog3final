var scrapeIt = require("scrape-it");
var jsonfile = require('jsonfile');
var file = 'data/data1.json';


function scrapping(){
    scrapeIt("http://www.4icu.org/Europe/", {
    countries: {
        listItem: ".col-xs-offset-3 > a",
        data: {
            // }, body > div > div:nth-child(6) > div.panel-body > div > table > tbody > tr:nth-child(1)
            title: {
                selector: "img",
                attr: "alt"
                
            },
            url: {
                attr: "href",
                convert: function(x){
                    return "http://www.4icu.org/Europe" + x
                }
            },
        }
    }
}).then(function (page) {
    
    console.log(page);
    jsonfile.writeFile(file, page, { spaces: 2 }, function (err) {
        console.error(err);

    })
});
}






/*function scrapeloop() {
    for (var i = 1; i <= 5; i++) {
        (function (index) {
            setTimeout(function () {
                console.log(index);
                scraper(index);
            }, index * 3000);
        })(i);
    }
}*/

//scrapeloop()
scrapping();
