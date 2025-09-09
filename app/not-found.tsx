"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">页面未找到</h1>
        <p className="text-gray-600 mb-4">正在重定向到首页...</p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
      </div>
    </div>
  )
}
