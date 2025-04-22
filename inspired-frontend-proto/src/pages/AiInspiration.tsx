
import { useState } from "react";
import AiPanel from "@/components/dashboard/AiPanel";
import Sidebar from "@/components/dashboard/Sidebar";

const AiInspiration = () => {
    return (
        <div className="flex">
            <Sidebar/>
            <main className="flex-1 min-h-screen bg-blue">
                <AiPanel/>

            </main>
        </div>
    )
}
export default AiInspiration