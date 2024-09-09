import { useEffect, useState } from 'react';

type BrowserName = 'Firefox' | 'Opera' | 'IE' | 'Edge' | 'Chrome' | 'Safari' | 'Other' | undefined;
type OperatingSystem = 'Android' | 'iOS' | 'Windows' | 'MacOS' | 'Linux' | 'Other' | undefined;

const detectBrowser = (userAgent: string): BrowserName => {
  switch (true) {
    case userAgent.includes('Firefox'):
      return 'Firefox';
    case userAgent.includes('Opera') || userAgent.includes('OPR'):
      return 'Opera';
    case userAgent.includes('Trident'):
      return 'IE';
    case userAgent.includes('Edge'):
      return 'Edge';
    case userAgent.includes('Chrome'):
      return 'Chrome';
    case userAgent.includes('Safari'):
      return 'Safari';
    default:
      return 'Other';
  }
};

const detectOS = (userAgent: string): OperatingSystem => {
  switch (true) {
    case userAgent.includes('Android'):
      return 'Android';
    case userAgent.includes('iPhone'):
      return 'iOS';
    case userAgent.includes('Win'):
      return 'Windows';
    case userAgent.includes('Mac'):
      return 'MacOS';
    case userAgent.includes('Linux'):
      return 'Linux';
    default:
      return 'Other';
  }
};

const useUserAgent = () => {
  const [browserName, setBrowserName] = useState<BrowserName>(undefined);
  const [operatingSystem, setOperatingSystem] = useState<OperatingSystem>(undefined);

  useEffect(() => {
    const browser = navigator.userAgent;

    setBrowserName(detectBrowser(browser));
    setOperatingSystem(detectOS(browser));
  }, []);

  return [browserName, operatingSystem];
};

export default useUserAgent;
