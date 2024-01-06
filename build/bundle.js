var Actions;
(function (Actions) {
    class Animations {
    }
    Actions.Animations = Animations;
    class Typing extends Animations {
        Animate(element) {
            //--
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
    const filteredClasses = classElement.filter(c => c.startsWith(prefix));
    filteredClasses.forEach(c => {
        const duration = c.replace(prefix, '');
        console.log(duration);
    });
});
