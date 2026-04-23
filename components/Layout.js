import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Layout({ children, title, description, hero }) {
  const router = useRouter();
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
        <title>{title || "Sửa Điện Nước Tại Nhà - Uy Tín, Chuyên Nghiệp 24/7"}</title>
        <meta name="description" content={description || "Dịch vụ sửa điện nước tại nhà TP.HCM. Chuyên sửa chập điện, mất điện, rò rỉ nước, sửa máy bơm nước. Gọi ngay thợ đến nhanh sau 15 phút."} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-square.png" />
        <link rel="canonical" href={`https://suadiennuoctainha.net${router.asPath === '/' ? '' : router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title || "Sửa Điện Nước Tại Nhà - Uy Tín, Chuyên Nghiệp 24/7"} />
        <meta property="og:description" content={description || "Dịch vụ sửa điện nước tại nhà TP.HCM. Chuyên sửa chập điện, mất điện, rò rỉ nước, sửa máy bơm nước. Gọi ngay thợ đến nhanh sau 15 phút."} />
        <meta property="og:image" content="https://suadiennuoctainha.net/logo.png" />
        <meta property="og:url" content={`https://suadiennuoctainha.net${router.asPath}`} />
        <meta property="og:site_name" content="Điện Nước Bảo Trung" />
      </Head>

      <header className="site-header">
        <div className="top-bar">
          <div className="container header-flex">
            <span>Chào mừng bạn đến với Dịch vụ Sửa Điện Nước Tại Nhà</span>
            <span className="header-hotline">Hotline: <a href={`tel:${hotlineFull}`}>{hotline}</a></span>
          </div>
        </div>

        <nav className="main-nav">
          <div className="container nav-flex">
            <div className="logo">
              <Link href="/">
                <img src="/logo.png" alt="Điện Nước Bảo Trung" className="logo-img" />
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
              <li><Link href="/" onClick={handleLinkClick}>TRANG CHỦ</Link></li>
              <li><Link href="/gioi-thieu" onClick={handleLinkClick}>GIỚI THIỆU</Link></li>
              <li className={`has-submenu ${openSubmenu === 1 ? 'active' : ''}`}>
                <div className="nav-link-wrapper">
                  <Link href="/sua-dien-nuoc" onClick={handleLinkClick}>SỬA ĐIỆN NƯỚC</Link>
                  <span className="caret-toggle" onClick={(e) => toggleSubmenu(e, 1)}>▾</span>
                </div>
                <ul className="submenu">
                  <li><Link href="/sua-ong-nuoc-tai-nha" onClick={handleLinkClick}>SỬA ỐNG NƯỚC TẠI NHÀ</Link></li>
                  <li><Link href="/sua-ro-ri-nuoc" onClick={handleLinkClick}>SỬA RÒ RỈ NƯỚC</Link></li>
                  <li><Link href="/do-tim-ro-ri-nuoc" onClick={handleLinkClick}>DÒ TÌM RÒ RỈ NƯỚC</Link></li>
                  <li><Link href="/sua-dien-nuoc-tai-nha" onClick={handleLinkClick}>SỬA ĐIỆN NƯỚC TẠI NHÀ</Link></li>
                </ul>
              </li>
              <li className={`has-submenu ${openSubmenu === 2 ? 'active' : ''}`}>
                <div className="nav-link-wrapper">
                  <Link href="/sua-dien-tai-nha" onClick={handleLinkClick}>SỬA ĐIỆN TẠI NHÀ</Link>
                  <span className="caret-toggle" onClick={(e) => toggleSubmenu(e, 2)}>▾</span>
                </div>
                <ul className="submenu">
                  <li><Link href="/sua-chap-dien" onClick={handleLinkClick}>SỬA CHẬP ĐIỆN</Link></li>
                  <li><Link href="/sua-cong-to-dien" onClick={handleLinkClick}>SỬA CÔNG TƠ ĐIỆN</Link></li>
                  <li><Link href="/lap-dong-ho-dien" onClick={handleLinkClick}>LẮP ĐỒNG HỒ ĐIỆN</Link></li>
                  <li><Link href="/sua-dien-24h" onClick={handleLinkClick}>SỬA ĐIỆN 24H</Link></li>
                </ul>
              </li>
              <li className={`has-submenu ${openSubmenu === 3 ? 'active' : ''}`}>
                <div className="nav-link-wrapper">
                  <Link href="/sua-may-bom-nuoc" onClick={handleLinkClick}>SỬA MÁY BƠM</Link>
                  <span className="caret-toggle" onClick={(e) => toggleSubmenu(e, 3)}>▾</span>
                </div>
                <ul className="submenu">
                  <li><Link href="/sua-may-bom-nuoc-tai-nha" onClick={handleLinkClick}>SỬA MÁY BƠM NƯỚC TẠI NHÀ</Link></li>
                  <li><Link href="/tho-sua-may-bom-nuoc" onClick={handleLinkClick}>THỢ SỬA MÁY BƠM NƯỚC</Link></li>
                  <li><Link href="/lap-dat-may-bom" onClick={handleLinkClick}>LẮP ĐẶT MÁY BƠM</Link></li>
                </ul>
              </li>
              <li><Link href="/tin-tuc" onClick={handleLinkClick}>TIN TỨC</Link></li>
              <li><Link href="/lien-he" onClick={handleLinkClick}>LIÊN HỆ</Link></li>
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
              <img src="/logo.png" alt="Điện Nước Bảo Trung" className="footer-logo" />
            </div>
            <p className="footer-about">
              Điện Nước Bảo Trung tự hào là đơn vị kỹ thuật hàng đầu tại TP.HCM.
              Chúng tôi cam kết mang đến giải pháp sửa chữa an toàn, chuyên nghiệp và
              tận tâm cho mọi gia đình Việt.
            </p>
          </div>

          <div className="footer-col services-col">
            <h3>Dịch Vụ Nổi Bật</h3>
            <ul className="footer-nav">
              <li><Link href="/sua-chap-dien">Xử Lý Chập Điện</Link></li>
              <li><Link href="/sua-ong-nuoc-tai-nha">Sửa Ống Nước Rò Rỉ</Link></li>
              <li><Link href="/sua-may-bom-nuoc-tai-nha">Sửa Máy Bơm Nước</Link></li>
              <li><Link href="/do-tim-ro-ri-nuoc">Dò Tìm Rò Rỉ Âm Tường</Link></li>
              <li><Link href="/lap-dong-ho-dien">Lắp Đặt Đồng Hồ Điện</Link></li>
              <li><Link href="/sua-dien-nuoc">Thợ Sửa Điện Nước 24H</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h3>Kết Nối Với Chúng Tôi</h3>
            <div className="contact-items">
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <strong>Trụ sở chính:</strong>
                  <p>76 Nguyễn Đình Chính, P.15, Q. Phú Nhuận</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <strong>Hotline 24/7:</strong>
                  <p><a href="tel:0353422680" className="highlight-text">0353.422.680</a> - <a href="tel:0393303524">039.330.3524</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <div>
                  <strong>Email hỗ trợ:</strong>
                  <p>diennuocbaotrung@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-locations-bar">
          <div className="container">
            <h3>Hệ Thống Chi Nhánh Toàn Thành Phố</h3>
            <div className="locations-grid-modern">
              <span><strong>Q.2:</strong> 157/3 Nguyễn Văn Hưởng</span>
              <span><strong>Q.3:</strong> 278/4 Cách mạng Tháng 8</span>
              <span><strong>Q.4:</strong> 366/6 Hoàng Diệu</span>
              <span><strong>Q.5:</strong> 888/8/3 Trần Hưng Đạo</span>
              <span><strong>Q.6:</strong> 520/6 Hồng Bàng</span>
              <span><strong>Q.7:</strong> 74 Nguyễn Cao</span>
              <span><strong>Q.8:</strong> 856/7 Tạ Quang Bửu</span>
              <span><strong>Q.9:</strong> 48 Võ Văn Kiệt</span>
              <span><strong>Q.10:</strong> 341/8 Sư Vạn Hạnh</span>
              <span><strong>Q.11:</strong> 205/11 Lý Thường Kiệt</span>
              <span><strong>Q.12:</strong> 171/3 Trường Chinh</span>
              <span><strong>Tân Phú:</strong> 285/13/1 Âu Cơ</span>
              <span><strong>Bình Tân:</strong> 187/1 An Dương Vương</span>
              <span><strong>Phú Nhuận:</strong> 113 Phan Đăng Lưu</span>
              <span><strong>Tân Bình:</strong> 367/1 Trường Chinh</span>
              <span><strong>Gò Vấp:</strong> 192/6 Quang Trung</span>
              <span><strong>Thủ Đức:</strong> 216/8 Võ Văn Ngân</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Điện Nước Bảo Trung. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="floating-contact">
        <a href="tel:0353422680" className="float-btn float-hotline" title="Gọi Hotline 1">
          <span className="phone-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </span>
          <span className="hotline-number">0353.422.680</span>
        </a>
        <a href="tel:0393303524" className="float-btn float-hotline" title="Gọi Hotline 2">
          <span className="phone-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </span>
          <span className="hotline-number">039.330.3524</span>
        </a>
      </div>

      <div className="floating-left">
        <a href="https://zalo.me/0353422680" target="_blank" rel="noreferrer" className="float-btn float-zalo blue-glow" title="Zalo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" />
        </a>
        <a href="sms:0353422680" className="float-btn float-sms green-glow" title="Gửi Tin Nhắn SMS">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
