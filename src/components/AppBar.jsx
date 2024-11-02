/* eslint-disable react/prop-types */
import { memo } from "react";
const AppBar = memo(({name,nameFirstLetter})=> { 
    return (
        
            <div className="shadow-md flex flex-row justify-between sticky top-0 border-b p-2 min-w-[300px] gap-3">
                <div>
                    <h1 className="font-semibold text-xl mx-2">Payment App</h1>
                </div>

                <div className="flex  items-center gap-2 mx-2">
                <h1 className="font-medium text-lg">{name}</h1>
                <button className=" bg-slate-200 rounded-full p-2 font-bold">{nameFirstLetter}</button>
                </div>
        </div>
        
    )
})
AppBar.displayName = "AppBar";

export default AppBar;