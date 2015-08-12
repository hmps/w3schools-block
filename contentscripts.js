(function() {
    var els = document.querySelectorAll('div.g');

    Array.prototype.forEach.call(els, function(el) {
        var link = el.querySelector('.r > a');

        if (link.getAttribute('href').match(/w3schools/, 'i') && el.parentNode) {
            el.parentNode.removeChild(el);
        }

        else if (link.getAttribute('href').match(/developer.mozilla.org/, 'i') && el.parentNode) {
            el.classList.add('developer-mozilla-org');
        }

        else if (link.getAttribute('href').match(/stackoverflow.com/, 'i') && el.parentNode) {
            el.classList.add('stackoverflow-com');
        }
    });
}());
