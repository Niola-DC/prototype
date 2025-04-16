// import './App.css';
import ContactUsPage from './pages/contactuspage';
import HomePage from './pages/homepage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivacyPolicyPage from './pages/privacypolicy';
import RootLayout from './pages/layout';
import TermsPage from './pages/termspage';
import './index.css';
import { useEffect } from 'react';
import AboutUs from './pages/aboutUspage';


// function App() {
//   return (
//     <BrowserRouter>
//       <HomePage />
//       <ContactUsPage />
//     </BrowserRouter>
//   );
// }

// export default App;

export default function App() {

  useEffect(() => {
    // Get the visit count from localStorage
    const visitCount = localStorage.getItem("visitCount");

    // Convert to number and increment
    const newCount = visitCount ? parseInt(visitCount, 10) + 1 : 1;

    // Update localStorage
    localStorage.setItem("visitCount", newCount);
  }, []);

  // useEffect(() => {
  //   const visitCount = localStorage.getItem("visitCount");

  //   const newCount = visitCount ? parseInt(visitCount, 10) + 1 : 1;

  //   localStorage.setItem("visitCount", newCount);

  //   fetch("https://your-api.com/visits", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ visitCount: newCount }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log("Visit count updated:", data))
  //     .catch((error) => console.error("Error updating visit count:", error));
  // }, []);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/policy", element: <PrivacyPolicyPage /> },
        { path: "/contact", element: <ContactUsPage /> },
        { path: "/terms", element: <TermsPage /> },
        { path: "/about-us", element: <AboutUs /> },

        { path: "*", element: <h1>404</h1>}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

