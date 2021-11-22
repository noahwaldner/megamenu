import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

export default function Menu({ active, routeData, setMenuVisible }) {
  const activePage = parseInt(window.location.pathname.split("/")[1]);
  const [hoveredItem, setHoveredItem] = useState(activePage);
  const [othersHidden, setOthersHidden] = useState(activePage);
  const navigate = useNavigate();

  const handleRedirect = (route) => {
    setOthersHidden(true);
    navigate("/" + route.id);
    setTimeout(() => {
      setMenuVisible(false);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setOthersHidden(false);
    }, 500);
  }, [setOthersHidden]);

  return (
    <ul className="menu-container">
      {routeData.map((item) => (
        <li
          key={item.id}
          onClick={() => handleRedirect(item)}
          onMouseEnter={() => {
            setHoveredItem(item.id);
          }}
          onMouseLeave={() => {
            setHoveredItem((current) => (current === item.id ? null : current));
          }}
          className="menu-item"
          style={{
            backgroundImage: `url(${item.image})`,
            flexGrow:
              hoveredItem === item.id || (activePage === item.id && othersHidden)
                ? 3
                : othersHidden
                ? 0
                : 1,
          }}
        >
          <p
            style={{
              margin:
                othersHidden && hoveredItem !== item.id
                  ? 0
                  : 20,
              opacity: hoveredItem === item.id && !othersHidden ? 1 : 0,
              transform:
                hoveredItem === item.id ? "translateY(0)" : "translateY(-100%)",
            }}
          >
            {item.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
