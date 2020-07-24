
let example0 = document.getElementsByClassName('examples')[0];
const hist = histogram.createHistogram([160,150,140,100,400,400,120,340,10,20,36,34,15,355,77,233], "green", "temp", "hydration");
example0.appendChild(hist);

let example1 = document.getElementsByClassName('examples')[1];
const pie = pieChart.createPieChart([25,25,25,25],400,400,"testing");
example1.appendChild(pie);

let example2 = document.getElementsByClassName('examples')[2];
const testData = () => {
    const data = [];
    for(let i=0;i<100;i++){
        data.push([Math.floor(Math.random()*500), Math.floor(Math.random()*500)]);
    }
    return data;
}
const scatter = scatterPlot.createScatterPlot(testData(), "blue", "ice cream", "temp", "ice cream");
example2.appendChild(scatter);

let example3 = document.getElementsByClassName('examples')[3];
const testData2 = ()=>{
    const data = [];
    for(let i=0;i<500;i++){
        data.push(Math.floor(Math.random()*400));
    }
    return data;
}
const line = lineChart.createLineChart(testData2(),700,620);
example3.appendChild(line);

let example4 = document.getElementsByClassName('examples')[4];
const stackedHist = stackedHistogram.createStackedHistogram([[400,300,200],[500,460,430], [480,260,120],[500,460,430],[500,460,430],[500,460,430]], 600, 600, "my chart", ["temp", "height", "weight"]);
example4.appendChild(stackedHist);


let example5 = document.getElementsByClassName('examples')[5];
const area = areaGraph.createAreaGraph([testData(), testData(), testData()], 800, 400, ['temp', 'width', 'height']);
example5.appendChild(area);

let example6 = document.getElementsByClassName('examples')[6];
const pyramid = pyramidGraph.createPyramidGraph([[30, 50], [80, 120], [50, 70], [70, 80], [120, 60], [126, 96]], 'rgba(255, 100, 100, 0.6)', "Survey Data", ["group1","group2","group3","group4","group5","group6"]);
example6.appendChild(pyramid);

let example7 = document.getElementsByClassName('examples')[7];
const radar = radarGraph.createRadarGraph([[60, 50, 40, 90, 80], [60, 60, 60, 0, 0], [7, 60, 60, 0, 54]], 500, 500, 240, "test radar", ["rgba(200, 103, 100, 0.66)", "rgba(100, 200, 100, 0.66)", "rgba(100, 100, 200, 0.66)"]);
example7.appendChild(radar);
