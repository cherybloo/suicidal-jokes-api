//simple fetch API to make a request from my github

fetch('https://cherybloo.github.io/suicidal-jokes-api/suicidal.json')
    .then(res=>res.json())
    .then(out=>{
        var jembut = out[Math.floor(Math.random()*Object.keys(out).length)]
        //console.log(jembut)
        if(Object.keys(jembut).length>1) console.log(JSON.stringify(jembut['questions']+jembut['answer']))
        else console.log(JSON.stringify(jembut['randomFact']))
    })
    .catch(err=>console.log(err))