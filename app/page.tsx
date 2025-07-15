import Link from "next/link";

export default function Home() {
  return (
    
      <main className="flex flex-col items-center p-24">
        <span className="text-2xl">Hi, I am</span>
        <h1 className="text-4xl">ALEXIS ROMERO MENDOZA</h1>

        <Link href={'/about'}>About Page</Link>
      </main>     
      
    
  );
}
