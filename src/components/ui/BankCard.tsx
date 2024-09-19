import React from "react";
import Link from "next/link";
import Image from "next/image";
import pay from "/public/icons/Paypass.svg";
import mastercard from "/public/icons/mastercard.svg";
import lines from "/public/icons/lines.png";
import { formatAmount } from "/lib/utils.ts";
import Copy from "./Copy";
const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link
        href={`/transaction-history/?id=${account.appwriteItemId}`}
        className="bank-card"
      >
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">{account.name}</h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">
                {account.name}
              </h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">1234</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image src={pay} width={20} height={24} alt="pay" />
          <Image
            src={mastercard}
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>
        <Image
          src={lines}
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </Link>

      {showBalance && <Copy title={account?.sharaebleId} />}
    </div>
  );
};

export default BankCard;
