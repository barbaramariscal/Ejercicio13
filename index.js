console.log('Hola');

const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 30, premium: false},
    {username: 'sergio58', age: 30, premium: true},
    ];

console.log(users);
    
const premium = users.filter (function(users) {
    return users.premium == true;
    alert ('Hola usuario premium');
});

console.log(premium);

const noPremium = users.filter (function(users){
    return users.premium != true;
});

console.log(noPremium);
    

