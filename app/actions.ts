namespace Actions{
    export abstract class Animations {
        abstract Animate(element:HTMLElement):void;
        //Another methods

    }

    export class Typing extends Animations{
        Animate(element: HTMLElement): void {
            //--
        }
    }
    //Another sub-classes

}