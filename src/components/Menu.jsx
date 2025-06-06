import React from 'react'

const Menu = () => {
 
    
     const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic delight with 100% real mozzarella cheese.',
      price: '$8.99',
      image: 'https://atsloanestable.com/wp-content/uploads/2023/06/new-york-style-pizza2.jpg',
    },
    {
      id: 2,
      name: 'Pasta Alfredo',
      description: 'Creamy white sauce pasta with herbs and parmesan.',
      price: '$10.99',
      image: 'https://atsloanestable.com/wp-content/uploads/2023/06/new-york-style-pizza2.jpg',
    },
    {
      id: 3,
      name: 'Veg Burger',
      description: 'Loaded with fresh veggies and sauces in a soft bun.',
      price: '$6.49',
      image: 'https://atsloanestable.com/wp-content/uploads/2023/06/new-york-style-pizza2.jpg',
    },
     {
      id: 4,
      name: 'Veg Burger',
      description: 'Loaded with fresh veggies and sauces in a soft bun.',
      price: '$6.49',
      image: 'https://atsloanestable.com/wp-content/uploads/2023/06/new-york-style-pizza2.jpg',
    },
    
  ]; 

   return ( 
     <>
      <div className='menu-section'>
          <h2>Our Menu</h2>
          <div className='menu-grid'>
            {menuItems.map((item) => (
              <div key={item.id} className='menu-card'>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
        </>
  )
}

export default Menu