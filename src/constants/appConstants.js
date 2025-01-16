import DashboardIcon from '@/assets/icons/dashboard.webp';
import OrganisationIcon from '@/assets/icons/organisation.webp';
import EmployeesIcon from '@/assets/icons/employees.webp';
import PayrollIcon from '@/assets/icons/payroll.webp';
import LeavesIcon from '@/assets/icons/leaves.webp';
import ClaimsIcon from '@/assets/icons/claims.webp';
import MoreIcon from '@/assets/icons/more.webp';
import PlanIcon from '@/assets/icons/plan.webp';
import NotiifcationIcon from '@/assets/icons/notification.webp';

export const freePlanConst = {
  freePlan: {
    label: 'Free Plan',
    title: 'Free Plan',
    disabled: true,
    icon: PlanIcon,
  },
};

export const notificationConst = {
  notifications: {
    label: 'Notifications',
    title: 'Notifications',
    disabled: true,
    icon: NotiifcationIcon,
  },
};

export const dashboardConst = {
  dashboard: {
    label: 'Dashboard',
    title: 'Dashboard',
    disabled: true,
    icon: DashboardIcon,
  },
};

export const organizationsConst = {
  kelick: {
    label: 'Kelick',
    disabled: true,
    icon: OrganisationIcon,
  },
};

export const sideBarManageConst = {
  employees: {
    label: 'Employees',
    title: 'Employees',
    disabled: false,
    icon: EmployeesIcon,
  },
  payroll: {
    label: 'Payroll',
    title: 'Payroll',
    disabled: false,
    icon: PayrollIcon,
  },
  leaves: {
    label: 'Leaves',
    title: 'Leaves',
    disabled: false,
    icon: LeavesIcon,
  },
  claims: {
    label: 'Claims',
    title: 'Claims',
    disabled: false,
    icon: ClaimsIcon,
  },

  more: {
    label: 'More',
    title: 'More',
    disabled: true,
    icon: MoreIcon,
  },
};

export const tabs = [
  { name: 'Edit Profile', disabled: false },
  { name: 'Preferences', disabled: true },
  { name: 'Security', disabled: true },
];

export const settingsFields = [
  { label: 'Your Name', field: 'name', type: 'text', required: true },
  { label: 'User Name', field: 'usernName', type: 'text', required: true },
  { label: 'Email', field: 'email', type: 'email', required: true },
  { label: 'Password', field: 'password', type: 'password', required: true },
  { label: 'Date of Birth', field: 'dob', type: 'date', required: true },
  {
    label: 'Present Address',
    field: 'presentAddress',
    type: 'text',
    required: false,
  },
  {
    label: 'Permanent Address',
    field: 'permanentAddress',
    type: 'text',
    required: true,
  },
  { label: 'City', field: 'city', type: 'text', required: false },
  { label: 'Postal Code', field: 'postal', type: 'text', required: true },
  { label: 'Country', field: 'country', type: 'text', required: true },
];
