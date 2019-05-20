var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(ufosightings) {
    console.log(ufosightings);
    var row = tbody.append("tr");
    Object.entries(ufosightings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
});

var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
    //alert("clicked")
    d3.event.preventDefault();

    var dateInput = d3.select("#datetime");
    var dateToFilter = d3.select("#datetime").node().value;



    function onDate(ufosightings) {
        return ufosightings.datetime == dateToFilter;
    }

        var ufoSightingsOnDate = tableData.filter(onDate)
        console.log(ufoSightingsOnDate);

    tbody.html("")
    ufoSightingsOnDate.forEach(function(ufosightings) {
        var row = tbody.append("tr");
        Object.entries(ufosightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    });
});

                     