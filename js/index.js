function updateTime() {
  //Los Angeles

  let losAngelesElement = document.querySelector("#los_angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "hh:mm:ss:SS [<small>]A[</small>]"
    );
  }

  //Costa Rica

  let costaRicaElement = document.querySelector("#costa_rica");
  if (costaRicaElement) {
    let costaRicaDateElement = costaRicaElement.querySelector(".date");
    let costaRicaTimeElement = costaRicaElement.querySelector(".time");

    costaRicaTime = moment().tz("America/Costa_Rica");

    costaRicaDateElement.innerHTML = costaRicaTime.format("MMMM Do YYYY");
    costaRicaTimeElement.innerHTML = costaRicaTime.format(
      "hh:mm:ss:SS [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1);

function changeCity(event) {
  let cityTimezone = event.target.value;
  let cityTime = moment().tz(cityTimezone);
  let cityName = cityTimezone.replace("_", " ").replace("-", " ").split("/")[1];
  let citySelected = document.querySelector("#cities");
  citySelected.innerHTML = `<div class="city">
          <div >
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss:SS"
          )}<small>${cityTime.format("A")} </small></div>
        </div>`;
}

let selectCityElement = document.querySelector("#city");
selectCityElement.addEventListener("change", changeCity);
