import Link from 'next/link';

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href='/'>
        <span>Home</span>
      </Link>
      <div className='flex flex-row flex-1 justify-end'>
        {navItems.map(({ path, label }) => (
          <Link key={path} href={path}>
            <span className='mr-2'>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
