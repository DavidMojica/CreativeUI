class ParameterDurationError extends Error {
    constructor(element: HTMLElement | null, c:string="") {
        super(`Invalid duration. On ${element} the class ${c} expects a number to determine the duration in seconds or 'i' to set it to infinite mode.`);
        this.name = 'ParameterDurationError';
    }
}
