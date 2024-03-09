'use client'
import { useState } from 'react';
import style from "./page.module.css";
import SelectNum from "@/component/header/SelectNum";
import Content from "@/component/content/Content"

export default function Home() {
  const [title, setTitle] = useState<string>('台積電(2330)')
  return (
    <main className={style.main}>
      <SelectNum setTitle={setTitle} />
      <Content title={title} />
    </main>
  );
}
