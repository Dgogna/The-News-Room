import react from "react";
import "../App"
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <div className="navbar">
            <div>
                <Link to="/">
                <h1>The News Room</h1>
                </Link>
                
            </div>
            <div>
                <Link to="/favorites">
                    <h3><i class="fa-solid fa-bookmark"> </i>  Bookmarked News</h3>
                    {/* <h3>Bookmarked</h3> */}
                </Link>
            </div>
        </div>
    )
}

export default Navbar;