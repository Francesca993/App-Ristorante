import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export const sendMail = async (to, subject, htmlContent) => {
  const data = {
    from: "RistoApp <noreply@francescamontini.com",
    to,
    subject,
    html: htmlContent,
  };
  try {
    const response = await mg.messages().send(data);
    console.log("email inviata con successo", response);
    return response;
  } catch (err) {
    console.error("errore nell'invio della mail", err);
    throw err;
  }
};
