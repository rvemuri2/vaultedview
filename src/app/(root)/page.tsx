import React from "react";
import HeaderBox from "/src/components/ui/HeaderBox";
import TotalBalanceBox from "/src/components/ui/TotalBalanceBox";
import RightSidebar from "/src/components/ui/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Rohit",
    lastName: "Vemuri",
    email: "rohitvemuri@yahoo.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
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
