import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  const buttonId = data.untrustedData.buttonIndex;

  let path: string;
  if (buttonId === 1) {
    path = "townhallproposal";
    const headers = new Headers();
    headers.set("Location", `${process.env.NEXT_PUBLIC_BASE_URL}/`);
    const response = NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`,
      {
        headers: headers,
        status: 302,
      }
    );
    return response;
  } else if (buttonId === 2) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 7</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRWkJLhQ3D8YEHGJHq5jfDRAMZoeqHmFBtERTCB4EdYMd/2.png" />
    <meta property="fc:frame:button:1" content="Yay" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:button:2" content="Nay" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:button:3" content="Abstain" />
    <meta property="fc:frame:button:3:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head></html>`);
  }
}

export const dynamic = "force-dynamic";
