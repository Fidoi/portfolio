import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: fromEmail as string,
      to: ['fidooo.xd@gmail.com', email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Gracias por contactarme</p>
          <p>Mensaje enviado: </p>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
