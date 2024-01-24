"use client";
import React, { useState } from "react";
import SignInModal from "../Headers/SingIn";
import { RxCross2 } from "react-icons/rx";

const ForgotPassword = ({ onClose }) => {
  const [redirectToSignIn, setRedirectToSignIn] = useState(false);

  const handleBackToLogin = () => {
    setRedirectToSignIn(true);
  };

  const handleCloseModal = () => {
    onClose();
  };

  if (redirectToSignIn) {
    return <SignInModal />;
  }

  return (
    <>
        <main
          id="content"
          role="main"
          className="fixed inset-0 z-50 flex items-center justify-center relative"
        >
          <RxCross2
            onClick={handleCloseModal}
            className="absolute mb-[340px] ml-[490px] shadow-xl  duration-500 ease-in-out hover:bg-black hover:text-white z-50 cursor-pointer w-10 h-10 font-light rounded-full p-2 text-lg text-black bg-white"
          />
          <div className="mt-7 bg-white w-[500px] h-[363px] rounded-lg shadow-lg">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="text-4xl font-bold font-serif mb-4 mt-6 text-gray-900">
                  Lost your password?
                </h1>
                <p className="mt-2 text-sm text-gray-800 leading-6">
                  Please enter your username or email address. You will receive
                  a link to create a new password via email. Remember now?
                  <p
                    className="text-black hover:text-gray-600 decoration-2 hover:underline font-semibold"
                    onClick={handleBackToLogin}
                  >
                    Back to login
                  </p>
                </p>
              </div>

              <div className="mt-5">
                <form>
                  <div className="grid gap-y-4">
                    <div>
                      <div className="relative mt-3 mb-3">
                        <input
                          type="Name"
                          name="Name"
                          id="Name"
                          className="bg-transparent border p-2.5 w-[430px] py-3
                                            border-gray-300 text-gray-900 text-base rounded-full block"
                          placeholder="Your username or email"
                          required=""
                        />
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="w-[436px] text-white bg-black hover:scale-105 font-semibold 
                                    rounded-full text-base px-5 py-2.5 text-center"
                    >
                      RESET PASSWORD
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
    </>
  );
};

export default ForgotPassword;
