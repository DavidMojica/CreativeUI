/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Errors {
    /**
    * Error thrown when an invalid duration is provided for an animation.
    *
    * @class
    * @extends Error
    * @namespace Errors
    * @author D. Mojica
    */
    export class ParameterDurationError extends Error {
       /**
        * Creates a new instance of ParameterDurationError.
        *
        * @constructor
        * @param {HTMLElement | null} element - The HTML element associated with the error.
        * @param {string} c - The class name or identifier associated with the error.
        * @author D. Mojica
        */
       constructor(element: HTMLElement | null, c:string="") {
           super(`Invalid duration. On ${ element ? element.outerHTML: "undefined or null"} the class ${c} expects a number to determine the duration in seconds or 'i' to set it to infinite mode if the animation has infinite mode.`);
           this.name = 'ParameterDurationError';
       }
    }
    
    /**
    * Error thrown when an animation does not support infinite mode.
    *
    * @class
    * @extends Error
    * @namespace Errors
    * @author D. Mojica
    */
    export class AnimationHasNotInfiniteError extends Error {
       /**
        * Creates a new instance of AnimationHasNotInfiniteError.
        *
        * @constructor
        * @param {HTMLElement | null} element - The HTML element associated with the error.
        * @param {string} c - The class name or identifier associated with the error.
        * @author D. Mojica1
        */
       constructor(element: HTMLElement | null, c:string="") {
           const elementHTML = element ? element.outerHTML: "undefined or null"
           super(`The animation ${c} does not support infinite mode. Element -> ${elementHTML}`);
           this.name = 'ParameterDurationError';
       }
    }
}

