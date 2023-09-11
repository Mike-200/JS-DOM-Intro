// console.log(document.getElementById("heading").textContent)
// console.log(document.querySelector("body h1").textContent)

// Activity 1
// Toggle an image ON and OFF using a button

const image = document.getElementById("image");
const toggleButton = document.getElementById("toggleImage");

console.log("image.style: ", image.style);
console.log("image.style.display: ", image.style.display);

toggleImage.addEventListener("click", () => {
  if (image.style.display == "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
});

// Activity 2
// Change the source of the image

const urlOfImage = document.getElementById("urlOfImage");
const urlSubmitButton = document.getElementById("urlSubmitButton");

urlSubmitButton.addEventListener("click", () => {
  console.log("urlSubmitButton clicked");
  console.log(urlOfImage.value);
  const imageSelection = urlOfImage.value;
  console.log(imageSelection.slice(0, 11));
  if (
    imageSelection.slice(0, 8) == "https://" ||
    imageSelection.slice(0, 7) == "http://"
  ) {
    image.src = imageSelection;
    console.log("image.src: ", image.src);
  } else {
    switch (urlOfImage.value) {
      case "dog":
        console.log("before:", image.src);
        image.src = "./images/dog.jpg";
        console.log("after", image.src);
        break;
      case "cat":
        image.src = "./images/cat.jpg";
        break;
      case "panda":
        image.src = "./images/panda.jpg";
        break;
      default:
      // invalid selection or URL
    }
  }
});

// Activity 3
// Change the colour of the text

const textColourHeading = document.getElementById("textColourHeading");
const newColour = document.getElementById("colour");
const colourButton = document.getElementById("colourButton");

colourButton.addEventListener("click", () => {
  textColourHeading.style.color = newColour.value;
  textColourHeading.textContent = `The colour of this text is ${newColour.value}`;
});

// Activity 4
// Log the co-rdinate of where the mouse clinks

const coOrdinates = document.getElementById("coOrdinates");

document.addEventListener("click", (event) => {
  // console.log(event);
  // console.log(event.clientX);
  coOrdinates.textContent = `X co-ordinate: ${event.clientX}, Y co-ordinate: ${event.clientY}`;
});
