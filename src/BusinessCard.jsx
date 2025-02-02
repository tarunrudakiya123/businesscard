import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider settings
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function BusinessInfoCard() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-gradient">
      <motion.div
        className="card shadow-lg border-0 p-4 text-center bg-white"
        style={{
          width: "24rem",
          borderRadius: "15px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Banner Image Slider */}
        <motion.div
          className="mb-3 position-relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Slider {...sliderSettings}>
            <div>
              <img
                src="/s2.jpeg"
                alt="Solar Installation"
                className="card-img-top rounded"
                style={{
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>
            <div>
              <img
                src="/s1.png"
                alt="Solar Panel Cleaning"
                className="card-img-top rounded"
                style={{
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>

            <div>
              <img
                src="/s3.png"
                alt="Solar Panel Cleaning"
                className="card-img-top rounded"
                style={{
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>

            <div>
              <img
                src="/s4.png"
                alt="Solar Panel Cleaning"
                className="card-img-top rounded"
                style={{
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>

            <div>
              <img
                src="/s5.jpg"
                alt="Solar Panel Cleaning"
                className="card-img-top rounded"
                style={{
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>

            <div>
              <img
                src="/s6.jpg"
                alt="Solar Panel Cleaning"
                className="card-img-top rounded"
                style={{
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>
          </Slider>
          {/* Business Owner Image */}
          <motion.img
            src="/RahulProfilePic1.jpg"
            alt="Owner"
            className="rounded-circle border border-light shadow"
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              bottom: "-40px",
              left: "50%",
              transform: "translateX(-50%)",
              borderWidth: "4px",
              borderColor: "#fff",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              marginTop: "2rem", // Added margin-top
            }}
          />
        </motion.div>

        {/* Business Name & Description */}
        <div className="mt-4">
          <h4 className="fw-bold text-primary">RR Infrastructure</h4>
          <p className="text-muted small">
            Powering the Future with Clean Energy ☀️
          </p>
        </div>

        {/* Business Owner Name and Location with Social Media Icons */}
        <div className="mt-2">
          <h5 className="fw-bold">Mr. Rahul Rudakiya</h5>
          <p className="text-muted small">
            <FaMapMarkerAlt size={15} className="me-2 mb-1" color="red" />
            From Nikol, Ahmedabad, Gujarat
            <a
              href="https://www.google.com/maps?q=Nikol,+Ahmedabad,+Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-2 text-success"
            ></a>
          </p>
        </div>

        {/* Business Services with 3D Effect */}
        <motion.ul
          className="list-unstyled text-start mx-auto"
          style={{
            maxWidth: "90%",
            transform: "perspective(500px) rotateX(10deg)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.li
            className="mb-2"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3 }}
          >
            🔹 <strong>Solar Installation & EPC Work:</strong>
          </motion.li>
          <motion.li
            className="mb-2"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3 }}
          >
            🔹 <strong>Solar Panel Cleaning:</strong>
          </motion.li>
          <motion.li
            className="mb-2"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3 }}
          >
            🔹 <strong>Maintenance & Purnal Solutions:</strong>
          </motion.li>
        </motion.ul>

        {/* Social Media Icons */}
        <motion.div
          className="d-flex justify-content-center gap-3 my-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="https://www.facebook.com/share/g/14hrTrQnw4/?mibextid=K35XfP"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook size={28} color="blue" />
          </a>
          <a
            href="https://www.instagram.com/rr_infrastructure_2021"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram size={28} color="red" />
          </a>
          <a
            href="https://youtube.com/@rrinfrastructure732"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaYoutube size={28} color="red" />
          </a>
          {/* Email Icon */}
          <a
            href="mailto:rahulrudakiya1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaEnvelope size={28} color="green" />
          </a>
        </motion.div>

        {/* WhatsApp Contact Button */}
        <motion.a
          href="https://wa.link/sst74c"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success mt-2 px-4 py-2 rounded-pill"
          style={{ fontSize: "1.1rem", fontWeight: "bold" }}
          whileHover={{ scale: 1.1 }}
        >
          <FaWhatsapp size={25} className="me-2" /> Chat on WhatsApp
        </motion.a>
      </motion.div>

      {/* Custom CSS for Styling */}
      <style>
        {`
          .bg-gradient {
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          }
          .social-icon {
            color: #555;
            transition: all 0.3s ease-in-out;
          }
          .social-icon:hover {
            color: #007bff;
            transform: scale(1.2);
          }
        `}
      </style>
    </div>
  );
}
