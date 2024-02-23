import { useUpdateUser } from '@/api/userApi';
import UserProfileForm from '@/components/forms/user_profile_form/UserProfileForm';

const UserProfilePage = () => {
  const { updateUser, isLoading } = useUpdateUser();

  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
};

export default UserProfilePage;
