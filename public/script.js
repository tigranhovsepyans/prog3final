
google.charts.load('45', { packages: ['corechart', 'table', 'geochart'] });
 google.charts.load('current', {
       'packages': ['geochart'],
       'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
     });

google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawMarkersmap);

function drawMarkersmap(){
    $.ajax({
        url: "/countries",
        dataType: "json",
        success: function(jsonData){
            var data = new google.visualization.DataTable()
            data.addColumn('string', 'title');
            data.addColumn('string', 'url');

            for (var i = 0; i < jsonData.length; i++) {
                data.addRow([
                    jsonData[i].title,
                    jsonData[i].url,
                ]);
            }
        

        var options = {
            region: '155',
            displayMode: 'markers',
            colorAxis: {colors: ['green', 'blue']}
          };

          var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
          chart.draw(data, options);
        }
        
    });
    /*var data = google.visualization.arrayToDataTable([
            ['City', 'Population', 'Area'],
            ['Moscow ...',  2761477,       1285.31],

        ]);

    var options = {
        region: 'RU',
        displayMode: 'markers',
        colorAxis: {colors: ['green', 'blue']}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
*/
}




function drawTable() {
    $.ajax({
        url: "/countries",
        dataType: "json",
        success: function (jsonData) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'title');
            data.addColumn('string', 'url');
           
            for (var i = 0; i < jsonData.length; i++) {
                data.addRow([
                    jsonData[i].title,
                    jsonData[i].url,
                ]);
            }

            var options = {
                allowHtml: true,
                showRowNumber: true,
                width: '100%',
                height: '100%'
            };

            var table = new google.visualization.Table(document.getElementById('barformat_div'));
            //var formatter = new google.visualization.BarFormat({ width: 100 });
            //formatter.format(data, 3); // Apply formatter to 3rd column
            table.draw(data, options);
        }
    });
}

$(window).resize(function () {
    drawTable();
});