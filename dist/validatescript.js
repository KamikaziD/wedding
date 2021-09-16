function validateForm() {
    let x = document.forms["rsvpForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    } else if (x == "Detmar") {
        alert("Hello Detmar")
        return true;
    }
  }