import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jamparapu Tharun | Digital Marketing Executive & Web developer | Portfolio",
  description:
    "Digital Marketing Executive & Web developer with 1.5+ years of experience in HTML, CSS, React, JavaScript, and Google Ads, SEO, Meta Ads,....etc.Currently, I bridge the gap between technical development and marketing strategy. I specialize in building fast, SEO-optimized web applications using React.js and Next.js, while leveraging my expertise in Google Ads and Analytics to ensure they reach the right audience..",
  keywords: [
    "UI Developer",
    "React Developer",
    "Frontend Engineer",
    "JavaScript",
    "SASS",
    "Web Design",
    "Accessibility",
    "Hyderabad Tharun",
    "Jamparapu Tharun",
    "jamparapu tharun website",
    "jamparaputharun.in",
    "tharun",
    "tharun web ui developer",
    "jamparapu tharun ui developer"
  ],
  generator: "v0.app",
  openGraph: {
    title: "Nikitesh Bhadade | Sr. UI Developer & React Specialist",
    description:
      "Sr. Software Engineer with 9.5+ years of experience in React, JavaScript, SASS, and design-to-code conversion.",
    type: "website",
    locale: "en_US",
    url: "https://nikitesh.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikitesh Bhadade | Sr. UI Developer & React Specialist",
    description:
      "Sr. Software Engineer with 9.5+ years of experience in React, JavaScript, SASS, and design-to-code conversion.",
  },
  alternates: {
    canonical: "https://nikitesh.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-X0YP0E91RT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-X0YP0E91RT');
</script>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jamparapu Tharun",
              url: "https://jamparaputharun.in",
              jobTitle: "Sr. Digital Marketing Executive and Web Developer",
              email: "tharunjamparapu@gmail.com",
              telephone: "+917997788621",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressCountry: "IN",
              },
              sameAs: ["https://www.linkedin.com/in/jamparapu-tharun/", "https://github.com/Toftharun999"],
              knowsAbout: ["React.js", "JavaScript", "Google Ads", "HTML5", "CSS3", "Web Accessibility", "Meta Ads", "SEO"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
