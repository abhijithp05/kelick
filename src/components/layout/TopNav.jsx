import React from 'react';
import HamburgerIcon from '@/assets/icons/hamburger.webp';
import { TopNavContainer } from '../styles/StyledContainers';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/router';
import Icon from '@/components/ui/Icon';
import useWindowWidth from '@/hooks/useWindowWidth';
import Text from '../ui/Text';

const TopNav = () => {
  const router = useRouter();
  const windowWidth = useWindowWidth();
  const {
    appContext: { pageName, isSideBarVisible } = {},
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
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center justify-around w-full lg:w-auto text-black-100 text-3xl font-semibold leading-9 font-inter">
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
      </div>
    </TopNavContainer>
  );
};

export default React.memo(TopNav);
