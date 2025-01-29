import {
  IconArrowsLeftRight,
  IconBuildingBank,
  IconList,
  IconStack2,
  IconVideo,
  IconChevronUp,
} from '@tabler/icons-react';

export const TransactionsMenu = () => {
  const transactionsMenuItems = [
    { icon: <IconArrowsLeftRight size={20} />, title: 'Transactions' },
    { icon: <IconArrowsLeftRight size={20} />, title: 'GMWI' },
    { icon: <IconBuildingBank size={20} />, title: 'Banking' },
    { icon: <IconList size={20} />, title: 'Misc' },
    { icon: <IconVideo size={20} />, title: 'Tutorials' },
    { icon: <IconStack2 size={20} />, title: 'Pam' },
  ];
  return (
    <div className="flex flex-col gap-2">
      {transactionsMenuItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between rounded-lg px-3 py-[10px] text-neutral-400 hover:cursor-pointer hover:bg-neutral-800"
        >
          <div className="flex gap-3">
            {item.icon}
            <label className="font-sans text-sm font-bold">{item.title}</label>
          </div>
          <IconChevronUp size={16} />
        </div>
      ))}
    </div>
  );
};
