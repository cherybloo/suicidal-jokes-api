//testing logic and read JSON file

const { json } = require('express');
var fs = require('fs');

fs.readFile("suicidal.json",(err,data)=>{
    if(err) return console.log(err);
    else{
        var jsonTesting = data.toString();
        var jsonText = JSON.parse(jsonTesting);
        var alexaChoices = Math.floor(Math.random()*Object.keys(jsonText).length)
        //console.log(jsonText[alexaChoices])
        if(Object.keys(jsonText[alexaChoices]).length>1){
            console.log("questions is: " + jsonText[alexaChoices]['questions']);
            console.log("answer is: "+jsonText[alexaChoices]['answer']);
        }
        else console.log("this is a random fact");
    }
})