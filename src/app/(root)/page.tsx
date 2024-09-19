import React from "react";
import HeaderBox from "/src/components/ui/HeaderBox";
import TotalBalanceBox from "/src/components/ui/TotalBalanceBox";
import RightSidebar from "/src/components/ui/RightSidebar";
import { getLoggedInUser } from "/lib/actions/user.actions.ts";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and Manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1000.5}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 500.5 }, { currentBalance: 242.23 }]}
      />
    </section>
  );
};

export default Home;
