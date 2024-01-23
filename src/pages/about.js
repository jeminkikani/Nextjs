import Link from "next/link";
import Header from "../../components/Header";
import Image from "next/image";

const about = () => {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center" }}>
        <h1 className="mainHeading">This Is About Page..(*/ω＼*)</h1>
        <Image
          src="https://images.pexels.com/photos/19415783/pexels-photo-19415783/free-photo-of-elegant-man-in-suit-reading-newspaper.jpeg"
          height="200"
          width="200"
        ></Image>
      </div>
    </>
  );
};

export default about;
