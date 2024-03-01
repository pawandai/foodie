import { useGetRestaurantById } from '@/api/RestaurantsApi';
import { UserFormData } from '@/components/forms/user_profile_form/UserProfileForm';
import CheckoutButton from '@/components/shared/CheckoutButton';
import MenuItems from '@/components/shared/MenuItem';
import OrderSummary from '@/components/shared/OrderSummary';
import RestaurantInfo from '@/components/shared/RestaurantInfo';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardFooter } from '@/components/ui/card';
import { MenuItem } from '@/types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurantById(restaurantId);

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (menuItem: MenuItem) => {
    setCartItems((prev) => {
      // 1. check if the item is alread in the cart
      const existingCartItem = prev.find(
        (cartItem) => cartItem._id === menuItem._id
      );

      let updatedCartItems;

      // 2. if item is in cart, update the quantity
      if (existingCartItem) {
        updatedCartItems = prev.map((cartItem) =>
          cartItem._id === menuItem._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCartItems = [
          ...prev,
          {
            _id: menuItem._id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
          },
        ];
      }

      sessionStorage.setItem(
        `cartItems-${restaurantId}`,
        JSON.stringify(updatedCartItems)
      );
      // 3. if item is not in cart, add it as a new item
      return updatedCartItems;
    });
  };

  const removeFromCart = (cartItem: CartItem) => {
    setCartItems((prev) => {
      const updatedCartItems = prev.filter((item) => cartItem._id !== item._id);

      sessionStorage.setItem(
        `cartItems-${restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const onCheckout = (userFormData: UserFormData) => {
    console.log('userFormData', userFormData);
  };

  if (isLoading || !restaurant) return 'Loading...';

  return (
    <div className='flex flex-col gap-10'>
      <AspectRatio ratio={16 / 5}>
        <img
          src={restaurant.imageUrl}
          className='rounded-md object-cover h-full w-full'
        />
      </AspectRatio>
      <div className='grid md:grid-cols-[4fr_2fr] gap-5 md:px-32'>
        <div className='flex flex-col gap-4'>
          <RestaurantInfo restaurant={restaurant} />
          <span className='text-2xl font-bold tracking-tight'>Menu</span>
          {restaurant.menuItems.map((menuItem) => (
            <MenuItems
              menuItem={menuItem}
              addToCart={() => addToCart(menuItem)}
            />
          ))}
        </div>

        <div>
          <Card>
            <OrderSummary
              restaurant={restaurant}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
            <CardFooter>
              <CheckoutButton
                disabled={cartItems.length === 0}
                onCheckout={onCheckout}
                // isLoading={isCheckoutLoading}
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
