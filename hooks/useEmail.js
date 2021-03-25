import React from "react";
import emailjs from "emailjs-com";

export default function useEmail() {
  const sendEmail = React.useCallback((e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e8szego",
        "template_p6vovw8",
        e.target,
        "user_3lNBJ3N5IQeDVZ9PqLBSr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }, []);

  return {
    sendEmail,
  };
}
