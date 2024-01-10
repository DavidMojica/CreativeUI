///<reference path="T2actions.ts" />
///<reference path="T2elements.ts" />
// -------------Todo lo que tenga que ver con el DOM de la página---------------//
//------------Functions
let prefix: string;
/**
 * Process elements with a specified prefix in their class names and apply a callback function to each matching element.
 *
 * @param {string} prefix - The prefix to search for in the class names of the elements.
 * @param {function} callback - A callback function to apply to each matching element, receiving the element and the extracted value as parameters.
 * @returns {void}
 */
function processElements(prefix: string, callback: (element: HTMLElement, value: string) => void) {
  const elementsWithPrefix: NodeListOf<HTMLElement> = document.querySelectorAll(`[class^="${prefix}"]`);

  elementsWithPrefix.forEach(element => {
    const classesArray: string[] = element.className.split(' ');
    const filteredClasses: string[] = classesArray.filter(className => className.startsWith(prefix));

    filteredClasses.forEach(className => {
      const value: string = className.replace(prefix, '');
      callback(element, value);
    });
  });
}

// Anim typing
prefix = 'ca-typing-';
processElements(prefix, (element, durationStr) => {
  const duration: number | string = !isNaN(parseFloat(durationStr)) ? parseFloat(durationStr) : durationStr;
  const steps: number = element.textContent?.length || 0;
  Animations.Typing.Play(element, duration, steps);
});

// Anim beat
prefix = 'ca-beat-';
processElements(prefix, (element, interval) => {
  console.log(element)
  const intervalStr:number | string = !isNaN(parseFloat(interval)) ? parseFloat(interval) : interval
  Animations.Beat.Play(element, intervalStr)
})

// Btn Neon
prefix = 'cb-neon-';
processElements(prefix, (element, color) => {
  console.log(color);
  Buttons.Neon.setUp(element, color);
});
