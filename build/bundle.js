var Actions;
(function (Actions) {
    class Animations {
        static Animate(element, duration, steps) { }
    }
    class Typing extends Animations {
        static Animate(element, duration, steps) {
            element.style.animation = `typing ${duration}s steps(${steps}), blink 0.5s infinite step-end alternate`;
            element.style.width = `${steps + 1}ch`;
            element.style.whiteSpace = "nowrap";
            element.style.borderRight = "4px solid";
            element.style.overflow = "hidden";
        }
    }
    Actions.Typing = Typing;
    // Otras subclases si es necesario
})(Actions || (Actions = {}));
///<reference path="components.ts" />
///<reference path="actions.ts" />
//-------------Todo lo que tenga que ver con el DOM de la página---------------//
const prefix = "creative-typing-";
const elementsWithPrefix = document.querySelectorAll(`[class^="${prefix}"]`);
elementsWithPrefix.forEach(element => {
    const classesArray = element.className.split(' ');
    const filteredClasses = classesArray.filter(className => className.startsWith(prefix));
    filteredClasses.forEach(className => {
        var _a;
        const durationStr = className.replace(prefix, '');
        const duration = parseFloat(durationStr);
        // Verifica si duration es un número válido
        if (!isNaN(duration)) {
            const steps = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.length) || 0;
            Actions.Typing.Animate(element, duration, steps);
        }
        else {
            console.error(`La clase ${className} no contiene una duración válida.`);
        }
    });
});
