import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="py-4 px-4 text-center md:py-16 md:px-4">
      <Link href="/" className="no-underline">
        <h1 className="font-serif text-base leading-none tracking-wide text-gray-800 uppercase mb-0.5 md:text-2xl md:leading-tight md:tracking-wider md:my-1">
          Amanda Brookfield
        </h1>
        <h2 className="font-mono text-xs font-normal tracking-wider leading-relaxed m-0">
          Best-Selling Novelist
        </h2>
      </Link>
    </div>
  );
};

export default Header;