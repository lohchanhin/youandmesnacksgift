import createMiddleware from 'next-intl/middleware';
import intlConfig from './next-intl.config';

export default createMiddleware(intlConfig);
export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'], // 覆蓋所有非靜態檔案路徑
};
