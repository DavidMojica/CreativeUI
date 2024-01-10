///<reference path="T1errors.ts" />
// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace Buttons{
    export class Neon{
        private static HTMLClassName:string = 'cb-neon'
        private static defaultColor:string = '008CFF'
        private static color:string;


        public static setUp(element:HTMLElement, color?:string):void{
            this.color = color === 'd' ? this.defaultColor : color || this.defaultColor;

            if (!(typeof this.color === 'string' &&  color.length === 6 || color.length === 3 || color == 'd'))
                throw new Errors.ColorAssignmentError(element, this.HTMLClassName)

            element.style.padding = "10px 20px"
            element.style.border = "none"
            element.style.fontSize = "17px"
            element.style.color = "#fff"
            element.style.borderRadius = "7px"
            element.style.letterSpacing = "4px"
            element.style.fontWeight = "700"
            element.style.textTransform = "uppercase"
            element.style.transition = "0.5s"
            element.style.transitionProperty = "box-shadow"
            element.style.background = `#${this.color}`
            element.style.boxShadow = `0 0 25px #${this.color}`

            element.addEventListener('mouseover', ()=>{
                element.style.boxShadow = `0 0 5px #${this.color}, 0 0 25px #${this.color}, 0 0 50px #${this.color},0 0 100px #${this.color}`
            })

            element.addEventListener('mouseout', () =>{
                element.style.boxShadow = `0 0 25px #${this.color}`
            })
        }
    }
}