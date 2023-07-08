"use client";
import Link from "next/link";
import * as React from "react";
import { VscSend } from "react-icons/vsc";

const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-10 xl:gap-14 w-full md:w-4/5 lg:w-4/6 xl:w-3/5 md:mx-auto">
      <div className="w-full sm:w-fit space-y-5">
        <div className="address-group space-y-2">
          <h4 className="text-primary-text">Phone</h4>
          <Link
            href={"tel:+233 556 08 7757"}
            className="text-primary-lightText"
          >
            +233 556 08 7757
          </Link>
        </div>
        <div className="address-group space-y-2">
          <h4 className="text-primary-text">Email</h4>
          <Link
            href={"mailto:codingbrowny@gmail.com"}
            className="text-primary-lightText"
          >
            codingbrowny@gmail.com
          </Link>
        </div>
        <div className="address-group space-y-2">
          <h4 className="text-primary-text">Location</h4>
          <span className="text-primary-lightText">
            Accra Ghana
          </span>
        </div>
      </div>
      <form className="space-y-5 w-full lg:w-4/5">
        <div className="form-group bg-primary-input py-3 px-4 rounded-lg">
          <label htmlFor="name" className="text-sm text-primary-title">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-none outline-none text-primary-text w-full bg-primary-input pt-1"
            required
          />
        </div>
        <div className="form-group bg-primary-input py-3 px-4 rounded-lg">
          <label htmlFor="email" className="text-sm text-primary-title">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-none outline-none text-primary-text w-full bg-primary-input pt-1"
            required
          />
        </div>
        <div className="form-group bg-primary-input py-3 px-4 rounded-lg">
          <label htmlFor="subject" className="text-sm text-primary-title">
            Subject
          </label>
          <input
            type="text"
            id="message-subject"
            name="subject"
            className="border-none outline-none text-primary-text w-full bg-primary-input pt-1"
            required
          />
        </div>
        <div className="form-group bg-primary-input py-3 px-4 rounded-lg">
          <label htmlFor="message" className="text-sm text-primary-title">
            Message
          </label>
          <textarea
            name="message"
            id="message-body"
            cols={undefined}
            rows={5}
            className="border-none outline-none text-primary-text w-full bg-primary-input pt-1"
          />
        </div>
        <div className="input-group w-full text-center">
          <button
            type="button"
            className="p-3 bg-primary hover:bg-primary-alt float-right clear-both transition-colors duration-300 font-medium text-white rounded flex items-center gap-2 text-primary-input"
          >
            Send message <VscSend className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
