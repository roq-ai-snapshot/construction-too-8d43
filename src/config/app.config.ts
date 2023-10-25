interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Business Owner',
    'Store Manager',
    'Store Employee',
    'Customer Service Representative',
    'Individual Customer',
  ],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read product information',
    'Read company information',
    'Read store information',
    'Read user information',
  ],
  ownerAbilities: ['Manage company', 'Manage store', 'Manage product', 'Manage order'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/d6ae3cec-83e2-494e-aaff-255784c0a83a',
};
