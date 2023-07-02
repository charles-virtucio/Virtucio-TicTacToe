import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function Winner() {
    
    const { winner } = useContext(AppContext)

    return (
        <div>IKAW ANG <span>{winner}</span>, Panalo!</div>
    )
}

export default Winner