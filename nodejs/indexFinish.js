// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let result = 0
// let countOfNum, countOperation, nums
// const dataValues = []

// rl.on('close', () => { console.log(result); process.exit(0); });

// rl.on('line', function (data) {
//     dataValues.push(data.trim());

//     if (dataValues.length >= 2) {
//         [countOfNum, countOperation] = dataValues[0].split(' ').map(Number);
//         nums = dataValues[1].split(' ').map(Number);

//         result = findMaxDifference(countOfNum, countOperation, nums)
//     }
// });
// ***********************************************
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    output: fs.createWriteStream('output.txt')
});

let result = 0;
let countOfNum, countOperation, nums;

rl.on('close', () => { 
    rl.output.write(result.toString());
    process.exit(0); 
});

let lineNum = 1;
rl.on('line', function (data) {
    if (lineNum === 1) {
        [countOfNum, countOperation] = data.split(' ').map(Number);
    } else if (lineNum === 2) {
        nums = data.split(' ').map(Number);
        result = findMaxDifference(countOfNum, countOperation, nums);
    }
    lineNum++;
});


// const readline = require('readline');
// const fs = require('fs');

// const rl = readline.createInterface({
//     input: fs.createReadStream('input.txt'),
//     output: fs.createWriteStream('output.txt')
// });

// let first, second, numsArray;

// rl.on('line', function (data) {
//     if (!first) {
//         [first, second] = data.split(' ').map(Number);
//     } else {
//         numsArray = data.split(' ').map(Number);
//     }
// });

// rl.on('close', () => {
//     const result = findMaxDifference(first, second, numsArray);
//     rl.output.write(result.toString());
// });





function findMaxDifference(countOfNum, countOperation, nums) {
    let differenceNums = [];
    let difference = 0;
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        let stringNumbers = nums[i].toString()
        let stringNumbersArr = stringNumbers.split('');
        
        let maxDiff = 0

        for (let j = 0; j < stringNumbersArr.length; j++) {
            let digit = (stringNumbersArr[j])
            
            if (digit === '9') {
                continue;
            }
            
            let newStringNumbers = stringNumbers.substring(0, j) + '9' + stringNumbers.substring(j + 1);
            let diff = +newStringNumbers - nums[i]

            maxDiff = maxDiff > diff ? maxDiff : diff
        }

        differenceNums.push(maxDiff)
    }

    differenceNums.sort((a,b) => b- a)

    while (k < countOperation) {
        if (differenceNums.length === 0) {
            break
        }
        
        difference += differenceNums.shift();
        k++;
    }

    return difference;
}