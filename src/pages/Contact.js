import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { IoIosHome, IoMdCall } from "react-icons/io";
import { MdEmail, MdInfo } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      <Meta title={"Contact Us"} />
      <BreadCrumb title={"Contact Us"} />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.320544466085!2d3.3426589351290517!3d6.574553289446123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b939df41bfa91%3A0x171aae41368d068a!2sGod%E2%80%99s%20Touch%20Apartments%20Signatures!5e0!3m2!1sen!2sng!4v1722861360149!5m2!1sen!2sng"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        placeholder="Comments"
                        className="w-100 px-2 py-2"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center ">
                        <IoIosHome className="fs-5 icons-change" />
                        <address className="my-2">
                          75 Oduduwa Cres, Ikeja GRA, Ikeja 100271, Lagos
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <IoMdCall className="fs-5 icons-change" />
                        <a href="tel:09002001000">0900 200 1000</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <MdEmail className="fs-5 icons-change" />
                        <a href="mailto:techilola@gmail.com">
                          techilola@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <MdInfo className="fs-5 icons-change" />
                        <p className="my-2">Monday - Friday 9am - 5pm</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
