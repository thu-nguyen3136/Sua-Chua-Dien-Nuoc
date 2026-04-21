import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaDienTaiNhaCategory() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Sửa Điện Tại Nhà TP.HCM - Xử Lý Chập Điện, Lắp Đồng Hồ Điện 24/7"
      description="Dịch vụ sửa điện tại nhà chuyên nghiệp tại TP.HCM. Chuyên xử lý chập điện, nhảy aptomat, sửa công tơ điện, lắp đồng hồ điện 1 pha/3 pha. Phục vụ 24/24."
    >
      <section className="page-header" style={{ background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/sua-dien-tai-nha.png")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '20px' }}>SỬA ĐIỆN TẠI NHÀ</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>Thợ điện tay nghề cao, xử lý nhanh các sự cố chập cháy, mất điện. An toàn - Uy tín - Giá rẻ nhất TP.HCM.</p>
        </div>
      </section>

      <section className="category-intro" style={{ padding: '60px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: '25px' }}>An Toàn Điện - Trách Nhiệm Hàng Đầu</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '15px', lineHeight: '1.8' }}>Sự cố về điện luôn tiềm ẩn nguy cơ cháy nổ và nguy hiểm đến tính mạng. Vì vậy, việc lựa chọn một đội ngũ thợ điện có chuyên môn và kinh nghiệm là điều vô cùng quan trọng.</p>
              <p style={{ color: 'var(--text-light)', marginBottom: '25px', lineHeight: '1.8' }}>Tại Điện Nước Bảo Trung, đội ngũ kỹ thuật viên của chúng tôi được đào tạo bài bản, trang bị máy móc hiện đại để tìm ra nhanh nhất vị trí chập điện âm tường, đảm bảo khắc phục triệt để và an toàn tuyệt đối cho gia đình bạn.</p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a href={`tel:${hotlineFull}`} className="btn btn-primary" style={{ padding: '15px 40px' }}>GỌI THỢ NGAY: {hotline}</a>
                <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-secondary" style={{ padding: '15px 40px' }}>NHẮN TIN ZALO</a>
              </div>
            </div>
            <div>
              <img src="/sua-dien-tai-nha.png" alt="Sửa điện tại nhà" style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="detail-grid-section" style={{ background: '#f8fafc', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-title">
            <h2>DỊCH VỤ SỬA ĐIỆN CHUYÊN NGHIỆP</h2>
            <div className="title-line"></div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-chap-dien.png" alt="Sửa chập điện" />
              </div>
              <div className="service-content">
                <h3>Sửa Chập Điện</h3>
                <p>Xử lý chập điện, cháy nổ điện, nhảy aptomat không rõ nguyên nhân chuyên nghiệp.</p>
                <Link href="/sua-chap-dien" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-cong-to-dien.png" alt="Sửa công tơ điện" />
              </div>
              <div className="service-content">
                <h3>Sửa Công Tơ Điện</h3>
                <p>Kiểm tra, sửa chữa công tơ điện chạy sai, lắp đặt đồng hồ điện riêng cho phòng trọ.</p>
                <Link href="/sua-cong-to-dien" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/lap-dong-ho-dien.png" alt="Lắp đồng hồ điện" />
              </div>
              <div className="service-content">
                <h3>Lắp Đồng Hồ Điện</h3>
                <p>Chuyên lắp đặt đồng hồ điện 1 pha, 3 pha cho hộ gia đình và kinh doanh, sản xuất.</p>
                <Link href="/lap-dong-ho-dien" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-dien-tai-nha.png" alt="Sửa điện 24h" />
              </div>
              <div className="service-content">
                <h3>Sửa Điện 24H</h3>
                <p>Dịch vụ sửa điện khẩn cấp 24/7, có mặt ngay cả ban đêm để xử lý sự cố điện.</p>
                <Link href="/sua-dien-24h" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="common-problems" style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>KHI NÀO BẠN CẦN GỌI THỢ ĐIỆN?</h2>
            <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>Đừng tự sửa chữa nếu bạn không có chuyên môn và dụng cụ bảo hộ cần thiết.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div className="problem-box">
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Sự Cố Khẩn Cấp</h4>
              <ul className="check-list-modern">
                <li>Aptomat (CB) nhảy liên tục không rõ lý do.</li>
                <li>Có mùi khét, khói hoặc tia lửa điện từ ổ cắm, tủ điện.</li>
                <li>Mất điện đột ngột trong khi các nhà xung quanh vẫn có.</li>
                <li>Thiết bị điện bị rò điện ra vỏ gây giật.</li>
              </ul>
            </div>
            <div className="problem-box">
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Lắp Đặt & Cải Tạo</h4>
              <ul className="check-list-modern">
                <li>Lắp đặt hệ thống đèn chiếu sáng, đèn trang trí.</li>
                <li>Đi lại đường dây điện âm tường hoặc điện nổi đẹp mắt.</li>
                <li>Lắp đặt máy nước nóng, máy lạnh, quạt trần.</li>
                <li>Thay thế ổ cắm, công tắc cũ bằng thiết bị hiện đại.</li>
              </ul>
            </div>
            <div className="problem-box">
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Đồng Hồ & Công Tơ</h4>
              <ul className="check-list-modern">
                <li>Lắp đồng hồ điện cho phòng trọ, mặt bằng kinh doanh.</li>
                <li>Kiểm tra xem công tơ điện có chạy đúng hay không.</li>
                <li>Tách nguồn điện, đi lại bảng điện riêng biệ.</li>
                <li>Thay thế công tơ điện cũ, hỏng.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: 'var(--secondary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>PHỤC VỤ TẬN TÂM - GIÁ CẢ MINH BẠCH</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '40px', opacity: '0.9' }}>Báo giá rõ ràng trước khi làm, không phát sinh chi phí vô lý!</p>
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
          .category-intro > div { grid-template-columns: 1fr !important; gap: 30px !important; }
          .category-intro div:nth-child(2) { order: -1; }
          h1 { font-size: 2rem !important; }
        }
      `}</style>
    </Layout>
  )
}
