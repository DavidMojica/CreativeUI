namespace Actions {
  abstract class Animations {
    // Every animation needs 2 things to work. The element where it will be located and its duration.
    // I have decided to use static classes to avoid the creation of multiple and unnecessary instances
    protected static Animate(element: HTMLElement, duration: number | string, steps: any): void {
      console.log("polymorph non-readed");
    }
  }

  // Typing machine effect
  export class Typing extends Animations {
    protected static Animate(element: HTMLElement, duration: number | string, steps: number): void {
      console.log(`typing ${duration} steps(${steps}), blink 0.5s infinite step-end alternate`);
      element.style.animation = `typing ${duration} steps(${steps}), blink 0.5s infinite step-end alternate`;
      element.style.width = `${steps + 1}ch`;
      element.style.whiteSpace = "nowrap";
      element.style.borderRight = "4px solid";
      element.style.overflow = "hidden";
    }
    /**
     * desc --- 
     * @param {HTMLElement} element 
     * @param {number | string} duration 
     * @param {number} steps 
     * @returns {void}
     * @author MojiDIos
     * @class {static}
     * @example --
     */
    public static Play(element: HTMLElement, duration: number | string, steps: number): void {
      if (isNaN(Number(duration)) || duration === "i") {
        if (duration == "i") {
          this.Animate(element, "3s", steps);
        } else {
          throw new ParameterDurationError(element, "creative-typing-");
        }
      } else {
        this.Animate(element, `${duration}s`, steps);
      }
    }
  }
}
