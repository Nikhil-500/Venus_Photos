import { Link } from "react-router-dom";

export default function QuickLinks() {
  return (
    <div className="text-left space-y-3">
      <h3 className="text-lg font-semibold text-accent mb-4">Quick Links</h3>
      
      <ul className="space-y-2 text-gray-300">
        <li>
          <Link
            to="/career"
            className="hover:text-accent transition-colors duration-200"
          >
            Career
          </Link>
        </li>

        <li>
          <Link
            to="/faq"
            className="hover:text-accent transition-colors duration-200"
          >
            FAQ
          </Link>
        </li>

        <li>
          <Link
            to="/privacy-policy"
            className="hover:text-accent transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </li>

        <li>
          <Link
            to="/payment-cancellation"
            className="hover:text-accent transition-colors duration-200"
          >
            Payment & Cancellation
          </Link>
        </li>

        <li>
          <Link
            to="/pricing"
            className="hover:text-accent transition-colors duration-200"
          >
            Pricing
          </Link>
        </li>
      </ul>

      <div className="pt-4 space-y-1">
        <p className="text-accent font-semibold">+1 415 523 8886</p>
        <a
          href="mailto:muruliraj5@gmail.com"
          className="text-accent hover:underline"
        >
          muruliraj5@gmail.com
        </a>
      </div>
    </div>
  );
}
