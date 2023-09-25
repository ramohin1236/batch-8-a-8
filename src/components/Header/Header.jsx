import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="">
            <div className="navbar bg-base-100 container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">
                        <img className="w-40" src="/Resources/Logo.png" alt="" />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                        <NavLink
                            to="/statictis"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>

                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Header;