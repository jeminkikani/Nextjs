import Link from "next/link";


const header = () => {
  return (
    <>
      <div class="header">
        <a href="#default" class="logo">
          CompanyLogo
        </a>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </>
  );
};

export default header;
