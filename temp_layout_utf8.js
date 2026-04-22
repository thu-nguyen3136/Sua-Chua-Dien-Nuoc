import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Layout({ children, title, description, hero }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track open submenu on mobile

  const toggleSubmenu = (e, index) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      setOpenSubmenu(openSubmenu === index ? null : index);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <div className="site-wrapper">
      <Head>
        <title>{title || "Sß╗¡a ─Éiß╗çn N╞░ß╗¢c Tß║íi Nh├á - Uy T├¡n, Chuy├¬n Nghiß╗çp 24/7"}</title>
        <meta name="description" content={description || "Dß╗ïch vß╗Ñ sß╗¡a ─æiß╗çn n╞░ß╗¢c tß║íi nh├á TP.HCM. Chuy├¬n sß╗¡a chß║¡p ─æiß╗çn, mß║Ñt ─æiß╗çn, r├▓ rß╗ë n╞░ß╗¢c, sß╗¡a m├íy b╞ím n╞░ß╗¢c. Gß╗ìi ngay thß╗ú ─æß║┐n nhanh sau 15 ph├║t."} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
      </Head>

      <header className="site-header">
        <div className="top-bar">
          <div className="container header-flex">
            <span>Ch├áo mß╗½ng bß║ín ─æß║┐n vß╗¢i Dß╗ïch vß╗Ñ Sß╗¡a ─Éiß╗çn N╞░ß╗¢c Tß║íi Nh├á</span>
            <span className="header-hotline">Hotline: <a href={`tel:${hotlineFull}`}>{hotline}</a></span>
          </div>
        </div>

        <nav className="main-nav">
          <div className="container nav-flex">
            <div className="logo">
              <Link href="/">
                <img src="/logo.png" alt="─Éiß╗çn N╞░ß╗¢c Bß║úo Trung" className="logo-img" />
              </Link>
            </div>

            <button
              className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <li><Link href="/" onClick={handleLinkClick}>TRANG CHß╗ª</Link></li>
              <li><Link href="/gioi-thieu" onClick={handleLinkClick}>GIß╗ÜI THIß╗åU</Link></li>
              <li className={`has-submenu ${openSubmenu === 1 ? 'active' : ''}`}>
                <Link href="/sua-dien-nuoc" onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleSubmenu(e, 1);
                  } else {
                    handleLinkClick();
                  }
                }}>Sß╗¼A ─ÉIß╗åN N╞»ß╗ÜC <span className="caret-toggle" onClick={(e) => toggleSubmenu(e, 1)}>Γû╛</span></Link>
                <ul className="submenu">
                  <li><Link href="/sua-ong-nuoc-tai-nha" onClick={handleLinkClick}>Sß╗¼A ß╗ÉNG N╞»ß╗ÜC Tß║áI NH├Ç</Link></li>
                  <li><Link href="/sua-ro-ri-nuoc" onClick={handleLinkClick}>Sß╗¼A R├Æ Rß╗ê N╞»ß╗ÜC</Link></li>
                  <li><Link href="/do-tim-ro-ri-nuoc" onClick={handleLinkClick}>D├Æ T├îM R├Æ Rß╗ê N╞»ß╗ÜC</Link></li>
                  <li><Link href="/sua-dien-nuoc" onClick={handleLinkClick}>Tß║ñT Cß║ó Dß╗èCH Vß╗ñ N╞»ß╗ÜC</Link></li>
                </ul>
              </li>
              <li className={`has-submenu ${openSubmenu === 2 ? 'active' : ''}`}>
                <Link href="/sua-dien-tai-nha" onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleSubmenu(e, 2);
                  } else {
                    handleLinkClick();
                  }
                }}>Sß╗¼A ─ÉIß╗åN Tß║áI NH├Ç <span className="caret-toggle" onClick={(e) => toggleSubmenu(e, 2)}>Γû╛</span></Link>
                <ul className="submenu">
                  <li><Link href="/sua-chap-dien" onClick={handleLinkClick}>Sß╗¼A CHß║¼P ─ÉIß╗åN</Link></li>
                  <li><Link href="/sua-cong-to-dien" onClick={handleLinkClick}>Sß╗¼A C├öNG T╞á ─ÉIß╗åN</Link></li>
                  <li><Link href="/lap-dong-ho-dien" onClick={handleLinkClick}>Lß║«P ─Éß╗ÆNG Hß╗Æ ─ÉIß╗åN</Link></li>
                  <li><Link href="/sua-dien-24h" onClick={handleLinkClick}>Sß╗¼A ─ÉIß╗åN 24H</Link></li>
                </ul>
              </li>
              <li className={`has-submenu ${openSubmenu === 3 ? 'active' : ''}`}>
                <Link href="/sua-may-bom-nuoc" onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleSubmenu(e, 3);
                  } else {
                    handleLinkClick();
                  }
                }}>Sß╗¼A M├üY B╞áM <span className="caret-toggle" onClick={(e) => toggleSubmenu(e, 3)}>Γû╛</span></Link>
                <ul className="submenu">
                  <li><Link href="/sua-may-bom-nuoc-tai-nha" onClick={handleLinkClick}>Sß╗¼A M├üY B╞áM N╞»ß╗ÜC Tß║áI NH├Ç</Link></li>
                  <li><Link href="/tho-sua-may-bom-nuoc" onClick={handleLinkClick}>THß╗ó Sß╗¼A M├üY B╞áM N╞»ß╗ÜC</Link></li>
                  <li><Link href="/lap-dat-may-bom" onClick={handleLinkClick}>Lß║«P ─Éß║╢T M├üY B╞áM</Link></li>
                </ul>
              </li>
              <li><Link href="/tin-tuc" onClick={handleLinkClick}>TIN Tß╗¿C</Link></li>
              <li><Link href="/lien-he" onClick={handleLinkClick}>LI├èN Hß╗å</Link></li>
            </ul>
          </div>
        </nav>
      </header>


      {hero}

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-col brand-col">
            <div className="footer-logo-wrapper">
              <img src="/logo.png" alt="─Éiß╗çn N╞░ß╗¢c Bß║úo Trung" className="footer-logo" />
            </div>
            <p className="footer-about">
              ─Éiß╗çn N╞░ß╗¢c Bß║úo Trung tß╗▒ h├áo l├á ─æ╞ín vß╗ï kß╗╣ thuß║¡t h├áng ─æß║ºu tß║íi TP.HCM.
              Ch├║ng t├┤i cam kß║┐t mang ─æß║┐n giß║úi ph├íp sß╗¡a chß╗»a an to├án, chuy├¬n nghiß╗çp v├á
              tß║¡n t├óm cho mß╗ìi gia ─æ├¼nh Viß╗çt.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">ZL</a>
              <a href="#" className="social-link">YT</a>
            </div>
          </div>

          <div className="footer-col services-col">
            <h3>Dß╗ïch Vß╗Ñ Nß╗òi Bß║¡t</h3>
            <ul className="footer-nav">
              <li><Link href="/sua-chap-dien">Xß╗¡ L├╜ Chß║¡p ─Éiß╗çn</Link></li>
              <li><Link href="/sua-ong-nuoc-tai-nha">Sß╗¡a ß╗Éng N╞░ß╗¢c R├▓ Rß╗ë</Link></li>
              <li><Link href="/sua-may-bom-nuoc-tai-nha">Sß╗¡a M├íy B╞ím N╞░ß╗¢c</Link></li>
              <li><Link href="/do-tim-ro-ri-nuoc">D├▓ T├¼m R├▓ Rß╗ë ├ém T╞░ß╗¥ng</Link></li>
              <li><Link href="/lap-dong-ho-dien">Lß║»p ─Éß║╖t ─Éß╗ông Hß╗ô ─Éiß╗çn</Link></li>
              <li><Link href="/sua-dien-nuoc">Thß╗ú Sß╗¡a ─Éiß╗çn N╞░ß╗¢c 24H</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h3>Kß║┐t Nß╗æi Vß╗¢i Ch├║ng T├┤i</h3>
            <div className="contact-items">
              <div className="contact-item">
                <span className="icon">≡ƒôì</span>
                <div>
                  <strong>Trß╗Ñ sß╗ƒ ch├¡nh:</strong>
                  <p>76 Nguyß╗àn ─É├¼nh Ch├¡nh, P.15, Q. Ph├║ Nhuß║¡n</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">≡ƒô₧</span>
                <div>
                  <strong>Hotline 24/7:</strong>
                  <p><a href="tel:0353422680" className="highlight-text">0353.422.680</a> - <a href="tel:0393303524">039.330.3524</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">Γ£ë∩╕Å</span>
                <div>
                  <strong>Email hß╗ù trß╗ú:</strong>
                  <p>diennuocbaotrung@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-locations-bar">
          <div className="container">
            <h3>Hß╗ç Thß╗æng Chi Nh├ính To├án Th├ánh Phß╗æ</h3>
            <div className="locations-grid-modern">
              <span><strong>Q.2:</strong> 157/3 Nguyß╗àn V─ân H╞░ß╗ƒng</span>
              <span><strong>Q.3:</strong> 278/4 C├ích mß║íng Th├íng 8</span>
              <span><strong>Q.4:</strong> 366/6 Ho├áng Diß╗çu</span>
              <span><strong>Q.5:</strong> 888/8/3 Trß║ºn H╞░ng ─Éß║ío</span>
              <span><strong>Q.6:</strong> 520/6 Hß╗ông B├áng</span>
              <span><strong>Q.7:</strong> 74 Nguyß╗àn Cao</span>
              <span><strong>Q.8:</strong> 856/7 Tß║í Quang Bß╗¡u</span>
              <span><strong>Q.9:</strong> 48 V├╡ V─ân Kiß╗çt</span>
              <span><strong>Q.10:</strong> 341/8 S╞░ Vß║ín Hß║ính</span>
              <span><strong>Q.11:</strong> 205/11 L├╜ Th╞░ß╗¥ng Kiß╗çt</span>
              <span><strong>Q.12:</strong> 171/3 Tr╞░ß╗¥ng Chinh</span>
              <span><strong>T├ón Ph├║:</strong> 285/13/1 ├éu C╞í</span>
              <span><strong>B├¼nh T├ón:</strong> 187/1 An D╞░╞íng V╞░╞íng</span>
              <span><strong>Ph├║ Nhuß║¡n:</strong> 113 Phan ─É─âng L╞░u</span>
              <span><strong>T├ón B├¼nh:</strong> 367/1 Tr╞░ß╗¥ng Chinh</span>
              <span><strong>G├▓ Vß║Ñp:</strong> 192/6 Quang Trung</span>
              <span><strong>Thß╗º ─Éß╗⌐c:</strong> 216/8 V├╡ V─ân Ng├ón</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} ─Éiß╗çn N╞░ß╗¢c Bß║úo Trung. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="floating-contact">
        <a href="tel:0353422680" className="float-btn float-hotline" title="Gß╗ìi Hotline 1">
          <span className="phone-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </span>
          <span className="hotline-number">0353.422.680</span>
        </a>
        <a href="tel:0393303524" className="float-btn float-hotline" title="Gß╗ìi Hotline 2">
          <span className="phone-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </span>
          <span className="hotline-number">039.330.3524</span>
        </a>
        <a href="https://zalo.me/0353422680" target="_blank" rel="noreferrer" className="float-btn float-zalo blue-glow" title="Zalo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" />
        </a>
      </div>
    </div>
  )
}
