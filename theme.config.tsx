import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ width: "70px", height: "70px", position: "relative" }}>
      <Image
        fill
        src="https://raw.githubusercontent.com/ahmmsel/assets/main/logo.svg"
        alt="hello"
      />
    </div>
  ),
  head: <title>Docs | Hello</title>,
  footer: {
    text: "Hello! Docs",
  },
};

export default config;
