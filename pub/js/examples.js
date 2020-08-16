
//Histogram Demo
let example0 = document.getElementsByClassName('examples')[0];
const hist = histogram.createHistogram([160,150,140,100,400,400,120,340,10,20,36,34,15,355,77,233], "dodgerblue", "temperature", "hydration");
example0.appendChild(hist);


//Pie chart Demo
let example1 = document.getElementsByClassName('examples')[1];
const pie = pieChart.createPieChart([30,5,5,40,20],400,400,"Survey Data", ["label1", "label2", "label3", "labek4", "label5"]);
example1.appendChild(pie);


//Scatter plot Demo
let example2 = document.getElementsByClassName('examples')[2];
const testData = () => {
    const data = [];
    for(let i=0;i<100;i++){
        data.push([Math.floor(Math.random()*500), Math.floor(Math.random()*500)]);
    }
    return data;
}
const scatter = scatterPlot.createScatterPlot(testData(), "blue", "Correlation", "temperature", "ice cream");
example2.appendChild(scatter);


//Line chart Demo
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


//Stacked histogram Demo
let example4 = document.getElementsByClassName('examples')[4];
const stackedHist = stackedHistogram.createStackedHistogram([[400,300,200],[500,460,430], [480,260,120],[500,460,430],[500,460,430],[500,460,430],[200,380,40],[600,100,270],[230,300,100],[460,330,200],[300,700,200],[200,340,500],[450,50,30],[40,306,20],[50,30,200]], 600, 800, "Sample Data", ["weight", "height", "age"]);
example4.appendChild(stackedHist);


//Area graph Demo
let example5 = document.getElementsByClassName('examples')[5];
const area = areaGraph.createAreaGraph([testData2(), testData2(), testData2()], 800, 400, ['temperature', 'weight', 'height']);
example5.appendChild(area);


//Pyramid graph Demo
let example6 = document.getElementsByClassName('examples')[6];
const pyramid = pyramidGraph.createPyramidGraph([[30, 50], [80, 120], [50, 70], [70, 80], [120, 60], [126, 96]], 'rgba(255, 100, 100, 0.6)', "Survey Data", ["group1","group2","group3","group4","group5","group6"]);
example6.appendChild(pyramid);


//Radar graph Demo
let example7 = document.getElementsByClassName('examples')[7];
const radar = radarGraph.createRadarGraph([[60, 50, 40, 90, 80], [60, 60, 60, 0, 0], [7, 60, 60, 0, 54]], 500, 500, 240, "Radar Graph", ["rgba(200, 103, 100, 0.66)", "rgba(100, 200, 100, 0.66)", "rgba(100, 100, 200, 0.66)"]);
example7.appendChild(radar);
