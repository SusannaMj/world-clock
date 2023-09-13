function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los_angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss:SS [<small>]A[</small>]"
  );

  //Costa Rica
  let costaRicaElement = document.querySelector("#costa_rica");
  let costaRicaDateElement = costaRicaElement.querySelector(".date");
  let costaRicaTimeElement = costaRicaElement.querySelector(".time");

  costaRicaTime = moment().tz("America/Costa_Rica");

  costaRicaDateElement.innerHTML = costaRicaTime.format("MMMM Do YYYY");
  costaRicaTimeElement.innerHTML = costaRicaTime.format(
    "hh:mm:ss:SS [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1);
