const readline = require('readline').createInterface(process.stdin, process.stdout);

s = 0;
n = 0;
pistolPrice = [];
main_arrow = [];

readline.on('line', (line) => {
    pistolPrice.push(line);
    
    if (pistolPrice.length == 1) {
        main_arrow = pistolPrice[0].split(' ');
        n = +main_arrow[0];
        s = +main_arrow[1];
        
        
    }
    
    if (pistolPrice.length >= 2) {
        pistolPrice.shift();
        pistolPrice = pistolPrice[0].split(' ');
        let largestPistolPrice = Math.max.apply(Math, pistolPrice);

        pistolPrice = pistolPrice.map(function (x) {
            return parseInt(x, 10);
          });
        
        
        for (i = 0; largestPistolPrice > s; i++) {
            largestPistolPrice = Math.max.apply(Math, pistolPrice); // находим наибольшее значение
            // console.log(largestPistolPrice);
            let pos = pistolPrice.indexOf(largestPistolPrice); // получаем индекс самого большого значения
            // console.log('Позиция наибольшего чесла' + pos);
            if (largestPistolPrice <= s) {
                console.log(largestPistolPrice);
                break
            }
            pistolPrice.splice(pos, 1); // удаляем значение, если оно не прошло проверку i
            // console.log(largestPistolPrice);
            

            if (pistolPrice.length == 0) {
                console.log(0);
                break
            }
        }

        // console.log(pistolPrice);
        // console.log(largestPistolPrice);


        readline.close();
    }
    

}).on('close', () => process.exit(0));