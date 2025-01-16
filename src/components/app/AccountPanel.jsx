import { freePlanConst, notificationConst } from '@/constants/appConstants';
import Divider from '../ui/Divider';
import { MenuItem } from './MenuItem';
import ProgressBar from './ProgressBar';
import Text from '../ui/Text';
import { AccountBrief } from './AccountBrief';

export const AccountPanel = () => {
  return (
    <div>
      <Divider />
      <MenuItem style={{ marginBottom: '8px' }} menuItems={freePlanConst} />
      <div className="flex flex-col pl-2 gap-2 mb-4">
        <Text
          tag="h4"
          className="text-black font-quicksand leading-5 text-sm font-medium"
        >
          1/10 Employees
        </Text>

        <ProgressBar progress={10} color="light-teal" />
      </div>
      <Divider />
      <MenuItem style={{ marginBottom: '8px' }} menuItems={notificationConst} />
      <AccountBrief />
    </div>
  );
};
