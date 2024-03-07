import { JSX, createEffect, createSignal, onCleanup } from "solid-js";
import { CardTitle } from "./ui/card";
import moment from "dayjs";
import { dateStringEvent, endDate, startDate } from "~/definition";
import { TooltipTrigger, Tooltip, TooltipContent } from "./ui/tooltip";
import { As } from "@kobalte/core";
import { Button } from "./ui/button";

type JSXE = JSX.Element;

export function Title(props: { children: JSXE }): JSXE {
  return (
    <CardTitle class="text-xl md:text-2xl lg:text-3xl">
      {props.children}
    </CardTitle>
  );
}

export function SubTitle(props: { class?: string; children: JSXE }): JSXE {
  return (
    <h1
      class={`text-lg mb-2 md:mb-0 md:text-xl lg:text-2xl font-normal ${
        props.class === undefined ? "" : props.class
      }`}
    >
      {props.children}
    </h1>
  );
}

export function BoldText(props: { class?: string; children: JSXE }): JSXE {
  return (
    <p class={`text-base lg:text-xl font-semibold ${props.class}`}>
      {props.children}
    </p>
  );
}

export function Submit(props: { class?: string }): JSXE {
  const [date, setDate] = createSignal(moment().unix());
  const [result, setResult] = createSignal("");
  const timer = setInterval(() => {
    setDate(date() + 1);
  }, 1000);
  onCleanup(() => clearInterval(timer));
  createEffect(() => {
    dateStringEvent(date, result, setResult);
  });
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <As
          component={Button}
          disabled={date() < startDate.unix() || date() > endDate.unix()}
          class={`text-xs md:text-base ${
            props.class === undefined ? "" : props.class
          }`}
          onClick={()=>{
            location.href = 'https://lambda.misile.xyz/ana';
          }}
        >
          신청
        </As>
      </TooltipTrigger>
      <TooltipContent>{result()}</TooltipContent>
    </Tooltip>
  );
}
