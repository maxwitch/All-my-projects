const readline = require('readline').createInterface(process.stdin, process.stdout);
readline.on('line', (line) => {
    // Введенная строка в переменной line, тут можно написать решение и вывести его с помощью console.log
    
    let array = [];
    let array_cn = [];
    array = line.split(' ');
    let n = array[0];
    let m = array[1];
    let k = 0;
    
    readline.on('line', (line) => {
        line.split(' ');
        array_cn.push(Number(line));
    });  

    setTimeout(() => {  
    console.log(array);
    console.log(array_cn);
    
    if (array_cn.length>m) {
        k = 0;
        // console.log('length > m =' + k);
    } else if (n==m) {
        k = Math.max.apply (null, array_cn);
        // console.log('n = m =' + k);
    } else if (n < m) {
        let array_withoutZero = [];
        for(let i=0; i < array_cn.length; i++) {
            if (array_cn[i] != 0 || array_cn[i] != '0') {
                array_withoutZero.push(array_cn[i]);
            }
        }
        // // console.log('ЭТО МАССИВ ' + array_cn);
        // let sum = array_cn.reduce((partialSum, a) => partialSum + a, 0);
        // // console.log('sum = ' + sum);
        // k =  (sum)/m;
        // // console.log('sum / m =  ' + k);
        // k = Math.ceil(k);
        // // console.log('округление' + k);
    }
    console.log(typeof array[1]);
    let result = k;
    console.log(String(result));
    readline.close();
    }, 6000);
    
}).on('close', () => process.exit(0));