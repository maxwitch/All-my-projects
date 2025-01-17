const readline = require('readline').createInterface(process.stdin, process.stdout);

let cnInPlaces = [];
let main_arrow = [];
let n = 0;
let f = 0;
let m = 0;
let m1 = 0;
let arrayFor = [];
let array_withoutZero = [];
let cn = 1;
function IsEmptyPlace(array){

    //если в местах есть печеньки вернет правду
    for(let arr of array){
        if(arr > 0) return true;
    }
    
   //если в местах нет печенек вернет ложь
    return false;
  }
  function IsEmptyPlaceReverse(array){

    //Реверсивная функция
    for(let arr of array){
        if(arr > 0) return false;
    }
    
   
    return true;
  }
readline.on('line', (line) => {
    
    cnInPlaces.push(line);

    if (cnInPlaces.length <= 1) {
        main_arrow = cnInPlaces[0].split(' ');
        n = main_arrow[0];
        m = main_arrow[1];
        m1 = m;
        f = +n + 1;


        
    }

    if (cnInPlaces.length == f) {
        cnInPlaces.shift();
        let k = 0;

        for(let i=0; i < cnInPlaces.length; i++) {
            if (cnInPlaces[i] != 0 || cnInPlaces[i] != '0') {
                array_withoutZero.push(cnInPlaces[i]);
            }
        }
        for (let i=0; i < array_withoutZero.length; i++) {
            arrayFor.push(array_withoutZero[i])
        };
        // console.log(array_withoutZero);
        if (array_withoutZero.length>m) {
            k = 0;
            // console.log('length > m =' + k);
        } else if (n <= m) {
            // console.log('ЭТО МАССИВ ' + array_cn);
            // console.log('шаг выполняется');
            // console.log('m1 = ' + m1);
            // console.log('Массив и функция' + arrayFor + IsEmptyPlace(arrayFor));
            for (let place=0; m1 !== 0 && IsEmptyPlace(arrayFor); ) {
                // console.log('Печенек в месте №' + place + 'ДО иттерации' + '= ' + arrayFor[place]);
                // console.log('Осталось часов ДО иттерации = ' + m1);
                // console.log('Cn ДО иттерации = ' + cn);
                arrayFor[place] -= cn;
                m1 -= 1;
                sum = arrayFor.reduce((partialSum, a) => partialSum + a, 0);
                // console.log('Печенек в месте №' + place + '= ' + arrayFor[place]);
                // console.log('Осталось часов = ' + m1);
                // console.log('Cn = ' + cn);
                if (arrayFor[place] <= 0) {
                    place += 1;
                    // console.log('Сработало условие arrayFor[place] == 0, place увеличено на 1')
                }
            
                if (m1 == 0 && IsEmptyPlace(arrayFor)) {
                    cn += 1;
                    m1 = m;
                    place = 0;
                    arrayFor = [];
                    for (let i=0; i < array_withoutZero.length; i++) {
                        arrayFor.push(array_withoutZero[i])
                    };
                    // console.log('sum = '+ sum);
                    // console.log('Сработало условие №2')
                    
                }
            
                if (m1 >=0 && IsEmptyPlaceReverse(arrayFor)) {
                    console.log('Сработало условие №3');
                    k = cn;
                    break
                    
                    
                }
                
            };
        }
        let result = k;
        console.log(Number(result));
        // console.log('m = ' + m)
        // console.log('n = ' + n)
        // console.log(cnInPlaces)
        
        readline.close();
    }

}).on('close', () => process.exit(0));