import Row from "./Components/Row.js";
import Nav from "./Components/Nav.js";
import Banner from "./Components/Banner.js";
import { categories } from '../Api.js';

import "./Home.css";

export default function Home() {
    return (
        <>
            <Nav />
            <Banner />
            {
                categories.map((category) => {
                    return <Row
                        key={category.name}
                        title={category.title}
                        isLarge={category.isLarge}
                        path={category.path}
                        filter={category.filter}
                    />
                })
            }
        </>
    );
}