import localFont from "next/font/local";

export const apfelGrotezk = localFont({
  src: [
    { path: "./fonts/ApfelGrotezk-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ApfelGrotezk-Mittel.woff2", weight: "500", style: "normal" },
    // "Satt" is the heavy cut; mapped to 800 so both font-bold and font-extrabold resolve to it
    { path: "./fonts/ApfelGrotezk-Satt.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-apfel",
  display: "swap",
});

export const maziusDisplay = localFont({
  src: [
    { path: "./fonts/MaziusDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/MaziusDisplay-Extraitalic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/MaziusDisplay-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/MaziusDisplay-ExtraItalicBold.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-mazius",
  display: "swap",
});
