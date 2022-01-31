import Link from "next/link";

const Whatsapp = () => {
  return (
    <div className="relative">
    <div className="bottom-0 right-0 mb-4 md:mr-4 z-10 bg-white opacity-100 rounded-full w-40 animate-bounce fixed">
      <div className="flex space-x-4 justify-center">
        <Link href="tel:+250782866080" passHref>
          <a className="block w-10 h-10 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="./images/call.png"
              alt="An SVG of an call"
            />
          </a>
        </Link>
        <Link
          href="whatsapp://send?text=Hello,I'd like to chat with you about Lito Ris Design!&phone=+250782866080"
          passHref
        >
          <a className="block w-12 h-12 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="./images/WhatsApp.jpg"
              alt="An SVG of an call"
            />
          </a>
        </Link>
      </div>
    </div>
    </div>
  );
};
export default Whatsapp;
