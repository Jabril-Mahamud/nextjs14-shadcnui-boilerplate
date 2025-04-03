import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  const localeToUse = locale || 'en'; // Default to 'en' if locale is undefined
  
  return {
    messages: (await import(`./messages/${localeToUse}.json`)).default,
    locale: localeToUse
  };
});