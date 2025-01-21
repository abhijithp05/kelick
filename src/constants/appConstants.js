import { ICONS } from '@/assets';
import Icon from '@/components/ui/Icon';
// import DashboardIcon from '@/assets/icons/dashboard.webp';
// import OrganisationIcon from '@/assets/icons/organisation.webp';
// import EmployeesIcon from '@/assets/icons/employees.webp';
// import PayrollIcon from '@/assets/icons/payroll.webp';
// import LeavesIcon from '@/assets/icons/leaves.webp';
// import ClaimsIcon from '@/assets/icons/claims.webp';
// import MoreIcon from '@/assets/icons/more.webp';
// import PlanIcon from '@/assets/icons/plan.webp';
// import NotiifcationIcon from '@/assets/icons/notification.webp';

export const colorConst = ['#02B9B0', '#FAC905', '#B774FC', '#B3BEBE'];

export const statusCardConst = {
  Active: {
    color: 'light-teal',
    backgroundColor: 'bg-light-teal-100',
  },
  'Payroll only': {
    color: 'light-gray-300',
    backgroundColor: 'bg-light-gray-500',
  },
  'Invite sent': {
    color: 'light-purple-100',
    backgroundColor: 'bg-light-purple-200',
  },
};

export const employeeColumnHeader = [
  {
    key: 'Employee ID',
    header: 'Employee id',
    render: (row, column) => (
      <div className="font-quicksand font-semibold text-sm leading-6 underline text-light-teal ">
        {row?.[column?.key]}
      </div>
    ),
  },
  {
    key: 'Employee Profile',
    header: 'Employee profile',
    render: (row, column) => (
      <div className="gap-4 flex ">
        <Icon src={ICONS.AvatarIcon}></Icon>
        {row?.[column?.key]}
      </div>
    ),
  },
  {
    key: 'Email',
    header: 'Email',
  },
  {
    key: 'Role',
    header: 'Role',
  },
  {
    key: 'Status',
    header: 'Status',
    render: (row, column) => (
      <div
        className={`flex flex-row justify-center items-center rounded-xl w-fit h-12 lg:h-8 px-3 py-4 gap-2 ${
          statusCardConst[row?.[column?.key]]?.backgroundColor
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full bg-${
            statusCardConst[row?.[column?.key]]?.color
          }`}
        ></div>
        <span
          className={`text-base leading-6 font-semibold font-quicksand text-${
            statusCardConst[row?.[column?.key]]?.color
          }`}
        >
          {row?.[column?.key]}
        </span>
      </div>
    ),
  },
];

export const nationalityConst = {
  title: { key: 'Nationality', label: 'Nationality' },
  content: { key: 'Singaporean', label: 'Singaporean' },
};

export const employeeStatusConst = {
  title: { key: 'Status', label: 'Employee Status' },
  content: { key: 'Active', label: 'Active Employees' },
};

export const employeeTypeConst = {
  title: { key: 'Employment Type', label: 'Employment Type' },
  content: { key: 'Full Timer', label: 'Full Timer' },
};

export const employeeRoleConst = {
  title: { key: 'Role', label: 'Employee Role' },
};

export const freePlanConst = {
  freePlan: {
    label: 'Free Plan',
    title: 'Free Plan',
    disabled: true,
    icon: ICONS.PlanIcon,
  },
};

export const notificationConst = {
  notifications: {
    label: 'Notifications',
    title: 'Notifications',
    disabled: true,
    icon: ICONS.NotiifcationIcon,
  },
};

export const dashboardConst = {
  dashboard: {
    label: 'Dashboard',
    title: 'Dashboard',
    disabled: true,
    icon: ICONS.DashboardIcon,
  },
};

export const organizationsConst = {
  kelick: {
    label: 'Kelick',
    disabled: true,
    icon: ICONS.OrganisationIcon,
  },
};

export const sideBarManageConst = {
  employees: {
    label: 'Employees',
    title: 'Employees',
    disabled: false,
    path: '/',
    icon: ICONS.EmployeesIcon,
  },
  payroll: {
    label: 'Payroll',
    title: 'Payroll',
    disabled: false,
    path: '/payroll',
    icon: ICONS.PayrollIcon,
  },
  leaves: {
    label: 'Leaves',
    title: 'Leaves',
    disabled: false,
    path: '/leaves',
    icon: ICONS.LeavesIcon,
  },
  claims: {
    label: 'Claims',
    title: 'Claims',
    disabled: false,
    path: '/claims',
    icon: ICONS.ClaimsIcon,
  },

  more: {
    label: 'More',
    title: 'More',
    disabled: true,
    path: '/',
    icon: ICONS.MoreIcon,
  },
};
