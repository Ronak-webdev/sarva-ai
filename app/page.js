"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function Home() {
  const {setTheme} = useTheme();
  return (
  <div>
    <h2>Ronak</h2>
  <Button onClick={()=>setTheme('dark')}>Dark</Button>
  <Button onClick={()=>setTheme('light')}>Light</Button>
  <Button>Light Mode</Button>
  </div>
  
  );
}
