"use client"

import dynamic from "next/dynamic"

// Dynamically import the demo banner with ssr: false in a client component
const DemoBanner = dynamic(() => import("./demo-banner"), {
  ssr: false,
  loading: () => null,
})

export default function DemoBannerWrapper() {
  return <DemoBanner />
}
