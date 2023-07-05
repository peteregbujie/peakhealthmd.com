import { Inter } from "next/font/google";
import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(req) {
 const { searchParams } = req.nextUrl;
 const postTitle = searchParams.get("title");

 const fontData = Inter({
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
 });

 return new ImageResponse(
  (
   <div
    style={{
     height: "100%",
     width: "100%",
     display: "flex",
     flexDirection: "column",
     alignItems: "flex-start",
     justifyContent: "center",
     backgroundImage: "url(https://primewavehealth.com/bg.png)",
    }}
   >
    <div
     style={{
      marginLeft: 190,
      marginRight: 190,
      display: "flex",
      fontSize: 130,
      fontFamily: "Inter",
      letterSpacing: "-0.05em",
      fontStyle: "normal",
      color: "white",
      lineHeight: "120px",
      whiteSpace: "pre-wrap",
     }}
    >
     {postTitle}
    </div>
   </div>
  ),
  {
   width: 1900,
   height: 1080,
   fonts: [
    {
     name: "Inter",
     data: fontData,
     style: "normal",
    },
   ],
  }
 );
}