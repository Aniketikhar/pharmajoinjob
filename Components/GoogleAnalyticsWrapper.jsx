// app/components/GoogleAnalyticsWrapper.js
"use client";  // Ensure this is a client-side component

import { GoogleAnalytics } from "nextjs-google-analytics";

const GoogleAnalyticsWrapper = () => {
  return (
    <GoogleAnalytics
      trackPageViews
      gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
    />
  );
};

export default GoogleAnalyticsWrapper;
