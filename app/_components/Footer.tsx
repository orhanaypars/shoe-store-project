import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-background text-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-4">
          {/* Social Media Icons */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-sm">
          © {new Date().getFullYear()} Shoe Store. Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
