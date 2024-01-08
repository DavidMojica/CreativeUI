///<reference path="T2actions.ts" />
///<reference path="T2elements.ts" />
// -------------Todo lo que tenga que ver con el DOM de la página---------------//

let prefix: string;
//ca-typing-
prefix = 'ca-typing-'
let elementsWithPrefix: NodeListOf<HTMLElement> = document.querySelectorAll(`[class^="${prefix}"]`)
elementsWithPrefix.forEach(element => {
  const classesArray: string[] = element.className.split(' ')
  const filteredClasses: string[] = classesArray.filter(className => className.startsWith(prefix))
 
  filteredClasses.forEach(className => {
    const durationStr: string = className.replace(prefix, '')
    const duration: number | string = !isNaN(parseFloat(durationStr)) ? parseFloat(durationStr) : durationStr

    const steps: number = element.textContent?.length || 0
    Animations.Typing.Play(element, duration, steps)
  })
})


//------BUTTONS-----//
prefix = 'cb-neon-'
elementsWithPrefix = document.querySelectorAll(`[class^="${prefix}"]`)
elementsWithPrefix.forEach(element =>{
  const classesArray: string[] = element.className.split(' ')
  const filteredClasses: string[] = classesArray.filter(className => className.startsWith(prefix))

  filteredClasses.forEach(className => {
    const color:string = className.replace(prefix, '')
    console.log(color)
    Buttons.Neon.setUp(element, color)
  })
})