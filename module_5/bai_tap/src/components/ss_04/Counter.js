import {useState} from "react";

export function Counter() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    return (
        <>
            <p>Count : {count1}</p>
            <button onClick={() => setCount1(count1 + 1)}>Add 1</button>
            <p>Count : {count2}</p>
            <button onClick={() => setCount2(count2 + 2)}>Add 2</button>
        </>
    )
}