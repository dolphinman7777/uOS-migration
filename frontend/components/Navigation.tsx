import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatedShinyText } from './AnimatedShinyText';

export default function Navigation() {
  const router = useRouter();
  
  // Enable both links
  const registerEnabled = true;
  const claimEnabled = true;
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="https://www.uos.earth" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-transform hover:scale-105 relative"
            >
              <div 
                className="w-32 h-32 md:w-64 md:h-64 overflow-hidden rounded-full bg-black"
              >
                <img 
                  src="/new-logo.jpeg" 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </div>
          
          <div className="flex space-x-2">
            {/* Register link */}
            {registerEnabled ? (
              <Link 
                href="/" 
                className={`px-4 py-2 rounded-lg transition font-mono text-xs md:text-sm ${
                  router.pathname === '/' 
                    ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white' 
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                <AnimatedShinyText className={router.pathname === '/' ? 'text-white' : 'text-current'}>
                  Register
                </AnimatedShinyText>
              </Link>
            ) : (
              <div 
                className="px-4 py-2 rounded-lg font-mono text-xs md:text-sm text-gray-400 bg-gray-100 cursor-not-allowed"
                style={{ opacity: 0.6 }}
              >
                <span className="text-current">
                  Register
                </span>
              </div>
            )}
            
            {/* Claim link */}
            {claimEnabled ? (
              <Link 
                href="/claim" 
                className={`px-4 py-2 rounded-lg transition font-mono text-xs md:text-sm ${
                  router.pathname === '/claim' 
                    ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white' 
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                <AnimatedShinyText className={router.pathname === '/claim' ? 'text-white' : 'text-current'}>
                  Claim
                </AnimatedShinyText>
              </Link>
            ) : (
              <div 
                className="px-4 py-2 rounded-lg font-mono text-xs md:text-sm text-gray-400 bg-gray-100 cursor-not-allowed"
                style={{ opacity: 0.6 }}
              >
                <span className="text-current">
                  Claim
                </span>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* Spacer div to prevent content from being hidden under the nav */}
      <div className="h-40 md:h-72 w-full"></div>
    </>
  );
} 