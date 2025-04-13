import React from 'react'

const Content = (props) => {
    console.log(props);

    return (
        <div>
            <h1 style={{ backgroundColor: "red", color: "white", textAlign: "center" }}>This is content page</h1>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    )
}

export default Content