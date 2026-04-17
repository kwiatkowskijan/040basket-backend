export default {
  async send(ctx) {
    const { name, email, message } = ctx.request.body;

    if (!name || !email || !message) {
      return ctx.throw(400, "Some fields are missing");
    }

    try {
      await strapi.plugins["email"].services.email.send({
        to: process.env.EMAIL_DEFAULT_TO,
        from: process.env.EMAIL_DEFAULT_FROM,
        replyTo: process.env.EMAIL_DEFAULT_REPLY_TO,
        subject: `Nowa wiadomość od: ${name}`,
        html: `
          <p><strong>Od:</strong> ${name} (${email})</p>
          <p><strong>Treść:</strong></p>
          <p>${message}</p>
        `,
      });

      ctx.body = { message: "Message sent correctly" };
    } catch (error) {
      ctx.throw(500, "Error sending message");
    }
  },
};
