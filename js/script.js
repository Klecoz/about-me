$( document ).ready(function() {
    //function to calculate how many figures I'm holding up on page load. 1-13
    var fingers = parseInt((Math.random() * 13)+1);
    $('.fingers').append(fingers + ' fingers. Wow.');

    console.log('Hi there. You found the secret console message section of the website.');
    console.log('If I seem like a swell guy to you, and you wanna offer me some sort of job');
    console.log('You can reach me at arseniocolon@gmail.com');
    });
