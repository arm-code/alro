import { Navbar } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar/>
      <div>
      <h1>Hello from General Layout About</h1>
      { children }
    </div>
    </>
  );
}