import React from 'react';
import '../src/app/globals.css'; // Ensure this file exists and the path is correct
import Footer from '../src/components/Footer/Footer'; // Correct import path
import Navbar from '../src/components/Navbar/Navbar'; // Correct import path
import Wrapper from '../src/components/common/Wrapper/Wrapper'; // Correct import path

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default MyApp;
