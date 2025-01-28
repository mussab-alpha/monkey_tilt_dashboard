import Image from 'next/image';
import DropdownMenu from './DropdownMenu';
import { TransactionsMenu } from './TransactionsMenu';

export const MenuItems = () => {
  const playerMenuLinks = [
    { name: 'Registered Players', href: '/registered-players' },
    { name: 'Roles', href: '/roles' },
    { name: 'Blocked History', href: '/blocked-history' },
    { name: 'Manage Consent', href: '/manage-consent' },
  ];

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex gap-3 px-3 py-[10px]">
        <Image
          src="/icons/community.svg"
          width={20}
          height={20}
          alt="community icon"
        />
        <label className="font-sans text-sm font-medium text-neutral-400">
          Community
        </label>
      </div>
      <DropdownMenu
        iconPath="/icons/players.svg"
        menuName="Players"
        links={playerMenuLinks}
      />
      <TransactionsMenu />
    </div>
  );
};
