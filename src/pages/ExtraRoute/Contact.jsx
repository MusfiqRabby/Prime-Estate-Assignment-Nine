
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";


const Contact = () => {

  const {} = useContext(AuthContext)
  const {logOut, user} = useContext(AuthContext);
  const redirect = useNavigate()
  useEffect(() => {
      if (!user) {
          redirect("/login")
      }
  }, [])


    return (
        <div data-aos="flip-down" data-aos-duration="1500">
            <Helmet>
            <title>Prime-Estate | Contact</title>
          </Helmet>
            <div className="lg:flex">
              <div className="border my-8 p-8 mx-8">
              <div class="rounded-lg h-40 w-full lg:w-[374px] mx-auto lg:m-6 bg-[#bced6d1a] lg:p-10">
                <img src="" alt="" />
                 <p class="text-[#131318] mx-8 opacity-70">Phone Number : </p> 
                 <span class="text-[#131318] mx-8 font-medium">(+62) 123-321-543</span>
                  </div>
                  <div class="rounded-lg lg:h-40 w-full lg:w-[374px] my-6 mx-auto bg-[#fddd5f1a] p-10">
                  <img src="" alt="" />
                    <p class="text-[#131318] mx-8 opacity-70">Email : </p> 
                      <span class="text-[#131318] mx-8 font-medium">apertment@support.com</span>
                  </div>
                  <div class="rounded-lg h-40 w-full lg:w-[374px] bg-[#629cf31a] p-10">
                    <p class="text-[#131318] mx-8 opacity-70">Location :  </p> 
                      <span class="text-[#131318] mx-8 font-medium">152/1 Mohakhali Wireless Gate</span>
                  </div>
              </div>
               <div class="flex-1 ">
              <div class=" mb-6 gap-6">
               <div class="flex flex-col lg:flex-row my-0.5 lg:my-8">
                 <div>
                  <label for="your name" class="text-lg font-bold ">Your Name</label> 
                 <input type="text" id="your email" class="border text-sm rounded-lg h-10 w-full lg:w-72 px-2 my-3 text-center" placeholder="Enter your name" />
                
                  <label for="your email" class="text-lg font-bold">Subject </label> 
                  <input type="text" id="your email" class="border text-sm rounded-lg h-10 w-full lg:w-72 px-2 my-3 text-center" placeholder="Enter your subject"/>
                 </div>
                 <div>
                
                <label for="subject" class="text-lg font-bold">Your Email</label> 
                 <input type="text" id="subject" class="border text-sm rounded-lg h-10 w-full lg:w-72 px-2 my-3 text-center" placeholder="Enter your email" />
                
                 <label for="phone number" class="text-lg font-bold">Phone Number</label> 
                 <input type="text"  id="subject" class="border text-sm rounded-lg h-10 w-full lg:w-72 px-2 my-3 text-center" placeholder="Enter your phone number" />
              
                 </div>
               </div>
               <div class="mb-5 ">
                <h4 class="text-xl font-bold my-4">Message</h4>
                <textarea class="textarea textarea-bordered rounded-xl w-full lg:w-[600px] h-[150px] lg:h-[290px]" placeholder="Enter Your message"></textarea>
               </div>
               <button class="btn text-lg btn-secondary text-white w-full lg:w-[600px]">Send Message</button>
            </div>
           </div>
            </div>
              
            <div class="rounded-lg h-36 bg-gray-100 text-center my-8 ">
            <h3 class="text-[#131318] font-extrabold pt-9 text-2xl mb-4">Social Icons</h3>
            <div className="flex justify-center gap-5">
             <Link> <FaFacebook/> </Link>
             <Link> <FaGithub /> </Link>
             <Link> <FaTwitter /> </Link>
             <Link> <FaInstagram /> </Link>
            </div>
           </div>
        </div>
    );
};

export default Contact;