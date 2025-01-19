import React from 'react';
import { ICONS } from '@/assets/url';
// import KelickLogo from '@/assets/icons/kelick-logo-svg.svg';
import Icon from '../ui/Icon';
import {
  organizationsConst,
  sideBarManageConst,
  dashboardConst,
} from '@/constants/appConstants';
import { SideNavContainer } from '../styles/StyledContainers';
import useWindowWidth from '@/hooks/useWindowWidth';
import { MenuItem } from '../app/MenuItem';
import { AccountPanel } from '../app/AccountPanel';

const SideBar = () => {
  const windowWidth = useWindowWidth();

  return (
    <SideNavContainer role="navigation" aria-label="Main Navigation">
      <nav className="flex flex-col justify-between h-full">
        <div>
          <div className="flex flex-row items-center mb-8">
            <Icon
              src={ICONS.KelickLogo}
              // className="w-28 h-7"
              width={28}
              height={7}
              alt="Kelick Logo"
            />
          </div>
          <MenuItem menuItems={dashboardConst} />

          <MenuItem
            title="ORGANIZATIONS"
            isExpendable
            menuItems={organizationsConst}
          />
          <MenuItem title="MANAGE" menuItems={sideBarManageConst} />
        </div>
        <AccountPanel />
      </nav>
    </SideNavContainer>
  );
};

export default React.memo(SideBar);
