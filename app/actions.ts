namespace Actions {
    abstract class Animations {
      //Every animation needs 2 things to work. The element where it will be located and its duration.
      //I have decied to use static classes to avoid the creation of multiple and unnecessary instances
      protected static Animate(element: HTMLElement, duration: number, steps: any): void {}
    }
  
    //Typing machine efect
    export class Typing extends Animations {
      protected Animate(element: HTMLElement, duration: number | string, steps: number): void {
        element.style.animation = `typing ${duration}s steps(${steps}), blink 0.5s infinite step-end alternate`;
        element.style.width = `${steps+1}ch`;
        element.style.whiteSpace = "nowrap";
        element.style.borderRight = "4px solid";
        element.style.overflow = "hidden";
      }

      public static Play(element:HTMLElement, duration: number | string, steps: number): void{
        
      }
    }
  }