import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default LandingPage;
