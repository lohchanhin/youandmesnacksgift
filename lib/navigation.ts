import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const { Link, usePathname } = createSharedPathnamesNavigation({
  locales: ['ms', 'en', 'zh-CN'],
})

