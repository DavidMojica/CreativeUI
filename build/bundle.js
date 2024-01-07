class ParameterDurationError extends Error {
    constructor(element, c = "") {
        super(`Invalid duration. On ${element.outerHTML} the class ${c} expects a number to determine the duration in seconds or 'i' to set it to infinite mode if the animation has infinite mode.`);
        this.name = 'ParameterDurationError';
    }
}
class AnimationHasNotInfiniteError extends Error {
    constructor(element, c = "") {
        super(`The animation ${c} does not support infinite mode. Element -> ${element.outerHTML}`);
        this.name = 'ParameterDurationError';
    }
}
var Actions;
(function (Actions) {
    /**
     * Abstract class to setup & deploy animations.
     * This class can not be implemented directly, the main objective is deploy it throuhg the childs classes.
     */
    class Animations {
        /**
         * This method renderizes
         * @param element
         * @param duration
         * @param steps
         */
        static Animate(element, duration, steps) { }
        ;
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
         * @class
         * @access Protected
         * @example --
         */
        static Play(element, duration, steps) {
            switch (true) {
                case duration === "i": throw new AnimationHasNotInfiniteError(element, "creative-typing");
                case !isNaN(Number(duration)):
                    this.Animate(element, `${duration}s`, steps);
                    break;
                default: throw new ParameterDurationError(element, "creative-typing-");
            }
        }
    }
    Actions.Typing = Typing;
})(Actions || (Actions = {}));
///<reference path="T2components.ts" />
///<reference path="T2actions.ts" />
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
        Actions.Typing.Play(element, duration, steps);
    });
});
