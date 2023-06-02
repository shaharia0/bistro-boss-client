import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
  return (
    <div className="featuredItem text-white pt-10">
      <SectionTitle
      subHeading="Check it Out"
      heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 text-white">
          <p>May 29, 2023</p>
          <p className="uppercase">Where Can I get Some?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tempora asperiores, voluptatibus, dignissimos illum quisquam voluptatem fuga doloribus a minima assumenda necessitatibus illo nam odio? Ab perspiciatis, facilis iste aperiam dolores quia impedit ea consequuntur perferendis similique recusandae quod earum beatae cumque iusto amet quibusdam mollitia nam eius illum. Labore.</p>
          <button className="btn btn-outline text-white mt-5">Order Now</button> 
        </div>
      </div>
    </div>
  );
};

export default Featured;