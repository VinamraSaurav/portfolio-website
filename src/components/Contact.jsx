"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useForm, ValidationError } from '@formspree/react';
import {toast,Toaster} from "react-hot-toast";

const Contact = () => {
    const [state, handleSubmit] = useForm("xdoqdqqy");

    const initialValues = {
        email: "",
        name: "",
        message: "",
      };
      const validationSchema = yup.object({
        name: yup
          .string()
          .max(30, "Must be 30 characters or less")
          .required("Required"),
        email: yup.string().email("Invalid Email Address").required("Required"),
        message: yup
          .string()
          .max(200, "Must be 200 characters or less")
          .required("Required"),
      });
    
      
    
      const formik = useFormik({
        initialValues,
        validationSchema,
      });

  return (
    <div className="m-3 my-20">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto  xls:my-40 my-12">
    <div id='contactUs'>
    <div  className="max-w-3xl mx-auto flex flex-col gap-y-4"> 
        <div className="text-color-1 bg-white w-[170px] font-[700] font-popins flex justify-center rounded-md text-2xl mx-auto">
        CONTACT ME
      </div>
      {/* <div className="text-2xl md:text-4xl flex justify-center font-bold font-serif my-5 text-center text-white">
        Get In Touch!
      </div> */}
      <div className="text-center m-2 text-white font-popins text-xl">
     Want to share something with me, feel free to contact !!
      </div>
      <div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group flex flex-wrap md:flex-nowrap max-w-5xl gap-x-4 gap-y-3 my-3 m-2">
           <div className="md:w-6/12 w-full">
              {/* <label htmlFor="name">Your Name:</label> */}
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Name"
                className="border  mt-2 p-2 rounded-xl border-black/70 w-full flex justify-center"
                required
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-left text-red-500 text-sm mx-2">
                  *{formik.errors.name}!
                </div>
              ) : null}
              </div>
              <div className="md:w-6/12 w-full">
              {/* <label htmlFor="email">Your Email:</label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="border  mt-2 p-2 rounded-xl border-black/70 w-full flex justify-center"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-left text-red-600 text-sm mx-2">
                  *{formik.errors.email}!
                </div>
              ) : null}
              </div>
            </div>
            <div className="form-group flex flex-col m-2">
              {/* <label htmlFor="message" className="mx-2 font-bold">Your Message:</label> */}
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                className="border flex justify-center mt-2 p-2 rounded-xl border-black/70 w-12/12"
                required
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-left text-red-600 text-sm mx-2">
                  *{formik.errors.message}!
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="submit-btn w-[150px] p-2 my-2 mx-auto rounded-md font-popins px-4 bg-color-2 font-bold mt-5 hover:bg-gradient-card text-white flex justify-center mb-10 border border-color-1 hover:bg-color-6 hover:shadow-[0_0_10px_3px_#152546]"
              onClick={()=>toast.success("Message Sent")}
            >
              
              Send Message
            </button>
            <div className="text-center text-white">I would love to hear from you! You can write me at <strong>vinamrasaurav1715@gmail.com</strong>.</div>
          </form>
          {
             <Toaster/>
          }
        </div>
      </div>
    </div>
    </div>
        </div>
        </div>
        </div>
  )
}

export default Contact