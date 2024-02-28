import { useGetUser, useUpdateUser } from '@/api/userApi';
import UserProfileForm from '@/components/forms/user_profile_form/UserProfileForm';

const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();
  const { currentUser, isLoading: isGetLoading } = useGetUser();

  if (isGetLoading) return <span>Loading..</span>;

  if (!currentUser) return <span>Unable to load user profile</span>;

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
