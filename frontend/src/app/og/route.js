import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(request) {
 try {
  const { searchParams } = new URL(request.url);

  // ?title=<title>
  const hasTitle = searchParams.has("title");
  const title = hasTitle
   ? searchParams.get("title")?.slice(0, 100)
   : "Blog Post";

  const image = await fetch(new URL("/images/bg.png", import.meta.url)).then(
   (res) => res.arrayBuffer()
  );

  return new ImageResponse(
   (
    <div
     style={{
      backgroundColor: "yellow",
      backgroundSize: "150px 150px",
      height: "100%",
      width: "100%",
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      flexWrap: "nowrap",
     }}
    >
     <div
      style={{
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       justifyItems: "center",
      }}
     >
      <img width="256" height="256" src={image} />
     </div>
     <div
      style={{
       fontSize: 60,
       fontStyle: "normal",
       letterSpacing: "-0.025em",
       color: "white",
       marginTop: 30,
       padding: "0 120px",
       lineHeight: 1.4,
       whiteSpace: "pre-wrap",
      }}
     >
      {title}
     </div>
    </div>
   ),
   {
    width: 1200,
    height: 630,
   }
  );
 } catch (e) {
  console.log(`${e.message}`);
  return new Response(`Failed to generate the image`, {
   status: 500,
  });
 }
}
