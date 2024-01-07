///<reference path="components.ts" />
///<reference path="actions.ts" />
var prefix: string;
//-------------Todo lo que tenga que ver con el DOM de la página---------------//
prefix = "creative-typing-";
const elementsWithPrefix: NodeListOf<HTMLElement> = document.querySelectorAll(`[class^="${prefix}"]`);

elementsWithPrefix.forEach(element => {
    const classesArray: string[] = element.className.split(' ');
    const filteredClasses: string[] = classesArray.filter(className => className.startsWith(prefix));

    filteredClasses.forEach(className => {
        const durationStr: string = className.replace(prefix, '');
        const duration: number = parseFloat(durationStr);

        if (!isNaN(duration)) {
            const steps: number = element.textContent?.length || 0;
            Actions.Typing.Play(element, duration, steps);
        } else {
            console.error(`La clase ${className} no contiene una duración válida.`);
        }
    });
});


