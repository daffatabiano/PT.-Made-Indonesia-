import { MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark text-white text-center">
    <div className="container flex justify-between items-center py-12 gap-2">
      <div className="flex sm:gap-2 gap-1 text-primary items-center">
        <img src="/images/logo.png" alt="logo-properly" className="sm:w-6 w-4 sm:h-6 h-4" />
        <h1 className="sm:text-lg text-base font-semibold">Properly.</h1>
      </div>
      <p className="sm:px-6 px-2 rounded-full text-xs sm:text-base bg-transparent border-[1px] border-primary text-primary flex items-center"><span className="text-2xl font-bold me-2">·</span>Properly Indonesia</p>

      <div className="flex sm:gap-2 items-center text-gray-400 text-xs sm:text-base">
        <MapPin />
        <p>Yogyakarta, Bali</p>
      </div>
    </div>
    <div className="w-full h-full relative">
      <img src="/images/footer.png" alt="properly-footer" className="w-full h-full object-cover" />
      <p className="absolute right-0 left-0 bottom-2 text-xs sm:text-base">Copyright &copy;2024. All rights reserved. Powered by : MadeIndonesia</p>
    </div>
  </footer>
);

export default Footer;
