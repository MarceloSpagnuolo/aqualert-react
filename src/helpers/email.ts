const SendEmail = async (
  name: string,
  email: string,
  message: string,
): Promise<boolean> => {
  const data = {
    service_id: "INSERT_SERVICE_ID",
    template_id: "INSERT_TEMPLATE_ID",
    user_id: "INSERT_USER_ID",
    template_params: {
      name_from: name,
      email_from: email,
      message_from: message,
    },
    accessToken: "INSERT_AQUALERT_TOKEN_HERE",
  };

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      `https://api.emailjs.com/api/v1.0/email/send`,
      options,
    );
    console.log(response);
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.log("Error:", error);
    return false;
  }
};

export default SendEmail;
