import { Actions } from "./T2actions";
// -------------Todo lo que tenga que ver con el DOM de la página---------------//

const prefix: string = '';
const elementsWithPrefix: NodeListOf<HTMLElement> = document.querySelectorAll(`[class^="${prefix}"]`)

elementsWithPrefix.forEach(element => {
  const classesArray: string[] = element.className.split(' ')
  const filteredClasses: string[] = classesArray.filter(className => className.startsWith(prefix))

  filteredClasses.forEach(className => {
    const durationStr: string = className.replace(prefix, '')
    const duration: number | string = !isNaN(parseFloat(durationStr)) ? parseFloat(durationStr) : durationStr

    const steps: number = element.textContent?.length || 0
    Actions.Typing.Play(element, duration, steps)
  })
})
