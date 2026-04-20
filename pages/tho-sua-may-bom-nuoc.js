import Layout from '../components/Layout'
import Link from 'next/link'

export default function ThoSuaMayBomNuoc() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Thợ Sửa Máy Bơm Nước Chuyên Nghiệp TP.HCM - Có Mặt Ngay"
      description="Đội ngũ thợ sửa máy bơm nước tay nghề cao tại TP.HCM. Chuyên trị các ca máy bơm khó: cháy motor, hỏng vòng bi, lỗi hệ thống điều khiển. Phục vụ 24/7."
    >
      <section className="page-header">
        <div className="container">
          <h1>Thợ Sửa Máy Bơm Nước Chuyên Nghiệp</h1>
          <p>Kỹ thuật viên tay nghề cao - Bắt đúng bệnh, xử lý dứt điểm sự cố máy bơm.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>ĐỘI NGŨ THỢ MÁY BƠM TAY NGHỀ CAO</h2>
            <img src="/tho-sua-may-bom-nuoc.png" alt="Thợ sửa máy bơm chuyên nghiệp" className="featured-img" />
            
            <p>Bạn đang gặp rắc rối với chiếc máy bơm nước? Đừng lo lắng, đội ngũ <strong>thợ sửa máy bơm nước</strong> của Bảo Trung luôn sẵn sàng lên đường. Với hơn 10 năm kinh nghiệm thực tế, chúng tôi tự tin xử lý mọi sự cố từ máy bơm dân dụng đến hệ thống máy bơm công nghiệp phức tạp.</p>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>TẠI SAO NÊN GỌI THỢ BẢO TRUNG?</h3>
            <div className="advantage-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>🛠️ Kỹ Thuật Chuyên Sâu</h4>
                <p style={{ fontSize: '0.9rem' }}>Thợ được đào tạo bài bản, am hiểu cấu tạo cơ khí và mạch điện của tất cả các dòng máy bơm hiện đại.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>⚡ Phản Ứng Nhanh</h4>
                <p style={{ fontSize: '0.9rem' }}>Với chi nhánh trải khắp các quận TP.HCM, thợ sẽ có mặt tại nhà khách hàng chỉ sau 15-30 phút gọi.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>💎 Trung Thực & Tận Tâm</h4>
                <p style={{ fontSize: '0.9rem' }}>Cam kết báo đúng giá, thay đúng linh kiện lỗi, tuyệt đối không "vẽ bệnh" để thu thêm tiền của khách.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>🔄 Dụng Cụ Hiện Đại</h4>
                <p style={{ fontSize: '0.9rem' }}>Trang bị đầy đủ máy đo dòng điện, dụng cụ tháo lắp chuyên dụng giúp quá trình sửa chữa nhanh và an toàn.</p>
              </div>
            </div>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>THỢ CHÚNG TÔI CHUYÊN TRỊ CÁC LỖI</h3>
            <ul>
              <li><strong>Máy bơm cháy motor:</strong> Tiến hành quấn lại cuộn dây đồng chuẩn 100% hoặc thay motor mới chính hãng.</li>
              <li><strong>Máy bơm kêu to:</strong> Thay thế vòng bi (bạc đạn) SKF cao cấp, cân chỉnh lại trục bơm và cánh quạt.</li>
              <li><strong>Hệ thống điều khiển lỗi:</strong> Sửa chữa/thay thế rơ le từ, bình áp, tủ điện điều khiển bơm công nghiệp.</li>
              <li><strong>Máy bơm bị hở phớt:</strong> Ép lại phớt chặn nước chuyên nghiệp, đảm bảo máy kín khít, không rò nước vào motor.</li>
            </ul>

            <div className="cta-banner" style={{ background: 'var(--secondary)', color: 'white', padding: '30px', borderRadius: 'var(--radius)', textAlign: 'center', marginTop: '40px' }}>
              <h3 style={{ marginBottom: '10px' }}>GỌI THỢ NGAY - GIẢM 10% PHÍ DỊCH VỤ</h3>
              <p>Dành riêng cho khách hàng liên hệ qua website hôm nay!</p>
              <a href={`tel:${hotlineFull}`} style={{ display: 'inline-block', background: 'white', color: 'var(--secondary)', padding: '12px 30px', borderRadius: '30px', fontWeight: 'bold', marginTop: '15px', textDecoration: 'none' }}>GỌI: {hotline}</a>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Thợ Đang Ở Gần Bạn</h3>
              <p>Sẵn sàng phục vụ 24/7 kể cả ngày lễ và chủ nhật.</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Gửi Vị Trí Qua Zalo</a>
            </div>
            
            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Khu Vực Phục Vụ</h4>
              <ul style={{ fontSize: '0.85rem' }}>
                <li>📍 Quận 1, 3, 5, 7, 10, 11</li>
                <li>📍 Bình Thạnh, Phú Nhuận, Gò Vấp</li>
                <li>📍 Thủ Đức, Quận 12, Hóc Môn</li>
                <li>📍 Tân Bình, Tân Phú, Bình Tân</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-header { background: var(--primary); color: white; padding: 60px 0; text-align: center; }
        .page-header h1 { font-size: 2.5rem; margin-bottom: 10px; }
        .service-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; }
        .content { background: white; padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .content h2 { margin: 30px 0 15px; }
        .content p { margin-bottom: 20px; color: var(--text-light); line-height: 1.8; }
        .cta-box { color: white; padding: 30px; border-radius: var(--radius); text-align: center; margin-bottom: 30px; }
        .hotline-btn { display: block; width: 100%; margin: 20px 0 10px; font-size: 1.2rem; }
        .zalo-btn { display: block; width: 100%; background: #0084ff; border: none; }
        .info-box { background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .info-box h4 { border-bottom: 2px solid; padding-bottom: 10px; margin-bottom: 15px; }
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Layout>
  )
}
