import DropdownMenu from './DropdownMenu';
import { TransactionsMenu } from './TransactionsMenu';
import { IconHeartHandshake, IconUsers } from '@tabler/icons-react';

export const MenuItems = () => {
  const playerMenuLinks = [
    { name: 'Registered Players', href: '/registered-players' },
    { name: 'Roles', href: '/roles' },
    { name: 'Blocked History', href: '/blocked-history' },
    { name: 'Manage Consent', href: '/manage-consent' },
  ];

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex gap-3 rounded-lg px-3 py-[10px] text-neutral-400 hover:cursor-pointer hover:bg-neutral-800">
        <IconHeartHandshake size={20} />
        <label className="font-sans text-sm font-medium">Community</label>
      </div>
      <DropdownMenu
        icon={<IconUsers size={20} />}
        menuName="Players"
        links={playerMenuLinks}
      />
      <TransactionsMenu />
    </div>
  );
};
