"use client";
import * as React from "react";

const Contact = () => {
  return (
    <form className="space-y-5 w-full md:w-3/4 lg:w-2/5">
      <div className="form-group">
        <label htmlFor="#name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="outline-offset-0 border-none outline-primary p-3 placeholder:text-sm bg-white rounded w-full transition-all duration-200"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="#email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="border-none outline-offset-0 outline-primary p-3 placeholder:text-sm bg-white rounded w-full focus:invalid:placeholder:text-rose-500 focus:invalid:outline-rose-500 transition-all duration-200"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="#message-subject" className="sr-only">
          Subject
        </label>
        <input
          type="text"
          id="message-subject"
          name="subject"
          placeholder="Enter message subject"
          className="outline-offset-0 border-none outline-primary p-3 placeholder:text-sm bg-white rounded w-full transition-all duration-200"
          required
        />
      </div>
      <div className="inout-group">
        <label htmlFor="#message-body" className="sr-only">
          Message
        </label>
        <textarea
          name="message"
          id="message-body"
          cols={undefined}
          rows={5}
          className="p-3 w-full outline-offset-0 border-none outline-primary placeholder:text-sm bg-white rounded transition-all duration-200"
        />
      </div>
      <div className="input-group w-full text-center">
        <button type="button" className="px-10 py-3 w-48 bg-primary font-medium text-white rounded">
          Send message
        </button>
      </div>
    </form>
  );
};

export default Contact;
