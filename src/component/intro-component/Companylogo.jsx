import React from "react";
import amd from "../../assets/images/brand-logo/amd-logo.png"
import asus from "../../assets/images/brand-logo/AsusLogo.png"
import appsmith from "../../assets/images/brand-logo/appsmith-logo.png"
import net from "../../assets/images/brand-logo/net-logo.svg"


export default function Companylogo() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Left Text */}
        <div className="text-gray-600 text-sm leading-relaxed max-w-xs">
          <span className="font-semibold text-gray-800">Trusted by Top-tier,</span><br />
          global data teams across Industries.
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-20 opacity-60">
          <img src={asus} alt="ASUS" className="h-20 w-auto" />
          <img src={appsmith} alt="Appsmith" className="h-30 w-auto" />
          <img src={amd} alt="AMD" className="h-30 w-auto" />
          <img src={net} alt=".NET" className="h-20 w-auto" />
        </div>
      </div>
    </section>
  );
}