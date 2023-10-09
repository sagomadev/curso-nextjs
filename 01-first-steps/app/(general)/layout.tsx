export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col items-center'>
      <h1>Hello General Layout</h1>
      {children}
    </div>
  );
}
