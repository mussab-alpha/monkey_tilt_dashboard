'use client';

import { useState } from 'react';
import Image from 'next/image';

interface DropdownMenuProps {
  iconPath: string;
  menuName: string;
  links: { name: string; href: string }[];
}

const DropdownMenu = ({ iconPath, menuName, links }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        className="flex w-full items-center justify-between rounded-lg px-3 py-[10px] hover:bg-neutral-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-3">
          <Image
            src={iconPath}
            alt={`${menuName} Icon`}
            width={20}
            height={20}
          />
          <label
            className={`font-sans text-base font-medium ${isOpen ? 'text-neutral-100' : 'text-neutral-400'}`}
          >
            {menuName}
          </label>
        </div>
        <Image
          src="/icons/expand-icon.svg"
          width={16}
          height={16}
          alt="expand icon"
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="flex w-full flex-col gap-[6px] rounded-md pb-1 pl-5 text-neutral-400">
          {links.map((link, index) => (
            <li
              className="rounded-md px-3 py-2 hover:bg-neutral-800 hover:text-neutral-100"
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
