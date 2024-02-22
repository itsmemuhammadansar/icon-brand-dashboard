import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import "apexcharts/dist/apexcharts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css Components/cardsUI.css";

export default function Dashboard() {
  const [weeklyVen10TrendArray, setWeeklyVen10TrendArray] = useState([]);
  const [weeklyVen20TrendArray, setWeeklyVen20TrendArray] = useState([]);
  const [weeklyTrendArray, setWeeklyTrendArray] = useState([]);
  // const [selectedButton, setSelectedButton] = useState("all");

  const navigate = useNavigate();
  const location = useLocation();
  const handleImageClick = () => {
    navigate("/PSM-Rank");
  };

  const detailData = location.state?.detailData || null;

  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Icon",
        data: [340, 440, 247, 454, 349, 345, 446],
      },
      {
        name: "100mg inst",
        data: [],
      },
      {
        name: "100mg inst",
        data: [212, 211, 114, 218, 217, 213, 313],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 10,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#FECF06", "#F1682E", "#7E3F96"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["Week1", "Week2", "Week3", "Week4"],
      },
      yaxis: {
        title: {
          text: "Icon Sales",
        },
        min: 100,
        max: 15000,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -10,
        offsetX: -5,
      },
    },
  });

  useEffect(() => {
    if (detailData) {
      console.log("Received data in Dashboard component:", detailData);

      const W1_10mg = detailData?.W1_10mg || "0";
      const W2_10mg = detailData?.W2_10mg || "0";
      const W3_10mg = detailData?.W3_10mg || "0";
      const W4_10mg = detailData?.W4_10mg || "0";

      const W1_20mg = detailData?.W1_20mg || "0";
      const W2_20mg = detailData?.W2_20mg || "0";
      const W3_20mg = detailData?.W3_20mg || "0";
      const W4_20mg = detailData?.W4_20mg || "0";

      const W1 = detailData?.Week1 || "0";
      const W2 = detailData?.Week2 || "0";
      const W3 = detailData?.Week3 || "0";
      const W4 = detailData?.Week4 || "0";

      const weeklyVenu20TrendData = [W1_20mg, W2_20mg, W3_20mg, W4_20mg];
      const weeklyVenu10TrendData = [W1_10mg, W2_10mg, W3_10mg, W4_10mg];
      const weeklyTrendData = [W1, W2, W3, W4];

      setWeeklyVen10TrendArray(weeklyVenu10TrendData);
      setWeeklyVen20TrendArray(weeklyVenu20TrendData);
      setWeeklyTrendArray(weeklyTrendData);

      console.log("10mg Array:", weeklyVen10TrendArray);
      console.log("20mg Array:", weeklyVen20TrendArray);
      console.log("venu Array:", weeklyTrendArray);
    }
  }, [detailData]);

  useEffect(() => {
    const updatedChartData = {
      ...chartData,
      series: [
        {
          name: "Icon",
          
        },
        
      ],
    };

    setChartData(updatedChartData);
  }, [ weeklyTrendArray, weeklyVen10TrendArray, weeklyVen20TrendArray,]);

  return (
    <div>
      {/* HEADER */}
      <div class="header-container">
        <span>
          <button className="button-18 button-home" onClick={handleImageClick}>
            Go Back
          </button>
        </span>
        <span>
          <button className="button-18">
            Rank : {detailData?.Rank_No || "0"}
          </button>
        </span>
        <nav id="nav">
          <ul id="nav-ul">
            <li>
              {/* <img className="logo-image" src={logo} alt="Vactor Club" /> */}
              {/* <button className="logo-image" >Icon-Club</button> */}
            </li>
          </ul>
        </nav>
      </div>

      <div class="wrap">
        <div class="box">
          <div class="box-top">
            <h3 class="box-title">TARGET : {detailData?.Target_Sale || "0"}</h3>
          </div>
        </div>
        <div class="box">
          <div class="box-top">
            <h3 class="box-title">
              ACHIEVEMENT : {detailData?.Total_Unit_Sale || "0"}
            </h3>
          </div>
        </div>

        <div class="box">
          <div class="box-top">
            <h3 class="box-title">
             REMAINING : {detailData?.Remaining_Sale || "0"}
            </h3>
          </div>
        </div>
      </div>
      <div className="trending-graph">
        <div id="chart">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={350}
          />
        </div>
        <div className="button-container">
          {/* <Button
            style={{ backgroundColor: "#F1682E" }}
            onClick={() => setSelectedButton("venu10mg")}
          >
            100mg
          </Button> */}
          {/* <Button
            style={{ backgroundColor: "#7E3F96" }}
            onClick={() => setSelectedButton("venu20mg")}
          >
            100mg inst
          </Button> */}
          {/* <Button
            style={{ backgroundColor: "#FECF06" }}
            onClick={() => setSelectedButton("venuBrand")}
          >
            Icon Brand
          </Button> */}
          {/* <Button
            style={{ backgroundColor: "#000000" }}
            onClick={() => setSelectedButton("all")}
          >
            Show All
          </Button> */}
        </div>
      </div>

      {/* Weekly Card */}
      <div className="card-container">
        <h1>Weekly Trend</h1>
        <div className="card-list">
          <div className="card-item ">
            <span class="developer">Week : 01</span>
            <h3>UNIT SOLD : {detailData?.Week1 || "0"}</h3>
          </div>
          <div className="card-item">
            <span className="developer">Week : 02</span>
            <h3>UNIT SOLD : {detailData?.Week2 || "0"}</h3>
          </div>

          <div className="card-item">
            <span class="developer">Week : 03</span>
            <h3>UNIT SOLD : {detailData?.Week3 || "0"}</h3>
          </div>

          <div className="card-item">
            <span class="developer">Week : 04</span>
            <h3>UNIT SOLD : {detailData?.Week4 || "0"}</h3>
          </div>
        </div>
      </div>
      {/* End */}

      {/*Remaining Div */}
      <div className="card-container">
        <div className="remaining-card-list">
          <div className=" card-item-remaining">
            <div className="remaining-unit">Remaining Unit</div>
            <div className="remaining-arrow">⥥</div>

            <div className="remaining-unit remaining-value">
              {detailData?.Remaining_Sale || "0"}
            </div>
          </div>

          <div className="card-item-remaining">
            <div className="remaining-unit">Per Day Unit</div>
            <div className="remaining-arrow">⥥</div>

            <div className="remaining-unit remaining-value">
              {detailData?.Average_Day_Sales || "0"}
            </div>
          </div>

          <div className=" card-item-remaining">
            <div className="remaining-unit">Require Average</div>
            <div className="remaining-arrow">⥥</div>

            <div className="remaining-unit remaining-value">
              {detailData?.Total_Days || "0"}
            </div>
          </div>
        </div>
      </div>

      {/* Remaining div End */}
    </div>
  );
}
