namespace Actions{
    export abstract class Animations {
        static Animate(element:HTMLElement, duration: number, steps:any):void {};
        //Another methods

    }

    export class Typing extends Animations{
        static Animate(element: HTMLElement, duration: number, steps: number): void {
            element.style.width = `${steps}ch`;
            element.style.animation = `typing ${duration}s steps(${steps}) blink 0.5s infinite step-end alternate`;
            console.log(element,duration,steps)
        }
    }
    //Another sub-classes

}