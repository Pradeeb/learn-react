import React, { useRef } from 'react'

const UseRefLearn = () => {

    const colors = [
        "#FF5733", // reddish orange
        "#33B5FF", // sky blue
        "#28A745", // green
        "#FFC107", // yellow
        "#6F42C1", // purple
        "#E83E8C", // pink
        "#343A40", // dark gray
        "#F8F9FA", // light gray
        "#000000", // black
        "#FFFFFF"  // white
    ];

    const pRef = useRef(null);
    console.log(pRef); // Object { current: null }
    console.log(pRef.current);

    const changecolor = () => {
        const getolor = Math.floor(Math.random() * colors.length)
        console.log(getolor);
        pRef.current.style.color = colors[getolor];
    }

    return (
        <div className='body'>
            <button onClick={changecolor} >Change color</button>
            <p ref={pRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet iste tenetur dolorem, blanditiis odit eius tempora? Delectus, deleniti dolor ipsa obcaecati eaque adipisci, hic culpa in corporis ea voluptas!</p>

            <ol className="usestate-points">

                <li>useRef is a React Hook that provides a way to access and persist a mutable reference to a DOM element or value.</li>
                <li>It returns a ref object: <code>{`const ref = useRef()`}</code>.</li>
                <li>Access the DOM node using <code>ref.current</code>.</li>
                <li>Unlike useState, changing <code>ref.current</code> does not cause re-render.</li>
                <li>useRef is commonly used to manipulate DOM elements (e.g., input focus, style change).</li>
                <li>It can also be used to keep mutable values between renders without re-rendering.</li>
                <li>Ideal for storing values like timers, previous props/state, and cached data.</li>
                <li>Refs should be attached using the <code>ref</code> attribute: <code>{`<input ref={myRef} />`}</code>.</li>
                <li>Useful in controlled + uncontrolled components for accessing current input values.</li>
                <li>Should not be used for replacing state or triggering UI updates.</li>
            </ol>

        </div>
    )
}

export default UseRefLearn