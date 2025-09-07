"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "zh-CN", name: "简体中文", flag: "🇨🇳" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ms", name: "Bahasa Malaysia", flag: "🇲🇾" },
] as const

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  console.log("[v0] LanguageSwitcher rendering with language:", language)

  const currentLanguage = languages.find((lang) => lang.code === language)

  const handleLanguageChange = (langCode: string) => {
    console.log("[v0] Language switcher clicked:", langCode)
    setLanguage(langCode as any)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={language === lang.code ? "bg-gray-100" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
