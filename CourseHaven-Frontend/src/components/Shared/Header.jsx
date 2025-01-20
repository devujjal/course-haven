import logo from '../../assets/haven-logo.png'
import { IoIosSearch } from "react-icons/io";


const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <a href="">
                        <img src={logo} alt="" />
                    </a>
                    <button></button>
                    <div>
                        <ul>
                            <li>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" role="img" focusable="false" className="me-2"><path d="M3.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m9-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M16 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-9 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m5.5 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-9-11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"></path></svg>
                                <span>Category</span>
                            </li>

                            {/* Here's will be dropdown menu */}

                        </ul>
                        <ul>
                            <li><a href="">
                                <span></span>
                            </a></li>
                            <li><a href="">
                                <span></span>
                            </a></li>
                            <li><a href="">
                                <span></span>
                            </a></li>
                            <li><a href="">
                                <span></span>
                            </a></li>
                        </ul>
                        <div>
                            <div>
                                <form>
                                    <input type="text" name="" id="" />
                                    <button><IoIosSearch />  </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img src="https://readymadeui.com/team-3.webp" className="w-14 h-14 rounded-full border-2 border-blue-600 p-0.5 mx-auto" />
                        </a>
                        <ul></ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;