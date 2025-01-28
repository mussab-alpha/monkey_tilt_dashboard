import { LogoutMenu } from './LogoutMenu';
import { MenuContainer } from './MenuContainer';

export const Sidebar = () => {
  return (
    <aside className="flex min-h-screen w-64 flex-col justify-between border-r border-neutral-800 bg-neutral-900 p-6 pt-5">
      <MenuContainer />
      <LogoutMenu />
    </aside>
  );
};
