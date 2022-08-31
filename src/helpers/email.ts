const SendEmail = async (
  name: string,
  email: string,
  message: string,
): Promise<boolean> => {
  const data = {
    service_id: "service_7vfg3xp",
    template_id: "template_bsv2e8e",
    user_id: "pQ1r6ESl9eGDwWmd5",
    template_params: {
      name_from: name,
      email_from: email,
      message_from: message,
    },
    accessToken: "2Q4u5NvWl3d1_TRQrtC0X",
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
