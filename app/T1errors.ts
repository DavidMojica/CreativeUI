export class ParameterDurationError extends Error {
    constructor(element: HTMLElement | null, c:string="") {
        super(`Invalid duration. On ${element.outerHTML} the class ${c} expects a number to determine the duration in seconds or 'i' to set it to infinite mode if the animation has infinite mode.`);
        this.name = 'ParameterDurationError';
    }
}

export class AnimationHasNotInfiniteError extends Error {
    constructor(element: HTMLElement | null, c:string="") {
        super(`The animation ${c} does not support infinite mode. Element -> ${element.outerHTML}`);
        this.name = 'ParameterDurationError';
    }
}
