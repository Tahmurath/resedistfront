import { useState } from 'react'
import { NavLink } from "react-router";

function About() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <nav>
                    <NavLink to="/" end>Home</NavLink> | <NavLink to="/about" end>About</NavLink>
                </nav>
                <h3>About page</h3>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        About is {count}
                    </button>
                </div>
            </div>
        </>
    )
}

export default About