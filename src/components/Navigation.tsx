import NavItem from "./NavItem.tsx";
import {navItems} from "../utils/constants.ts";

const Navigation = () => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                {navItems.map(item => <NavItem itemTitle={item} key={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;