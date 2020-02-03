const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const moment = require("moment");
const mongoose = require("mongoose");
const Forecast = require("../models/forecast");

const getLatLangAPI = "https://api.opencagedata.com/geocode/v1/json";
const apiKey = "fcaa176678664904bdf612f44435d4b2";

const weatherAPI = "https://api.weather.yandex.ru/v1/forecast";
const weatherAPIKey = "90f27a7e-276a-469e-807d-e702d3106454";

/* GET home page. */
router.get("/", function(req, res, next) {
  res.redirect("/search");
});

// /search
router
  .get("/login", (req, res) => {
    res.render("login");
  })
  .get("/signup", (req, res) => {
    res.render("signup");
  })
  .get("/search", function(req, res, next) {
    res.render("search");
  })
  .post("/search/location", async function(req, res, next) {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      redirect: "follow"
    };

    fetch(
      `${getLatLangAPI}?key=${apiKey}&q=${req.body.location}`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        fetch(
          `${weatherAPI}?lat=${result.results[0].geometry.lat}&lon=${result.results[0].geometry.lng}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Yandex-API-Key": weatherAPIKey
            }
          }
        )
          .then(response => response.json())
          .then(response => {
            resp = response;
            const time = moment(response.now_dt).format(
              "MMMM Do YYYY, h:mm:ss a"
            );
            const icon = response.fact.icon;
            const iconAPI = `https://yastatic.net/weather/i/icons/blueye/color/svg/${icon}.svg`;
            let forecastHours = response.forecasts[0].hours;
            res.render("search", { response, time, iconAPI, forecastHours });
          })
          .catch(error => console.log("error", error));
      })
      .catch(error => console.log("error", error));
  })
  .post("/search/location/save", async (req, res) => {
    const { name, date_time, temp, icon, condition, feels_like } = req.body;
    const forecastDB = await Forecast.find({ name: name });
    if (forecastDB.length !== 0) {
    } else {
      const forecast = new Forecast({
        name,
        date_time,
        temp,
        icon,
        condition,
        feels_like
      });
      forecast.save();
    }
  });

// /saved
router.get("/saved", async (req, res) => {
  const forecasts = await Forecast.find({});
  res.render("saved", { forecasts });
});

module.exports = router;
