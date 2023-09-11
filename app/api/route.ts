import socialLinks from "@/constants/socialLinks";
import sendgrid from "@sendgrid/mail";

const API_KEY = process.env.SENDGRID_API_KEY || "";

sendgrid.setApiKey(API_KEY);

export async function POST(req: Request) {
  if (req.method !== "POST")
    return new Response("Method not allowed", { status: 405 });

  const body = await req.json();

  if (!body.name || !body.email || !body.message || !body.subject) {
    return new Response("Missing name, email, message or subject", {
      status: 400,
    });
  }

  try {
    const res = await sendgrid.send({
      to: "keremaydemir59@gmail.com", // Your email where you'll receive emails
      from: "keremaydemir59@gmail.com", // your website email address here
      subject: `${body.subject}`,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>You've got a new mail from ${body.name}, their email is: ✉️${body.email} </h3>
                <div style="font-size: 16px;">
                  <p>Message:</p>
                  <p>${body.message}</p>
                  <br>
                </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error: any) {
    return new Response("Something went wrong", { status: 500 });
  }

  return new Response(null, { status: 200 });
}
