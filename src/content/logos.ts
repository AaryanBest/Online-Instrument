export interface LogoDefinition {
  id: string;
  label: string;
  group: 'client' | 'partner' | 'distributor' | 'certification';
  opticalScale: number; // 0.8 to 1.3 to balance visual weights
  brandColor: string; // True color on hover
  svgViewBox: string;
  svgPath: string; // Vector shape of the authentic wordmark or symbol
}

export const logosRegistry: Record<string, LogoDefinition> = {
  // CLIENTS
  amazon: {
    id: "amazon",
    label: "Amazon",
    group: "client",
    opticalScale: 1.05,
    brandColor: "#FF9900",
    svgViewBox: "0 0 140 42",
    svgPath: "M20 28c8 5 24 8 36 2 2-1 4 1 2 3-14 8-32 4-42-3-2-1 0-3 2-2zm40-1c3 1 8 1 11-1 1-1 3 0 2 2-4 3-10 4-15 1-1-1 0-3 2-2zm-46-8c0-8 6-14 15-14 6 0 11 3 13 8v-7h6v20h-6v-3c-2 4-7 7-13 7-9 0-15-5-15-11zm6 0c0 5 4 8 9 8s9-3 9-8-4-8-9-8-9 3-9 8zm38 11v-14h-4v-5h4v-3c0-5 3-8 8-8 3 0 5 1 6 2l-2 5c-1 0-2-1-4-1-2 0-3 1-3 4v1h7v5h-7v14h-6zm16-19c0-6 5-10 11-10s11 4 11 10-5 10-11 10-11-4-11-10zm6 0c0 4 2 6 5 6s5-2 5-6-2-6-5-6-5 2-5 6zm20 19v-19h6v3c2-2 5-4 9-4 6 0 10 4 10 10v10h-6v-9c0-4-2-6-5-6s-6 2-6 6v9h-6z"
  },
  google: {
    id: "google",
    label: "Google",
    group: "client",
    opticalScale: 1.0,
    brandColor: "#4285F4",
    svgViewBox: "0 0 130 42",
    svgPath: "M22 21c0-1.5-.1-3-.4-4.3H0v8.2h12.4c-.5 2.8-2.2 5.2-4.6 6.8v5.6h7.5c4.4-4 6.7-10 6.7-16.3zM35 15c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12.8c-2.7 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8 4.8 2.1 4.8 4.8-2.1 4.8-4.8 4.8zm18-12.8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12.8c-2.7 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8 4.8 2.1 4.8 4.8-2.1 4.8-4.8 4.8zm17.5-12.8c-4.2 0-7.8 3.7-7.8 8s3.6 8 7.8 8c2.4 0 4.2-1 5.2-2.3v1.8c0 3-1.6 4.7-4.2 4.7-2.1 0-3.5-1.5-4-2.8l-2.8 1.2c.8 2 3 4.8 6.8 4.8 4 0 7.4-2.4 7.4-8.3V15.5h-3.2v1.5c-1.1-1.3-2.9-2-5.2-2zm.3 12.8c-2.6 0-4.6-2.1-4.6-4.8s2-4.8 4.6-4.8c2.5 0 4.5 2.1 4.5 4.8s-2 4.8-4.5 4.8zM78 10h3.2v20H78V10zm11 12.5c0-4.2 3.3-7.5 7.4-7.5 3.3 0 5.6 1.7 6.8 3.5l-2.8 1.8c-.8-1.1-1.9-2.1-4-2.1-2.4 0-4.1 1.9-4.1 4.3s1.8 4.3 4.2 4.3c1.6 0 2.8-.7 3.6-1.8l2.6 1.8c-1.4 2-3.6 3.2-6.2 3.2-4.3 0-7.5-3.3-7.5-7.5z"
  },
  microsoft: {
    id: "microsoft",
    label: "Microsoft",
    group: "client",
    opticalScale: 0.95,
    brandColor: "#00A4EF",
    svgViewBox: "0 0 140 32",
    svgPath: "M0 0h14v14H0zm16 0h14v14H16zM0 16h14v14H0zm16 16V16h14v14H16zm26-5.5h4v-13h-4v-3h11v16h4v3H42v-3zm18 0h4v-19h-4v-3h11v22h4v3H60v-3zm18-7c0-5 3.5-9 8.5-9 5 0 8.5 4 8.5 9s-3.5 9-8.5 9c-5 0-8.5-4-8.5-9zm4 0c0 3 2 5.5 4.5 5.5s4.5-2.5 4.5-5.5-2-5.5-4.5-5.5-4.5 2.5-4.5 5.5zm19 7h4v-19h-4v-3h11v5c1.5-3.5 5-5.5 8.5-5.5h2v6.5h-3c-4.5 0-7.5 3-7.5 8v8h4v3h-15v-3z"
  },
  deloitte: {
    id: "deloitte",
    label: "Deloitte",
    group: "client",
    opticalScale: 1.0,
    brandColor: "#86BC25",
    svgViewBox: "0 0 130 32",
    svgPath: "M0 6h10c7 0 12 5 12 12s-5 12-12 12H0V6zm7 18h3c4 0 6-3 6-6s-2-6-6-6H7v12zm21 0c0-6 4-10 10-10s10 4 10 10h-14c.5 3 2.5 5 5 5 2 0 3.5-1 4.5-2.5l4 2.5c-2 3-5 5-8.5 5-6 0-11-4.5-11-10zm6-2h8c-.5-2.5-2-4-4-4s-3.5 1.5-4 4zm19-16h6v24h-6V6zm14 12c0-6 4-10 10-10s10 4 10 10-4 10-10 10-10-4-10-10zm6 0c0 3.5 2 5.5 4.5 5.5s4.5-2 4.5-5.5-2-5.5-4.5-5.5-4.5 2-4.5 5.5zm18 3h4v-11h-4V7h10v17h4v4h-14v-4zm15-9h6v13h-6V12zm0-6h6v4h-6V6zm11 12c0-6 4-10 10-10s10 4 10 10-4 10-10 10-10-4-10-10zm6 0c0 3.5 2 5.5 4.5 5.5s4.5-2 4.5-5.5-2-5.5-4.5-5.5-4.5 2-4.5 5.5zm18 7c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"
  },
  siemens: {
    id: "siemens",
    label: "Siemens",
    group: "client",
    opticalScale: 1.05,
    brandColor: "#00646E",
    svgViewBox: "0 0 130 28",
    svgPath: "M10 5C4 5 0 9 0 14s4 9 10 9c5 0 8-3 9-6h-6c-1 1-2 2-3 2-2 0-4-1-4-5h14c0-5-4-9-10-9zm-4 7c0-2 2-3 4-3s4 1 4 3H6zm19-7h6v18h-6V5zm12 9c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9zm6 0c0 3 2 4 3 4s3-1 3-4-2-4-3-4-3 1-3 4zm18-9h6v3c1-2 3-3 6-3 4 0 7 3 7 7v11h-6v-9c0-2-1-3-3-3s-4 1-4 3v9h-6V5zm25 0h6v18h-6V5zm11 14c1 2 3 3 5 3 2 0 3-1 3-2 0-2-2-2-4-3-4-1-7-3-7-6 0-4 3-6 7-6 4 0 7 2 8 5l-4 2c-1-1-2-2-4-2-2 0-3 1-3 2 0 1 2 2 4 2 4 1 7 3 7 6 0 4-3 6-7 6-5 0-8-3-9-6l5-3z"
  },
  micron: {
    id: "micron",
    label: "Micron",
    group: "client",
    opticalScale: 1.1,
    brandColor: "#005596",
    svgViewBox: "0 0 120 28",
    svgPath: "M0 4h7l7 12 7-12h7v20h-6V10l-6 10h-4l-6-10v14H0V4zm34 6h6v14h-6V10zm0-6h6v4h-6V4zm11 11c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7zm6 0c0 2 1 3 2 3s2-1 2-3-1-3-2-3-2 1-2 3zm14-5h5v3c1-2 3-3 5-3h2v5h-3c-3 0-4 2-4 5v6h-5V10zm17 4c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7zm6 0c0 2 1 3 2 3s2-1 2-3-1-3-2-3-2 1-2 3zm14-4h5v3c1-2 3-3 6-3 4 0 6 3 6 7v9h-5v-8c0-2-1-3-3-3s-3 1-3 3v8h-5V10z"
  },
  tcs: {
    id: "tcs",
    label: "Tata Consultancy Services",
    group: "client",
    opticalScale: 1.15,
    brandColor: "#0076CE",
    svgViewBox: "0 0 110 32",
    svgPath: "M0 6h22v6H14v16H8V12H0V6zm28 0h6l8 22h-6l-2-5h-7l-2 5h-6l8-22zm5 12l-2-6-2 6h4zm13-12h22v6h-8v16h-6V12h-8V6zm28 0h6l8 22h-6l-2-5h-7l-2 5h-6l8-22zm5 12l-2-6-2 6h4z"
  },
  cisco: {
    id: "cisco",
    label: "Cisco",
    group: "client",
    opticalScale: 1.0,
    brandColor: "#049FD9",
    svgViewBox: "0 0 120 40",
    svgPath: "M10 24v-6h3v6h-3zm12 4v-14h3v14h-3zm12-4v-6h3v6h-3zm12 7v-20h3v20h-3zm12-7v-6h3v6h-3zm12 4v-14h3v14h-3zm12-4v-6h3v6h-3zm12 7v-20h3v20h-3zm12-7v-6h3v6h-3zM15 38c-5 0-9-4-9-9s4-9 9-9c3 0 5 1 7 3l-2 3c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l2 3c-2 2-4 3-7 3zm18 0h-4V21h4v17zm0-20h-4v-4h4v4zm11 20c-4 0-7-2-8-4l3-2c1 1 3 2 5 2 2 0 3-1 3-2 0-1-1-1-3-2-3-1-5-2-5-4 0-3 2-5 5-5 3 0 5 1 7 3l-3 2c-1-1-2-1-4-1-1 0-2 1-2 1 0 1 1 1 3 2 3 1 5 2 5 4 0 3-2 5-6 5zm15 0c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-4c3 0 5-2 5-5s-2-5-5-5-5 2-5 5 2 5 5 5z"
  },
  amdocs: {
    id: "amdocs",
    label: "Amdocs",
    group: "client",
    opticalScale: 1.0,
    brandColor: "#FF5C39",
    svgViewBox: "0 0 120 30",
    svgPath: "M0 24l9-18h7l9 18h-6l-2-4H9l-2 4H0zm11-8h5l-2.5-6.5L11 16zm20-10h5v18h-5V6zm10 0h5v3c2-2 4-3 7-3 4 0 8 3 8 9s-4 9-8 9c-3 0-5-1-7-3v3h-5V6zm5 10c0 3 2 5 4 5s4-2 4-5-2-5-4-5-4 2-4 5zm18-10h5v18h-5V6zm14 9c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9zm5 0c0 3 2 4 4 4s4-1 4-4-2-4-4-4-4 1-4 4zm16 6c1 1 3 2 5 2 2 0 3-1 3-2 0-2-2-2-4-2-4-1-6-2-6-5 0-3 2-5 6-5 3 0 5 1 6 3l-3 2c-1-1-2-1-3-1-1 0-2 1-2 1 0 1 1 1 3 1 4 1 6 2 6 5 0 3-2 5-6 5-3 0-6-1-7-3l3-2z"
  },
  persistent: {
    id: "persistent",
    label: "Persistent Systems",
    group: "client",
    opticalScale: 1.05,
    brandColor: "#F47920",
    svgViewBox: "0 0 130 32",
    svgPath: "M0 6h12c5 0 9 3 9 8s-4 8-9 8H6v6H0V6zm6 11h6c2 0 4-1 4-3s-2-3-4-3H6v6zm22-5h5v2c2-2 4-3 7-3 4 0 7 2 7 6v13h-5v-11c0-2-1-3-3-3s-3 1-3 3v11h-5V12zm25 10c1 1 3 2 5 2 2 0 3-1 3-2 0-2-2-2-4-2-4-1-6-2-6-5 0-3 2-5 6-5 3 0 5 1 6 3l-3 2c-1-1-2-1-3-1-1 0-2 1-2 1 0 1 1 1 3 1 4 1 6 2 6 5 0 3-2 5-6 5-3 0-6-1-7-3l3-2zm16-10h5v16h-5V12zm0-6h5v4h-5V6zm12 10c1 1 3 2 5 2 2 0 3-1 3-2 0-2-2-2-4-2-4-1-6-2-6-5 0-3 2-5 6-5 3 0 5 1 6 3l-3 2c-1-1-2-1-3-1-1 0-2 1-2 1 0 1 1 1 3 1 4 1 6 2 6 5 0 3-2 5-6 5-3 0-6-1-7-3l3-2zm16-6h4v-4h5v4h4v4h-4v8c0 2 1 2 2 2h2v4h-4c-4 0-5-2-5-5v-9h-4v-4z"
  },
  carelon: {
    id: "carelon",
    label: "Carelon Global Solutions",
    group: "client",
    opticalScale: 1.0,
    brandColor: "#0072CE",
    svgViewBox: "0 0 120 32",
    svgPath: "M16 16c0-6 4-10 10-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-6 0-10-4-10-10zm25-4h5v2c1-2 3-3 6-3 4 0 7 2 7 6v12h-5v-10c0-2-1-3-3-3s-3 1-3 3v10h-5V12zm25 10c1 1 3 2 5 2 2 0 3-1 3-2 0-2-2-2-4-2-4-1-6-2-6-5 0-3 2-5 6-5 3 0 5 1 6 3l-3 2c-1-1-2-1-3-1-1 0-2 1-2 1 0 1 1 1 3 1 4 1 6 2 6 5 0 3-2 5-6 5-3 0-6-1-7-3l3-2zm16-16h5v22h-5V6zm12 11c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9zm5 0c0 3 2 4 4 4s4-1 4-4-2-4-4-4-4 1-4 4z"
  },
  cognizant: {
    id: "cognizant",
    label: "Cognizant",
    group: "client",
    opticalScale: 1.05,
    brandColor: "#0033A0",
    svgViewBox: "0 0 130 32",
    svgPath: "M16 16c0-6 4-10 10-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-6 0-10-4-10-10zm25 0c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9zm5 0c0 3 2 4 4 4s4-1 4-4-2-4-4-4-4 1-4 4zm16-4h5v2c1-2 3-3 6-3 4 0 6 3 6 7v10h-5v-8c0-2-1-3-3-3s-3 1-3 3v8h-5V12zm22 16c0-5 4-9 9-9 3 0 5 1 6 3v-2h5v16c0 5-4 8-10 8-5 0-9-3-9-7l5-1c.5 2 2 3 4 3 3 0 5-1 5-4v-1c-1 1-3 2-5 2-5 0-9-4-9-9zm5 0c0 3 2 4 4 4s4-1 4-4-2-4-4-4-4 1-4 4z"
  },
  accenture: {
    id: "accenture",
    label: "Accenture",
    group: "client",
    opticalScale: 1.1,
    brandColor: "#A100FF",
    svgViewBox: "0 0 130 32",
    svgPath: "M10 24l8-18h6l8 18h-5l-2-4H17l-2 4h-5zm9-8h6l-3-7-3 7zm22-3c-1-1-3-1-4-1-3 0-5 2-5 5s2 5 5 5c1 0 3 0 4-1l2 3c-2 1-4 2-6 2-6 0-10-4-10-9s4-9 10-9c2 0 4 1 6 2l-2 3zm14 0c-1-1-3-1-4-1-3 0-5 2-5 5s2 5 5 5c1 0 3 0 4-1l2 3c-2 1-4 2-6 2-6 0-10-4-10-9s4-9 10-9c2 0 4 1 6 2l-2 3zm14 9c0-5 3-9 8-9s8 4 8 9h-12c.5 2 2 4 4 4 2 0 3-1 4-2l2 2c-2 2-4 3-6 3-5 0-9-4-9-9zm4-2h7c-.5-2-2-3-3.5-3s-3 1-3.5 3zm18-7h5v2c1-2 3-3 6-3 4 0 6 3 6 7v9h-5v-8c0-2-1-3-3-3s-3 1-3 3v8h-5v-16zm26 6c1 1 3 2 5 2 2 0 3-1 3-2 0-2-2-2-4-2-4-1-6-2-6-5 0-3 2-5 6-5 3 0 5 1 6 3l-3 2c-1-1-2-1-3-1-1 0-2 1-2 1 0 1 1 1 3 1 4 1 6 2 6 5 0 3-2 5-6 5-3 0-6-1-7-3l3-2z"
  },
  ibm: {
    id: "ibm",
    label: "IBM",
    group: "client",
    opticalScale: 1.15,
    brandColor: "#0530AD",
    svgViewBox: "0 0 100 32",
    svgPath: "M0 4h14v3H0zm0 5h14v3H0zm0 5h14v3H0zm0 5h14v3H0zm0 5h14v3H0zm20-20h22v3H20zm0 5h10v3H20zm0 5h14v3H20zm0 5h10v3H20zm0 5h22v3H20zm28-20h8l6 11 6-11h8v3h-6l-5 9v11h-5V17l-5-9h-6z"
  },
  oracle: {
    id: "oracle",
    label: "Oracle",
    group: "client",
    opticalScale: 1.1,
    brandColor: "#F80000",
    svgViewBox: "0 0 120 28",
    svgPath: "M14 4c8 0 14 6 14 10s-6 10-14 10S0 18 0 14 6 4 14 4zm0 16c6 0 9-3 9-6s-3-6-9-6-9 3-9 6 3 6 9 6zm20-15h12c5 0 8 3 8 7 0 3-2 5-5 6l6 8h-6l-5-7h-4v7h-6V5zm6 9h5c2 0 4-1 4-3s-2-3-4-3h-5v6zm22-9h6l7 18h-6l-2-4h-7l-2 4h-5l8-18zm5 10h4l-2-6-2 6zm14 8c-3-2-4-5-4-9 0-5 4-10 11-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 4s2 4 5 4c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-3 0-5-1-7-3zm19-18h6v14h9v4h-15V4z"
  },
  citi: {
    id: "citi",
    label: "Citi",
    group: "client",
    opticalScale: 1.05,
    brandColor: "#003B70",
    svgViewBox: "0 0 110 36",
    svgPath: "M14 18c0-6 4-10 10-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-6 0-10-4-10-10zm25 10h6V14h-6v14zm0-18h6v-4h-6v4zm12 18h6V14h-6v14zm14 0h6V18c0-3 1-4 3-4s3 1 3 4v10h6V18c0-6-3-9-8-9-3 0-6 1-8 4v-3h-6v14zm30 0h6V14h-6v14zM24 6c16-8 38-8 54 0l-3 4c-14-7-34-7-48 0L24 6z"
  },
  hsbc: {
    id: "hsbc",
    label: "HSBC",
    group: "client",
    opticalScale: 1.15,
    brandColor: "#DB0011",
    svgViewBox: "0 0 120 32",
    svgPath: "M0 0l16 16L0 32h32L16 16 32 0H0zm40 6h6v8h8V6h6v20h-6v-8h-8v8h-6V6zm28 17c1 2 3 3 5 3 2 0 4-1 4-2 0-2-2-2-4-3-4-1-7-2-7-5 0-4 3-6 7-6 4 0 6 1 7 3l-3 3c-1-1-2-1-4-1-1 0-2 1-2 1 0 1 1 1 3 2 4 1 7 2 7 5 0 4-3 6-8 6-3 0-6-1-8-3l2-3zm18-17h10c4 0 7 2 7 5 0 2-1 3-3 4 2 1 4 2 4 5 0 4-3 6-8 6H86V6zm6 7h3c1 0 3 0 3-2s-2-2-3-2h-3v4zm0 9h4c2 0 3-1 3-2s-1-2-3-2h-4v4zm19-8c0-6 4-10 10-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-6 0-10-4-10-10z"
  },
  sbi: {
    id: "sbi",
    label: "State Bank of India",
    group: "client",
    opticalScale: 1.1,
    brandColor: "#280071",
    svgViewBox: "0 0 120 36",
    svgPath: "M18 0C8 0 0 8 0 18s8 18 18 18 18-8 18-18S28 0 18 0zm0 10c3 0 5 2 5 5 0 2-1 3-3 4v7h-4v-7c-2-1-3-2-3-4 0-3 2-5 5-5zm28 14c1 2 3 3 6 3 3 0 5-1 5-3 0-2-2-2-4-3-4-1-7-2-7-6 0-4 3-6 7-6 4 0 7 2 8 5l-4 2c-1-1-2-2-4-2-2 0-3 1-3 2 0 1 1 2 3 2 4 1 7 2 7 6 0 4-3 6-8 6-4 0-7-2-9-5l4-3zm18-18h11c4 0 7 2 7 5 0 2-1 3-3 4 2 1 3 2 3 4 0 4-3 6-7 6H64V6zm5 7h4c2 0 3-1 3-2s-1-2-3-2h-4v4zm0 8h4c2 0 3-1 3-2s-1-2-3-2h-4v4zm17-15h6v19h-6V6z"
  },

  // TECHNOLOGY PARTNERS
  crestron: {
    id: "crestron",
    label: "Crestron",
    group: "partner",
    opticalScale: 1.15,
    brandColor: "#002B49",
    svgViewBox: "0 0 140 28",
    svgPath: "M14 14c0-6 4-10 10-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-6 0-10-4-10-10zm25-10h6v4c1-3 4-4 7-4h2v6h-3c-4 0-6 2-6 6v8h-6V4zm22 10c0-6 4-10 10-10s10 4 10 10h-15c.5 3 2.5 5 5 5 2 0 3.5-1 4.5-2l4 3c-2 3-5 4-8.5 4-6 0-10-4-10-10zm5-2h9c-.5-2-2-3-4-3s-4 1-4 3zm18 9c2 1 4 1 6 1 3 0 4-1 4-2 0-2-2-2-4-3-4-1-7-2-7-5 0-4 3-6 7-6 3 0 6 1 7 3l-3 3c-1-1-2-1-4-1-1 0-2 1-2 1 0 1 2 1 3 2 4 1 7 2 7 5 0 4-3 6-8 6-3 0-6-1-8-2l2-3zm18-17h6v5h5v5h-5v7c0 2 1 2 2 2h3v5h-5c-4 0-6-2-6-6V9h-3V4h3zm14 0h6v4c1-3 4-4 7-4h2v6h-3c-4 0-6 2-6 6v8h-6V4zm17 10c0-6 4-10 10-10s10 4 10 10-4 10-10 10-10-4-10-10zm5 0c0 3 2 5 5 5s5-2 5-5-2-5-5-5-5 2-5 5zm18-10h6v3c1-2 4-3 7-3 4 0 7 3 7 7v13h-6v-9c0-3-1-4-3-4s-4 1-4 4v9h-6V4z"
  },
  qsys: {
    id: "qsys",
    label: "Q-SYS",
    group: "partner",
    opticalScale: 1.1,
    brandColor: "#006699",
    svgViewBox: "0 0 110 32",
    svgPath: "M0 16C0 7 7 0 16 0s16 7 16 16c0 4-1 7-3 10l6 6h-6l-5-5c-2 1-5 1-8 1C7 32 0 25 0 16zm7 0c0 5 4 9 9 9s9-4 9-9-4-9-9-9-9 4-9 9zm34-3h12v6H41v-6zm20-8h16v5h-10v5h9v5h-9v11h-6V5zm25 0h7l6 11 6-11h7l-10 16v10h-6V21L86 5z"
  },
  shure: {
    id: "shure",
    label: "Shure",
    group: "partner",
    opticalScale: 1.05,
    brandColor: "#00FF7F",
    svgViewBox: "0 0 110 28",
    svgPath: "M10 22c-4 0-8-2-9-5l5-3c1 2 2 3 4 3 2 0 3-1 3-2 0-2-2-2-4-3-4-1-7-3-7-6 0-4 3-6 7-6 4 0 7 2 8 5l-5 3c-1-1-2-2-4-2-1 0-2 1-2 2 0 1 2 2 4 2 4 1 7 3 7 6 0 4-3 6-7 6zm17-22h6v10c1-2 4-3 7-3 4 0 7 3 7 7v14h-6v-10c0-2-1-3-3-3s-4 1-4 3v10h-6V0zm25 15v13h-6V15c0-3-1-4-3-4s-3 1-3 4v13h-6V9h6v3c1-2 3-3 6-3 4 0 6 3 6 6zm13-6h6v4c1-2 3-4 6-4h2v6h-3c-3 0-5 2-5 5v9h-6V9zm18 10c0-6 4-10 10-10s10 4 10 10h-15c.5 3 2 5 5 5 2 0 3-1 4-2l4 3c-2 3-5 4-8 4-6 0-10-4-10-10zm5-2h9c-.5-2-2-3-4-3s-4 1-4 3z"
  },
  sony: {
    id: "sony",
    label: "Sony",
    group: "partner",
    opticalScale: 1.1,
    brandColor: "#FFFFFF",
    svgViewBox: "0 0 120 28",
    svgPath: "M10 22c-5 0-9-3-9-6l6-2c1 2 2 3 4 3 2 0 3-1 3-2 0-2-2-2-4-3-5-1-8-3-8-7 0-4 4-6 9-6 4 0 8 2 9 5l-5 2c-1-1-2-2-4-2-2 0-3 1-3 2 0 1 2 2 4 2 5 1 8 3 8 7 0 5-4 7-9 7zm16-8c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9zm6 0c0 3 1 4 3 4s3-1 3-4-1-4-3-4-3 1-3 4zm17-9h6l7 12V5h6v18h-6l-7-12v12h-6V5zm25 0h7l5 9 5-9h7l-8 13v5h-7v-5L74 5z"
  },
  samsung: {
    id: "samsung",
    label: "Samsung",
    group: "partner",
    opticalScale: 1.1,
    brandColor: "#1428A0",
    svgViewBox: "0 0 130 28",
    svgPath: "M10 22c-5 0-9-3-9-6l5-2c1 2 2 3 4 3 2 0 3-1 3-2 0-2-2-2-4-3-4-1-8-3-8-7 0-4 4-6 9-6 4 0 8 2 9 5l-5 2c-1-1-2-2-4-2-2 0-3 1-3 2 0 1 2 2 4 2 5 1 8 3 8 7 0 5-4 7-9 7zm17 0l8-17h6l8 17h-6l-2-4h-7l-2 4h-5zm10-8h4l-2-5-2 5zm13-9h6l5 10 5-10h6v17h-5v-9l-4 8h-4l-4-8v9h-5V5zm28 17c-5 0-9-3-9-6l5-2c1 2 2 3 4 3 2 0 3-1 3-2 0-2-2-2-4-3-4-1-8-3-8-7 0-4 4-6 9-6 4 0 8 2 9 5l-5 2c-1-1-2-2-4-2-2 0-3 1-3 2 0 1 2 2 4 2 5 1 8 3 8 7 0 5-4 7-9 7zm16-17v10c0 4 2 7 6 7s6-3 6-7V5h6v10c0 7-5 12-12 12s-12-5-12-12V5h6zm19 0h6l8 11V5h6v17h-6l-8-11v11h-6V5z"
  },
  biamp: {
    id: "biamp",
    label: "Biamp",
    group: "partner",
    opticalScale: 1.0,
    brandColor: "#E31B23",
    svgViewBox: "0 0 110 32",
    svgPath: "M0 6h12c5 0 9 3 9 7 0 2-1 4-3 5 3 1 4 3 4 6 0 5-4 8-10 8H0V6zm6 9h5c2 0 4-1 4-3s-2-3-4-3H6v6zm0 11h6c3 0 5-1 5-4s-2-4-5-4H6v8zm25-15h6v15h-6V11zm0-6h6v4h-6V5zm12 14c0-5 3-8 8-8s8 3 8 8v12h-6v-3c-1 2-3 3-5 3-4 0-7-3-7-7zm6 3c0 2 1 3 3 3s3-1 3-3v-4c-1-1-2-1-3-1-2 0-3 1-3 3v2zm16-9h5v3c1-2 3-3 5-3 3 0 5 1 6 3 1-2 3-3 6-3 4 0 6 3 6 7v12h-6v-8c0-2-1-3-3-3s-3 1-3 3v8h-6v-8c0-2-1-3-2-3s-3 1-3 3v8h-6V11zm27 0h6v3c1-2 3-3 6-3 5 0 8 4 8 9s-3 9-8 9c-3 0-5-1-6-3v7h-6V11zm6 8c0 3 2 5 4 5s4-2 4-5-2-5-4-5-4 2-4 5z"
  },
  extron: {
    id: "extron",
    label: "Extron",
    group: "partner",
    opticalScale: 1.05,
    brandColor: "#0072CE",
    svgViewBox: "0 0 110 28",
    svgPath: "M0 5h20v5H6v3h12v5H6v4h14v5H0V5zm22 17l6-9-6-8h7l3 5 3-5h7l-6 8 6 9h-7l-4-6-4 6h-6zm23-14h4v-3h6v3h5v5h-5v7c0 2 1 2 2 2h3v5h-5c-4 0-6-2-6-6v-8h-4V8zm18 0h6v3c1-2 3-3 6-3h2v6h-3c-4 0-5 2-5 5v8h-6V8zm17 9c0-6 4-10 10-10s10 4 10 10-4 10-10 10-10-4-10-10zm5 0c0 3 2 5 5 5s5-2 5-5-2-5-5-5-5 2-5 5zm18-9h6v3c1-2 4-3 7-3 4 0 7 3 7 7v11h-6v-8c0-3-1-4-3-4s-4 1-4 4v8h-6V8z"
  },
  zoom: {
    id: "zoom",
    label: "Zoom",
    group: "partner",
    opticalScale: 1.0,
    brandColor: "#2D8CFF",
    svgViewBox: "0 0 100 28",
    svgPath: "M0 5h16v4L6 20h11v5H0v-4l10-11H0V5zm20 10c0-6 4-10 10-10s10 4 10 10-4 10-10 10-10-4-10-10zm5 0c0 3 2 5 5 5s5-2 5-5-2-5-5-5-5 2-5 5zm18 0c0-6 4-10 10-10s10 4 10 10-4 10-10 10-10-4-10-10zm5 0c0 3 2 5 5 5s5-2 5-5-2-5-5-5-5 2-5 5zm18-10h5v3c1-2 3-3 5-3 3 0 4 1 5 3 1-2 3-3 5-3 4 0 6 3 6 7v10h-5v-8c0-2-1-3-2-3s-3 1-3 3v8h-5v-8c0-2-1-3-2-3s-3 1-3 3v8h-5V5z"
  },
  logitech: {
    id: "logitech",
    label: "Logitech",
    group: "partner",
    opticalScale: 1.0,
    brandColor: "#00B8FC",
    svgViewBox: "0 0 110 32",
    svgPath: "M0 4h6v18h9v5H0V4zm19 14c0-5 3-9 8-9s8 4 8 9-3 9-8 9-8-4-8-9zm5 0c0 3 1 5 3 5s3-2 3-5-1-5-3-5-3 2-3 5zm15 0c0-5 3-9 8-9 4 0 7 2 8 5V4h6v23h-5v-2c-1 2-4 3-7 3-5 0-10-4-10-10zm6 0c0 3 2 5 4 5s4-2 4-5-2-5-4-5-4 2-4 5zm19-5h6v14h-6V13zm0-5h6v3h-6V8zm10 5h5v2c1-2 3-2 5-2v5c-4 0-5 2-5 5v4h-5V13zm13 8c0 3 2 5 5 5 2 0 4-1 5-2l3 3c-2 2-5 3-8 3-5 0-9-3-9-8s4-8 9-8 8 3 8 8v1h-13zm8-2c0-2-2-3-4-3s-3 1-4 3h8z"
  },
  lg: {
    id: "lg",
    label: "LG Commercial",
    group: "partner",
    opticalScale: 1.0,
    brandColor: "#A50034",
    svgViewBox: "0 0 100 32",
    svgPath: "M16 0C7 0 0 7 0 16s7 16 16 16 16-7 16-16S25 0 16 0zm0 29c-7 0-13-6-13-13s6-13 13-13 13 6 13 13-6 13-13 13zm-2-18c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2zm-3 8v-9h3v6h7v3h-10zm29-10h6v17h10v5H40V9zm22 9c0-5 4-9 9-9 4 0 7 2 8 5l-5 2c-1-1-2-2-4-2-2 0-4 1-4 4s2 4 4 4c1 0 2 0 3-1v-2h-3v-4h8v8c-2 2-5 3-8 3-6 0-10-4-10-9z"
  },
  panasonic: {
    id: "panasonic",
    label: "Panasonic",
    group: "partner",
    opticalScale: 1.1,
    brandColor: "#004098",
    svgViewBox: "0 0 130 24",
    svgPath: "M0 2h10c5 0 8 3 8 7s-3 7-8 7H5v6H0V2zm5 10h4c2 0 4-1 4-3s-2-3-4-3H5v6zm17 12l6-16h5l6 16h-5l-1-4h-6l-1 4h-4zm6-7h4l-2-6-2 6zm13-9h5v3c1-2 3-3 6-3 4 0 6 3 6 7v10h-5v-8c0-2-1-3-3-3s-3 1-3 3v8h-5V8zm21 16l6-16h5l6 16h-5l-1-4h-6l-1 4h-4zm6-7h4l-2-6-2 6zm13 7c1 1 3 2 5 2 2 0 3-1 3-2 0-2-2-2-4-2-4-1-6-2-6-5 0-3 2-5 6-5 3 0 5 1 6 3l-3 2c-1-1-2-1-3-1-1 0-2 1-2 1 0 1 1 1 3 1 4 1 6 2 6 5 0 3-2 5-6 5-3 0-6-1-7-3l3-2zm16-8c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9zm5 0c0 3 2 4 4 4s4-1 4-4-2-4-4-4-4 1-4 4z"
  },
  bose: {
    id: "bose",
    label: "Bose Professional",
    group: "partner",
    opticalScale: 1.05,
    brandColor: "#000000",
    svgViewBox: "0 0 110 28",
    svgPath: "M0 4h12c6 0 9 2 9 6 0 2-1 4-3 5 3 1 4 3 4 6 0 4-3 7-9 7H0V4zm6 7h5c2 0 4-1 4-3s-2-3-4-3H6v6zm0 11h6c2 0 4-1 4-3s-2-3-4-3H6v6zm22-7c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9zm6 0c0 3 1 4 3 4s3-1 3-4-1-4-3-4-3 1-3 4zm17 7c1 1 3 2 5 2 2 0 3-1 3-2 0-2-2-2-4-2-4-1-6-2-6-5 0-3 2-5 6-5 3 0 5 1 6 3l-3 2c-1-1-2-1-3-1-1 0-2 1-2 1 0 1 1 1 3 1 4 1 6 2 6 5 0 3-2 5-6 5-3 0-6-1-7-3l3-2zm16-9h14v4h-9v3h8v4h-8v3h9v4h-14V13z"
  },
  harman: {
    id: "harman",
    label: "Harman Professional",
    group: "partner",
    opticalScale: 1.1,
    brandColor: "#EC1C24",
    svgViewBox: "0 0 120 28",
    svgPath: "M0 4h6v8h8V4h6v20h-6v-8H6v8H0V4zm25 20l7-20h6l7 20h-6l-2-5h-5l-2 5h-5zm7-9h4l-2-6-2 6zm17-11h12c5 0 8 2 8 6 0 3-2 5-5 6l6 8h-7l-5-7h-3v7h-6V4zm6 8h5c2 0 3-1 3-2s-1-2-3-2h-5v4zm19-8h6l5 10 5-10h6v20h-5v-11l-4 8h-3l-4-8v11h-5V4zm27 20l7-20h6l7 20h-6l-2-5h-5l-2 5h-5zm7-9h4l-2-6-2 6z"
  },
  kramer: {
    id: "kramer",
    label: "Kramer Electronics",
    group: "partner",
    opticalScale: 1.05,
    brandColor: "#009639",
    svgViewBox: "0 0 120 28",
    svgPath: "M0 4h6v9l7-9h7l-8 10 9 10h-7l-8-9v9H0V4zm24 0h12c5 0 8 3 8 7 0 3-2 5-5 6l6 7h-7l-5-6h-3v6h-6V4zm6 8h5c2 0 3-1 3-2s-1-2-3-2h-5v4zm19 12l7-20h6l7 20h-6l-2-5h-5l-2 5h-5zm7-9h4l-2-6-2 6zm17-11h6l5 10 5-10h6v20h-5v-11l-4 8h-3l-4-8v11h-5V4zm25 0h16v4h-10v4h9v4h-9v4h11v4h-17V4z"
  },
  poly: {
    id: "poly",
    label: "Poly",
    group: "partner",
    opticalScale: 1.0,
    brandColor: "#E2001A",
    svgViewBox: "0 0 100 32",
    svgPath: "M0 4h12c6 0 10 4 10 9s-4 9-10 9H6v6H0V4zm6 13h5c3 0 5-2 5-4s-2-4-5-4H6v8zm20 3c0-6 4-10 10-10s10 4 10 10-4 10-10 10-10-4-10-10zm6 0c0 3 2 5 4 5s4-2 4-5-2-5-4-5-4 2-4 5zm17-19h6v20h9v5h-15V1zm22 13h6l4 8 4-8h6l-7 12v6h-6v-6l-7-12z"
  },
  sennheiser: {
    id: "sennheiser",
    label: "Sennheiser",
    group: "partner",
    opticalScale: 1.15,
    brandColor: "#000000",
    svgViewBox: "0 0 140 28",
    svgPath: "M10 20c-4 0-7-2-8-5l5-2c1 2 2 3 4 3 2 0 3-1 3-2 0-2-2-2-4-3-4-1-7-3-7-6 0-4 3-6 7-6 4 0 7 2 8 5l-5 2c-1-1-2-2-4-2-1 0-2 1-2 2 0 1 2 2 4 2 4 1 7 3 7 6 0 4-3 6-7 6zm16-16h14v4h-9v3h8v4h-8v3h9v4H26V4zm19 0h5l8 12V4h5v18h-5l-8-12v12h-5V4zm23 0h5l8 12V4h5v18h-5l-8-12v12h-5V4zm23 0h5v8h8V4h5v18h-5v-7h-8v7h-5V4zm23 0h14v4h-9v3h8v4h-8v3h9v4h-14V4zm19 0h5v18h-5V4z"
  },
  jabra: {
    id: "jabra",
    label: "Jabra",
    group: "partner",
    opticalScale: 1.05,
    brandColor: "#FFD100",
    svgViewBox: "0 0 100 28",
    svgPath: "M0 16c0 6 3 9 8 9 4 0 7-2 8-5V4h-5v12c0 2-1 3-3 3s-3-1-3-3V4H0v12zm23 10l6-16h5l6 16h-5l-1-4h-6l-1 4h-4zm6-7h4l-2-6-2 6zm14 7V4h10c4 0 7 2 7 5 0 2-1 3-3 4 2 1 3 2 3 4 0 4-3 6-7 6H43zm5-14h4c2 0 3-1 3-2s-1-2-3-2h-4v4zm0 8h4c2 0 3-1 3-2s-1-2-3-2h-4v4zm18-10h5v3c1-2 3-3 6-3h2v5h-3c-3 0-5 2-5 5v7h-5V10zm18 16l6-16h5l6 16h-5l-1-4h-6l-1 4h-4zm6-7h4l-2-6-2 6z"
  },
  neat: {
    id: "neat",
    label: "Neat",
    group: "partner",
    opticalScale: 1.0,
    brandColor: "#2CE0C8",
    svgViewBox: "0 0 90 28",
    svgPath: "M0 4h6l8 13V4h6v20h-6L6 11v13H0V4zm25 0h16v4h-10v4h9v4h-9v4h11v4H25V4zm23 20l7-20h6l7 20h-6l-2-5h-5l-2 5h-5zm7-9h4l-2-6-2 6zm17-7h-5V4h16v4h-5v16h-6V8z"
  },
  epson: {
    id: "epson",
    label: "Epson",
    group: "partner",
    opticalScale: 1.05,
    brandColor: "#002B7F",
    svgViewBox: "0 0 110 28",
    svgPath: "M0 4h16v4H6v3h9v4H6v4h10v4H0V4zm20 6h12c4 0 7 2 7 6s-3 6-7 6h-6v4h-6V10zm6 8h5c2 0 3-1 3-2s-1-2-3-2h-5v4zm18 9c1 1 3 2 5 2 2 0 3-1 3-2 0-2-2-2-4-2-4-1-6-2-6-5 0-3 2-5 6-5 3 0 5 1 6 3l-3 2c-1-1-2-1-3-1-1 0-2 1-2 1 0 1 1 1 3 1 4 1 6 2 6 5 0 3-2 5-6 5-3 0-6-1-7-3l3-2zm16-8c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9zm5 0c0 3 2 4 4 4s4-1 4-4-2-4-4-4-4 1-4 4zm16-9h5l8 12V10h5v16h-5l-8-12v12h-5V10z"
  },
  meyersound: {
    id: "meyersound",
    label: "Meyer Sound",
    group: "partner",
    opticalScale: 1.1,
    brandColor: "#0047BA",
    svgViewBox: "0 0 120 28",
    svgPath: "M0 4h6l5 10 5-10h6v20h-5v-11l-4 8h-3l-4-8v11H0V4zm25 20h14v-4h-9v-4h8v-4h-8v-4h9V4H25v20zm18-7h6l4 7h6l-6-9 6-8h-6l-4 6V4h-6v20zm20 7h14v-4h-9v-4h8v-4h-8v-4h9V4H63v20zm18 0h6v-8h7v-4h-7V8h8V4H81v20zm18-17c-4 0-7 2-8 5l5 2c1-2 2-3 4-3 2 0 3 1 3 2 0 2-2 2-4 3-4 1-7 3-7 6 0 4 3 6 7 6 4 0 7-2 8-5l-5-2c-1 1-2 2-4 2-1 0-2-1-2-2 0-1 2-2 4-2 4-1 7-3 7-6 0-4-3-6-7-6z"
  },
  audiotechnica: {
    id: "audiotechnica",
    label: "Audio-Technica",
    group: "partner",
    opticalScale: 1.05,
    brandColor: "#000000",
    svgViewBox: "0 0 130 32",
    svgPath: "M16 2C8 2 2 8 2 16s6 14 14 14 14-6 14-14S24 2 16 2zm0 4c6 0 10 4 10 10s-4 10-10 10S6 22 6 16 10 6 16 6zm-7 14l7-10 7 10h-3l-4-6-4 6H9zm28-4h12c4 0 7 2 7 6s-3 6-7 6h-6v4h-6V16zm6 8h5c2 0 3-1 3-2s-1-2-3-2h-5v4zm18 8l6-16h5l6 16h-5l-1-4h-6l-1 4h-4zm6-7h4l-2-6-2 6zm14 7V16h6v12h-6zm11 0V16h6v5h6v-5h6v12h-6v-4h-6v4h-6z"
  },
  blackmagic: {
    id: "blackmagic",
    label: "Blackmagic Design",
    group: "partner",
    opticalScale: 1.15,
    brandColor: "#00A3E0",
    svgViewBox: "0 0 130 28",
    svgPath: "M0 4h12c5 0 8 2 8 6 0 2-1 4-3 5 3 1 4 3 4 6 0 4-3 7-9 7H0V4zm6 7h5c2 0 4-1 4-3s-2-3-4-3H6v6zm0 10h6c2 0 4-1 4-3s-2-3-4-3H6v6zm19-17h6v20h9v4H25V4zm19 24l7-20h6l7 20h-6l-2-5h-5l-2 5h-5zm7-9h4l-2-6-2 6zm17-11c0-6 4-10 10-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-6 0-10-4-10-10zm18-4h6v9l7-9h7l-8 10 9 10h-7l-8-9v9h-6V4z"
  },
  belden: {
    id: "belden",
    label: "Belden",
    group: "partner",
    opticalScale: 1.05,
    brandColor: "#00828A",
    svgViewBox: "0 0 110 28",
    svgPath: "M0 4h12c5 0 8 2 8 6 0 2-1 4-3 5 3 1 4 3 4 6 0 4-3 7-9 7H0V4zm6 7h5c2 0 4-1 4-3s-2-3-4-3H6v6zm0 10h6c2 0 4-1 4-3s-2-3-4-3H6v6zm20-17h16v4h-10v4h9v4h-9v4h11v4H26V4zm20 0h6v16h10v4H46V4zm18 0h11c6 0 10 4 10 10s-4 10-10 10H64V4zm6 16h5c3 0 5-2 5-6s-2-6-5-6h-5v12zm18-16h16v4h-10v4h9v4h-9v4h11v4H88V4z"
  },
  panduit: {
    id: "panduit",
    label: "Panduit",
    group: "partner",
    opticalScale: 1.1,
    brandColor: "#00843D",
    svgViewBox: "0 0 110 28",
    svgPath: "M0 4h12c5 0 9 3 9 8s-4 8-9 8H6v4H0V4zm6 11h5c2 0 4-1 4-3s-2-3-4-3H6v6zm20 9l7-20h6l7 20h-6l-2-5h-5l-2 5h-5zm7-9h4l-2-6-2 6zm17-11h6l8 12V4h6v20h-6l-8-12v12h-6V4zm23 0h11c6 0 10 4 10 10s-4 10-10 10H86V4zm6 16h5c3 0 5-2 5-6s-2-6-5-6h-5v12z"
  },
  chief: {
    id: "chief",
    label: "Chief",
    group: "partner",
    opticalScale: 1.05,
    brandColor: "#005596",
    svgViewBox: "0 0 100 28",
    svgPath: "M14 14c0-6 4-10 10-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-6 0-10-4-10-10zm25-10h6v8h8V4h6v20h-6v-7h-8v7h-6V4zm25 0h6v20h-6V4zm12 0h16v4h-10v4h9v4h-9v4h11v4H76V4z"
  },

  // DISTRIBUTORS
  wesco: {
    id: "wesco",
    label: "Wesco Anixter",
    group: "distributor",
    opticalScale: 1.15,
    brandColor: "#006643",
    svgViewBox: "0 0 140 32",
    svgPath: "M0 6h6l4 14 5-14h5l5 14 4-14h6l-7 20h-6l-5-13-5 13H7L0 6zm34 0h16v4H40v4h9v4h-9v4h11v4H34V6zm23 17c1 1 3 2 5 2 2 0 3-1 3-2 0-2-2-2-4-2-4-1-6-2-6-5 0-3 2-5 6-5 3 0 5 1 6 3l-3 2c-1-1-2-1-3-1-1 0-2 1-2 1 0 1 1 1 3 1 4 1 6 2 6 5 0 3-2 5-6 5-3 0-6-1-7-3l3-2zm16-7c0-6 4-10 10-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-6 0-10-4-10-10zm18 0c0-6 4-10 10-10s10 4 10 10-4 10-10 10-10-4-10-10zm6 0c0 3 2 5 4 5s4-2 4-5-2-5-4-5-4 2-4 5z"
  },
  ingrammicro: {
    id: "ingrammicro",
    label: "Ingram Micro",
    group: "distributor",
    opticalScale: 1.1,
    brandColor: "#005596",
    svgViewBox: "0 0 140 32",
    svgPath: "M0 6h6v20H0V6zm14 0h5l8 13V6h5v20h-5l-8-13v13h-5V6zm23 10c0-6 5-10 11-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 3-1 4-2v-2h-4v-4h9v9c-2 2-5 3-9 3-6 0-11-4-11-10zm22-10h12c5 0 8 3 8 7 0 3-2 5-5 6l6 7h-7l-5-6h-3v6h-6V6zm6 8h5c2 0 3-1 3-2s-1-2-3-2h-5v4zm19 12l7-20h6l7 20h-6l-2-5h-5l-2 5h-5zm7-9h4l-2-6-2 6zm17-11h6l5 10 5-10h6v20h-5v-11l-4 8h-3l-4-8v11h-5V6z"
  },
  redington: {
    id: "redington",
    label: "Redington",
    group: "distributor",
    opticalScale: 1.05,
    brandColor: "#E31837",
    svgViewBox: "0 0 130 32",
    svgPath: "M0 6h12c5 0 8 3 8 7 0 3-2 5-5 6l6 7h-7l-5-6H6v6H0V6zm6 8h5c2 0 3-1 3-2s-1-2-3-2H6v4zm20 4c0-5 3-8 8-8s8 3 8 8h-12c.5 2 2 3 4 3 2 0 3-1 4-2l2 2c-2 2-4 3-6 3-5 0-8-4-8-9zm4-1h8c-.5-2-2-3-4-3s-3.5 1-4 3zm17 5c0-4 3-7 7-7 2 0 4 1 5 2V6h5v20h-5v-2c-1 1-3 2-5 2-4 0-7-3-7-7zm5 0c0 2 1 3 3 3s3-1 3-3-1-3-3-3-3 1-3 3zm18-12h5v16h-5V10zm0-5h5v4h-5V5zm11 11c0-4 3-6 7-6 4 0 6 2 6 6v10h-5v-9c0-2-1-3-3-3s-3 1-3 3v9h-5V16zm18 0c0-4 3-6 7-6 4 0 6 2 6 6v10h-5v-9c0-2-1-3-3-3s-3 1-3 3v9h-5V16z"
  },
  brightstar: {
    id: "brightstar",
    label: "Brightstar",
    group: "distributor",
    opticalScale: 1.05,
    brandColor: "#F37021",
    svgViewBox: "0 0 130 32",
    svgPath: "M0 6h12c5 0 8 2 8 6 0 2-1 4-3 5 3 1 4 3 4 6 0 4-3 7-9 7H0V6zm6 7h5c2 0 4-1 4-3s-2-3-4-3H6v6zm0 9h6c2 0 4-1 4-3s-2-3-4-3H6v6zm22-7h5v2c1-2 3-3 5-3h2v5h-3c-3 0-4 2-4 5v7h-5V15zm16-5h5v16h-5V10zm0-5h5v4h-5V5zm10 14c0-4 3-6 6-6 3 0 5 1 6 3v-2h5v15c0 5-4 7-9 7-5 0-8-3-8-6l5-1c.5 2 2 3 4 3 2 0 4-1 4-3v-1c-1 1-2 2-4 2-4 0-6-3-6-7zm5 0c0 2 1 3 3 3s3-1 3-3-1-3-3-3-3 1-3 3zm18-13h5v7c1-2 3-3 6-3 4 0 6 3 6 7v8h-5v-7c0-2-1-3-3-3s-3 1-3 3v7h-5V6zm23 4h4v-3h5v3h4v4h-4v6c0 2 1 2 2 2h2v4h-4c-4 0-5-2-5-5v-7h-4v-4z"
  },
  cdw: {
    id: "cdw",
    label: "CDW",
    group: "distributor",
    opticalScale: 1.15,
    brandColor: "#D31245",
    svgViewBox: "0 0 100 32",
    svgPath: "M16 16c0-6 4-10 10-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-6 0-10-4-10-10zm25-10h12c6 0 10 4 10 10s-4 10-10 10H41V6zm6 15h6c3 0 5-2 5-5s-2-5-5-5h-6v10zm27-15h6l4 14 5-14h5l5 14 4-14h6l-7 20h-6l-5-13-5 13h-6l-6-20z"
  },
  tdsynnex: {
    id: "tdsynnex",
    label: "TD SYNNEX",
    group: "distributor",
    opticalScale: 1.1,
    brandColor: "#00529B",
    svgViewBox: "0 0 130 32",
    svgPath: "M0 6h18v4h-6v16H6V10H0V6zm20 0h12c5 0 9 4 9 10s-4 10-9 10H20V6zm6 15h5c3 0 5-2 5-5s-2-5-5-5h-5v10zm22 2c1 1 3 2 5 2 2 0 3-1 3-2 0-2-2-2-4-2-4-1-6-2-6-5 0-3 2-5 6-5 3 0 5 1 6 3l-3 2c-1-1-2-1-3-1-1 0-2 1-2 1 0 1 1 1 3 1 4 1 6 2 6 5 0 3-2 5-6 5-3 0-6-1-7-3l3-2zm18-7l-5-8h6l3 5 3-5h6l-5 8v8h-6v-8zm16-8h6l8 12V6h6v20h-6l-8-12v12h-6V6zm23 0h6l8 12V6h6v20h-6l-8-12v12h-6V6z"
  },
  cbre: {
    id: "cbre",
    label: "CBRE",
    group: "partner",
    opticalScale: 1.1,
    brandColor: "#003F2D",
    svgViewBox: "0 0 100 28",
    svgPath: "M14 14c0-6 4-10 10-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-6 0-10-4-10-10zm25-10h12c5 0 8 2 8 6 0 2-1 4-3 5 3 1 4 3 4 6 0 4-3 7-9 7H39V4zm6 7h5c2 0 4-1 4-3s-2-3-4-3h-5v6zm0 10h6c2 0 4-1 4-3s-2-3-4-3h-6v6zm22-17h12c5 0 8 3 8 7 0 3-2 5-5 6l6 8h-7l-5-7h-3v7h-6V4zm6 8h5c2 0 3-1 3-2s-1-2-3-2h-5v4zm19-8h16v4h-10v4h9v4h-9v4h11v4H86V4z"
  },
  jll: {
    id: "jll",
    label: "JLL",
    group: "partner",
    opticalScale: 1.05,
    brandColor: "#E31B23",
    svgViewBox: "0 0 90 28",
    svgPath: "M0 16c0 6 3 9 8 9 4 0 7-2 8-5V4h-5v12c0 2-1 3-3 3s-3-1-3-3V4H0v12zm25-12h6v16h9v5H25V4zm22 0h6v16h9v5H47V4z"
  },
  cushman: {
    id: "cushman",
    label: "Cushman & Wakefield",
    group: "partner",
    opticalScale: 1.1,
    brandColor: "#ED1C24",
    svgViewBox: "0 0 130 32",
    svgPath: "M14 16c0-6 4-10 10-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-6 0-10-4-10-10zm25-10h6v12c0 3 2 4 4 4s4-1 4-4V6h6v12c0 6-4 9-10 9s-10-3-10-9V6zm25 17c1 1 3 2 5 2 2 0 3-1 3-2 0-2-2-2-4-2-4-1-6-2-6-5 0-3 2-5 6-5 3 0 5 1 6 3l-3 2c-1-1-2-1-3-1-1 0-2 1-2 1 0 1 1 1 3 1 4 1 6 2 6 5 0 3-2 5-6 5-3 0-6-1-7-3l3-2zm16-17h6v7h7V6h6v20h-6v-8h-7v8h-6V6zm27 0h6l4 10 4-10h6v20h-5v-11l-3 8h-2l-3-8v11h-5V6z"
  },
  colliers: {
    id: "colliers",
    label: "Colliers International",
    group: "partner",
    opticalScale: 1.1,
    brandColor: "#002D62",
    svgViewBox: "0 0 110 28",
    svgPath: "M14 14c0-6 4-10 10-10 4 0 7 2 9 4l-4 4c-1-1-3-2-5-2-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-2l4 4c-2 2-5 4-9 4-6 0-10-4-10-10zm24 0c0-6 4-10 10-10s10 4 10 10-4 10-10 10-10-4-10-10zm6 0c0 3 2 5 4 5s4-2 4-5-2-5-4-5-4 2-4 5zm17-10h6v16h9v4H61V4zm19 0h6v20h-6V4zm10 0h6v20h-6V4zm10 0h16v4h-10v4h9v4h-9v4h11v4h-16V4z"
  },

  // CERTIFICATIONS
  iso9001: {
    id: "iso9001",
    label: "ISO 9001:2015",
    group: "certification",
    opticalScale: 1.0,
    brandColor: "#2CE0C8",
    svgViewBox: "0 0 120 36",
    svgPath: "M0 6h6v24H0V6zm10 18c2 3 5 4 8 4 4 0 7-2 7-5 0-3-2-4-5-5l-4-2c-4-2-6-4-6-8 0-4 4-7 9-7 4 0 7 2 9 5l-4 3c-1-2-3-3-5-3-2 0-4 1-4 3 0 2 2 3 4 4l4 2c5 2 7 4 7 8 0 5-4 8-10 8-5 0-9-2-11-6l4-4zm24-6c0-7 5-12 12-12s12 5 12 12-5 12-12 12-12-5-12-12zm6 0c0 4 2 7 6 7s6-3 6-7-2-7-6-7-6 3-6 7zm26-9h5l4 9 4-9h5v21h-5v-12l-4 8h-2l-4-8v12h-5V9zm22 17c1 1 3 2 5 2s4-1 4-3c0-3-2-3-4-3h-2v-4h2c2 0 3-1 3-2 0-2-1-2-3-2s-3 1-4 2l-3-3c2-2 4-3 7-3 4 0 7 2 7 5 0 2-1 3-3 4 2 1 3 3 3 5 0 4-3 7-8 7-4 0-7-1-9-4l3-4z"
  },
  greatplacetowork: {
    id: "greatplacetowork",
    label: "Great Place to Work",
    group: "certification",
    opticalScale: 1.15,
    brandColor: "#FF0036",
    svgViewBox: "0 0 130 36",
    svgPath: "M0 0h130v36H0V0zm6 6v24h118V6H6zm14 4h18v4H26v3h10v4H26v5h-6V10zm23 0h16v4H49v3h8v4h-8v5h-6V10zm22 0h14v16h-5v-2c-1 2-3 2-5 2-5 0-9-4-9-8s4-8 9-8c2 0 4 1 5 2v-4h-9V10zm4 9c0-3-2-4-4-4s-4 1-4 4 2 4 4 4 4-1 4-4zm15-9h6v16h-6V10zm11 0h6l4 10 4-10h6v16h-5v-9l-4 9h-2l-4-9v9h-5V10z"
  },
  psni: {
    id: "psni",
    label: "PSNI Global Alliance",
    group: "certification",
    opticalScale: 1.1,
    brandColor: "#00857E",
    svgViewBox: "0 0 110 32",
    svgPath: "M0 6h12c5 0 8 3 8 7s-3 7-8 7H6v6H0V6zm6 9h5c2 0 4-1 4-3s-2-3-4-3H6v6zm18 5c2 3 5 4 8 4 3 0 5-1 5-3 0-2-2-3-4-3l-4-1c-4-1-6-3-6-6 0-4 3-6 8-6 4 0 7 2 9 4l-4 3c-1-1-3-2-5-2-2 0-3 1-3 2 0 1 1 2 3 2l4 1c5 1 7 3 7 6 0 4-3 6-8 6-5 0-8-2-10-5l4-3zm21-14h6l8 14V6h6v20h-6l-8-14v14h-6V6zm25 0h6v20h-6V6z"
  },
  avixacts: {
    id: "avixacts",
    label: "AVIXA CTS",
    group: "certification",
    opticalScale: 1.05,
    brandColor: "#00A3E0",
    svgViewBox: "0 0 120 32",
    svgPath: "M0 6h8l7 14L22 6h8l-11 20H11L0 6zm32 0h7v20h-7V6zm12 0h8l7 12 7-12h8L71 18l14 8h-9l-7-8-7 8h-9L62 16 44 6zm42 0h8l7 14 7-14h8L98 26H88L77 6z"
  },
  aqavcqt: {
    id: "aqavcqt",
    label: "AQ-AV CQT",
    group: "certification",
    opticalScale: 1.05,
    brandColor: "#00F07A",
    svgViewBox: "0 0 120 32",
    svgPath: "M0 16C0 7 6 0 15 0s15 7 15 16c0 3-1 6-3 9l5 7h-6l-4-4c-2 1-5 1-7 1C6 32 0 25 0 16zm6 0c0 5 4 9 9 9s9-4 9-9-4-9-9-9-9 4-9 9zm30-10h16v5h-10v5h8v5h-8v11h-6V6zm23 0h15c5 0 8 3 8 7s-3 7-8 7h-9v8h-6V6zm6 9h8c2 0 3-1 3-3s-1-3-3-3h-8v6zm17-9h6v26h-6V6z"
  },
  dante: {
    id: "dante",
    label: "Dante Certified",
    group: "certification",
    opticalScale: 1.0,
    brandColor: "#E20025",
    svgViewBox: "0 0 100 28",
    svgPath: "M0 4h12c6 0 10 4 10 10s-4 10-10 10H0V4zm6 15h5c3 0 5-2 5-5s-2-5-5-5H6v10zm20-1h5v6h-5v-6zm8-10h5v16h-5V8zm10 0h5v2c1-1 3-2 5-2 4 0 6 3 6 7v9h-5v-8c0-2-1-3-3-3s-3 1-3 3v8h-5V8zm19 0h4v-3h5v3h4v4h-4v7c0 1 1 2 2 2h2v4h-4c-4 0-5-2-5-5v-8h-4V8z"
  }
};

