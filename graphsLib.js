
function createCanvas(width, height) {
        let canvas = document.createElement('canvas');
        canvas.classList.add("graph");
        canvas.style = "border:1px solid lightgray;"
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        return [ctx, canvas];
}

function createHistogram(data=[], color="dodgerblue", xAxis="x axis", yAxis="y axis"){
        
        //Set the width of the canvas
        let length = data.length;

        //Set the height of the canvas
        let max = Math.max.apply(null, data)+36;
        const [ctx, canvas] = createCanvas(26*length, max);
        
        let x = 5;
        for(let i=0;i<data.length;i++){
            ctx.fillStyle = color;
            let startY = max - data[i];
            let width = 20;
            ctx.fillRect(x, startY, width, data[i]);
            
            ctx.fillStyle = 'black';
            ctx.fillText(`${data[i]}`, x+2, startY-3, 30)
            x = x + width + 5;
        }
        ctx.fillText(`X: ${xAxis} \n Y: ${yAxis}`, length*18, 16);
        return canvas;
}

//createHistogram([160,150,140,100,400,400,120,340,10,20,36,34,15,355,77,233], "green", "temp", "hydration");

function sumArray(total, num){
        return total + num;
}

const randomColoring = () => "#"+Math.floor(Math.random()*16777215).toString(16);

