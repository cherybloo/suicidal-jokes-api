fetch('https://cherybloo.github.io/suicidal-jokes-api/suicidal.json')
    .then(res=>res.json())
    .then(out=>{
        var jembut = out[Math.floor(Math.random()*Object.keys(out).length)]
        console.log(jembut)
        if(Object.keys(jembut).length>1){
            console.log(jembut['questions']+jembut['answer']);
            alexaOutput=jembut['questions']+jembut['answer'];
            
        }
        
        else {
            console.log(jembut['randomFact']);
            alexaOutput=jembut['randomFact'];
        }})