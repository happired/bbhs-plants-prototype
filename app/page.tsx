import Link from 'next/link'
//grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 
// flex flex-col gap-[32px] row-start-2 items-center sm:items-start
export default function Home() {
  return (
    <div className="">
      <main className="text-[#2E282A]">
        
        <ul>
          <li>
            <Link href={"./goldenalexander"}>Golden Alexander</Link>
          </li>
          <li>
            <Link href={"./lilyofthevalley"}>Lily of the Valley</Link>
          </li>
        </ul>
        
      </main>
    </div>
  );
}
