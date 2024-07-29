function getNames(event) {
  event.preventDefault();
  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action 
  //that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit"
  // button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.
  let formAction = document.getElementById("form1");
  let firstName = formAction.elements["fname"].value;
  let lastName = formAction.elements["lname"].value;
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
}
