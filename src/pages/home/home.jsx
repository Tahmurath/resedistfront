import { useState } from 'react'
import {NavLink} from "react-router";
import { useTranslation } from "react-i18next";
import i18n from "i18next";



function Home() {
    const [count, setCount] = useState(0)

    const { t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>

            <div>
                <NavLink to="/" end>Home</NavLink> | <NavLink to="/about" end>About</NavLink>
                <h3>Home page</h3>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('fa')}>فارسی</button>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        Home is {count}
                        <br/>
                        {t("login.description")}
                    </button>
                </div>

            </div>
        </>
    )
}

export default Home