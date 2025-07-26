import React, { useState } from 'react';
import Titre from './Composant/Titre';
import Card from './Composant/Card';
import './App.css';
import Detail from './Composant/Detail.jsx';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    { id: 1, name: "Radiant Foundation", brand: "GlowCo", price: "$29.99", image: "https://www.omsstore.com/cdn/shop/files/nars-natural-radiant-longwear-foundation-185.webp?v=1739653190&width=1445", rating: 4.5 },
    { id: 2, name: "Matte Lipstick - Ruby Red", brand: "LipLux", price: "$12.50", image: "https://m.media-amazon.com/images/I/61Vxd5N0-bL._UF350,350_QL80_.jpg", rating: 4.7 },
    { id: 3, name: "Shimmer Eyeshadow Palette", brand: "EyeGlow", price: "$35.00", image: "https://i5.walmartimages.com/seo/Jutqut-9-Colors-Eyeshadow-Palette-Matte-Shimmer-Glitter-Eye-Shadow-Makeup-Highly-Pigmented-Long-Lasting-Waterproof-Natural-Neutral-Nude-Pallet-Cashme_835daafe-d46d-4952-9167-0e9d641b680e.335bf4716a3987665e4b0d234fbba9ba.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", rating: 4.3 },
    { id: 4, name: "Hydrating Concealer", brand: "PureSkin", price: "$18.75", image: "https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/beauty-magazine/2024/mar/banner-hydrating-concealer-dekstop.jpg?cx=0.25&cy=0.31&cw=2000&ch=815&hash=6D8EB171F3EA3793DCA54F8ABD74E606", rating: 4.6 },
    { id: 5, name: "Velvet Blush - Rose Petal", brand: "Sheglam", price: "$15.00", image: "https://k-zone.dz/wp-content/uploads/2024/06/PETAL.jpg", rating: 4.4 },
    { id: 6, name: "Long-Lash Mascara", brand: "LashLux", price: "$22.00", image: "https://trevibe.com/cdn/shop/files/NaturalEyelashGrowthSerum7DaysFastEyelashesEnhancerEssenceLiftingLongerFullerThickerLashesNourishMakeupProducts-0_720x720.webp?v=1722358645", rating: 4.8 },
    { id: 7, name: "Dewy Highlighter - Golden Glow", brand: "Lumiere", price: "$25.50", image: "https://www.revolutionbeauty.com/dw/image/v2/BCZJ_PRD/on/demandware.static/-/Sites-revbe-master-catalog/default/dwbb431246/images/hi-res/Pro%20Dewy%20Glaze%20Highlighter%20Bundle%201.jpg?sw=660&sh=660&sm=fit&strip=false", rating: 4.6 },
    { id: 8, name: "Creamy Eyeliner - Midnight Black", brand: "EyeDefine", price: "$10.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rCrj4UnFbkZh8Xi_Deeu6CSC6KUfB0V8Rg&s", rating: 4.2 },
    { id: 9, name: "Moisturizing Primer", brand: "PurePrep", price: "$20.00", image: "https://advancedmineralmakeup.com/cdn/shop/files/moisturizer.jpg?v=1684902654", rating: 4.5 },
    { id: 10, name: "Bold Brow Gel - Dark Brown", brand: "BrowMaster", price: "$14.75", image: "https://innmark.co.uk/2532-large_default/perfect-brow-gel-01-blonde.jpg", rating: 4.3 },
    { id: 11, name: "Glossy Lip Balm - Peach Nectar", brand: "LipGlow", price: "$9.50", image: "https://www.focallurepk.com/cdn/shop/files/2_78be169d-08c9-4b81-8cbf-cfeaf4bcbf12.jpg?v=1741000185", rating: 4.7 },
    { id: 12, name: "Silk Powder - Translucent", brand: "FinishPro", price: "$17.00", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkBlh2feIerPAQC4DHqfqJg6nAHBj7YxOYA&s", rating: 4.4 },
    { id: 13, name: "Contour Stick - Warm Bronze", brand: "SculptGlow", price: "$23.99", image: "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/s/25/4fbfc4e7-852a-4458-8940-36d949caefec.jpg", rating: 4.6 },
    { id: 14, name: "Curling Mascara - Jet Black", brand: "LashLift", price: "$19.50", image: "https://www.cultbeauty.com/images?url=https://static.thcdn.com/productimg/original/10552547-4875133025823028.jpg&format=webp&auto=avif&width=1200&height=1200&fit=cover", rating: 4.5 },
  ];

  return (
    <div className="container">
      <Titre />
      <div className="cont">
        <div className="grid ">
          {products.map(product => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              image={product.image}
              rating={product.rating}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
        <div>
          <Detail selectedProduct={selectedProduct} />
        </div>
      </div>
      <div className="inf">
        Coding  by 
       
        <a href="#" >Lila Khelifoui</a>
      </div>
    </div>
  );
}

export default App;