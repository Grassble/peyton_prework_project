const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

const h3 = document.createElement("h3");
h3.textContent = "This is a website about dogs"

document.querySelector("body").appendChild(h2);
document.querySelector("body").appendChild(h3);

/*
function addingEventListener() {
  const input = document.getElementById('button');

  function clickAlert() {
    alert('I was clicked!');
  }

  input.addEventListener('click', clickAlert);
}

 /*
      If you are looking for a fun fact about dogs, make sure to click the button below!
      <script type="text/javascript" src="script.js"></script>
      <br>
      */


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}