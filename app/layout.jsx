'use client';
import { Inter } from 'next/font/google';
import "./styles/globals.css";
import Headers from './components/Headers/Headers';
import Footer from './components/Footer/Footer';
import SideBar from './components/SideBar/SideBar';
import { Provider } from 'react-redux';
import { store,persistor } from './lib/redux/store';
import {  PersistGate } from 'redux-persist/integration/react';
const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SideBar className="z-40" />
            <Headers />
            {children}
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
