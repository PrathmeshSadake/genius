"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const MobileSidebar = ({
  apiLimitCount,
  isPro = false,
}: MobileSidebarProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} size={"icon"} className='md:hidden'>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className='p-0'>
          <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
