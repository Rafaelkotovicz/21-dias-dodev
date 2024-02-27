let num = Number(prompt('digite um número'))

for(i = num; i <= num + 2; i++){
    console.log('Tabuada do número: ' + i);
    for(let j = 0; j<=10; j++){
        console.log(i + ' x ' + i + ' = ' + i * j)
    }
}