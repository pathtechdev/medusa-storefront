import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Fraunces, Raleway, Space_Grotesk } from "next/font/google"
import "styles/globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fraunces",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-raleway",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body className={`bg-floral-pearl-bush ${fraunces.variable} ${raleway.variable} ${spaceGrotesk.variable}`}>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
