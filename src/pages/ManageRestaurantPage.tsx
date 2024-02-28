import {
  useCreateRestaurant,
  useGetRestaurant,
  useUpdateRestaurant,
} from '@/api/RestaurantApi';
import ManageRestaurantForm from '@/components/forms/manage_restaurant_form/ManageRestaurantForm';

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateRestaurant();
  const { restaurant } = useGetRestaurant();
  const { updateRestaurant, isLoading: isUploadLoading } =
    useUpdateRestaurant();

  const isUpdating = !!restaurant;

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isUpdating ? updateRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUploadLoading}
    />
  );
};

export default ManageRestaurantPage;
