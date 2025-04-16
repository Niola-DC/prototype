import { clsx } from "clsx";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMenu } from "../../hooks/useMenu";
import FlexBox from "../core/FlexBox";
import DownloadButton from "../core/DownloadButton";
import Button from "../core/Button";

export default function NavLinksDesktop() {
  const { currentPage, setCurrentPage } = useMenu();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const NAV_LINKS = [
    { href: "home", text: "Home" },
    { href: "features", text: "Services" },
    { href: "subscribe", text: "Subscribe" },
    { href: "about-us", text: "About Us" },
    { href: "contact", text: "Contact" },
  ];

  const [hasDownloaded, setHasDownloaded] = useState(false);

  const handleDownload = () => {
    const apkUrl =
      "https://payskul-apk.s3.eu-west-1.amazonaws.com/production/payskul.apk";

    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = "s3://payskul-apk/production/payskul.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    localStorage.setItem("hasDownloadedApp", "true");
    setHasDownloaded(true);
  };
  const doDownload = () => {
    const apkUrl = "https://payskul.ng/payskul.apk";
    const link = document.createElement("a");
    link.href = apkUrl;

    link.download = "payskul.ng/payskul.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    localStorage.setItem("hasDownloadedApp", "true");
    setHasDownloaded(true);

  }
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <nav className="hidden flex-1 justify-start gap-10 capitalize text-white md:flex md:text-sm lg:text-base">
      {NAV_LINKS.map((link) => {
        const linkClass = clsx(
          "after:bg-primary after:transition-width relative py-2 after:absolute after:bottom-0 after:left-0 after:hidden after:h-1 after:rounded after:duration-300 hover:after:w-full md:after:inline-block",
          {
            "after:w-0": currentPage !== link.href,
            "after:w-full": currentPage === link.href,
          }
        );

        return link.href === "contact" || link.href === "about-us"? (
          <Link
            // onClick={setCurrentPage.bind(null, link.href)}
            className={linkClass}
            key={link.href}
            to={`/${link.href}`}
            onClick={() => {
              setCurrentPage.bind(null, link.href);
              window.scrollTo(0, 0);
            }}
          >
            {link.text}
          </Link>
        ) : isHomePage ? (
          <AnchorLink
            // className={linkClass}
            className={linkClass}
            key={link.href}
            href={`#${link.href}`}
            offset={100}
            onClick={setCurrentPage.bind(null, link.href)}
          >
            {link.text}
          </AnchorLink>
        ) : (
          <Link
            // onClick={setCurrentPage.bind(null, link.href)}
            className={linkClass}
            onClick={() => {
              setCurrentPage.bind(null, link.href);
              window.scrollTo(0, 0);
            }}
            key={link.href}
            to={`/#${link.href}`}
          >
            {link.text}
          </Link>
        );
      })}
      <FlexBox className="ml-16">
        <DownloadButton
          className="md:hidden lg:block"
          size="small"
          onClick={doDownload}
        />

        {/* <DownloadButton
          className="md:hidden lg:block"
          size="small"
          onClick={() => setIsModalOpen(true)}
        />
        {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="mx-4 bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-xl font-semibold">App Downtime</h2>
            <p className="mt-2 text-gray-600">
            The PaySkul app is currently undergoing updates and is not available for download. 
              Feel free to continue your visit and check back later to download the app.
            </p>
           <Button variant="primary" onClick={() => setIsModalOpen(false)}>Close</Button>
          </div>
        </div>
      )}
 */}

      </FlexBox>
    </nav>
  );
}
