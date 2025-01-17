const readline = require('readline').createInterface(process.stdin, process.stdout);

let word = 0;
wordsCount = 0;
main_arrow = [];

readline.on('line', (line) => {
    main_arrow.push(line);
    
    if (main_arrow.length == 1) {
        main_arrow = main_arrow[0].split('');
        // console.log(main_arrow);
    }

    if (main_arrow.length >= 2) {

    // let counts = {};
    // main_arrow.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    // console.log(counts)
        
        for (;;) {
            word = 's'; // буква s
            let pos = main_arrow.indexOf(word); // получаем индекс буквы
            if (pos == -1) { //если не найден то выводим текущее кол-во слов и прерываем цикл
                console.log(wordsCount)
                break
            }
            main_arrow.splice(pos, 1);
            word = 'h'; // буква s
             pos = main_arrow.indexOf(word); // получаем индекс буквы
            if (pos == -1) { //если не найден то выводим текущее кол-во слов и прерываем цикл
                console.log(wordsCount)
                break
            }
            main_arrow.splice(pos, 1);
            word = 'e'; // буква s
             pos = main_arrow.indexOf(word); // получаем индекс буквы
            if (pos == -1) { //если не найден то выводим текущее кол-во слов и прерываем цикл
                console.log(wordsCount)
                break
            }
            main_arrow.splice(pos, 1);
            word = 'r'; // буква s
             pos = main_arrow.indexOf(word); // получаем индекс буквы
            if (pos == -1) { //если не найден то выводим текущее кол-во слов и прерываем цикл
                console.log(wordsCount)
                break
            }
            main_arrow.splice(pos, 1);
            word = 'i'; // буква s
            pos = main_arrow.indexOf(word); // получаем индекс буквы
            if (pos == -1) { //если не найден то выводим текущее кол-во слов и прерываем цикл
                console.log(wordsCount)
                break
            }
            main_arrow.splice(pos, 1);
            word = 'f'; // буква s
            pos = main_arrow.indexOf(word); // получаем индекс буквы
            if (pos == -1) { //если не найден то выводим текущее кол-во слов и прерываем цикл
                console.log(wordsCount)
                break
            }
            main_arrow.splice(pos, 1);
            word = 'f'; // буква s
            pos = main_arrow.indexOf(word); // получаем индекс буквы
            if (pos == -1) { //если не найден то выводим текущее кол-во слов и прерываем цикл
                console.log(wordsCount)
                break
            }
            wordsCount++

        };
        // console.log(main_arrow.find(function(str) {return str == value;}));
        readline.close();
    }
    

    
    
}).on('close', () => process.exit(0));