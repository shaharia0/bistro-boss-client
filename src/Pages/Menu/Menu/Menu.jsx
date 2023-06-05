import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
  const [menu]= useMenu();
  const desserts = menu.filter(item => item.category === 'dessert');
  const soups = menu.filter(item => item.category === 'soup');
  const pizzas = menu.filter(item => item.category === 'pizza');
  const salads = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');
  
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title="Our Menu"></Cover>
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
      {/* offered menu items */}
       <MenuCategory items={offered}></MenuCategory>
       {/* desert menu items  */}
       <MenuCategory items={desserts} title="Dessert" coverImg={dessertImg}></MenuCategory>
       {/* pizza menu items */}
       <MenuCategory items={pizzas} title="Pizza" coverImg={pizzaImg}></MenuCategory>
       {/* salad menu items */}
       <MenuCategory items={salads} title="Salad" coverImg={saladImg}></MenuCategory>
       {/* soup menu items */}
       <MenuCategory items={soups} title="Soup" coverImg={soupImg}></MenuCategory>
      <h1>menu will be here</h1>
    </div>
  );
};

export default Menu;