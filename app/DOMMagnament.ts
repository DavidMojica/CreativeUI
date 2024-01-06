///<reference path="components.ts" />
///<reference path="actions.ts" />

//-------------Todo lo que tenga que ver con el DOM de la página---------------//
const prefix: string = "creative-typing-";
const elementsWithPrefix: NodeListOf<HTMLElement> = document.querySelectorAll(`[class^="${prefix}"]`);

elementsWithPrefix.forEach(element => {
    const classesArray: string[] = element.className.split(' ');
    const filteredClasses: string[] = classesArray.filter(className => className.startsWith(prefix));

    filteredClasses.forEach(className => {
        const durationStr: string = className.replace(prefix, '');
        const duration: number = parseFloat(durationStr);

        // Verifica si duration es un número válido
        if (!isNaN(duration)) {
            const steps: number = element.textContent?.length || 0;
            Actions.Typing.Animate(element, duration, steps);
        } else {
            console.error(`La clase ${className} no contiene una duración válida.`);
        }
    });
});


