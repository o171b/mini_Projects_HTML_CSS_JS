let data = [
    {
        name: 'Michael',
        age : 20,
    },
    {
        name: 'Jackson',
        age : 21,
    },
    {
        name: 'Tom',
        age : 23,
    },
    {
        name: 'Cruise',
        age : 22,
    },
    {
        name: 'Brad',
        age : 25,
    },
    {
        name: 'Ali',
        age : 27,
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item){
return (
    '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>'
)
})

info.innerHTML = details.join('\n');
