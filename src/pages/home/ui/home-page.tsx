"use client"
import React from "react"
import { useResize } from "@/src/shared/hooks/useResize"
import HomeDesktopPage from "@/src/pages/home/ui/home-desktop"
import HomeMobilePage from "@/src/pages/home/ui/home-mobile"

export function HomePage() {
  const { isScreenLg } = useResize()

  // Use client-side rendering with useEffect to avoid hydration mismatch
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  // Show nothing during SSR to prevent hydration mismatch
  if (!isMounted) {
    return null
  }

  // Use isScreenLg from useResize hook to determine which version to render
  return isScreenLg ? <HomeDesktopPage /> : <HomeMobilePage />
}

