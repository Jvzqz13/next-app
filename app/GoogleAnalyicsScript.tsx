import React from 'react'
import Script from 'next/script'

const GoogleAnalyicsScript = () => {
  return (
    <>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID" />
        <Script>
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GA_TRACKING_ID');`}
        </Script>
    
    </>
  )
}

export default GoogleAnalyicsScript
