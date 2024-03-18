import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize the SES client outside of the handler function to use AWS SDK's default credential provider chain.
const sesClient = new SESClient({ region: "eu-north-1" });

export async function POST(req: Request) {
  // Extract email details from the request body
  const { replyToEmail, sourceEmail, toEmail, message, subject } =
    await req.json();

  try {
    // Prepare the email sending parameters
    const params = {
      Destination: {
        ToAddresses: [toEmail], // Array of email addresses
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: message,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: subject,
        },
      },
      Source: sourceEmail,
      ReplyToAddresses: [replyToEmail], // Array of email addresses
    };

    // Send the email
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);

    // Respond to the client with the result
    return Response.json(
      { success: true, messageId: response.MessageId },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Email sending error:", error);
    Response.json({ success: false, error: error.toString() }, { status: 500 });
  }
}
