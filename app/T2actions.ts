import { Errors as E } from "./T1errors"

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Actions {
  /**
   * Abstract class to setup & deploy animations.
   * This class can not be implemented directly, the main objective is deploy it throuhg the childs classes.
   */
  abstract class Animations { }
  /**
   * Represents a class for creating a typing machine effect on an HTML element.
   *
   * @class
   * @extends Animations
   * @namespace Actions
   * @author D. Mojica
   */
  export class Typing extends Animations {
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
      console.log(`typing ${duration} steps(${steps}), blink 0.5s infinite step-end alternate`)
      element.style.animation = `typing ${duration} steps(${steps}), blink 0.5s infinite step-end alternate`
      element.style.width = `${steps + 1}ch`
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
        case duration === 'i': throw new E.AnimationHasNotInfiniteError(element, 'creative-typing')
        case !isNaN(Number(duration)):
          this.Animate(element, `${duration}s`, steps)
          break
        default: throw new E.ParameterDurationError(element, 'creative-typing-')
      }
    }
  }
}
