import { Button } from "./ui/button";
import { revt } from "~/definition";
import { useColorMode } from "@kobalte/core";
import { isMobileOnly } from 'mobile-device-detect';
import { Submit } from "./utils";

export default function NavBar() {
  const {setColorMode, colorMode} = useColorMode();
  return (
    <div class="flex justify-end flex-row bg-background w-full sticky h-14 align-middle border-primary border-b-2">
      <div class="my-2 mr-auto flex flex-row">
        <a href="/" class="ml-2">
          <img src="/logo.svg" alt="icon" width={43} />
        </a>
        {!isMobileOnly && <h1 class="my-auto font-bold text-3xl ml-4">AnA</h1>}
      </div>
      <div class="my-2 ml-auto flex flex-row">
        <div onClick={()=>{setColorMode(revt(colorMode()))}} class="justify-center items-center flex"><img src={`/${colorMode()}/mode.svg`} class="text-primary mr-2" alt={colorMode()} width={30}/></div>
        <Button variant="secondary"><a href="#about">About</a></Button>
        <Submit class="md:ml-2 md:mr-2 mr-1" />
      </div>
    </div>
  );
}
