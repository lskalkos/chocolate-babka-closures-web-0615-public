function counterCreator(number) {
    var counter = number;

    return function() {
        counter = counter + 1;
        return counter;
    }
};

function countAnnouncer(phrase, counter) {
    var phrase = phrase;
    var counter = counter();

    return function() {
        return "Now serving " + phrase + " number " + counter + "!";
    }
};