import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaDienNuocCategory() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Dịch Vụ Sửa Điện Nước Tại Nhà TP.HCM - Nhanh Chóng, Chuyên Nghiệp"
      description="Chuyên sửa ống nước, rò rỉ nước, dò tìm rò rỉ âm tường và sửa chữa điện nước tổng hợp tại TP.HCM. Thợ tay nghề cao, có mặt ngay sau 15-30 phút."
    >
      <section className="page-header" style={{ background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/sua-dien-tai-nha.png")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="category-title">DỊCH VỤ SỬA ĐIỆN NƯỚC</h1>
          <p className="category-subtitle">Giải pháp toàn diện cho hệ thống điện nước gia đình bạn. Xử lý triệt để mọi sự cố rò rỉ, bục vỡ và chập cháy.</p>
        </div>
      </section>

      <section className="category-intro" style={{ padding: '10px 0', background: 'white' }}>
        <div className="container">
          <div className="category-intro-grid">
            <div>
              <h2 style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: '25px' }}>Chuyên Nghiệp - Tận Tâm - Giá Rẻ</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '15px', lineHeight: '1.8' }}>Hệ thống điện nước là "mạch máu" của ngôi nhà. Một sự cố nhỏ cũng có thể gây phiền toái lớn hoặc thậm chí nguy hiểm. Điện Nước Bảo Trung thấu hiểu điều đó và luôn sẵn sàng hỗ trợ bạn bất cứ lúc nào.</p>
              <p style={{ color: 'var(--text-light)', marginBottom: '25px', lineHeight: '1.8' }}>Với hơn 10 năm kinh nghiệm, chúng tôi tự tin xử lý những ca khó nhất như rò rỉ nước âm tường không rõ nguyên nhân hay hệ thống điện cũ kỹ hay hỏng hóc.</p>
              <div className="cta-flex">
                <a href={`tel:${hotlineFull}`} className="btn btn-primary">GỌI NGAY: {hotline}</a>
                <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-secondary">TƯ VẤN ZALO</a>
              </div>
            </div>
            <div>
              <img src="/sua-dien-tai-nha.png" alt="Thợ sửa điện nước" style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="detail-grid-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-title">
            <h2>DỊCH VỤ SỬA ĐIỆN NƯỚC</h2>
            <div className="title-line"></div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-ong-nuoc.png" alt="Sửa ống nước" />
              </div>
              <div className="service-content">
                <h3>Sửa Ống Nước Tại Nhà</h3>
                <p>Khắc phục rò rỉ, tắc nghẽn, hư hỏng hệ thống ống cấp thoát nước nhanh chóng.</p>
                <Link href="/sua-ong-nuoc-tai-nha" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-ong-nuoc-bi-vo.png" alt="Sửa rò rỉ nước" />
              </div>
              <div className="service-content">
                <h3>Sửa Rò Rỉ Nước</h3>
                <p>Xử lý triệt để các sự cố rò rỉ nước, vỡ ống nước, thay thế phụ kiện chính hãng.</p>
                <Link href="/sua-ro-ri-nuoc" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/tho-do-tim-ro-ri-nuoc.png" alt="Dò tìm rò rỉ nước" />
              </div>
              <div className="service-content">
                <h3>Dò Tìm Rò Rỉ Nước</h3>
                <p>Sử dụng máy siêu âm hiện đại dò tìm chính xác vị trí rò rỉ nước âm tường, âm nền.</p>
                <Link href="/do-tim-ro-ri-nuoc" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-img-wrapper">
                <img src="/sua-dien-tai-nha.png" alt="Sửa điện nước tại nhà" />
              </div>
              <div className="service-content">
                <h3>Sửa Điện Nước Tại Nhà</h3>
                <p>Dịch vụ sửa chữa điện nước tổng hợp, xử lý mọi sự cố điện nước gia đình, văn phòng.</p>
                <Link href="/sua-dien-nuoc-tai-nha" className="btn-readmore">Xem Chi Tiết &raquo;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="common-problems" style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>SỰ CỐ ĐIỆN NƯỚC BẠN ĐANG GẶP PHẢI?</h2>
            <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>Chúng tôi xử lý triệt để 99% các lỗi điện nước dân dụng thường gặp</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div className="problem-box">
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Lỗi Hệ Thống Nước</h4>
              <ul className="check-list-modern">
                <li>Hóa đơn nước tăng đột biến không rõ nguyên nhân.</li>
                <li>Áp lực nước yếu, vòi nước chảy nhỏ giọt.</li>
                <li>Bồn cầu bị rò nước, nứt vỡ hoặc tắc nghẽn.</li>
                <li>Đường ống thoát nước bị tắc, có mùi hôi.</li>
              </ul>
            </div>
            <div className="problem-box">
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Lỗi Hệ Thống Điện</h4>
              <ul className="check-list-modern">
                <li>Aptomat nhảy liên tục khi sử dụng thiết bị.</li>
                <li>Ổ cắm bị lỏng, cháy đen hoặc có mùi khét.</li>
                <li>Tủ điện bị chập cháy, mất điện một phần hoặc toàn bộ.</li>
                <li>Đèn bị nhấp nháy, không sáng hoặc nổ bóng.</li>
              </ul>
            </div>
            <div className="problem-box">
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Lắp Đặt Thiết Bị</h4>
              <ul className="check-list-modern">
                <li>Lắp đặt bồn nước, vệ sinh bể chứa nước.</li>
                <li>Lắp bình nóng lạnh, máy lọc nước, máy giặt.</li>
                <li>Thay thế vòi sen, bồn rửa bát, thiết bị vệ sinh.</li>
                <li>Thi công hệ thống điện nước âm tường mới.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: 'var(--secondary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>CAM KẾT CÓ MẶT SAU 15-30 PHÚT</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '40px', opacity: '0.9' }}>Đội ngũ thợ trực sẵn tại các quận TP.HCM, gọi là có mặt ngay!</p>
          <a href={`tel:${hotlineFull}`} className="btn btn-primary" style={{ fontSize: '1.3rem', padding: '15px 50px' }}>GỌI HOTLINE: {hotline}</a>
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
          .category-intro-grid { grid-template-columns: 1fr !important; gap: 30px !important; text-align: center; }
          .category-intro div:nth-child(2) { order: -1; }
          .category-title { font-size: 1.8rem !important; }
          .category-subtitle { font-size: 1rem !important; }
          .cta-flex { flex-direction: column; gap: 15px; }
          .cta-flex .btn { width: 100%; padding: 12px 0 !important; }
          h2 { font-size: 1.5rem !important; }
        }

        .category-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; alignItems: center; }
        .category-title { font-size: 3rem; color: var(--primary); margin-bottom: 20px; font-weight: 800; }
        .category-subtitle { font-size: 1.2rem; max-width: 800px; margin: 0 auto; }
        .cta-flex { display: flex; gap: 20px; }
      `}</style>
    </Layout>
  )
}
