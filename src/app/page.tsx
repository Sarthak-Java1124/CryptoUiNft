"use client"
import { motion } from "framer-motion";
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

  return (
    <div
      style={{
        backgroundImage: 'url(/nft.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Connect Wallet Button */}
      <motion.button
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
      <div style={{ position: 'absolute', top: 32, left: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, width: 'min(95vw, 600px)' }}>
        <motion.img
          src="/batmaneyes.png"
          alt="Batman Eyes"
          style={{ width: '60vw', maxWidth: 360, height: 'auto', marginBottom: 60 }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.3, duration: 1.2 }}
        />
        <motion.span
          className="heading-large text-orange text-shadow"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: undefined,
            letterSpacing: undefined,
            lineHeight: undefined,
            textShadow: undefined,
            textTransform: 'uppercase',
            textAlign: 'center',
            display: 'inline-block',
          }}
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 24, delay: 0.7, duration: 1.2 }}
        >
          <motion.span
            style={{
              color: '#FFD600',
              display: 'block',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              textShadow: '0 0 8px #ff9900, 0 0 16px #ffe066',
              filter: 'drop-shadow(0 0 6px #ff9900) drop-shadow(0 0 12px #ffe066)',
              animation: 'flameGlowLight 1.6s infinite alternate',
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, -10, 0, 10, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          >
            Lazy
          </motion.span>
          <span style={{ color: '#fff', display: 'block', fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
            Crypto Cats
          </span>
        </motion.span>
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
          ? `Lazy Cat is a unique NFT collection of 500 cats, each with its own style and story.\nJoin our community and own a piece of digital feline art!`
          : `Lazy Cat is a unique NFT collection featuring 500 different cats, each with its own style, personality, and story.\nEvery NFT is a digital collectible living securely on the Ethereum blockchain, ensuring authenticity and ownership.\nJoin our vibrant community to trade, showcase, and connect with fellow cat enthusiasts.\nParticipate in exclusive events, unlock special rewards, and be part of the next big thing in digital art.\nOwn a piece of digital feline art today and let your Lazy Cat journey begin!`}
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
        <div style={{
          background: 'rgba(0,0,0,0.7)',
          borderRadius: '1rem',
          padding: '1.2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 2px 12px #0006',
          maxWidth: '95vw',
          flexWrap: 'wrap',
        }}>
          <span style={{
            color: '#FFD600',
            fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: '1.3rem',
            marginRight: '1.5rem',
            letterSpacing: '0.04em',
            wordBreak: 'break-word',
          }}>
            Launching soon....
          </span>
          <button
            onClick={() => navigator.clipboard.writeText('Launching soon....')}
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
      {/* Floating X (Twitter) Button with label */}
      <div
        className="floating-x-container"
        style={{
          position: 'fixed',
          bottom: '2.2rem',
          right: '2.2rem',
          display: 'flex',
          alignItems: 'center',
          zIndex: 200,
        }}>
        <button
          className="floating-x-btn"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#111',
            border: '2px solid #FFD600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 12px #0006',
            cursor: 'pointer',
            transition: 'background 0.2s, box-shadow 0.2s',
            marginLeft: '0.5rem',
          }}
          onMouseOver={e => { e.currentTarget.style.background = '#222'; }}
          onMouseOut={e => { e.currentTarget.style.background = '#111'; }}
          aria-label="X (Twitter)"
        >
          <svg width="28" height="28" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1199.61 0H944.726L599.805 494.09L255.274 0H0L462.726 630.545L0 1227H254.726L599.805 732.91L944.726 1227H1200L737.274 596.455L1199.61 0ZM299.726 111.818H399.726L599.805 393.818L799.726 111.818H899.726L599.805 555.818L299.726 111.818ZM899.726 1115.18H799.726L599.805 833.182L399.726 1115.18H299.726L599.805 671.182L899.726 1115.18Z" fill="#FFD600"/>
          </svg>
        </button>
        <span
          style={{
            color: '#FFD600',
            fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
            fontWeight: 700,
            fontSize: '1.1rem',
            marginRight: '0.7rem',
            marginLeft: '0.7rem',
            background: 'rgba(0,0,0,0.7)',
            borderRadius: '0.6rem',
            padding: '0.5rem 1.1rem',
            boxShadow: '0 1px 4px #0002',
            whiteSpace: 'nowrap',
            display: 'inline-block',
          }}
          className="twitter-follow-label"
        >
          Follow us on Twitter
        </span>
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
