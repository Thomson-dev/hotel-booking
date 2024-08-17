import Image from "next/image";
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/assets/logo-2.png"
          alt="logo"
          width={50}
          height={50}
          className="w-10"
        />
      </div>
    </nav>
  );
};

export default NavBar;
