"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const T2actions_1 = require("./T2actions");
// -------------Todo lo que tenga que ver con el DOM de la página---------------//
let prefix;
//ca-typing-
prefix = 'ca-typing-';
console.log(prefix);
prefix = 'ca-typing';
const elementsWithPrefix = document.querySelectorAll(`[class^="${prefix}"]`);
elementsWithPrefix.forEach(element => {
    console.log(element);
    const classesArray = element.className.split(' ');
    const filteredClasses = classesArray.filter(className => className.startsWith(prefix));
    filteredClasses.forEach(className => {
        var _a;
        const durationStr = className.replace(prefix, '');
        const duration = !isNaN(parseFloat(durationStr)) ? parseFloat(durationStr) : durationStr;
        const steps = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.length) || 0;
        T2actions_1.Actions.Typing.Play(element, duration, steps);
    });
});
