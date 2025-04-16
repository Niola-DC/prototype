import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialLinks from '../composite/SocialLinks';
import DownloadButton from '../core/DownloadButton';
import clsx from 'clsx';
import { useMenu } from '../../hooks/useMenu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../core/Button';

const Footer = () => {

  const [hasDownloaded, setHasDownloaded] = useState(false);
  
  const handleDownload = () => {
    const apkUrl = "https://payskul-apk.s3.eu-west-1.amazonaws.com/production/payskul.apk";
    
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 's3://payskul-apk/production/payskul.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    localStorage.setItem('hasDownloadedApp', 'true');
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

  const handleEmailClick = () => {
    const email = 'info@payskul.com';
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;  // This will open the default email client
  };
    const { currentPage, setCurrentPage } = useMenu();
      const [isModalOpen, setIsModalOpen] = useState(false);
    
  
  
  return (
    <div className="bg-primary px-6 py-16 mt-2 lg:py-12 md:px-10">
      <div className="py-4 max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-6 lg:space-y-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-12">
          {/* <ul className="space-y-2 lg:space-y-6">
            <li className="font-semibold text-white text-left">Explore</li>
            <li className='text-left'>
              <Link to="/communities" className="text-gray-300 hover:text-white transition"  onClick={() => {
                    window.scrollTo(0, 0);
                  }}>
                Communities
              </Link>
            </li>
            <li className='text-left'>
              <Link to="/resources" className="text-gray-300 hover:text-white transition" onClick={() => {
                    window.scrollTo(0, 0);
                  }}>
                Resources
              </Link>
            </li>
          </ul> */}
           <ul className="space-y-2 lg:space-y-6">
            <li className="font-semibold text-white text-left">PaySkul</li>
            <li className='text-left text-gray-300'>
              <AnchorLink
                  className= {
                    clsx(
                              "after:bg-primary after:transition-width relative py-2 after:absolute after:bottom-0 after:left-0 after:hidden after:h-1 after:rounded after:duration-300 hover:after:w-full md:after:inline-block",
                              {
                                "after:w-0": currentPage !== "features",
                                "after:w-full": currentPage === "features",
                              }
                            )
                  }
                  key='features'
                  href="/features"
                  offset={100}
                  onClick={setCurrentPage.bind(null, "features")}>
                  Our Services
                </AnchorLink>
            
            </li>
            <li className='text-left'>
              <Link to="/contact" className="text-gray-300 hover:text-white transition" onClick={() => {
                    window.scrollTo(0, 0);
                  }}>
                Contact Us
              </Link>
            </li>
          </ul>

          <ul className="space-y-2 lg:space-y-6">
            <li className="font-semibold text-white text-left">Legal</li>
            <li className='text-left'>
              <Link to="/terms" className="text-gray-300 hover:text-white transition" onClick={() => {
                    window.scrollTo(0, 0);
                  }}>
                Terms
              </Link>
            </li>
            <li className='text-left'>
              <Link to="/policy" className="text-gray-300 hover:text-white transition" onClick={() => {
                    window.scrollTo(0, 0);
                  }}>
                Privacy Policy
              </Link>
            </li>
          </ul>

          <ul className="space-y-2 lg:space-y-6">
            <li className="font-semibold text-white text-left">Contact Us</li>
            <li className="text-gray-300 cursor-pointer"><a onClick={handleEmailClick}>Email: info@payskul.com</a></li>
          <SocialLinks />

          </ul>
        </div>

        {/* Social Links (Now in a row) */}
        <div className="flex space-x-4">
          {/* <SocialLinks /> */}
          <DownloadButton size='small' onClick={doDownload}/>
          {/* <DownloadButton
                      className="md:hidden lg:block"
                      size="small"
                      onClick={() => setIsModalOpen(true)}
                    />
                    {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-50">
                      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center mx-4">
                        <h2 className="text-xl font-semibold">App Downtime</h2>
                        <p className="mt-2 text-gray-600">
                          Our app is currently undergoing updates and is not available for download. 
                          Feel free to continue your visit and check back later to download the app.
                        </p>
                        <Button variant="primary" onClick={() => setIsModalOpen(false)}>Close</Button>
                      </div>
                    </div>
                  )} */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
