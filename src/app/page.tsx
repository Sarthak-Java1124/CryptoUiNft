"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

// Add Orbitron font import to the head
if (typeof window !== 'undefined') {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

export default function Home() {
  // Responsive description for mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // TV Flicker effect for text
  function useFlickerAnimation() {
    const controls = useAnimation();
    useEffect(() => {
      let timeout: NodeJS.Timeout;
      const flicker = async () => {
        while (true) {
          // Flicker ON (blurred, low opacity)
          await controls.start({
            filter: 'blur(2.5px)',
            opacity: 0.7,
            transition: { duration: 0.04 }
          });
          // Flicker OFF (normal)
          await controls.start({
            filter: 'blur(0px)',
            opacity: 1,
            transition: { duration: 0.09 }
          });
          // Random delay before next flicker
          await new Promise(res => {
            timeout = setTimeout(res, 80 + Math.random() * 120);
          });
        }
      };
      flicker();
      return () => clearTimeout(timeout);
    }, [controls]);
    return controls;
  }
  const bonkFlicker = useFlickerAnimation();
  const catsFlicker = useFlickerAnimation();

  return (
    <div
      style={{
        backgroundImage: 'url(/nft.jpg)',
        backgroundSize: '100% 120%',
        backgroundPosition: '50% 0%',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        animation: 'backgroundMove 15s linear infinite',
      }}
    >
      {/* Connect Wallet Button */}
      <motion.button
        className="connect-wallet-btn"
        whileHover={{ scale: 1.08, boxShadow: '0 0 16px #99e6ff' }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 30, delay: 1.2, duration: 1.2 }}
        style={{
          position: 'absolute',
          top: 24,
          right: 32,
          padding: '0.35rem 0.9rem',
          border: '2px solid #111',
          borderRadius: '0.8rem',
          background: '#99e6ff',
          color: '#111',
          fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
          fontWeight: 700,
          fontSize: '1rem',
          letterSpacing: '0.15em',
          cursor: 'pointer',
          zIndex: 100,
          boxShadow: 'none',
          textTransform: 'uppercase',
          maxWidth: '90vw',
        }}
      >
        CONNECT WALLET
      </motion.button>
      <div style={{ position: 'absolute', top: 16, left: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, width: 'min(95vw, 600px)' }}>
        <motion.img
          src="/3Cat.png"
          alt="Batman Eyes"
          style={{ width: '40vw', maxWidth: 240, height: 'auto', marginBottom: 60 }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.3, duration: 1.2 }}
        />
        <div className="heading-large text-center text-shadow uppercase font-bold" style={{marginTop: '-2.2rem'}}>
          <motion.span
            className="block text-[#FFD600] font-normal italic"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '4.2rem', marginBottom: '0.5rem' }}
            animate={bonkFlicker}
          >
            $BONK$
          </motion.span>
          <motion.span
            className="block text-white font-normal"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '4.2rem', marginTop: '-1.2rem' }}
            animate={catsFlicker}
          >
            Cats
          </motion.span>
        </div>
      </div>
      {/* Description at right extreme */}
      <motion.span
        className="right-description-mobile"
        style={{
          position: 'absolute',
          top: 120,
          right: 32,
          width: '380px',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1.2rem',
          lineHeight: 1.5,
          textAlign: 'right',
          background: 'none',
          padding: 0,
          borderRadius: 0,
          boxShadow: 'none',
          zIndex: 10,
          whiteSpace: 'pre-line',
          overflow: 'visible',
          textOverflow: 'unset',
          height: 'auto',
          display: 'block',
          color: '#FFD600',
          backgroundImage: 'none',
          WebkitBackgroundClip: 'initial',
          WebkitTextFillColor: 'initial',
          backgroundClip: 'initial',
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 24, delay: 1.1, duration: 1.2 }}
      >
        {isMobile
          ? `Bonk Cat is a unique NFT collection of 500 cats, each with its own style and story.\nJoin our community and own a piece of digital feline art!`
          : `Bonk Cat is a unique NFT collection featuring 500 different cats, each with its own style, personality, and story.\nEvery NFT is a digital collectible living securely on the Ethereum blockchain, ensuring authenticity and ownership.\nJoin our vibrant community to trade, showcase, and connect with fellow cat enthusiasts.\nParticipate in exclusive events, unlock special rewards, and be part of the next big thing in digital art.\nOwn a piece of digital feline art today and let your Bonk Cat journey begin!`}
      </motion.span>
      {/* Launching Soon Copy Card */}
      <div style={{
        position: 'fixed',
        left: '50%',
        bottom: '2.5rem',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        maxWidth: '100vw',
      }}>
      {/* Mobile X (Twitter) Button just above copy card */}
      <div className="mobile-x-btn-container">
        <button
          className="mobile-x-btn"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#111',
            border: '2px solid #FFD600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 12px #0006',
            cursor: 'pointer',
            margin: '0 auto 1rem auto',
          }}
          aria-label="X (Twitter)"
        >
          <svg width="18" height="18" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1199.61 0H944.726L599.805 494.09L255.274 0H0L462.726 630.545L0 1227H254.726L599.805 732.91L944.726 1227H1200L737.274 596.455L1199.61 0ZM299.726 111.818H399.726L599.805 393.818L799.726 111.818H899.726L599.805 555.818L299.726 111.818ZM899.726 1115.18H799.726L599.805 833.182L399.726 1115.18H299.726L599.805 671.182L899.726 1115.18Z" fill="#FFD600"/>
          </svg>
        </button>
      </div>
        <div style={{
          background: 'rgba(0,0,0,0.7)',
          borderRadius: '1rem',
          padding: '1.2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 2px 12px #0006',
          maxWidth: '95vw',
          flexWrap: 'wrap',
        }}
        className="launching-soon-card"
        >
          <span style={{
            color: '#FFD600',
            fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: '1.3rem',
            marginRight: '1.5rem',
            letterSpacing: '0.04em',
            wordBreak: 'break-word',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <svg width="24" height="24" viewBox="0 0 397.7 311.7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <linearGradient id="solanaGradient" gradientUnits="userSpaceOnUse" x1="360.8791" y1="351.5603" x2="141.213" y2="-88.4234" gradientTransform="matrix(1 0 0 -1 0 314)">
                <stop offset="0" stopColor="#00FFA3"/>
                <stop offset="1" stopColor="#DC1FFF"/>
              </linearGradient>
              <path fill="url(#solanaGradient)" d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
                c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"/>
              <path fill="url(#solanaGradient)" d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
                c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"/>
              <path fill="url(#solanaGradient)" d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4
                c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"/>
            </svg>
            Launching on Solana
          </span>
          <button
            className="launching-soon-btn"
            onClick={() => navigator.clipboard.writeText('Launching on Solana')}
            style={{
              background: '#99e6ff',
              color: '#111',
              border: '2px solid #4fc3f7',
              borderRadius: '0.6rem',
              fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.4rem 1.1rem',
              cursor: 'pointer',
              boxShadow: '0 1px 4px #0002',
              transition: 'background 0.2s',
              marginTop: '0.5rem',
            }}
          >
            Copy
          </button>
        </div>
      </div>
      <div style={{
        background: 'rgba(0, 0, 0, 0.6)',
        padding: '2rem 3rem',
        borderRadius: '1rem',
        textAlign: 'center',
        color: '#fff',
        maxWidth: '90vw',
        zIndex: 1,
      }}>
        {/* Main content goes here */}
      </div>
    </div>
  );
}
