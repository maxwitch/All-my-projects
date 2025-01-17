const readline = require('readline').createInterface(process.stdin, process.stdout);

let enterInfo = []
let allInfo = []

readline.on('line', (line) => {
    enterInfo = line.split(' ')
    allInfo.push(...enterInfo)
    // console.log(enterInfo)
    // console.log(allInfo)

    if(allInfo.length >= 6) {
        
        getScore(allInfo)
        
        readline.close()
    }
    
}).on('close', () => process.exit(0));

function getScore (resultArrow) {
    
    const firstTry = {
        firstcord: resultArrow[0],
        secondcord: resultArrow[1]
    }
    const secondTry = {
        firstcord: resultArrow[2],
        secondcord: resultArrow[3]
    }
    const thirdTry = {
        firstcord: resultArrow[4],
        secondcord: resultArrow[5]
    }
    // console.log(firstTry, secondTry, thirdTry)

    let arrowfor = [firstTry, secondTry, thirdTry]
    let totalscore = 0;

    for(let i = 0; i <= arrowfor.length - 1; i++) {

       if (arrowfor[i].firstcord <= 0.1 && arrowfor[i].secondcord <= 0.1) {
            totalscore+= 3
        } else if (arrowfor[i].firstcord >= 0.1 && arrowfor[i].secondcord >= 0.1 && arrowfor[i].firstcord <= 0.8 && arrowfor[i].secondcord <= 0.8) {
            totalscore+= 2
        } else if (arrowfor[i].firstcord >= 0.8 && arrowfor[i].secondcord >= 0.8 && arrowfor[i].firstcord <= 1 && arrowfor[i].secondcord <= 1) {
            totalscore+= 1
        }    
    }
    console.log(totalscore)
}
