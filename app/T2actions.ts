/* eslint-disable @typescript-eslint/no-unused-vars */
///<reference path="T1errors.ts" />

namespace Animations{
  /**
   * Represents a class for creating a typing machine effect on an HTML element.
   *
   * @class
   * @extends Animations
   * @namespace Actions
   * @author D. Mojica
   */
  export class Typing {
    static HTMLClassName:string = 'ca-typing';
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
    protected static Animate (element: HTMLElement, duration: number | string, steps: number): void {
      element.style.animation = `typing ${duration} steps(${steps}), blink 0.5s infinite step-end alternate`
      element.style.width = `${steps}ch`
      element.style.whiteSpace = 'nowrap'
      element.style.borderRight = '4px solid'
      element.style.overflow = 'hidden'
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
    public static Play (element: HTMLElement, duration: number | string, steps: number): void {
      switch (true) {
        case duration === 'i': throw new Errors.AnimationHasNotInfiniteError(element, this.HTMLClassName)
        case !isNaN(Number(duration)):
          this.Animate(element, `${duration}s`, steps)
          break
        default: throw new Errors.ParameterDurationError(element, this.HTMLClassName)
      }
    }
  }
}





