import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');

  // const [menu, setMenu] = useState([]);
  // useEffect(()=>{
  //   fetch('menu.json')
  //   .then(res => res.json())
  //   .then(data => {
  //     const popularItems = data.filter(item => item.category === 'popular');
  //     setMenu(popularItems)})
  // },[])
  return (
    <section className="mb-12">
      <SectionTitle
      heading="From Our Menu"
      subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {
          popular.map(item => <MenuItem
          key={item._id}
          item={item}
          ></MenuItem>)
        }
      </div>
      <div className="text-center">
      <button className="btn btn-outline border-0 border-b-4 text-black mt-5">View Full Menu</button> 
      </div>
    </section>
  );
};

export default PopularMenu;