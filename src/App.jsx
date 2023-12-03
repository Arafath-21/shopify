import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  let [cart,setCart] = useState(0);
  let product=[
    {
    name:"Fancy Product",
    price:"$40.00",
    range:"$80.00",
    isPriceRange:true,
    badge:"Sale",
    isBadge:false,
    strikePrice:"",
    isStrikePrice:false,
    orignalPrice:"",
    isOrginalPrice:false,
    isOption:true,
    isRating:false,
    img: "fancy Dress"
  },
    {
    name:"Special Item",
    price:"",
    range:"",
    isPriceRange:false,
    badge:"Sale",
    isBadge:true,
    strikePrice:"$20.00",
    isStrikePrice:true,
    originalPrice:"$18.00",
    isOriginalPrice:true,
    isOption:false,
    isRating:true,
    img:"special dress"
  },
    {
    name:"Sale Item",
    price:"",
    range:"",
    isPriceRange:false,
    badge:"Sale",
    isBadge:true,
    strikePrice:"$50.00",
    isStrikePrice:true,
    originalPrice:"$25.00",
    isOriginalPrice:true,
    isOption:false,
    isRating:false,
    img:"sale dress"
  },
    {
    name:"Popular Item",
    price:"",
    range:"",
    isPriceRange:false,
    badge:"Sale",
    isBadge:false,
    strikePrice:"",
    isStrikePrice:false,
    originalPrice:"$40.00",
    isOriginalPrice:true,
    isOption:false,
    isRating:true,
    img:"black suit"
  },
  {
    name:"Sale Item",
    price:"",
    range:"",
    isPriceRange:false,
    badge:"Sale",
    isBadge:true,
    strikePrice:"$50.00",
    isStrikePrice:true,
    originalPrice:"$25.00",
    isOriginalPrice:true,
    isOption:false,
    isRating:false,
    img:"sale dress"
  },  
  {
    name:"Fancy Product",
    price:"$40.00",
    range:"$80.00",
    isPriceRange:true,
    badge:"Sale",
    isBadge:false,
    strikePrice:"",
    isStrikePrice:false,
    orignalPrice:"",
    isOrginalPrice:false,
    isOption:true,
    isRating:false,
    img: "fancy Dress"
  },  
  {
    name:"Special Item",
    price:"",
    range:"",
    isPriceRange:false,
    badge:"Sale",
    isBadge:true,
    strikePrice:"$20.00",
    isStrikePrice:true,
    originalPrice:"$18.00",
    isOriginalPrice:true,
    isOption:false,
    isRating:true,
    img:"special dress"
  },  
  {
    name:"Popular Item",
    price:"",
    range:"",
    isPriceRange:false,
    badge:"Sale",
    isBadge:false,
    strikePrice:"",
    isStrikePrice:false,
    originalPrice:"$40.00",
    isOriginalPrice:true,
    isOption:false,
    isRating:true,
    img:"black suit"
  }  
]
  return <>
  {/* Nabvar */}
    <Navbar cart={cart} setCart={setCart}/>
    {/* Header */}
    <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
        <Header h={"Shop in style"} para={"With this shop hompeage template"} />
        </div>
    </header>    
    {/* Card */}
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {
                product.map((e,i)=>{
                  return <Card cart={cart} setCart={setCart} product={e} key={i} />
                })
              }
            </div>
          </div>
    </section>          
    <Footer />    
  </>
};

export default App;