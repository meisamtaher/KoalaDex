'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  router.push("/coming-soon");
  return (
    <div className="bg-gray-50 text-gray-900">
    </div>
  )
}
