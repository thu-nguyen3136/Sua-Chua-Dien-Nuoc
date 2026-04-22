import Layout from '../components/Layout'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  const banners = ["/banner1.png", "/banner2.png", "/banner3.png"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout
      hero={
        <section className="hero full-width-section">
          <div className="hero-slider">
            {banners.map((src, index) => (
              <div
                key={src}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={src} alt={`Banner ${index + 1}`} className="hero-img" />
              </div>
            ))}

            <div className="slider-nav">
              {banners.map((_, i) => (
                <button
                  key={i}
                  className={`nav-dot ${i === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
          </div>
        </section>
      }
    >

      {/* Giới Thiệu */}
      <section className="why-us">
        <div className="container">
          <div className="why-grid">
            <div className="why-image">
              <img src="/gioi-thieu.png" alt="Về chúng tôi" className="about-img" />
              <div className="exp-box">
                <span className="num">10+</span>
                <span className="txt">Năm Kinh Nghiệm</span>
              </div>
            </div>
            <div className="why-content">
              <span className="sub-title">VỀ ĐIỆN NƯỚC BẢO TRUNG</span>
              <h2>QUY TẮC AN TOÀN & CHUYÊN NGHIỆP</h2>
              <p>Điện Nước Bảo Trung tự hào là đơn vị top đầu trong lĩnh vực kỹ thuật dân dụng tại TP.HCM. Chúng tôi cam kết mang lại sự an tâm tuyệt đối cho khách hàng.</p>
              <ul className="check-list">
                <li><strong>Phục vụ siêu tốc:</strong> Có mặt sau 30 phút.</li>
                <li><strong>Giá rẻ & Minh bạch:</strong> Báo giá trước khi làm.</li>
                <li><strong>Bảo hành uy tín:</strong> Lên đến 12 tháng.</li>
                <li><strong>Thợ giỏi:</strong> Có chứng chỉ đào tạo chuyên sâu.</li>
              </ul>
              <div className="cta-row mobile-cta">
                <a href={`tel:${hotlineFull}`} className="btn btn-primary">TƯ VẤN NGAY</a>
                <div className="hotline-text">
                  <span>Hotline 24/7</span>
                  <strong>{hotline}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sửa Điện Nước Sub-Services Grid */}
      <section className="detail-grid-section">
        <div className="container">
          <div className="section-title">
            <h2>SỬA ĐIỆN NƯỚC TẠI NHÀ</h2>
            <div className="title-line"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-ong-nuoc.png" alt="Sửa ống nước" />
              </div>
              <div className="service-content">
                <h3>SỬA ỐNG NƯỚC TẠI NHÀ</h3>
                <p>Khắc phục rò rỉ, tắc nghẽn, hư hỏng hệ thống ống cấp thoát nước nhanh chóng.</p>
                <Link href="/sua-ong-nuoc-tai-nha" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-ong-nuoc-bi-vo.png" alt="Sửa rò rỉ nước" />
              </div>
              <div className="service-content">
                <h3>SỬA RÒ RỈ NƯỚC</h3>
                <p>Xử lý triệt để các sự cố rò rỉ nước, vỡ ống nước, thay thế phụ kiện chính hãng.</p>
                <Link href="/sua-ro-ri-nuoc" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/tho-do-tim-ro-ri-nuoc.png" alt="Dò tìm rò rỉ nước" />
              </div>
              <div className="service-content">
                <h3>DÒ TÌM RÒ RỈ NƯỚC</h3>
                <p>Sử dụng máy siêu âm hiện đại dò tìm chính xác vị trí rò rỉ nước âm tường, âm nền.</p>
                <Link href="/do-tim-ro-ri-nuoc" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-dien-tai-nha.png" alt="Sửa điện nước tại nhà" />
              </div>
              <div className="service-content">
                <h3>SỬA ĐIỆN NƯỚC TẠI NHÀ</h3>
                <p>Dịch vụ sửa chữa điện nước tổng hợp, xử lý mọi sự cố điện nước gia đình, văn phòng.</p>
                <Link href="/sua-dien-nuoc-tai-nha" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sửa Điện Tại Nhà Sub-Services Grid */}
      <section className="detail-grid-section gray-bg">
        <div className="container">
          <div className="section-title">
            <h2>SỬA ĐIỆN TẠI NHÀ</h2>
            <div className="title-line"></div>
          </div>
          <div className="services-grid services-grid-4">
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-chap-dien.png" alt="Sửa chập điện" />
              </div>
              <div className="service-content">
                <h3>SỬA CHẬP ĐIỆN</h3>
                <p>Xử lý chập điện, cháy nổ điện, nhảy aptomat không rõ nguyên nhân chuyên nghiệp.</p>
                <Link href="/sua-chap-dien" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-cong-to-dien.png" alt="Sửa công tơ điện" />
              </div>
              <div className="service-content">
                <h3>SỬA CÔNG TƠ ĐIỆN</h3>
                <p>Kiểm tra, sửa chữa công tơ điện chạy sai, lắp đặt đồng hồ điện riêng cho phòng trọ.</p>
                <Link href="/sua-cong-to-dien" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/lap-dong-ho-dien.png" alt="Lắp đồng hồ điện" />
              </div>
              <div className="service-content">
                <h3>LẮP ĐỒNG HỒ ĐIỆN</h3>
                <p>Chuyên lắp đặt đồng hồ điện 1 pha, 3 pha cho hộ gia đình và kinh doanh, sản xuất.</p>
                <Link href="/lap-dong-ho-dien" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-dien-tai-nha.png" alt="Sửa điện 24h" />
              </div>
              <div className="service-content">
                <h3>SỬA ĐIỆN 24H</h3>
                <p>Dịch vụ sửa điện khẩn cấp 24/7, có mặt ngay cả ban đêm để xử lý sự cố điện.</p>
                <Link href="/sua-dien-24h" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sửa Máy Bơm Sub-Services Grid */}
      <section className="detail-grid-section">
        <div className="container">
          <div className="section-title">
            <h2>SỬA MÁY BƠM NƯỚC</h2>
            <div className="title-line"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-may-bom-tai-nha.png" alt="Sửa máy bơm nước tại nhà" />
              </div>
              <div className="service-content">
                <h3>SỬA MÁY BƠM NƯỚC TẠI NHÀ</h3>
                <p>Dịch vụ sửa máy bơm nước chuyên nghiệp, có mặt nhanh, giá rẻ tại TP.HCM.</p>
                <Link href="/sua-may-bom-nuoc-tai-nha" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/tho-sua-may-bom-nuoc.png" alt="Thợ sửa máy bơm nước" />
              </div>
              <div className="service-content">
                <h3>THỢ SỬA MÁY BƠM NƯỚC</h3>
                <p>Thợ tay nghề cao sửa các lỗi máy bơm không lên nước, cháy motor, kêu to.</p>
                <Link href="/tho-sua-may-bom-nuoc" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-may-bom-tai-nha.png" alt="Lắp đặt máy bơm" />
              </div>
              <div className="service-content">
                <h3>LẮP ĐẶT MÁY BƠM</h3>
                <p>Tư vấn và lắp đặt máy bơm tăng áp, bơm đẩy cao cho nhà phố, chung cư.</p>
                <Link href="/lap-dat-may-bom" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News/Tips Section */}
      <section className="news-section">
        <div className="container">
          <div className="section-title">
            <h2>KINH NGHIỆM & TIN TỨC</h2>
            <div className="title-line"></div>
            <p>Kiến thức hữu ích giúp bạn bảo vệ hệ thống điện nước gia đình</p>
          </div>
          <div className="news-grid">
            <div className="news-card">
              <img src="/kinh-nghiem.png" alt="Kinh nghiệm" />
              <h4>Kinh nghiệm lắp đặt sửa chữa điện nước</h4>
              <Link href="/tin-tuc/kinh-nghiem-lap-dat-sua-chua-dien-nuoc" className="btn-readmore" style={{ padding: '0 20px 20px' }}>Xem Chi Tiết &raquo;</Link>
            </div>
            <div className="news-card">
              <img src="/cac-quy-tac.png" alt="Quy tắc an toàn" />
              <h4>Quy tắc và nguyên tắc an toàn điện</h4>
              <Link href="/tin-tuc/cac-quy-tac-va-nguyen-tac-an-toan-khi-sua-chua-dien-dan-dung-tai-nha" className="btn-readmore" style={{ padding: '0 20px 20px' }}>Xem Chi Tiết &raquo;</Link>
            </div>
            <div className="news-card">
              <img src="/nhung-luu-y.png" alt="Lưu ý" />
              <h4>Những lưu ý an toàn khi sửa điện</h4>
              <Link href="/tin-tuc/nhung-luu-y-an-toan-khi-sua-chua-dien-tai-nha-ma-ban-nen-biet" className="btn-readmore" style={{ padding: '0 20px 20px' }}>Xem Chi Tiết &raquo;</Link>
            </div>
            <div className="news-card">
              <img src="/nguyen-nhan.png" alt="Nguyên nhân" />
              <h4>Nguyên nhân và cách xử lý chập điện</h4>
              <Link href="/tin-tuc/nguyen-nhan-dan-den-ong-nuoc-hu-hong-va-cach-khac-phuc" className="btn-readmore" style={{ padding: '0 20px 20px' }}>Xem Chi Tiết &raquo;</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
