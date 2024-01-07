var Actions;
(function (Actions) {
    class Animations {
        // Every animation needs 2 things to work. The element where it will be located and its duration.
        // I have decided to use static classes to avoid the creation of multiple and unnecessary instances
        static Animate(element, duration, steps) {
            console.log("polymorph non-readed");
        }
    }
    // Typing machine effect
    class Typing extends Animations {
        static Animate(element, duration, steps) {
            console.log(`typing ${duration} steps(${steps}), blink 0.5s infinite step-end alternate`);
            element.style.animation = `typing ${duration} steps(${steps}), blink 0.5s infinite step-end alternate`;
            element.style.width = `${steps + 1}ch`;
            element.style.whiteSpace = "nowrap";
            element.style.borderRight = "4px solid";
            element.style.overflow = "hidden";
        }
        /**
         * desc ---
         * @param {HTMLElement} element
         * @param {number | string} duration
         * @param {number} steps
         * @returns {void}
         * @author MojiDIos
         * @class {static}
         * @example --
         */
        static Play(element, duration, steps) {
            if (isNaN(Number(duration)) || duration === "i") {
                if (duration == "i") {
                    this.Animate(element, "3s", steps);
                }
                else {
                    throw new ParameterDurationError(element, "creative-typing-");
                }
            }
            else {
                this.Animate(element, `${duration}s`, steps);
            }
        }
    }
    Actions.Typing = Typing;
})(Actions || (Actions = {}));
///<reference path="components.ts" />
///<reference path="actions.ts" />
var prefix;
//-------------Todo lo que tenga que ver con el DOM de la página---------------//
prefix = "creative-typing-";
const elementsWithPrefix = document.querySelectorAll(`[class^="${prefix}"]`);
elementsWithPrefix.forEach(element => {
    const classesArray = element.className.split(' ');
    const filteredClasses = classesArray.filter(className => className.startsWith(prefix));
    filteredClasses.forEach(className => {
        var _a;
        const durationStr = className.replace(prefix, '');
        const duration = !isNaN(parseFloat(durationStr)) ? parseFloat(durationStr) : durationStr;
        let steps = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.length) || 0;
        if (duration === "i") {
            Actions.Typing.Play(element, duration, steps);
        }
        else if (!isNaN(Number(duration))) {
            Actions.Typing.Play(element, duration, steps);
        }
    });
});
class ParameterDurationError extends Error {
    constructor(element, c = "") {
        super(`Invalid duration. On ${element} the class ${c} expects a number to determine the duration in seconds or 'i' to set it to infinite mode.`);
        this.name = 'ParameterDurationError';
    }
}
