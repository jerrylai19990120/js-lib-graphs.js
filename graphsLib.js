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

function createHistogram(data=[], color="dodgerblue", xAxis="", yAxis=""){
        
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

createHistogram([160,150,140,100,400,400,120,340,10,20,36,34,15,355,77,233], "green", "temp", "hydration");

function sumArray(total, num){
        return total + num;
}

function createPieChart(data=[], width=400, height=400, title="") {

    const ctx = createCanvas(width, height);
    let angle = 0;
    let sum = data.reduce(sumArray, 0);
    const colors = [];

    for(let i=0;i<data.length;i++){
        let randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
        //Avoid duplicating colors
        if(colors.includes(randomColor)){
            while(colors.includes(randomColor)){
                randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
            }
        }else{
            colors.push(randomColor);
        }
        ctx.fillStyle=randomColor;
        ctx.beginPath();
        ctx.moveTo(width/2, height/2);
        ctx.arc(width/2, height/2, 120, angle*Math.PI, (angle+(data[i]/sum)*2)*Math.PI);
        ctx.fill();
        ctx.closePath(); 
        //ctx.fillText(`${data[i]}`, width/2, height/2);
        angle += ((data[i]/sum)*2);
    }
    ctx.fillStyle = "black";
    ctx.fillText(`title: ${title}`, width/2-26, 16);

}

createPieChart([25,25,25,25],400,400,"testing");


function createScatterPlot(data=[], width, height){
    const ctx = createCanvas(width, height);
}