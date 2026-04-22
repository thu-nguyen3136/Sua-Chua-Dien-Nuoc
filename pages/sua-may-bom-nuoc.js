import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaMayBomNuocCategory() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Sửa Máy Bơm Nước TP.HCM - Thợ Sửa Tại Nhà Uy Tín, Giá Rẻ"
      description="Dịch vụ sửa máy bơm nước tại nhà TP.HCM chuyên nghiệp. Chuyên sửa máy bơm không lên nước, kêu to, hỏng motor, lắp đặt máy bơm tăng áp trọn gói."
    >
      <section className="page-header" style={{ background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/sua-may-bom-tai-nha.png")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="category-title">SỬA MÁY BƠM NƯỚC</h1>
          <p className="category-subtitle">Đội ngũ thợ cơ điện lành nghề, sửa nhanh mọi sự cố máy bơm gia đình và công nghiệp. Bảo hành dài hạn.</p>
        </div>
      </section>

      <section className="category-intro" style={{ padding: '60px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: '25px' }}>Giải Pháp Cho Nguồn Nước Luôn Mạnh</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '15px', lineHeight: '1.8' }}>Máy bơm nước là thiết bị thiết yếu đảm bảo sinh hoạt hằng ngày. Tuy nhiên, sau thời gian dài sử dụng, máy bơm thường gặp các lỗi như cháy tụ, hỏng vòng bi, hoặc máy chạy nhưng nước không lên.</p>
              <p style={{ color: 'var(--text-light)', marginBottom: '25px', lineHeight: '1.8' }}>Điện Nước Bảo Trung chuyên cung cấp thợ sửa máy bơm nước tại nhà với đầy đủ linh kiện chính hãng của các dòng máy Panasonic, Pentax, Ebara... cam kết khắc phục nhanh chóng để bạn có nước sử dụng ngay trong ngày.</p>
              <div className="cta-flex">
                <a href={`tel:${hotlineFull}`} className="btn btn-primary">GỌI HOTLINE: {hotline}</a>
                <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-secondary">TƯ VẤN KỸ THUẬT</a>
              </div>
            </div>
            <div>
              <img src="/sua-may-bom-tai-nha.png" alt="Sửa máy bơm nước" style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="detail-grid-section" style={{ background: '#f8fafc', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-title">
            <h2>DỊCH VỤ MÁY BƠM NƯỚC</h2>
            <div className="title-line"></div>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-may-bom-tai-nha.png" alt="Sửa máy bơm nước tại nhà" />
              </div>
              <div className="service-content">
                <h3>Sửa Máy Bơm Nước Tại Nhà</h3>
                <p>Khắc phục các sự cố máy bơm không hoạt động, hỏng tụ, hỏng phớt, hỏng vòng bi nhanh chóng.</p>
                <Link href="/sua-may-bom-nuoc-tai-nha" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/tho-sua-may-bom-nuoc.png" alt="Thợ sửa máy bơm nước" />
              </div>
              <div className="service-content">
                <h3>Thợ Sửa Máy Bơm Nước</h3>
                <p>Đội ngũ thợ tay nghề cao, đoán đúng bệnh, báo đúng giá. Chuyên sửa máy bơm tăng áp, bơm đẩy cao.</p>
                <Link href="/tho-sua-may-bom-nuoc" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-may-bom-tai-nha.png" alt="Lắp đặt máy bơm" />
              </div>
              <div className="service-content">
                <h3>Lắp Đặt Máy Bơm</h3>
                <p>Tư vấn và thi công lắp đặt máy bơm mới cho gia đình, nhà cao tầng, hệ thống tưới tiêu tự động.</p>
                <Link href="/lap-dat-may-bom" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="common-problems" style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>CÁC BỆNH THƯỜNG GẶP Ở MÁY BƠM</h2>
            <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>Đừng để việc mất nước ảnh hưởng đến sinh hoạt và công việc của bạn.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div className="problem-box">
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Lỗi Vận Hành</h4>
              <ul className="check-list-modern">
                <li>Máy bơm chạy nhưng nước không lên bồn.</li>
                <li>Máy bơm phát ra tiếng kêu to, rung lắc mạnh.</li>
                <li>Máy bơm chạy liên tục không ngắt dù đã đầy nước.</li>
                <li>Máy bị rò rỉ nước ở phần trục bơm hoặc đường ống.</li>
              </ul>
            </div>
            <div className="problem-box">
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Lỗi Hệ Thống Điện</h4>
              <ul className="check-list-modern">
                <li>Máy bơm không vào điện, không hoạt động.</li>
                <li>Máy bơm bị rò điện ra vỏ cực kỳ nguy hiểm.</li>
                <li>Máy chạy có mùi khét hoặc bốc khói từ motor.</li>
                <li>Máy thường xuyên làm nhảy aptomat khi khởi động.</li>
              </ul>
            </div>
            <div className="problem-box">
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Dịch Vụ Lắp Đặt</h4>
              <ul className="check-list-modern">
                <li>Lắp đặt máy bơm tăng áp cho vòi sen, máy giặt.</li>
                <li>Lắp hệ thống bơm đẩy cao cho nhà nhiều tầng.</li>
                <li>Thay thế bình tích áp, rơ le điện tử cho máy bơm.</li>
                <li>Thiết kế hệ thống bơm nước tự động thông minh.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: 'var(--secondary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>SỬA CHỮA NHANH - BẢO HÀNH CHU ĐÁO</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '40px', opacity: '0.9' }}>Chúng tôi cam kết sử dụng linh kiện chính hãng 100%.</p>
          <a href={`tel:${hotlineFull}`} className="btn btn-primary" style={{ fontSize: '1.3rem', padding: '15px 50px' }}>GỌI NGAY: {hotline}</a>
        </div>
      </section>

      <style jsx>{`
        .page-header { position: relative; }
        .problem-box {
          background: #f8fafc;
          padding: 35px;
          border-radius: 20px;
          border-top: 5px solid var(--primary);
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }
        
        .check-list-modern { list-style: none; padding: 0; }
        .check-list-modern li { position: relative; padding-left: 25px; margin-bottom: 12px; color: var(--text-light); font-size: 0.95rem; }
        .check-list-modern li::before { content: '●'; position: absolute; left: 0; color: var(--primary); }
        
        @media (max-width: 768px) {
          .category-intro > div { grid-template-columns: 1fr !important; gap: 30px !important; text-align: center; }
          .category-intro div:nth-child(2) { order: -1; }
          .category-title { font-size: 1.8rem !important; }
          .category-subtitle { font-size: 1rem !important; }
          .cta-flex { flex-direction: column; gap: 15px; }
          .cta-flex .btn { width: 100%; text-align: center; padding: 12px 0 !important; }
          h2 { font-size: 1.5rem !important; }
        }

        .category-title { font-size: 3rem; color: var(--primary); margin-bottom: 20px; font-weight: 800; }
        .category-subtitle { font-size: 1.2rem; max-width: 800px; margin: 0 auto; }
        .cta-flex { display: flex; gap: 20px; }
      `}</style>
    </Layout>
  )
}
