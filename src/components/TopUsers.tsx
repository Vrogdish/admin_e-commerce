import React from "react";
import Card from "./Card";
import { Url } from "next/dist/shared/lib/router/router";

export default function TopUsers() {
  

  return (
    <Card title="Derniers utilisateurs inscrits" link={"/users"}>
      <p>firstname</p>
      <p>lastname</p>
      <p>date</p>
    </Card>
  );
}
