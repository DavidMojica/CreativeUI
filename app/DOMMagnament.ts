///<reference path="components.ts" />
///<reference path="actions.ts" />

//-------------Todo lo que tenga que ver con el DOM de la página---------------//
var prefix: string;
//Typing
prefix = "creative-typing-";
const a_typing: NodeListOf<HTMLElement> = document.querySelectorAll(`[class^="${prefix}"]`);

a_typing.forEach(e => {
    const classElement = e.className.split(' ');
    const filter = classElement.filter(c => c.startsWith(prefix));
    filter.forEach(c => {
        const duration = c.replace(prefix, '');
        console.log(duration);
    });
});


