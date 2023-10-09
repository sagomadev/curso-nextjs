import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href='/'>
        <span>Home</span>
      </Link>
      <div className='flex flex-row flex-1 justify-end'>
        <Link className='mr-2' href='/about'>
          About
        </Link>
        <Link className='mr-2' href='/pricing'>
          Pricing
        </Link>
        <Link className='mr-2' href='/contact'>
          Contact
        </Link>
      </div>
    </nav>
  );
};
