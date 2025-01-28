import Image from 'next/image';
import { IconLogout } from '@tabler/icons-react';

export const LogoutMenu = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 px-3 py-[10px]">
        <Image
          src="/icons/Settings.svg"
          width={20}
          height={20}
          alt="settings icon"
        />
        <label className="font-sans text-sm font-medium text-neutral-400">
          Settings
        </label>
      </div>
      <div className="flex gap-3 px-3 py-[10px]">
        <IconLogout size={20} className="text-red-400 hover:text-neutral-50" />
        <label className="font-sans text-sm font-medium text-red-400">
          Logout Account
        </label>
      </div>
    </div>
  );
};
