import React from "react";
import { Link } from "react-router-dom";

const ConfirmEmail = () => {
  return (
    <section className="min min-h-screen">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <div className="flex flex-col justify-center items-center h-screen">
          <p className="text-4xl text-primary font-semibold">
            Your account created successfully
          </p>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            target="_blank"
            className="underline text-red"
          >
            Verify your email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConfirmEmail;
