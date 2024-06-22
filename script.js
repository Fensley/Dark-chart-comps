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

const home = document.getElementById("Home");
const features = document.getElementById("Features");
const pricing = document.getElementById("Pricing");
const contact = document.getElementById("Contact");
const sign = document.getElementById("Sign");
const chart = document.querySelector(".chat");
const thisis = document.querySelector(".thisis");
const thisis1 = document.querySelector(".thisis1");
const thish1 = document.getElementById("thish1").innerHTML;
const all = document.querySelectorAll(".toggle");
const valueone = document.getElementById("valueone");
const valuetwo = document.getElementById("valuetwo");
const inputV = document.getElementById("inputv");

valuetwo.textContent = `$${inputV.value}`;

inputV.addEventListener("input", (event) => {
  valuetwo.textContent = `$ ${Math.round(event.target.value)}`;
});

function theven() {
  contact.addEventListener("click", () => {
    contact.style.color = "gray";
    home.style.color = "white";
    features.style.color = "white";
    pricing.style.color = "white";
    document.getElementById("thish1").innerHTML = "908-637-0326";
    chart.style.display = "none";
    thisis.style.visibility = "visible";
  });

  pricing.addEventListener("click", () => {
    chart.style.display = "none";
    thisis.style.visibility = "visible";
    features.style.color = "white";
    pricing.style.color = "gray";
    home.style.color = "white";
    contact.style.color = "white";
    document.getElementById("thish1").innerHTML = "2999.00 usd";
  });
  features.addEventListener("click", () => {
    contact.style.color = "white";

    chart.style.display = "none";
    thisis.style.visibility = "visible";
    features.style.color = "gray";
    home.style.color = "white";
    pricing.style.color = "white";
    document.getElementById("thish1").innerHTML = "this is features";
  });

  home.addEventListener("click", () => {
    contact.style.color = "white";

    chart.style.display = "block";
    thisis.style.visibility = "hidden";

    features.style.color = "white";
    pricing.style.color = "white";
    home.style.color = "gray";
  });
}

theven();
