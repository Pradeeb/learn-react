import { useState } from 'react';

const UseStateLearn = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    function inputvalue(value) {
        console.log(value); // Print input value to console
        setName(value);
    }
    console.log("render the function");

    return (
        <>
            <h3>Click Count : {count}</h3>
            <button onClick={() => setCount(old =>old + 1)}>Click</button>
            <br/>
            <br/>
            <input
                type="text"
                onChange={e => inputvalue(e.target.value)}
            />      <br />
            <br />
            <h4>{name}</h4>

            <div>
                <ol className="points">
                    <li>It's used for state management in functional components.</li>
                    <li>useState returns an array with two values: [state, setState].</li>
                    <li>Updating state using setState causes the component to re-render.</li>
                    <li>Initial value passed to useState is used only on the first render.</li>
                    <li>State can be of any data type: string, number, array, object, etc.</li>
                    <li>Don't update state directly. Always use the setter function (e.g., setCount).</li>
                    <li>Each useState is independent, and you can use multiple in a single component.</li>
                    <li>Functional updates (e.g., setCount(prev = prev + 1)) are useful when new value depends on old.</li>
                    <li>State is local to the component where useState is called.</li>
                    <li>Using useState helps create interactive and dynamic UI in React.</li>
                </ol>
            </div>

        </>
    );
};

export default UseStateLearn;
