import { sendMail } from "./mailer.js";

const recipientEmail = "yourmailid@mail.com";
const subject = "Test Email from Node.js";
const plainText = "This is a plain text version of the email.";
const htmlContent = "<p>This is a HTML version of the email.</p>";

sendMail(recipientEmail, subject, plainText, htmlContent);
