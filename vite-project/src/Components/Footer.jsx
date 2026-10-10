function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded mr-2">
                DS
              </span>
              Dev <span className="text-pink-500">Stack</span>
            </h2>

            <p className="text-sm text-gray-500 mb-5">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-purple-600">
                GitHub
              </a>

              <a href="#" className="hover:text-purple-600">
                Twitter
              </a>

              <a href="#" className="hover:text-purple-600">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-4">
              PRODUCT
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-4">
              COMPANY
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-purple-600">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-4">
              LEGAL
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-600">
              Privacy
            </a>

            <a href="#" className="hover:text-purple-600">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;