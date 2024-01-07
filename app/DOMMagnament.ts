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
        const duration: number | string = !isNaN(parseFloat(durationStr)) ? parseFloat(durationStr) : durationStr;

        let steps: number = element.textContent?.length || 0;
        if (duration === "i"){
            Actions.Typing.Play(element, duration, steps);
        }
        else if (!isNaN(Number(duration))){
            Actions.Typing.Play(element, duration, steps);
        }
    });
});


