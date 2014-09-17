'use strict';
//jshint unused:false
var ISIS2 = (function() {
    var remove = function() {
        console.log('Allāhu Akbar!');
        var head = document.head;
        if (!head) {
            throw new Error('Cannot be-head a beheaded');
        }
        head.parentNode.removeChild(head);
        console.warn('Obama, the next element is on you!');
    };
    return {
        remove: remove
    };
})();
