import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import React from "react";


import logo from "../assets/logo.png";


export const navLinks = [
 
  
  { id: "trending-videos", title: "Trending Videos" },
  { id: "latest-videos", title: "Latest Videos" },
  { id: "gaming", title: "Gaming" },
  {id: "about", title: "About"}
];



const Navbar = () => {
  
  const location = useLocation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
 
  const [navbarShadow, setNavbarShadow] = useState(false);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await axios.get("https://phonespotbackend.blacktechcorp.com/api");
  
       
  //       const fetchedCategories = response.data.categories.map((category) => ({
  //         name: category.name,
  //         slug: category.slug, 
  //         image: `https://phonespotbackend.blacktechcorp.com/${category.image}`, 
  //         shortDescription: category.short_description, 
  //       }));
  
  //       setCategories(fetchedCategories); 
  //     } catch (error) {
  //       console.error("Error fetching categories:", error);
  //     }
  //   };
  
  //   fetchCategories(); 
  // }, []);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    const currentNav = navLinks.find((nav) => nav.id === currentPath);
    if (currentNav) {
      setActive(currentNav.title);
    } else {
      setActive("Home");
    }
  }, [location]);

  return (
    <section >
      
      

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-red-50 transition-shadow ${
          navbarShadow ? "shadow-lg" : ""
        }`}
      >
      
        <div className="max-w-7xl px-4 lg:px-0 mx-auto flex py-3 justify-between items-center">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="w-[120px] h-[60px] lg:w-[180px] lg:h-[90px]" />
          </Link>

          <ul className="list-none sm:flex hidden justify-center items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] relative ${
                  active === nav.title ? "text-red-500" : "text-black"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
               
                onClick={() => setActive(nav.title)}
              >
                <Link className="text-base px-3 py-2 hover:bg-red-900 hover:text-white rounded-xl relative text-red-900 font-bold" to={`/${nav.id}`}>
                  {nav.title}
                 
                  {active === nav.title && <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-red-900"></span>}
                </Link>
               
              </li>
            ))}
          </ul>
          

          {/* Sidebar for mobile */}
          <div className="sm:hidden flex justify-end items-center">
            <FontAwesomeIcon
              icon={toggle ? faTimes : faBars}
              className="w-[28px] h-[28px] text-white px-2 py-2 rounded-xl bg-red-900 cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />
            <div
              className={`fixed top-0 right-0 h-full w-[250px] rounded-bl-2xl bg-red-900 p-6 z-50 transition-transform duration-300 ${
                toggle ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="absolute top-6 right-6">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="w-[32px] h-[32px] text-white cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              </div>
              <ul className="list-none flex flex-col justify-start items-center h-auto space-y-6 mt-20">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[18px] relative ${
                      active === nav.title ? "text-red-500" : "text-dimWhite"
                    }`}
                    
                  >
                    <Link
                      to={nav.id === "service" ? "#" : `/${nav.id}`}
                      className="relative text-lg font-bold text-white flex items-center"
                      onClick={() => nav.id !== "service" && setToggle(false)}
                    >
                      {nav.title}
                      
                      {active === nav.title && (
                        <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-white"></span>
                      )}
                    </Link>
                    
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
