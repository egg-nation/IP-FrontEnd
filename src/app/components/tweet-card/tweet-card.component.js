//https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript

function linkify(text) {
    // (https?:\/\/)(\s)?(www\.)?(\s?)(\w+\.)*([\w\-\s]+\/)*([\w-]+)\/?
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    console.log("ana");

    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '">' + url + '</a>';
    });
}


function blueLinks(){
    console.log("ana");
    let texts = document.getElementsByClassName("tweet-text");
    let i;
    for (i = 0; i < texts.length; i++) {
        texts[i].innerHTML= linkify(texts[i].innerHTML);
    }
}

blueLinks();
console.log("ana");