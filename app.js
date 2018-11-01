var api = [
    data = {
        obj1: {
            name: 'tomazi',
            surname: 'Kopr',
        },
        obj2: {
            name: 'aggi',
            surname: 'Kopra',
        },
    },
    troll = {
        text: 'TROLOLOL'
    }
]

//MAP
// var resMap = api.map(function (item) {
//     console.log(item);
// });

// FOR LOOP
for (let x = 0; x < api.length; x++) {
    for( y in api[x]) {    
        console.log('$$$$$$$$$$$$$' ,api[y]);        
    }
}