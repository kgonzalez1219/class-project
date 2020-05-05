function offerGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18) {
        greeting = 'Good Evening!';
    } else if (hourNow > 12) {
        greeting = 'Good Afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good Morning!';
    } else {
        greeting = 'Hiya!';
    }
    return document.write('<h1>' + greeting + '</h1>');
}

function askName() {
    var userName = prompt('What is your name?');

    return document.write('<h3>Hello ' + userName + '!</h3>');
}

function getProduct() {
    var response = prompt('Yes or No?');
    var item;

    if (response === 'Yes') {
        item = '<img src ="1.jpg">';
    } else if (response === 'No') {
        item = '<img src ="2.jpg">';
    } else {
        item = 'Have a lovely day!';
    }

    return document.write('<p>' + item + '</p>');
}