'use client'

import { Link, usePathname } from '@/lib/navigation'
import { useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'

const languages = [
  { code: 'ms', label: 'ms' },
  { code: 'en', label: 'en' },
  { code: 'zh-CN', label: 'zh-CN' },
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
