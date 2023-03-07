// Create textbox
const input = document.createElement("input");
input.type = "text";
input.id = "barcodeInput";
input.placeholder = "Barcode";
input.style.position = "fixed";

// Save initial position of text box
const initialTop = 10;
const initialLeft = 10;
input.style.top = initialTop + "px";
input.style.left = initialLeft + "px";

// Set z-index and background color of text box
input.style.zIndex = "9999";
input.style.backgroundColor = "grey";
document.body.appendChild(input);

// Add event listener to window to listen for scroll event
window.addEventListener("scroll", function() {
  // Calculate how far the page has scrolled
  const scrollTop = window.pageYOffset;
  const scrollLeft = window.pageXOffset;

  // Set the new position of the text box based on the scroll distance
  const scale = 0.0; // Set this to the desired percentage of scroll distance
  input.style.top = (initialTop + scrollTop * scale) + "px";
  input.style.left = (initialLeft + scrollLeft * scale) + "px";
});

// Add event listener to document to listen for key press
document.addEventListener("keydown", function(event) {
    // Check if control + / key combination is pressed
  if (event.ctrlKey && event.keyCode == 191) {

    const barcode = document.getElementById("barcodeInput").value;
    // Find active element and set its value to the barcode data
    const activeElement = document.activeElement;
    activeElement.value = barcode;
    // Create a new "keydown" event with the "enter" key code
  const enterEvent = new KeyboardEvent("keydown", {
    keyCode: 13,
    which: 13,
    charCode: 13,
    bubbles: true,
    cancelable: true
  });

  // Dispatch the event to the active element
  activeElement.dispatchEvent(enterEvent);
    // Clear barcode input field
    document.getElementById("barcodeInput").value = "";
  }
});
