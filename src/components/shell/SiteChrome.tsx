"use client";

import { BackToTop } from "./BackToTop";
// import { CustomCursor } from "./CustomCursor";
// import { LoadingScreen } from "./LoadingScreen";
// import { ScrollProgress } from "./ScrollProgress";
// import { Starfield } from "./Starfield";

export function SiteChrome() {
  return (
    <>
      {/* <LoadingScreen /> */}
      {/* <ScrollProgress /> */}
      {/* <CustomCursor /> */}
      {/* <Starfield /> */}
      <div className="noise" aria-hidden />
      <BackToTop />
    </>
  );
}
