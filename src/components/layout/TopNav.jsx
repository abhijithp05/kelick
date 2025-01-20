import React from 'react';
import HamburgerIcon from '@/assets/icons/hamburger.webp';
import { TopNavContainer } from '../styles/StyledContainers';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/router';
import Icon from '@/components/ui/Icon';
import useWindowWidth from '@/hooks/useWindowWidth';
import Text from '../ui/Text';
import { Button } from '../ui';
import { ICONS } from '@/assets/url';

const TopNav = () => {
  const router = useRouter();
  const windowWidth = useWindowWidth();
  const {
    appContext: {
      pageName,
      isSideBarVisible,
      topNav: { showAddEmployee },
    } = {},
    setApplicationContext,
  } = useAppContext() || {};

  const handleSettingIconClick = () => {
    setApplicationContext({ pageName: 'Setting' });
    router.push('/settings'); // Use Next.js router for navigation
  };

  const handleHamburgerIconClick = () => {
    setApplicationContext({ isSideBarVisible: !isSideBarVisible });
  };

  return (
    <TopNavContainer role="banner">
      <div className="flex flex-col w-full lg:flex-row justify-between items-center px-4">
        <div className="flex items-center justify-between w-full lg:w-auto text-black-100 text-3xl font-semibold leading-9 font-inter">
          <div className="flex lg:hidden">
            <Icon
              height="14px"
              width="18px"
              onClick={handleHamburgerIconClick}
              src={HamburgerIcon}
            />
          </div>
          <Text className="text-dark-gray font-quicksand font-bold text-3xl leading-10 tracking-tight">
            {pageName}
          </Text>
        </div>
        {showAddEmployee && (
          <Button
            iconStart={ICONS.AddEmployee}
            altIcon="bulk upload"
            className="items-center flex justify-around w-44 rounded-xl bg-light-teal border-light-gray-200 border-[1px] px-4 py-2"
            aria-label="Bulk Upload button"
          >
            Add Employee
          </Button>
        )}
      </div>
    </TopNavContainer>
  );
};

export default React.memo(TopNav);
