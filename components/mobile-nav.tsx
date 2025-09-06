"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Heart } from "lucide-react"
import Link from "next/link"

interface MobileNavProps {
  isOpen?: boolean
  onClose?: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [open, setOpen] = useState(isOpen || false)

  const handleClose = () => {
    setOpen(false)
    onClose?.()
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">打开菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 pb-6 border-b border-border">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-lg font-heading font-bold text-foreground">You & Me Gifts</span>
          </div>

          <nav className="flex flex-col gap-4 py-6 flex-1">
            <Link
              href="/"
              className="text-lg text-foreground hover:text-primary transition-colors py-2"
              onClick={handleClose}
            >
              首页
            </Link>
            <Link
              href="/products"
              className="text-lg text-foreground hover:text-primary transition-colors py-2"
              onClick={handleClose}
            >
              产品展示
            </Link>
            <Link
              href="#contact"
              className="text-lg text-foreground hover:text-primary transition-colors py-2"
              onClick={handleClose}
            >
              联系我们
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
