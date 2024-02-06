import { JSX } from "solid-js";
import { CardTitle } from "./ui/card";

type JSXE = JSX.Element;

export function Title(props: { children: JSXE }): JSXE {
    return <CardTitle class="text-xl md:text-2xl lg:text-3xl">{props.children}</CardTitle>
}

export function SubTitle(props: {class?: string, children: JSXE}): JSXE {
    return <h1 class={`text-lg md:text-xl lg:text-2xl font-normal ${props.class === undefined ? "" : props.class}`}>{props.children}</h1>
}

export function BoldText(props: {class?: string, children: JSXE}): JSXE {
    return <p class={`text-base lg:text-xl font-semibold ${props.class}`}>{props.children}</p>
}
