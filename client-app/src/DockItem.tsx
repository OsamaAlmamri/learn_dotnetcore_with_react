import React from "react";
import { IDock } from "./demo";

interface Props{

    dock:IDock
}
export default function DoclItem({dock}:Props)
{
    return(
        <div >
            <span> {dock.name}</span>
            <span>{dock.numLgs.toString()}</span>
            <button onClick={()=>dock.makeSound(dock.name + ' sound ') }> makeSound </button>
          </div>  
    )
}