class ParameterDurationError extends Error {
    constructor() {
        super("Invalid duration");
        this.name = 'ParameterDurationError';
    }
}
