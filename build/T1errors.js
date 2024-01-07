"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
// eslint-disable-next-line @typescript-eslint/no-namespace
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
            const elementHTML = element ? element.outerHTML : "undefined or null";
            super(`Invalid duration. On ${elementHTML} the class ${c} expects a number to determine the duration in seconds or 'i' to set it to infinite mode if the animation has infinite mode.`);
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
         * @author D. Mojica
         */
        constructor(element, c = "") {
            const elementHTML = element ? element.outerHTML : "undefined or null";
            super(`The animation ${c} does not support infinite mode. Element -> ${elementHTML}`);
            this.name = 'ParameterDurationError';
        }
    }
    Errors.AnimationHasNotInfiniteError = AnimationHasNotInfiniteError;
})(Errors || (exports.Errors = Errors = {}));
