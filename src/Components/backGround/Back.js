import React from "react";
import Content from "../contentHeader/Content";
import Out from "../result/Out";
import "./back.css";
import { useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import CitySearch from "../CitySearch";

export default function Back() {
  const [data, setData] = useState({
    cityvalue: "",
    weekOut: {},
    whether: {},
    loading: false,
    error: false,
  });
  const inputPlace = (ev) => {
    console.log("gvfgg===>", ev);
    console.log(data);
    setData({
      ...data,
      cityvalue: ev.target.value,
    });
  };

  const inputAction = (e) => {
    e.preventDefault();

    setData({
      ...data,
      loading: true,
    });
    console.log("plsss===>", data.cityvalue);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${data.cityvalue}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`
      )
      .then((res) => {
        console.log("reskkkkkk===>", res);
        const output = res.data; // consoled details from res
        console.log("output====>", output);

        const currentdate = new Date();
        console.log(currentdate.getDate());
        console.log(currentdate.getDay());
        console.log(currentdate.getMonth());

        const Month = [
          "januaery",
          "february",
          "march",
          "april",
          "may",
          "june",
          "july",
          "agusth",
          "september",
          "october",
          "november",
          "december",
        ];
        const Days = [
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "fryday",
          "saturday",
        ];
        const Dates = `${Days[currentdate.getDay()]} ${currentdate.getDate()} ${
          Month[currentdate.getMonth()]
        }`;
        const SunRise = new Date(output.list[0].sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        const SunSet = new Date(output.list[0].sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        console.log("hhhhhhhhhhhhhhhhhhhhhhhh", SunRise);

        const details = {
          cityName: output.city.name,
          countryName: output.city.country,
          Dates,
          Population: output.city.population,
          SunRise,
          SunSet,
          Temprature: output.list[0].temp.max,
          Condition: output.list[0].weather[0].main,
          Description: output.list[0].weather[0].description,
          Icon: output.list[0].weather[0].icon,
          Pressure: output.list[0].pressure,
          WindSpeed: output.list[0].speed,
          Humidity: output.list[0].humidity,
        };
        console.log("details===========>", details);

        setData({
          ...data,
          weekOut: res.data.list,
          whether: details,
          loading: false,
          error: false,
        });

        console.log("weeeekttttttttttttttttt===>", data.weekOut);
        console.log("whetheroooooooo====>", data.whether);
      })
      .catch((error) => {
        setData({
          ...data,
          error: true,
        });
      });
  };

  return (
    <>
      <div id="ser">
        <CitySearch inputName={inputAction} Place={inputPlace} />

        {data.error == true ? (
          <>
            <h2 id="er">undefined Error!!!!</h2>
          </>
        ) : (
          <></>
        )}
        {data.loading == true ? (
          <Loader />
        ) : (
          <>
            {" "}
            {data.whether.cityName ? (
              <>
                <Content outvalues={data.whether} />
                <Out datas={data.weekOut} />
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </>
  );
}
