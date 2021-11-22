import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

export default function Menu({ active, routeData, setMenuVisible }) {
  const activePage = parseInt(window.location.pathname.split("/")[1]);
  const [visibility, setVisibility] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(activePage);
  const [othersHidden, setOthersHidden] = useState(activePage);
  const navigate = useNavigate();

  const handleRedirect = (route) => {
    setOthersHidden(true);
    navigate("/" + route.id);
    setTimeout(() => {
      setVisibility(false)
    }, 800);
    setTimeout(() => {
      setMenuVisible(false);
    }, 1300);
  };

  useEffect(() => {
    console.log("effect");
    setVisibility(true);
    setTimeout(() => {
      setOthersHidden(false);
    }, 200);
  }, [setOthersHidden, setVisibility]);

  return (
    <ul
      className={`menu-container ${visibility && "visible"}`}
      onMouseLeave={() => { !othersHidden && setHoveredItem(null) }}
    >
      {routeData.map((item) => (
        <li
          key={item.id}
          onClick={() => handleRedirect(item)}
          onMouseEnter={() => {
            setHoveredItem(item.id);
          }}
          className={`menu-item ${hoveredItem === item.id ? "zoomed" : othersHidden && "collapsed"}`}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          <p
            className={`${ othersHidden ? "hidden" : ""}`}
          >
            {item.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
