namespace Actions {
    abstract class Animations {
      static Animate(element: HTMLElement, duration: number, steps: any): void {}
      // Otros métodos abstractos o propiedades abstractas
    }
  
    export class Typing extends Animations {
      static Animate(element: HTMLElement, duration: number, steps: number): void {
        element.style.width = `${steps}ch`;
        element.style.whiteSpace = "nowrap";
        element.style.borderRight = "4px solid";
        element.style.display = "inline-block";
        element.style.animation = `typing ${duration}s steps(${steps}) blink 0.5s infinite step-end alternate`;
      }
    }
  
    // Otras subclases si es necesario
  }