"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

const languages = [
  { code: "zh-CN", name: "中文", flag: "🇨🇳" },
  { code: "en", name: "EN", flag: "🇺🇸" },
  { code: "ms", name: "MY", flag: "🇲🇾" },
] as const

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  console.log("[v0] LanguageSwitcher rendering with language:", language)

  const handleLanguageChange = (langCode: string) => {
    console.log("[v0] Language switcher clicked:", langCode)
    setLanguage(langCode as any)
  }

  return (
    <div className="flex items-center gap-1 border rounded-md p-1">
      <Globe className="h-4 w-4 text-gray-500 mx-1" />
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "ghost"}
          size="sm"
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-2 py-1 text-xs ${
            language === lang.code ? "bg-red-600 text-white hover:bg-red-700" : "hover:bg-gray-100"
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.name}</span>
        </Button>
      ))}
    </div>
  )
}
