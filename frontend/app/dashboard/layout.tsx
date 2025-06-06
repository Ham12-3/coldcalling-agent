"use client";
import Header from "@/components/Header";
import { NavigationProvider } from "@/lib/NavigationProvider";
import { Authenticated } from "convex/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationProvider>
      <div className="flex h-screen">
        <Authenticated>
          <h1>Sidebar</h1>
          {/* <Sidebar/>  */}
        </Authenticated>
        <div className="flex-1">
          <Header />

          <main>{children}</main>
        </div>
      </div>
    </NavigationProvider>
  );
}
