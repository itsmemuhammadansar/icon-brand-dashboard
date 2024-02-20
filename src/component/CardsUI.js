import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cardUI.css";
import logo from "./Photo/Venu_Dashboard-04.png";

export default function CardsUI() {
  const navigate = useNavigate();

  const handleImageClick = (item) => {
    navigate("/PSM-Dashboard", { state: { detailData: item } });
  };

  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.sheetapi.rest/api/v1/sheet/njsJDOt8m4gutRWqYNtrY"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        const processedData = data.map((item) => ({
          ...item,
          arrayName: item.Unique_Key,
        }));

        processedData.sort((a, b) => a.Rank_No - b.Rank_No);
        setSortedData(processedData);
        console.log("Sorted data:", processedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getBackgroundImage = (name) => {
    switch (name) {
      case "Emp-01":
        return "";
      case "Emp-02":
        return "";
      case "Emp-03":
        return "";
      case "Emp-04":
        return "";
      case "Emp-05":
        return;
      case "Emp-06":
        return "";
      case "Emp-07":
        return "";
      case "Emp-08":
        return "";
      case "Emp-09":
        return "";
      case "Emp-10":
        return "";
      case "Emp-11":
        return "";
      case "Emp-12":
        return "";
      case "Emp-13":
        return "";
      case "Emp-14":
        return "";
      case "Emp-15":
        return "";
      case "Emp-16":
        return "";
      case "Emp-17":
        return "";
      case "Emp-18":
        return "";
      case "Emp-19":
        return "";
      case "Emp-20":
        return "";
      case "Emp-21":
        return "";
      case "Emp-22":
        return "";
      case "Emp-23":
        return "";
      default:
        return "";
    }
  };

  return (
    <div className="center">
      {sortedData.map((item, index) => (
        <div
          key={index}
          className="card"
          style={{
            backgroundImage: `url(${getBackgroundImage(item.Unique_Key)})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="header-container">
            <span>
              <img className="logo-image" src={logo} alt="Vactor Club" />
            </span>
            <nav id="nav">
              <ul id="nav-ul">
                <li>
                  <button
                    className="button-18"
                    onClick={() => handleImageClick(item)}
                  >
                    Check Detail
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <footer>
            <div className="footer-content1">
              <h1 className="footer-cont-name">{item.PSM}</h1>
              <h3 className="designation-cont">{item.City}</h3>
            </div>
            <div className="footer-content2">
              <h1 className={item.Rank_No > 9 ? "large-font" : ""}>
                {item.Rank_No}
              </h1>
            </div>
          </footer>
        </div>
      ))}
    </div>
  );
}
