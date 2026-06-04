
import Main from "../components/Main";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awaj ET',
  description: 'Awaj ET Digital Marketing and Advertising Agency',
}


export default function Home(){
  return (
      <Main />
  );
}
