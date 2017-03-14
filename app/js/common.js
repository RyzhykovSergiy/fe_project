
const button = document.getElementById("search");
const container = document.getElementById("photogrid");

//random value (may add other words in array)
const arr = ["wine", "red"];
let value = (arr[Math.round(Math.random() * (arr.length - 1))]);

//request to pixabay
let getUrls = function(val) {
    let URL = "https://pixabay.com/api/?key=4341489-c7135f07e924eb271481ce96f&q=" + encodeURIComponent(val);
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();
    xhr.open('GET', URL, true);
    xhr.onload = function() {
        let pics = JSON.parse(this.responseText);
        for (let i = 0; i < 7; i++) {
            a = 'cell' + i;
            document.getElementById(a).innerHTML = '<img src="' + pics.hits[i].webformatURL + '" alt="image"><figcaption>' + pics.hits[i].tags.split(',')[0] + '</figcaption>';
        }
    };
    xhr.onerror = function() {
        console.log('Ошибка ' + this.status);
    };

    xhr.send();
};

//handler for search button
getUrls(value);
button.onclick = function(e) {
    e.preventDefault();
    value = document.getElementById("searchfield").value;
    getUrls(value);
};

//Masonry init with imagesLoaded ()
const containerGr = document.querySelector('.grid');
let msnry;

imagesLoaded( containerGr, function() {

  msnry = new Masonry( containerGr );
});
