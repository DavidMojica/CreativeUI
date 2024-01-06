var Actions;
(function (Actions) {
    class Animations {
        static Animate(element, duration, steps) { }
        ;
    }
    Actions.Animations = Animations;
    class Typing extends Animations {
        static Animate(element, duration, steps) {
            element.style.width = `${steps}ch`;
            element.style.animation = `typing ${duration}s steps(${steps}) blink 0.5s infinite step-end alternate`;
            console.log(element, duration, steps);
        }
    }
    Actions.Typing = Typing;
    //Another sub-classes
})(Actions || (Actions = {}));
///<reference path="components.ts" />
///<reference path="actions.ts" />
//-------------Todo lo que tenga que ver con el DOM de la página---------------//
var prefix;
//Typing
prefix = "creative-typing-";
const a_typing = document.querySelectorAll(`[class^="${prefix}"]`);
a_typing.forEach(e => {
    const classElement = e.className.split(' ');
    const filter = classElement.filter(c => c.startsWith(prefix));
    filter.forEach(c => {
        const duration = parseFloat(c.replace(prefix, ''));
        const steps = e.textContent.length;
        Actions.Typing.Animate(e, duration, steps);
    });
});
