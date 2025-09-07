'use client'

import { Link, usePathname } from '@/lib/navigation'
import { useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ms', label: 'Malay' },
  { code: 'zh-CN', label: '中文' },
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <div className="flex gap-2">
      {languages.map(({ code, label }) => (
        <Button
          key={code}
          variant={locale === code ? 'default' : 'outline'}
          size="sm"
          asChild
        >
          <Link href={pathname} locale={code}>
            {label}
          </Link>
        </Button>
      ))}
    </div>
  )
}
