import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Layout({ children, title, description, hero }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <link rel="apple-touch-icon" href="/favicon-32x32.png?v=1" />
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
              <li><Link href="/" onClick={() => setIsMenuOpen(false)}>TRANG CHỦ</Link></li>
              <li><Link href="/gioi-thieu" onClick={() => setIsMenuOpen(false)}>GIỚI THIỆU</Link></li>
              <li className="has-submenu">
                <Link href="/sua-dien-tai-nha">SỬA ĐIỆN <span className="caret">▾</span></Link>
                <ul className="submenu">
                  <li><Link href="/sua-chap-dien" onClick={() => setIsMenuOpen(false)}>SỬA CHẬP ĐIỆN</Link></li>
                  <li><Link href="/sua-cong-to-dien" onClick={() => setIsMenuOpen(false)}>SỬA CÔNG TƠ ĐIỆN</Link></li>
                  <li><Link href="/lap-dong-ho-dien" onClick={() => setIsMenuOpen(false)}>LẮP ĐỒNG HỒ ĐIỆN</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link href="/sua-nuoc-tai-nha">SỬA NƯỚC <span className="caret">▾</span></Link>
                <ul className="submenu">
                  <li><Link href="/sua-ong-nuoc-tai-nha" onClick={() => setIsMenuOpen(false)}>SỬA ỐNG NƯỚC TẠI NHÀ</Link></li>
                  <li><Link href="/sua-ong-nuoc-bi-vo" onClick={() => setIsMenuOpen(false)}>SỬA ỐNG NƯỚC BỊ VỠ</Link></li>
                  <li><Link href="/tho-do-tim-ro-ri-nuoc" onClick={() => setIsMenuOpen(false)}>THỢ DÒ TÌM RÒ RỈ NƯỚC</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link href="/sua-may-bom-nuoc">SỬA MÁY BƠM <span className="caret">▾</span></Link>
                <ul className="submenu">
                  <li><Link href="/sua-may-bom-nuoc-tai-nha" onClick={() => setIsMenuOpen(false)}>SỬA MÁY BƠM NƯỚC TẠI NHÀ</Link></li>
                  <li><Link href="/tho-sua-may-bom-nuoc" onClick={() => setIsMenuOpen(false)}>THỢ SỬA MÁY BƠM NƯỚC</Link></li>
                  <li><Link href="/lap-dat-may-bom" onClick={() => setIsMenuOpen(false)}>LẮP ĐẶT MÁY BƠM</Link></li>
                </ul>
              </li>
              <li><Link href="/sua-dien-nuoc-tai-nha" onClick={() => setIsMenuOpen(false)}>ĐIỆN NƯỚC TẠI NHÀ</Link></li>
              <li><Link href="/tin-tuc" onClick={() => setIsMenuOpen(false)}>TIN TỨC</Link></li>
              <li><Link href="/lien-he" onClick={() => setIsMenuOpen(false)}>LIÊN HỆ</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {hero}

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-info">
            <div className="footer-logo-wrapper">
              <img src="/logo.png" alt="Logo" className="footer-logo" />
            </div>
            <p>Điện Nước Bảo Trung - Chuyên cung cấp dịch vụ sửa chữa điện nước, máy bơm nước uy tín, chuyên nghiệp tại TP. Hồ Chí Minh. Phục vụ 24/7, có mặt sau 15-30 phút.</p>
            <div className="footer-contact">
              <p>📍 CS Chính: 76 Nguyễn Đình Chính, P.15, Q. Phú Nhuận, TP.HCM</p>
              <p>📞 Hotline 1: {hotline}</p>
              <p>📞 Hotline 2: 039.330.3524</p>
              <p>✉️ Email: diennuocbaotrung@gmail.com</p>
            </div>
          </div>

          <div className="footer-links">
            <h3>Dịch Vụ Chính</h3>
            <ul>
              <li><Link href="/sua-dien-tai-nha">Sửa chập điện âm tường</Link></li>
              <li><Link href="/sua-dien-tai-nha">Lắp đồng hồ điện 1 pha/3 pha</Link></li>
              <li><Link href="/sua-nuoc-tai-nha">Dò tìm rò rỉ nước âm tường</Link></li>
              <li><Link href="/sua-nuoc-tai-nha">Sửa ống nước bục vỡ</Link></li>
              <li><Link href="/sua-may-bom-nuoc">Sửa máy bơm nước các loại</Link></li>
            </ul>
          </div>

          <div className="footer-locations">
            <h3>Khu Vực Phục Vụ</h3>
            <p>Chúng tôi có đội ngũ thợ trực tại tất cả các quận huyện: Quận 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, Bình Tân, Bình Thạnh, Gò Vấp, Phú Nhuận, Tân Bình, Tân Phú, Thủ Đức, Hóc Môn, Nhà Bè, Bình Chánh...</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Điện Nước Bảo Trung. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="floating-contact">
        <a href="tel:0353422680" className="float-btn float-hotline red-glow" title="Gọi Hotline 1">
          <span className="phone-icon">📞</span>
          <span className="hotline-number">0353.422.680</span>
        </a>
        <a href="tel:0393303524" className="float-btn float-hotline red-glow" title="Gọi Hotline 2">
          <span className="phone-icon">📞</span>
          <span className="hotline-number">039.330.3524</span>
        </a>
        <a href="https://zalo.me/0353422680" target="_blank" rel="noreferrer" className="float-btn float-zalo blue-glow" title="Zalo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" />
        </a>
      </div>
    </div>
  )
}
