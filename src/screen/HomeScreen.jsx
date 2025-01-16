import SearchUser from '@/assets/icons/search-user.webp';
import BulkUpload from '@/assets/icons/bulk-upload.webp';

import { Layout } from '@/components/layout';
import { Card } from '@/components/styles/StyledCard';
import Icon from '@/components/ui/Icon';
import Text from '@/components/ui/Text';
import { Button } from '@/components/ui';

const HomeScreen = () => {
  return (
    <Layout>
      <Card
        style={{
          height: '500px',
          width: '80%',
          margin: '16px',
          borderRadius: '12px',
          backgroundColor: '#ffffff',
        }}
      >
        <div className="w-1/2 h-full flex flex-col gap-8 items-center justify-center">
          <Icon src={SearchUser} width="220px" height="220px" />
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
          <div className="flex flex-col justify-around">
            <Button
              className="p-2 items-center flex justify-around w-40 rounded-xl border-black"
              aria-label="Bulk Upload button"
              // onClick={handleSettingIconClick}
            >
              <Icon src={BulkUpload} alt="bulk upload" />
              Bulk Upload
            </Button>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default HomeScreen;
