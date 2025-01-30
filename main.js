
parent.document.getElementsByTagName('iframe')[0].scrolling="no";

// Wait for document to load
$(document).ready(() => {
    $('form').on('submit', () => {

        // prevents default behaviour
        // Prevents event propagation
        return false;
    });
});

