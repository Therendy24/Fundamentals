function getName(){
    const username =prompt('What is your name?');
    sayHello(username);

}
function sayHello(name){
   
    alert('Hello ' + name + '!');
    console.log('alert sent!');
}
