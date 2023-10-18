import { format } from "date-fns-tz";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function POST(request: Request) {
 const data = await request.json();
 if (!data || !data.name || !data.phone || !data.email || !data.datetime) {
  return NextResponse.error();
 }

 const DateTime = format(new Date(data.datetime), "MM/dd/yyyy 'at' h:m a");

 const mailData = {
  html: `
 <div><strong>From Free Consultation Form<strong></div>
    <br/>
    <div><strong>Name:</strong> ${data.name}</div> 
    <br/>
     <div><strong>Phone:</strong> ${data.phone}</div>
    <br/>
     <div><strong>Email:</strong> ${data.email}</div>
    <br/>    
    <div><strong>Service:</strong> ${data.services}</div>
    <br/>  
    <div><strong>Date:</strong> ${DateTime}</div>
    <br/>  
    
    <div><strong>Message:</strong> ${data.message}</div>
    <br/>
    <p>Sent from:
      ${email}</p>`,
 };

 const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
   user: email,
   pass: pass,
  },
  secure: true,
  tls: {
   rejectUnauthorized: false,
  },
 });

 const mailOptions = {
  from: email,
  to: "primewavehealth@gmail.com",
 };

 try {
  await transporter.sendMail({
   ...mailData,
   ...mailOptions,
  });

  return NextResponse.json({ success: true });
 } catch (err: any) {
  return NextResponse.json({ message: err.message });
 }
}
