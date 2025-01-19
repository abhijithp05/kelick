import { ICONS } from '@/assets/url';
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

export const employeeColumnHeader = [
  {
    key: 'Employee ID',
    header: 'Employee id',
  },
  {
    key: 'Employee Profile',
    header: 'Employee profile',
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
    icon: ICONS.EmployeesIcon,
  },
  payroll: {
    label: 'Payroll',
    title: 'Payroll',
    disabled: false,
    icon: ICONS.PayrollIcon,
  },
  leaves: {
    label: 'Leaves',
    title: 'Leaves',
    disabled: false,
    icon: ICONS.LeavesIcon,
  },
  claims: {
    label: 'Claims',
    title: 'Claims',
    disabled: false,
    icon: ICONS.ClaimsIcon,
  },

  more: {
    label: 'More',
    title: 'More',
    disabled: true,
    icon: ICONS.MoreIcon,
  },
};
