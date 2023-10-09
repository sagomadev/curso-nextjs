import { Navbar } from '@/components';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center p-24'>
        <h1>Hello General Layout</h1>
        {children}
      </main>
    </>
  );
}
