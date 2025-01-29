import { IconLogout, IconSettings } from '@tabler/icons-react';
import React from 'react';

interface LogoutMenuItemLayoutProps {
  color: string;
  children: React.ReactNode;
}

const LogoutMenuItemLayout = ({
  color,
  children,
}: LogoutMenuItemLayoutProps) => (
  <div
    className={`flex gap-3 rounded-lg px-3 py-[10px] hover:cursor-pointer hover:bg-neutral-800 ${color}`}
  >
    {children}
  </div>
);

export const LogoutMenu = () => {
  return (
    <div className="flex flex-col gap-2">
      <LogoutMenuItemLayout color="text-neutral-400">
        <IconSettings size={20} />
        <label className="font-sans text-sm font-medium">Settings</label>
      </LogoutMenuItemLayout>
      <LogoutMenuItemLayout color="text-red-400">
        <IconLogout size={20} />
        <label className="font-sans text-sm font-medium">Logout Account</label>
      </LogoutMenuItemLayout>
    </div>
  );
};
