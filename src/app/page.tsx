import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh grow gap-y-8 items-center justify-center">
      <div className="">
        <div>
          <Image src="/next-typography.svg" alt="Nextjs Logo" width={100} height={24} priority />
        </div>
      </div>
      <div className="">
        <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>
      <p>Hello Next.js!</p>
    </div>
  )
}
