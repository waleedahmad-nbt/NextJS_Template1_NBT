'use client';
import { Inter } from 'next/font/google';
import "./styles/globals.css";
import Headers from './components/Headers/Headers';
import Footer from './components/Footer/Footer';
import SideBar from './components/SideBar/SideBar';
import { Provider } from 'react-redux';
import store from './lib/redux/store';
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <SideBar className="z-40" />
          <Headers />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
