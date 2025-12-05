import './contact.css'
import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function Contact() { 

  return (

    <div className='bg-dark parent text-white '>

      <div className="contact text-center text-white pt-4 text-black">

        <h1 className='mb-5 contact-heading '>Contact Us</h1>

        <p className='mb-5 fs-4 fw-bolder' >HOW TO GET IN TOUCH ? </p>

      </div>

      <div className="container mt-5 d-flex justify-cotent-center " >

        <div className="row w-100">

          <div className="col-6">

            <div className="contact-details d-flex flex-column align-items-between">

              <div className="address">

                <p className='fw-bold'>ADDRESS</p>
                <p>203 Fake St.Mountain View
                  San Francisco ,California,
                  USA</p>

              </div>

              <div className="phone">
                <p className='fw-bold' >PHONE NUMBER</p>
                <p>+91 704688989</p>
              </div>

              <div className="email">
                <p className='fw-bold' >EMAIL ADDRESS</p>
                <p>info@pizzaoutletmangaer.com</p>
              </div>

              <div className="social">
                <p className='fw-bold' >FOLLOW ME</p>

                <div className="social-media-icons d-flex gap-3 ">

                  <div className="icon"> <FaPinterestP />    </div>
                  <div className="icon">  <FaFacebookF />  </div>
                  <div className="icon"> <FaTwitter />   </div>
                  <div className="icon">  <FaGoogle />  </div>

                </div>
              </div>

            </div>

          </div>

          <div className="col-6 mt-5">

            <form action="" className=''>

              <div className=" mb-2">

                <div className=" row ">

                  <div className="col-6  ">    <input name='client_name' type="text" className='form-control form-control-lg' placeholder='Your Name' />   </div>

                  <div className="col-6 ">    <input type="text" name='client_email' className='form-control form-control-lg' placeholder='Your Email' />     </div>

                </div>

              </div>

              <div className='mb-2'>
                <input type="text" placeholder='Subject' className='form-control form-control-lg' />
              </div>

              <div className='mb-2'>
                <textarea name="" placeholder='Message' className='form-control form-control-lg' id=""></textarea>
              </div>

              <button className="submit-btn " >
                BOOK A TABLE
              </button>

            </form>
          </div>

        </div>

      </div>

    </div>

  )

}
