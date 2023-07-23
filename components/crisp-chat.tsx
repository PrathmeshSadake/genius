"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("04b02328-551b-4a4d-afdd-78caf4c5090b");
  }, []);
  return null;
};
