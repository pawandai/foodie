import { useCreateRestaurant } from '@/api/RestaurantApi';
import ManageRestaurantForm from '@/components/forms/manage_restaurant_form/ManageRestaurantForm';

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateRestaurant();

  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
  );
};

export default ManageRestaurantPage;
