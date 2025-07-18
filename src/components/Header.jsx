import {listNavbar as ls} from '../utils/constants'

const Header = () => (
  <header className="shadow-sm z-10 relative">
    <div className='container flex justify-between items-center py-4 '>
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo-properly" className='w-4 h-4' />
        <h1 className="text-xl font-semibold text-primary">Properly.</h1>
      </div>
      <nav className="space-x-6 hidden md:block">
          {ls.map((item) => <a href="#about" className="hover:text-primary">{item}</a>)}
      </nav>
    </div>
  </header>
);

export default Header;
