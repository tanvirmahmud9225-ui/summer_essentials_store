'use client'

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const PriceIncreaseDecreas = () => {

    const [count, setCount] = useState("1")

    return (
        <div className="border flex items-center gap-4 p-2.5 rounded-lg">
            <Minus onClick={() => setCount(count > 1 && setCount(count - 1))} />
            <p>{count}</p>
            <Plus onClick={() => setCount(count + 1)} />
        </div>
    );
};

export default PriceIncreaseDecreas;