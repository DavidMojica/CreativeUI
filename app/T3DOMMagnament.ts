///<reference path="T2actions.ts" />
// -------------Todo lo que tenga que ver con el DOM de la página---------------//

let prefix: string;
//ca-typing-
prefix = 'ca-typing-'
prefix = 'ca-typing-'
const elementsWithPrefix: NodeListOf<HTMLElement> = document.querySelectorAll(`[class^="${prefix}"]`)
elementsWithPrefix.forEach(element => {
  const classesArray: string[] = element.className.split(' ')
  const filteredClasses: string[] = classesArray.filter(className => className.startsWith(prefix))
 
  filteredClasses.forEach(className => {
    const durationStr: string = className.replace(prefix, '')
    const duration: number | string = !isNaN(parseFloat(durationStr)) ? parseFloat(durationStr) : durationStr

    const steps: number = element.textContent?.length || 0
    console.log(steps)
    Animations.Typing.Play(element, duration, steps)
  })
})
