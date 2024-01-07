import { AnimationHasNotInfiniteError, ParameterDurationError } from "./T1errors"

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Actions {
  /**
   * Abstract class to setup & deploy animations.
   * This class can not be implemented directly, the main objective is deploy it throuhg the childs classes.
   */
  abstract class Animations {
    /**
     * This method renderizes the animation
     * @param element
     * @param duration
     * @param steps
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected static Animate (element: HTMLElement, duration: number | string, steps?: number): void {}
  }

  // Typing machine effect
  export class Typing extends Animations {
    protected static Animate (element: HTMLElement, duration: number | string, steps: number): void {
      console.log(`typing ${duration} steps(${steps}), blink 0.5s infinite step-end alternate`)
      element.style.animation = `typing ${duration} steps(${steps}), blink 0.5s infinite step-end alternate`
      element.style.width = `${steps + 1}ch`
      element.style.whiteSpace = 'nowrap'
      element.style.borderRight = '4px solid'
      element.style.overflow = 'hidden'
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
    public static Play (element: HTMLElement, duration: number | string, steps: number): void {
      switch (true) {
        case duration === 'i': throw new AnimationHasNotInfiniteError(element, 'creative-typing')
        case !isNaN(Number(duration)):
          this.Animate(element, `${duration}s`, steps)
          break
        default: throw new ParameterDurationError(element, 'creative-typing-')
      }
    }
  }
}
