"use strict"

function createCanvas(width, height) {
        let canvas = document.createElement('canvas');
        let body = document.querySelector('body');
        canvas.classList.add("graph");
        canvas.style = "border:1px solid lightgray;"
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        body.appendChild(canvas);
        return ctx;
}

function Graph() {
    
}

Graph.prototype = {
    
}

function createHistogram(data=[], color="dodgerblue", xAxis="x axis", yAxis="y axis"){
        
        //Set the width of the canvas
        let length = data.length;

        //Set the height of the canvas
        let max = Math.max.apply(null, data)+36;
        const ctx = createCanvas(26*length, max);
        
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
}

//createHistogram([160,150,140,100,400,400,120,340,10,20,36,34,15,355,77,233], "green", "temp", "hydration");

function sumArray(total, num){
        return total + num;
}

const randomColoring = () => "#"+Math.floor(Math.random()*16777215).toString(16);

function createPieChart(data=[], width=400, height=400, title="Pie Chart") {

    const ctx = createCanvas(width, height);
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
    
    const ctx = createCanvas(width, height);
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
}

const testData = () => {
    const data = [];
    for(let i=0;i<100;i++){
        data.push([Math.floor(Math.random()*500), Math.floor(Math.random()*500)]);
    }
    return data;
}
//const data = testData();

//createScatterPlot(data, "blue", "ice cream", "temp", "ice cream");

function createLineChart(data=[], width, height, color="red", title="Line Chart", xAxis="x axis", yAxis="y axis"){
    
    const ctx = createCanvas(width, height);

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
}

/*const data1 = ()=>{
    const data = [];
    for(let i=0;i<500;i++){
        data.push(Math.floor(Math.random()*400));
    }
    return data;
}

createLineChart(data1(),700,620);*/

function createStackedHistogram(data=[], width, height, title="Stacked Histogram", name=[]){
    
    const ctx = createCanvas(width, height);
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
}

//createStackedHistogram([[400,300,200],[500,460,430], [480,260,120],[500,460,430],[500,460,430],[500,460,430]], 600, 600, "my chart", ["temp", "height", "weight"]);

function createAreaGraph(data=[], width, height){

    const ctx = createCanvas(width, height);


}

//createAreaGraph([25, 30, 45], 600, 400);

function createRadarGraph(){
    var context = createCanvas(500, 500);
    function drawPath(x, y, n, r, style) {
        var i,ang;
        ang = Math.PI*2/n //旋转的角度
        context.save();//保存状态
        //set style
        for( var styleList in style) {
            context[styleList] = style[styleList];
        }
        context.translate(x, y);//原点移到x,y处，即要画的多边形中心
        context.moveTo(0, -r);//据中心r距离处画点
        context.beginPath();
        for(i = 0;i < n; i ++) {
            context.rotate(ang)//旋转
            context.lineTo(0, -r);//据中心r距离处连线
        }
        context.closePath();
        context.stroke();
        context.fill();
        context.restore();//返回原始状态
    }
    //
    drawPath(250, 250, 5, 240, {
        fillStyle: 'rgba(243, 231, 206, 1)',
        lineWidth: '2',
        strokeStyle: 'rgba(247, 206, 158, 1)'
    });
    drawPath(250, 250, 5, 200, {
        fillStyle: '#F6DFAD',
        strokeStyle: 'rgba(255, 255, 255, 0)'
    });
    drawPath(250, 250, 5, 160, {
        fillStyle: '#F7D792',
        strokeStyle: 'rgba(255, 255, 255, 0)'
    });
    drawPath(250, 250, 5, 120, {
        fillStyle: '#F7CF80',
        strokeStyle: 'rgba(255, 255, 255, 0)'
    });
    drawPath(250, 250, 5, 80, {
        fillStyle: '#F8C96D',
        strokeStyle: 'rgba(255, 255, 255, 0)'
    });
    drawPath(250, 250, 5, 40, {
        fillStyle: '#F8C662',
        strokeStyle: 'rgba(255, 255, 255, 0)'
    });
    
    
    
    //创建能力盘
    var ability = {
        num : [3.521,3.12,2.5,3,4.79],
        style: {
            fillStyle: 'rgba(255, 158, 92, .5)',
            lineWidth: '2',
            strokeStyle: '#FD7A42'
        }
    }
    function setAbility(x, y, n, r, style, ability) {
        var i,ang;
        ang = Math.PI*2/5 //旋转的角度
        context.save();//保存状态
        //set style
        for( var styleList in style) {
            context[styleList] = style[styleList];
        }
        context.translate(x, y);//原点移到x,y处，即要画的多边形中心
        context.moveTo(0, -parseFloat(ability[0] * 40 + 40));//绘制起点
        context.beginPath();
        //5*40+40
        for(i = 0;i < n; i ++) {
            context.rotate(ang)//旋转
            context.lineTo(0, -parseFloat(ability[i] * 40 + 40));//据中心r距离处连线
        }
        context.closePath();
        context.stroke();
        context.fill();
        context.restore();//返回原始状态
    }
    setAbility(250, 250, 5, 100, ability.style, ability.num);
}

createRadarGraph();

function createRandomAreaSpreadGraph(){

}

