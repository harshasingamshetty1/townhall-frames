import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "View Summary",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRWkJLhQ3D8YEHGJHq5jfDRAMZoeqHmFBtERTCB4EdYMd/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Townhall Proposal Voting",
  description: "A frame to allow users to vote on townhall proposals",
  openGraph: {
    title: "Townhall Proposal Voting",
    description: "A frame to allow users to vote on townhall proposals",
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRWkJLhQ3D8YEHGJHq5jfDRAMZoeqHmFBtERTCB4EdYMd/1.png`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Townhall Proposal</h1>
    </>
  );
}