function createPieChart(data=[], width=400, height=400, title="Pie Chart") {

    const [ctx, canvas] = createCanvas(width, height);
    let angle = 0;
    let sum = data.reduce(sumArray, 0);
    const colors = [];

    for(let i=0;i<data.length;i++){
        let randomColor = randomColoring();
        //Avoid duplicating colors
        if(colors.includes(randomColor)){
            while(colors.includes(randomColor)){
                randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
            }
        }else{
            colors.push(randomColor);
        }
        ctx.fillStyle=randomColor;
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(width/2, height/2);
        ctx.arc(width/2, height/2, 120, angle*Math.PI, (angle+(data[i]/sum)*2)*Math.PI);
        ctx.lineTo(width/2, height/2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath(); 
        //ctx.fillText(`${data[i]}`, width/2, height/2);
        angle += ((data[i]/sum)*2);
    }
    ctx.fillStyle = "black";
    ctx.fillText(`title: ${title}`, width/2-26, 16);

    return canvas;

}

//createPieChart([25,25,25,25],400,400,"testing");


function createScatterPlot(data=[], color="red", title="Scatter Plot", xAxis="x axis", yAxis="y axis"){

    const xCord = [];
    const yCord = [];
    for(let i=0;i<data.length;i++){
        xCord.push(data[i][0]);
        yCord.push(data[i][1]);
    }
    //Set the width of the canvas
    let width = Math.max.apply(null, xCord)+36;

    //Set the height of the canvas
    let height = Math.max.apply(null, yCord)+36;
    
    const [ctx, canvas] = createCanvas(width, height);
    ctx.fillStyle = color;
    for(let i=0;i<data.length;i++){
        ctx.beginPath();
        let scaleX = data[i][0];
        let scaleY = data[i][1];
        ctx.arc(scaleX, scaleY, 2, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    ctx.fillStyle = 'black';
    ctx.fillText(title, width/2*0.9, 16);

    ctx.fillText(`X: ${xAxis}`, width/2*1.6, 16);
    ctx.fillText(`Y: ${yAxis}`, width/2*1.6, 28);
    return canvas;
}

/*const testData = () => {
    const data = [];
    for(let i=0;i<100;i++){
        data.push([Math.floor(Math.random()*500), Math.floor(Math.random()*500)]);
    }
    return data;
}*/
//const data = testData();

//createScatterPlot(data, "blue", "ice cream", "temp", "ice cream");

function createLineChart(data=[], width, height, color="red", title="Line Chart", xAxis="x axis", yAxis="y axis"){
    
    const [ctx, canvas] = createCanvas(width, height);

    let x = 5;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, data[0]);
    for(let i=0;i<data.length; i++){
        ctx.lineTo(x, data[i]);
        ctx.stroke();
        x += 10;
    }
    ctx.closePath();
    ctx.fillStyle = 'black';
    ctx.fillText(title, width/2*0.96, 16);

    ctx.fillText(`X: ${xAxis}`, width/2*1.66, 16);
    ctx.fillText(`Y: ${yAxis}`, width/2*1.66, 28);

    return canvas;
}

/*const data1 = ()=>{
    const data = [];
    for(let i=0;i<500;i++){
        data.push(Math.floor(Math.random()*400));
    }
    return data;
}*/

//createLineChart(data1(),700,620);

function createStackedHistogram(data=[], width, height, title="Stacked Histogram", name=[]){
    
    const [ctx, canvas] = createCanvas(width, height);
    const colors = [];
    for(let i=0;i<data[0].length;i++){
        colors.push(randomColoring());
    }
    let x = 5;
    let wide = 20;
    for(let i=0;i<data.length;i++){
        for(let j=0;j<data[i].length;j++){
            let startY = height - data[i][j];
            ctx.fillStyle = colors[j];
            ctx.fillRect(x, startY, wide, data[i][j]);
        }
        x += 40;
    }
    
    ctx.fillStyle = colors[0];
    ctx.fillRect(width/2*1.6, 12, 26, 10);
    ctx.fillStyle = colors[1];
    ctx.fillRect(width/2*1.6, 26, 26, 10);
    ctx.fillStyle = colors[2];
    ctx.fillRect(width/2*1.6, 40, 26, 10);

    ctx.fillStyle = "black";
    ctx.fillText(`${title}`, width/2*0.9, 16);
    let lineHeight = 0
    for(let i=0;i<name.length;i++){
        ctx.fillText(`${name[i]}`, width/2*1.76, 18+lineHeight);
        lineHeight += 16;
    }
    return canvas;
}

//createStackedHistogram([[400,300,200],[500,460,430], [480,260,120],[500,460,430],[500,460,430],[500,460,430]], 600, 600, "my chart", ["temp", "height", "weight"]);

function getRandomColorRGBA(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createAreaGraph(data=[], width, height, names=[], title="Area Graph"){

    const [ctx, canvas] = createCanvas(width, height);
    const colors = [];
    let x = 0;
    
    for(let j=0;j<data.length;j++){
        x = 0;
        let color = `rgba(${getRandomColorRGBA(0, 255)}, ${getRandomColorRGBA(0, 255)}, ${getRandomColorRGBA(0, 255)}, 0.46)`;
        colors.push(color);
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.lineTo(x, height);
        for(let i=0;i<data[j].length; i++){
                ctx.lineTo(x, data[j][i]);
                x += 20;
        }
        ctx.lineTo(x-20, height);
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
    
    ctx.fillStyle = 'black';
    ctx.fillText(title, width/2*0.96, 16);

    let lineHeight = 12;
    let gap = 0;
    for(let i=0;i<colors.length;i++){
        ctx.fillStyle = colors[i];
        ctx.fillRect(width/2*1.76, lineHeight, 26, 10);
        ctx.fillStyle = 'black';
        ctx.fillText(`${names[i]}`, width/2*1.85, 20+gap);
        lineHeight += 14;
        gap += 14.6;
    }

    return canvas;
}

//createAreaGraph([data1(), data1(), data1()], 800, 400, ['temp', 'width', 'height']);

function drawPolygon(ctx, centerX, centerY, radius, numAngles, color){
    
    ctx.save();
    let angle = 360/numAngles;
    ctx.translate(centerX, centerY);
    ctx.lineWidth = 2;
    ctx.fillStyle = color;
    
    ctx.beginPath();
    ctx.moveTo(0, -radius);
    for(let i=0;i<numAngles;i++){
        ctx.rotate(angle*Math.PI/180);
        ctx.lineTo(0, -radius);
    }
    ctx.fill();
    ctx.closePath();
    ctx.restore();
}

function distributeData(ctx, centerX, centerY, radius, numAngles, data, colors){

    ctx.save();
    let angle = 360/numAngles;
    ctx.translate(centerX, centerY);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(260, 60, 100, 0.54)";

    
    for(let i=0;i<data.length;i++){
        if(i>=colors.length){
            ctx.fillStyle = colors[0];
        }else{
            ctx.fillStyle = colors[i];
        }
        
        ctx.moveTo(0, -(data[i][0]/radius)*100);
        ctx.beginPath();
        for(let j=0;j<numAngles;j++){
            ctx.rotate(angle*Math.PI/180);
            ctx.lineTo(0, -(data[i][j]/radius*100));
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
    }
    
    ctx.restore();

}


function createRadarGraph(data=[], width, height, radius, title="Radar Graph", dataColors=["rgba(200, 103, 100, 0.66)"]){
    const [ctx, canvas] = createCanvas(width, height);
    ctx.fillStyle = 'black';
    ctx.fillText(`${title}`, width/2-23, 16);
    const numAngles = data[0].length;
    const centerX = width/2;
    const centerY = height/2+18;
    let opacity = 0.16;
    while(radius>60){
        drawPolygon(ctx, centerX, centerY, radius, numAngles,
            `rgba(0, 203, 255, ${opacity})`);
        opacity += 0.16;
        radius-=40;
    }

    distributeData(ctx, centerX, centerY, radius, numAngles, data, dataColors);
    return canvas;
    
}

//createRadarGraph([[60, 50, 40, 90, 80], [60, 60, 60, 0, 0], [7, 60, 60, 0, 54]], 500, 500, 240, "test radar", ["rgba(200, 103, 100, 0.66)", "rgba(100, 200, 100, 0.66)", "rgba(100, 100, 200, 0.66)"]);

function createPyramidGraph(data=[], color='dodgerblue', title="Pyramid Graph", categories=[], groups=["1", "2"]){
    
    let height = data.length*(16+5)+60;
    const elements = [];
    for(let i=0;i<data.length;i++){
        elements.push(data[i][0]);
        elements.push(data[i][1]);
    }
    let width = Math.max.apply(null, elements)*2 + 160;
    const [ctx, canvas] = createCanvas(width, height);
    ctx.beginPath();
    ctx.moveTo(width/2, 60);
    ctx.lineTo(width/2, height);
    ctx.closePath();
    ctx.stroke();

    const left = [];
    const right = [];

    for(let i=0;i<data.length;i++){
        left.push(data[i][0]);
        right.push(data[i][1]);
    }

    const sortedLeft = left.sort((a, b)=>a-b);
    const sortedRight = right.sort((a, b)=>a-b);
    ctx.fillStyle = color;
    let y = 60;
    for(let i=0;i<sortedLeft.length;i++){
        let startX = width/2 - sortedLeft[i]-3;
        ctx.fillRect(startX, y, sortedLeft[i], 16);

        let startX2 = width/2+3;
        ctx.fillRect(startX2, y, sortedRight[i], 16);

        ctx.fillText(`${categories[i]}`, 8, y+12);
        y += 20;
    }

    ctx.fillStyle = 'black';
    ctx.fillText(`${title}`, width/2*0.88, 16);
    ctx.fillText(`${groups[0]}`, width/2.64*0.88, 42);
    ctx.fillText(`${groups[1]}`, width/1.36*0.88, 42);
    return canvas;

}

const histogram = {
    createHistogram
}

const pieChart = {
    createPieChart
}

const areaGraph = {
    createAreaGraph
}

const lineChart = {
    createLineChart
}

const radarGraph = {
    createRadarGraph
}

const stackedHistogram = {
    createStackedHistogram
}

const scatterPlot = {
    createScatterPlot
}

const pyramidGraph = {
    createPyramidGraph
}


//createPyramidGraph([[30, 50], [80, 120], [50, 70], [70, 80], [120, 60], [126, 96]], 'rgba(255, 100, 100, 0.6)', "Survey Data", ["group1","group2","group3","group4","group5","group6"]);


