import React from "react"

interface IDashboardLayout {
    children:React.ReactNode
}

function DashboardLayout({children}:IDashboardLayout){
    return(
        <div>
            ahk
            {children}
        </div>
    )
}

export default DashboardLayout