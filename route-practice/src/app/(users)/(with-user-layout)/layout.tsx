import React from "react";

export default function UserLayout ({children}:{
    children:React.ReactNode
})
{
    return <>
        <h2>UserLayout</h2>
        {children}
    </>
}