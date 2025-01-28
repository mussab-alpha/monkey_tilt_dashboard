import Image from 'next/image';
import { MenuItems } from './MenuItems';

export const MenuContainer = () => {
  return (
    <div className="relative flex w-full flex-col justify-items-center gap-5">
      <Image
        src="/monkey-tilt-logo-white.png"
        alt="monkey tilt logo white"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '108px', height: 'auto', margin: '0 auto' }}
      />
      <hr className="w-full rounded-sm border-neutral-800" />
      <MenuItems />
    </div>
  );
};
