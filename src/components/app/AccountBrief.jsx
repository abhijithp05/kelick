import AvatarIcon from '@/assets/icons/avatar.webp';
import Icon from '../ui/Icon';
import { useAppContext } from '@/context/AppContext';
import Text from '../ui/Text';

export const AccountBrief = () => {
  const { appContext: { accountInfo: { userName, email } = {} } = {} } =
    useAppContext() || {};
  return (
    <div className="flex flex-row gap-4 items-center ml-1">
      <Icon
        width="32px"
        height="32px"
        src={AvatarIcon}
        className="w-8 h-8"
        alt="Account Icon"
      />
      <div className="flex flex-col gap-[2px]">
        <Text className="text-black font-quicksand text-xs font-medium leading-5">
          {userName}
        </Text>
        <Text className="text-light-gray-300 font-quicksand text-xs font-medium leading-5">
          {email}
        </Text>
      </div>
    </div>
  );
};
