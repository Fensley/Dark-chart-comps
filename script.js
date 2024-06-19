google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Sales", ""],
    ["0", 1000, 0],
    ["1", 1170, 460],
    ["2", 660, 1120],
    ["3", 1030, 100],
    ["4", 1170, 460],
    ["5", 660, 1120],
    ["6", 1030, 100],
    ["7", 1030, 100],
  ]);

  var options = {
    curveType: "function",
    legend: { position: "bottom" },
    backgroundColor: "#1d2531",
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}
