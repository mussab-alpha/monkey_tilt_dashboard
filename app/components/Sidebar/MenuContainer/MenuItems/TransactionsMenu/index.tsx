import Image from 'next/image';

export const TransactionsMenu = () => {
  const transactionsMenuItems = [
    { iconPath: '/icons/transaction.svg', title: 'Transactions' },
    { iconPath: '/icons/GMWI.svg', title: 'GMWI' },
    { iconPath: '/icons/Banking.svg', title: 'Banking' },
    { iconPath: '/icons/Misc.svg', title: 'Misc' },
    { iconPath: '/icons/Tutorials.svg', title: 'Tutorials' },
    { iconPath: '/icons/PAM.svg', title: 'Pam' },
  ];
  return (
    <div className="flex flex-col gap-2">
      {transactionsMenuItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between px-3 py-[10px] text-neutral-400"
        >
          <div className="flex gap-3">
            <Image
              src={item.iconPath}
              alt={`${item.title} Icon`}
              width={20}
              height={20}
            />
            <label className="font-sans text-sm font-bold">{item.title}</label>
          </div>
          <Image
            src="/icons/expand-icon.svg"
            width={16}
            height={16}
            alt="expand icon"
          />
        </div>
      ))}
    </div>
  );
};
