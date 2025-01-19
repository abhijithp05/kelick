import React from 'react';
import { ICONS } from '@/assets/url';
// import SearchUser from '@/assets/icons/search-user.webp';
// import BulkUpload from '@/assets/icons/bulk-upload.webp';
// import AddEmployee from '@/assets/icons/add-employee.webp';
import { Card } from '@/components/styles/StyledCard';
import Icon from '@/components/ui/Icon';
import Text from '@/components/ui/Text';
import { Button } from '@/components/ui';

const BuildTeam = ({ onBulkUploadClick }) => {
  return (
    <Card
      className="flex justify-center"
      style={{
        height: '500px',
        width: '90%',
        margin: '16px',
        borderRadius: '12px',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="w-1/2 h-full flex flex-col gap-2 items-center justify-center">
        <Icon src={ICONS.SearchUser} width={13.75} height={13.75} />
        <Text
          tag="h3"
          className="font-quicksand font-bold text-3xl leading-10 align-middle tracking-tighter text-dark-gray"
        >
          Start building your team
        </Text>
        <Text
          tag="h5"
          className="font-quicksand font-medium text-base leading-6 align-middle tracking-tighter text-light-gray-300"
        >
          Add your first team member or import your entire team.
        </Text>
        <div className="flex flex-row gap-4 mt-7">
          <Button
            className="items-center flex justify-around w-40 rounded-xl bg-light-gray-400 border-light-gray-200 border-[1px] px-4 py-2"
            aria-label="Bulk Upload button"
            onClick={onBulkUploadClick}
          >
            <Icon src={ICONS.BulkUpload} alt="bulk upload" />
            <Text className="text-base text-dark-gray font-semibold leading-6 font-quicksand">
              Bulk Upload
            </Text>
          </Button>
          <Button
            className="items-center flex justify-around w-44 rounded-xl bg-light-teal border-light-gray-200 border-[1px] px-4 py-2"
            aria-label="Bulk Upload button"
            // onClick={handleSettingIconClick}
          >
            <Icon src={ICONS.AddEmployee} alt="bulk upload" />
            <Text className="text-base text-white font-semibold leading-6 font-quicksand">
              Add Employee
            </Text>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default React.memo(BuildTeam);
