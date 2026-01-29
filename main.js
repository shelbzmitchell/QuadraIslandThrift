


// Wait for document to load
$(document).ready(() => {
    $('form').on('submit', () => {

        // prevents default behaviour
        // Prevents event propagation
        return false;
    });
});

 

//   (() => {
//     const d=document,s=d.createElement("script");s.type="module";
//     s.src="https://w.behold.so/widget.js";d.head.append(s);
//   })();

