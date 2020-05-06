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
    var response = prompt('Would you like to see something really cool or something relaxing?');
    var item;

    if (response === 'Cool') {
        item = '<img src ="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd36-1-gsfc_20171208_archive_e000012.jpg?w=400&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c158c378ea1fabc8372250826c2a1c9d">';
    } else if (response === 'Relaxing') {
        item = '<img src ="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd19-3-2239751a_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=431cd10f133356985c7d6ab3db5fa300">';
    } else {
        item = 'Have a lovely day!';
    }

    return document.write('<p>' + item + '</p>');
}


var name = prompt('what\'s your name?');
var attemptsAllowed = 2; 
var attempted = 0;

while (name === '' && attempted !== attemptsAllowed) {
    name = prompt('would you please tell me your name!?');
    attempted++;
}

