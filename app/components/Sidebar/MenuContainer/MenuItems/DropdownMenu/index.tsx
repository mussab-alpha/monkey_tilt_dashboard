'use client';

import { JSX, useState } from 'react';
import { IconChevronUp } from '@tabler/icons-react';

interface DropdownMenuProps {
  icon: JSX.Element;
  menuName: string;
  links: { name: string; href: string }[];
}

const DropdownMenu = ({ icon, menuName, links }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        className={`flex w-full items-center justify-between rounded-lg px-3 py-[10px] hover:bg-neutral-800 ${isOpen ? 'text-neutral-100' : 'text-neutral-400'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-3">
          {icon}
          <label className="$ font-sans text-base font-medium">
            {menuName}
          </label>
        </div>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <IconChevronUp size={16} />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="flex w-full flex-col gap-[6px] rounded-md pb-1 pl-5 text-neutral-400">
          {links.map((link, index) => (
            <li
              className="rounded-md px-3 py-2 hover:cursor-pointer hover:bg-neutral-800 hover:text-neutral-100"
              key={index}
            >
              <a href={link.href} className="font-sans text-sm font-medium">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
