const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="list-none">
                <li>About</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Swiggy One</li>
                <li>Swiggy Instamart</li>
                <li>Swiggy Genie</li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact us</h3>
              <ul className="list-none">
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="list-none">
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
                <li>Investor Relations</li>
              </ul>
            </div>
            {/* Delivery Locations */}
            <div>
              <h3 className="text-lg font-semibold mb-4">We deliver to:</h3>
              <ul className="list-none">
                <li>Bangalore</li>
                <li>Gurgaon</li>
                <li>Hyderabad</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Pune</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>&copy; 2024 Bundl Technologies Pvt. Ltd</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;