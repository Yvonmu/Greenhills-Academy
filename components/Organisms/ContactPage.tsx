import Link from "next/link";
import { MdLocationPin, MdMail, MdPhone } from "react-icons/md";
import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { motion } from "framer-motion";
import { Renderable, Toast, Toaster, toast } from "react-hot-toast";

const validationSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().email("invalid email").required("email is required"),
  message: yup.string().required("message is required"),
});

export default function ContactPage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      try {
        // Send POST request to API endpoint
        await axios.post("/api/query", values);
        toast.success("Form submitted successfully!"); // Display success message
        resetForm();
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      } finally {
        setSubmitting(false);
      }
    },
  });
  const listItem = [
    {
      title: "Nursery School",
      phone: "+250 787 227 609",
    },
    {
      title: "Primary School",
      phone: "+250 787 303 020",
    },
    {
      title: "Middle School",
      phone: "+250 787 303 024",
    },
    {
      title: "High School",
      phone: "+250 787 303 029",
    },
    {
      title: "Finance",
      phone: "+250 787 268 004",
    },
    {
      title: "Admissions",
      phone: "+250 787 227 601",
    },
  ];
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <main
        className="flex justify-center pt-12 "
        style={{
          backgroundImage: `url(${"h/icons/white2_qkbyoe.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <section className="md:w-[80%] sm:w-[80%] mt-28 flex flex-col gap-8">
          <div className="flex justify-center">
            <div className="w-full">
              <h1 className="uppercase md:text-center text-primary">
                reach out to us
              </h1>
              <div className="grid grid-cols-3 md:divide-x-4 md:divide-primary justify-items-center sm:grid-cols-1 sm:gap-4 md:my-4">
                <div className="flex w-full md:justify-center items-center gap-4 md:my-4">
                  <MdMail className="text-primary  md:text-[1.3vw] sm:text-[1.05rem]" />
                  <Link
                    href={"mailto:info@greenhillsacademy.rw"}
                    className=" md:text-[1.3vw] sm:text-[1.05rem]"
                  >
                    info@greenhillsacademy.rw
                  </Link>
                </div>
                <div className="flex w-full md:justify-center items-center gap-4 md:my-4">
                  <MdPhone className="md:text-[1.3vw] sm:text-[1.05rem] text-primary" />
                  <Link
                    href={"tel:+250735832348"}
                    className="  md:text-[1.3vw] sm:text-[1.05rem]"
                  >
                    {" "}
                    +250 735 832 348{" "}
                  </Link>
                </div>
                <div className="flex w-full md:justify-center items-center gap-4 md:my-4">
                  <MdLocationPin className="text-primary  md:text-[1.3vw] sm:text-[1.05rem]" />
                  <Link
                    href={"https://maps.app.goo.gl/tvuSRKTnJSxwndN9A"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  md:text-[1.3vw] sm:text-[1.05rem]"
                  >
                    KG 278 St, Nyarutarama, Kigali
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex w-full sm:flex-wrap">
              <div className="md:w-1/2 sm:w-full">
                <h2 className="text-primary md:mb-6 sm:mb-4 font-bold uppercase">
                  our schedule
                </h2>
                <div className="w-full sm:grid sm:grid-cols-2">
                  <div className="mb-6">
                    <p className="font-bold text-primary">Monday - Friday</p>
                    <p className="">8:00 AM - 4:30 PM</p>
                  </div>
                  <div className="mb-6">
                    <p className="font-bold text-primary">Saturday</p>
                    <p className="">Closed</p>
                  </div>
                  <div className="mb-6">
                    <p className="font-bold text-primary">Sunday</p>
                    <p className="">Closed</p>
                  </div>
                </div>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="md:w-1/2 sm:w-full"
              >
                <div>
                  <h2 className="text-primary md:mb-6 sm:mb-4 font-bold uppercase">
                    Query Form
                  </h2>
                  <div className="mb-4">
                    <p className="pb-1">Name</p>
                    <input
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your name"
                      className={
                        formik.errors.name && formik.touched.name
                          ? "border-[red]"
                          : ""
                      }
                    />
                    {formik.errors.name && formik.touched.name && (
                      <span className="text-[red]">{formik.errors.name}</span>
                    )}
                  </div>
                  <div className="my-4">
                    <p className="pb-1">Email</p>
                    <input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="example@gmail.com"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "border-[red]"
                          : ""
                      }
                    />
                    {formik.errors.email && formik.touched.email && (
                      <span className="text-[red]">{formik.errors.email}</span>
                    )}
                  </div>
                  <div className="my-4">
                    <p className="pb-1">Message</p>
                    <textarea
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Your message for us"
                      rows={4}
                      className={
                        formik.errors.message && formik.touched.message
                          ? "border-[red]"
                          : ""
                      }
                    />
                    {formik.errors.message && formik.touched.message && (
                      <span className="text-[red]">
                        {formik.errors.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <motion.button
                      type="submit"
                      disabled={formik.isSubmitting}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        background: "#018c79",
                        color: "#fff",
                        border: "1px solid var(--color-border)",
                      }}
                      className="border rounded-lg gap-2 hover:bg-primary hover:border-[yellow] hover:text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
                    >
                      {formik.isSubmitting ? "Sending..." : "Send Message"}
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-primary uppercase mb-4 md:text-center">
              Other Contacts
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
              {listItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-primary rounded-lg p-4"
                    style={{
                      backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
                      backgroundSize: "cover",
                      backgroundPosition: "bottom",
                    }}
                  >
                    <div className="flex text-white w-full md:justify-center items-center gap-4 md:my-4">
                      <MdPhone className="md:text-[1.3vw] sm:text-[1.05rem] text-[yellow]" />
                      <div>
                        {" "}
                        <p className="font-bold md:text-center">{item.title}</p>
                        <Link
                          href={`tel:${item.phone.replace(/\s/g, "")}`}
                          className="underline decoration-[yellow]  md:text-[1.3vw] sm:text-[1.05rem]"
                        >
                          {item.phone}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
