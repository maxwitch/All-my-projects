const readline = require('readline').createInterface(process.stdin, process.stdout);

// первое число  n — длина сгенерированного текста
// Во второй строке записан сгенерированный текст, состоящий из строчных и заглавных букв латинского алфавита, нижнего подчеркивания и символа «#» . Символ «#» используется в качестве символа переноса строки.

// В одной строке выведите два целых числа — минимальную и максимальную длину строки в тексте.


// план:
// 1) принимаем две линии из консоли, 2 линию нарезаем сплитом и пушим в массив
// 2) прогоняем массив циклом for и получаем в массиве строки
// 3) находим длины строк и пушим в новый массив
// 4) находим длину максимального и минимального значения и выводим в консоль
let  totalcharacters;
let enterInfo = []
let someText = []

readline.on('line', (line) => {

    enterInfo.push(line)

    if (enterInfo.length >= 2) {

        totalcharacters = enterInfo[0]
        someText = enterInfo[1].split('#')
        //
        newArrowWithLinesLength = getLength(someText)
        getMinMaxLengthinLines (newArrowWithLinesLength)
        //
        readline.close()
    }


}).on('close', () => process.exit(0));

function getLength (ArrowWithLines) {

    let newArrowWithLinesLength = []

    for (let i = 0; i <= ArrowWithLines.length - 1; i++) {

        newArrowWithLinesLength.push(ArrowWithLines[i].length)
    }

    return newArrowWithLinesLength
}

function getMinMaxLengthinLines (Arrow) {

    let max = Math.max(...Arrow)
    let min = Math.min(...Arrow)

    console.log(min, max)
}