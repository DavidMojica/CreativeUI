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
    class NullDurationError extends Error {
        constructor(element, c = "") {
            super(`Duration or interval on element ${element ? element.outerHTML : "undefined or null"} is 0 or null. The class ${c} does not support it. Please set a correct duration | interval.`);
            this.name = 'ParameterDurationError';
        }
    }
    Errors.NullDurationError = NullDurationError;
    /**
    * Error thrown when an animation does not support infinite mode.
    *
    * @class
    * @extends Error
    * @namespace Errors
    * @author D. Mojica
    */
    class AnimationHasNoInfiniteError extends Error {
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
    Errors.AnimationHasNoInfiniteError = AnimationHasNoInfiniteError;
    /**
    * Error thrown when an invalid color pattern is provided.
    *
    * @class
    * @extends Error
    * @namespace Errors
    * @author D. Mojica
     */
    class ColorAssignmentError extends Error {
        constructor(element, c = "") {
            const elementHTML = element ? element.outerHTML : "undefined or null";
            super(`The element ${elementHTML} ${c} has a incorrect color assignment pettern. This pettern must be a literal of 3 or 6 characters or 'd' to set the default color.`);
            this.name = 'ColorAssignmentError';
        }
    }
    Errors.ColorAssignmentError = ColorAssignmentError;
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
                case duration === 'i': throw new Errors.AnimationHasNoInfiniteError(element, this.HTMLClassName);
                case !isNaN(Number(duration)):
                    if (duration === 0 || duration === '0')
                        throw new Errors.NullDurationError(element, this.HTMLClassName);
                    this.Animate(element, `${duration}s`, steps);
                    break;
                default: throw new Errors.ParameterDurationError(element, this.HTMLClassName);
            }
        }
    }
    Typing.HTMLClassName = 'ca-typing';
    Animations.Typing = Typing;
    class Beat {
        static Animate(element, interval) {
            element.style.position = 'absolute';
            element.style.animation = `beat ${interval} infinite`;
        }
        static Play(element, interval) {
            switch (true) {
                case interval === 'i': throw new Errors.AnimationHasNoInfiniteError(element, this.HTMLClassName);
                case !isNaN(Number(interval)):
                    if (interval === 0 || interval === '0')
                        throw new Errors.NullDurationError(element, this.HTMLClassName);
                    this.Animate(element, `${interval}s`);
                    break;
                default: throw new Errors.ParameterDurationError(element, this.HTMLClassName);
            }
        }
    }
    Beat.HTMLClassName = 'ca-beat';
    Animations.Beat = Beat;
})(Animations || (Animations = {}));
///<reference path="T1errors.ts" />
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var Buttons;
(function (Buttons) {
    class Neon {
        static setUp(element, color) {
            this.color = color === 'd' ? this.defaultColor : color || this.defaultColor;
            if (!(typeof this.color === 'string' && color.length === 6 || color.length === 3 || color == 'd'))
                throw new Errors.ColorAssignmentError(element, this.HTMLClassName);
            element.style.padding = "10px 20px";
            element.style.border = "none";
            element.style.fontSize = "17px";
            element.style.color = "#fff";
            element.style.borderRadius = "7px";
            element.style.letterSpacing = "4px";
            element.style.fontWeight = "700";
            element.style.textTransform = "uppercase";
            element.style.transition = "0.5s";
            element.style.transitionProperty = "box-shadow";
            element.style.background = `#${this.color}`;
            element.style.boxShadow = `0 0 25px #${this.color}`;
            element.addEventListener('mouseover', () => {
                element.style.boxShadow = `0 0 5px #${this.color}, 0 0 25px #${this.color}, 0 0 50px #${this.color},0 0 100px #${this.color}`;
            });
            element.addEventListener('mouseout', () => {
                element.style.boxShadow = `0 0 25px #${this.color}`;
            });
        }
    }
    Neon.HTMLClassName = 'cb-neon';
    Neon.defaultColor = '008CFF';
    Buttons.Neon = Neon;
})(Buttons || (Buttons = {}));
///<reference path="T2actions.ts" />
///<reference path="T2elements.ts" />
// -------------Todo lo que tenga que ver con el DOM de la página---------------//
//------------Functions
let prefix;
/**
 * Process elements with a specified prefix in their class names and apply a callback function to each matching element.
 *
 * @param {string} prefix - The prefix to search for in the class names of the elements.
 * @param {function} callback - A callback function to apply to each matching element, receiving the element and the extracted value as parameters.
 * @returns {void}
 */
function processElements(prefix, callback) {
    const elementsWithPrefix = document.querySelectorAll(`[class^="${prefix}"]`);
    elementsWithPrefix.forEach(element => {
        const classesArray = element.className.split(' ');
        const filteredClasses = classesArray.filter(className => className.startsWith(prefix));
        filteredClasses.forEach(className => {
            const value = className.replace(prefix, '');
            callback(element, value);
        });
    });
}
// Anim typing
prefix = 'ca-typing-';
processElements(prefix, (element, durationStr) => {
    var _a;
    const duration = !isNaN(parseFloat(durationStr)) ? parseFloat(durationStr) : durationStr;
    const steps = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.length) || 0;
    Animations.Typing.Play(element, duration, steps);
});
// Anim beat
prefix = 'ca-beat-';
processElements(prefix, (element, interval) => {
    console.log(element);
    const intervalStr = !isNaN(parseFloat(interval)) ? parseFloat(interval) : interval;
    Animations.Beat.Play(element, intervalStr);
});
// Btn Neon
prefix = 'cb-neon-';
processElements(prefix, (element, color) => {
    console.log(color);
    Buttons.Neon.setUp(element, color);
});
