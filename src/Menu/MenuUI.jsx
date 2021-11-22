import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

export default function Menu({ active, routeData, setMenuVisible }) {
  const activePage = parseInt(window.location.pathname.split("/")[1]);
  const [visibility, setVisibility] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(activePage);
  const [othersHidden, setOthersHidden] = useState(activePage);
  const navigate = useNavigate();

  const handleRedirect = (item) => {
    setHoveredItem(item.id)
    setOthersHidden(true);
    navigate("/" + item.id);
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
    <div
      className={`menu-container ${visibility && "visible"}`}
      onMouseLeave={() => {
        !othersHidden && setHoveredItem(null);
      }}
    >
      {routeData.map((item) => (
        <div
          key={item.id}
          onClick={() => handleRedirect(item)}
          onMouseEnter={() => {
            !othersHidden && setHoveredItem(item.id);
          }}
          className={`menu-item ${
            hoveredItem === item.id ? "zoomed" : othersHidden && "collapsed"
          }`}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          <div className="menu-item_title">
            {item.name.split("").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </div>
          <p className={`menu-item_description`}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
