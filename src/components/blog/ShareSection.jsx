import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";

export default function ShareSection() {
  return (
    <div className="flex flex-wrap items-center gap-6 pt-10">
      <h4 className="font-semibold uppercase tracking-wide">
        Share Article:
      </h4>

      <div className="flex gap-3">
        <Button
          size="icon"
          className="rounded-full h-12 w-12 bg-green-500 hover:bg-green-600"
        >
          <FaWhatsapp />
        </Button>

        <Button
          size="icon"
          className="rounded-full h-12 w-12 bg-sky-500 hover:bg-sky-600"
        >
          <FaTwitter />
        </Button>

        <Button
          size="icon"
          className="rounded-full h-12 w-12 bg-blue-700 hover:bg-blue-800"
        >
          <FaFacebookF />
        </Button>

        <Button
          size="icon"
          className="rounded-full h-12 w-12 bg-red-600 hover:bg-red-700"
        >
          <FaPinterestP />
        </Button>

        <Button
          size="icon"
          className="rounded-full h-12 w-12 bg-blue-600 hover:bg-blue-700"
        >
          <FaLinkedinIn />
        </Button>
      </div>
    </div>
  );
}