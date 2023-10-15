import Footer from './_components/Footer';
import Heading from './_components/Heading';
import Navbar from './_components/Navbar';

export default function Home() {
  return (
    <div className='min-h-full flex flex-col'>
      <div className='flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10'>
        <Navbar />
        <Heading />
      </div>
      <Footer />
    </div>
  );
}