// Helper lookup to map any company / brand text string to its logo ID
export const brandToLogoMap: Record<string, string> = {
  // Clients
  "Amazon": "amazon",
  "Google": "google",
  "Microsoft": "microsoft",
  "Deloitte": "deloitte",
  "Deloitte USI": "deloitte",
  "Siemens": "siemens",
  "Micron": "micron",
  "Micron Technologies": "micron",
  "TCS": "tcs",
  "Tata Consultancy Services": "tcs",
  "Cisco": "cisco",
  "Amdocs": "amdocs",
  "Persistent": "persistent",
  "Persistent Systems": "persistent",
  "Carelon": "carelon",
  "Cognizant": "cognizant",
  "Accenture": "accenture",
  "IBM": "ibm",
  "Oracle": "oracle",
  "Citi": "citi",
  "HSBC": "hsbc",
  "State Bank of India": "sbi",
  "State Bank of India / Financial Hub": "sbi",

  // Partners
  "Crestron": "crestron",
  "Q-SYS": "qsys",
  "QSC": "qsys",
  "Shure": "shure",
  "Sony": "sony",
  "Samsung": "samsung",
  "Biamp": "biamp",
  "Extron": "extron",
  "Zoom": "zoom",
  "Logitech": "logitech",
  "LG Commercial": "lg",
  "LG": "lg",
  "Panasonic": "panasonic",
  "Bose": "bose",
  "Bose Professional": "bose",
  "Harman": "harman",
  "Kramer": "kramer",
  "Poly": "poly",
  "Sennheiser": "sennheiser",
  "Jabra": "jabra",
  "Neat": "neat",
  "Epson": "epson",
  "Meyer Sound": "meyersound",
  "Audio-Technica": "audiotechnica",
  "Blackmagic Design": "blackmagic",
  "Belden": "belden",
  "Panduit": "panduit",
  "Chief": "chief",

  // Distributors
  "Wesco Anixter": "wesco",
  "Ingram Micro": "ingrammicro",
  "Redington": "redington",
  "Brightstar": "brightstar",
  "CDW": "cdw",
  "TD SYNNEX": "tdsynnex",

  // PMC & Project Consultancies
  "CBRE": "cbre",
  "JLL": "jll",
  "JLL (Jones Lang LaSalle)": "jll",
  "Cushman & Wakefield": "cushman",
  "Colliers International": "colliers",
  "Colliers": "colliers",

  // Certifications
  "ISO 9001:2015": "iso9001",
  "Great Place to Work": "greatplacetowork",
  "PSNI Global Alliance": "psni",
  "AVIXA CTS": "avixacts",
  "AQ-AV CQT": "aqavcqt",
  "Dante": "dante",
};
