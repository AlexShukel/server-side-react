import React, { useState } from "react";

const Hello = ({ message }: { message: string }) => {
    return <h1>{message}</h1>;
};

const ComponentWithState = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((val) => val + 1)}>click me</button>
        </div>
    );
};

export const App = () => {
    return (
        <div id="root">
            <Hello message="Hello" />
            <Hello message="World!" />

            <ComponentWithState />
        </div>
    );
};
