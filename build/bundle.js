/* eslint-disable @typescript-eslint/no-unused-vars */
var Errors;
(function (Errors) {
    /**
    * Error thrown when an invalid duration is provided for an animation.
    *
    * @class
    * @extends Error
    * @namespace Errors
    * @author D. Mojica
    */
    class ParameterDurationError extends Error {
        /**
         * Creates a new instance of ParameterDurationError.
         *
         * @constructor
         * @param {HTMLElement | null} element - The HTML element associated with the error.
         * @param {string} c - The class name or identifier associated with the error.
         * @author D. Mojica
         */
        constructor(element, c = "") {
            super(`Invalid duration. On ${element ? element.outerHTML : "undefined or null"} the class ${c} expects a number to determine the duration in seconds or 'i' to set it to infinite mode if the animation has infinite mode.`);
            this.name = 'ParameterDurationError';
        }
    }
    Errors.ParameterDurationError = ParameterDurationError;
    /**
    * Error thrown when an animation does not support infinite mode.
    *
    * @class
    * @extends Error
    * @namespace Errors
    * @author D. Mojica
    */
    class AnimationHasNotInfiniteError extends Error {
        /**
         * Creates a new instance of AnimationHasNotInfiniteError.
         *
         * @constructor
         * @param {HTMLElement | null} element - The HTML element associated with the error.
         * @param {string} c - The class name or identifier associated with the error.
         * @author D. Mojica1
         */
        constructor(element, c = "") {
            const elementHTML = element ? element.outerHTML : "undefined or null";
            super(`The animation ${c} does not support infinite mode. Element -> ${elementHTML}`);
            this.name = 'ParameterDurationError';
        }
    }
    Errors.AnimationHasNotInfiniteError = AnimationHasNotInfiniteError;
})(Errors || (Errors = {}));
/* eslint-disable @typescript-eslint/no-unused-vars */
///<reference path="T1errors.ts" />
var Animations;
(function (Animations) {
    /**
     * Represents a class for creating a typing machine effect on an HTML element.
     *
     * @class
     * @extends Animations
     * @namespace Actions
     * @author D. Mojica
     */
    class Typing {
        /**
         * Animates a typing effect on an HTML element.
         *
         * @param {HTMLElement} element - The HTML element on which the typing animation will be applied.
         * @param {number | string} duration - The duration of the animation in seconds or 'i' for infinite.
         * @param {number} steps - The number of steps in the animation.
         * @returns {void}
         * @protected
         * @example
         * // Example usage:
         * this.Animate(myElement, 3, 10);
         */
        static Animate(element, duration, steps) {
            element.style.animation = `typing ${duration} steps(${steps}), blink 0.5s infinite step-end alternate`;
            element.style.width = `${steps}ch`;
            element.style.whiteSpace = 'nowrap';
            element.style.borderRight = '4px solid';
            element.style.overflow = 'hidden';
        }
        /**
         * Starts typing machine animation.
         * @param {HTMLElement} element - The HTML element on which the animation will be applied.
         * @param {number | string} duration - The duration of the animation in seconds or 'i' for infinity.
         * @param {number} steps - The number of steps in the animation. Corresponds to the length of the text.
         * @throws {AnimationHasNotInfiniteError} - Fired if the duration is 'i', but the animation does not support infinite duration.
         * @throws {ParameterDurationError} - Thrown if the duration is not a valid number or is a letter.
         * @returns {void}
         * @author MojiDIos
         * @method
         * @access public
         * @example
         * //Example case:
         * Animations.Typing.Play(myElement, 3, 10);
         */
        static Play(element, duration, steps) {
            switch (true) {
                case duration === 'i': throw new Errors.AnimationHasNotInfiniteError(element, this.HTMLClassName);
                case !isNaN(Number(duration)):
                    this.Animate(element, `${duration}s`, steps);
                    break;
                default: throw new Errors.ParameterDurationError(element, this.HTMLClassName);
            }
        }
    }
    Typing.HTMLClassName = 'ca-typing';
    Animations.Typing = Typing;
})(Animations || (Animations = {}));
///<reference path="T2actions.ts" />
// -------------Todo lo que tenga que ver con el DOM de la página---------------//
let prefix;
//ca-typing-
prefix = 'ca-typing-';
prefix = 'ca-typing-';
const elementsWithPrefix = document.querySelectorAll(`[class^="${prefix}"]`);
elementsWithPrefix.forEach(element => {
    const classesArray = element.className.split(' ');
    const filteredClasses = classesArray.filter(className => className.startsWith(prefix));
    filteredClasses.forEach(className => {
        var _a;
        const durationStr = className.replace(prefix, '');
        const duration = !isNaN(parseFloat(durationStr)) ? parseFloat(durationStr) : durationStr;
        const steps = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.length) || 0;
        console.log(steps);
        Animations.Typing.Play(element, duration, steps);
    });
});
