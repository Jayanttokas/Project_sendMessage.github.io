var controller = (()  => {

  // HANDLING EVENT
  const eventHandler = () => {
    document.getElementById("submit").addEventListener("click", getMessage);
  };

  // GETTING THE MESSAGE TO BE DELIVERED
  const getMessage = () => {
    let message = document.getElementById("mess").value;

    if (!message == ""){
      // DISPLAYING THE MESSAGE
      displayMessage(message);
    } else {
        document.getElementById("message-sent").innerHTML = "<b>Please Enter a Message</b>";
    }

  }

  //DISPLAYING MESSAGE
  const displayMessage = (message) => {
    document.getElementById("message-sent").innerHTML = "<b>Your Message Was Delivered</b>"
    document.getElementById("messaged").innerHTML = ` <b> ${message} </b> `;
  }

    return {
      init: () => {
        console.log("App Stared")
        eventHandler();
      }
    }

})();

controller.init();
