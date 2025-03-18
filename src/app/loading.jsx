import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src="/spinner.svg"
        alt="Loading..."
        width={64}
        height={64}
        className="animate-spin"
      />
    </div>
  )
}