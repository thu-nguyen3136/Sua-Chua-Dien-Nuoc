import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaOngNuocTaiNha() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Sửa Ống Nước Tại Nhà TP.HCM - Xử Lý Triệt Để Rò Rỉ, Tắc Nghẽn"
      description="Dịch vụ sửa chữa ống nước chuyên nghiệp tại TP.HCM. Xử lý ống nước rò rỉ, thông tắc bồn cầu, chậu rửa, lắp đặt thiết bị vệ sinh. Thợ giỏi, có mặt ngay sau 20 phút."
    >
      <section className="page-header">
        <div className="container">
          <h1>Sửa Ống Nước Tại Nhà TP.HCM</h1>
          <p>Khắc phục mọi sự cố ống nước - Nhanh chóng, chuyên nghiệp, giá rẻ.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 className="modern-h2" style={{ color: 'var(--primary)', marginBottom: '20px' }}>DỊCH VỤ SỬA ỐNG NƯỚC TẠI NHÀ CHUYÊN NGHIỆP</h2>
            <img src="/1.png" alt="Sửa ống nước tại nhà chuyên nghiệp" className="content-img" />

            <p><strong>Điện Nước Bảo Trung</strong> chuyên nhận sửa ống nước, sửa ống nước bị rò rỉ, ống nước bị tắc, ống không thoát nước, thủng đường ống cấp thoát nước, ống nước hư hỏng… các vấn đề về ống nước tại các quận huyện TP. Hồ Chí Minh và các tỉnh phía Nam như Bình Dương, Long An, Đồng Nai…</p>

            <p>Chúng tôi cam kết khắc phục nhanh chóng, an toàn và hiệu quả các sự cố về ống nước mà bạn gặp phải. Hãy liên hệ Hotline <strong>039.330.3524 - 0353.422.680</strong> để được tư vấn và hỗ trợ nhanh nhất!</p>

            <img src="/2.png" alt="Thợ sửa ống nước đang làm việc" className="content-img" />

            <h3 className="section-title-left">CÁC VẤN ĐỀ VỀ ỐNG NƯỚC THƯỜNG GẶP</h3>
            <div className="responsive-grid-2" style={{ marginTop: '20px' }}>
              <div className="issue-card">
                <h4>💧 Đường ống bị rò rỉ</h4>
                <p>Vấn đề phổ biến gây thất thoát nước và tăng hóa đơn tiền nước. Cần thợ chuyên nghiệp xử lý triệt để các vết nứt vỡ âm tường.</p>
              </div>
              <div className="issue-card">
                <h4>🚫 Hệ thống cấp nước yếu</h4>
                <p>Nguồn cấp nước bị yếu không đủ áp lực cho sinh hoạt, cần kiểm tra và cải tạo lại hệ thống đường ống hoặc lắp bơm tăng áp.</p>
              </div>
            </div>

            <img src="/3.png" alt="Xử lý rò rỉ nước âm tường" className="content-img" />

            <h3 className="section-title-left">DỊCH VỤ SỬA ỐNG NƯỚC CỦA CHÚNG TÔI BAO GỒM</h3>
            <ul className="check-list-modern">
              <li>Sửa chữa đường ống nước bị bục gãy, rò rỉ, mất nước.</li>
              <li>Thông tắc bồn cầu, chậu rửa bát, lavabo, thoát sàn.</li>
              <li>Lắp đặt thay thế vòi nước, vòi sen, xi phông, dây cấp.</li>
              <li>Lắp đặt bồn cầu, bồn tiểu, bồn tắm, thiết bị vệ sinh.</li>
              <li>Sửa chữa lắp đặt máy bơm nước gia đình, bơm tăng áp.</li>
              <li>Xử lý ngăn mùi hôi toilet, nhà tắm triệt để.</li>
              <li>Dò tìm rò rỉ nước ngầm bằng máy siêu âm hiện đại.</li>
            </ul>

            <img src="/sua-ong-nuoc-bi-vo-7.png" alt="Thi công sửa ống nước" className="content-img" />

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>TẠI SAO NÊN CHỌN ĐIỆN NƯỚC BẢO TRUNG?</h2>
            <div className="responsive-grid-2" style={{ marginTop: '20px' }}>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>✅ Đội Ngũ Nhiều Kinh Nghiệm</h4>
                <p style={{ fontSize: '0.9rem' }}>Đội ngũ thợ có tay nghề cao, được đào tạo bài bản, giải quyết mọi sự cố khó nhất một cách triệt để.</p>
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>✅ Phục Vụ Siêu Tốc</h4>
                <p style={{ fontSize: '0.9rem' }}>Bố trí thợ ở tất cả các quận huyện TP.HCM và các tỉnh lân cận, đảm bảo có mặt nhanh nhất khi khách gọi.</p>
                <img src="/7.png" alt="Phục vụ nhanh chóng" className="content-img" style={{ marginTop: '10px' }} />
              </div>
            </div>

            <div style={{ marginTop: '40px', padding: '25px', background: 'var(--secondary)', borderRadius: '12px', color: 'white' }}>
              <p style={{ margin: 0, color: 'white', fontStyle: 'italic' }}>"Điện Nước Bảo Trung - Đối tác tin cậy của hàng trăm khách hàng đã và đang sử dụng dịch vụ trên toàn khu vực phía Nam. Chúng tôi làm việc 24/24 kể cả ngày lễ và chủ nhật để phục vụ bạn tốt nhất!"</p>
            </div>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>ĐỊA CHỈ LIÊN HỆ KHI CẦN SỬA ĐIỆN NƯỚC TP.HCM</h2>
            <p>Chúng tôi chuyên cung cấp dịch vụ bảo trì, sửa chữa điện nước chuyên nghiệp, chống thấm dột. Có đội ngũ thợ chuyên nghiệp trực 24/24 ở khắp các quận trên thành phố, đảm bảo có mặt sau 20 - 30 phút.</p>

            <div className="branch-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px', fontSize: '0.85rem' }}>
              <div className="branch-col">
                <p>📍 <strong>Trụ sở:</strong> 76 Nguyễn Đình Chính, P.15, Q. Phú Nhuận</p>
                <p>📍 <strong>CN1:</strong> 157/3 Nguyễn Văn Hưởng, P. Thảo Điền, Q.2</p>
                <p>📍 <strong>CN2:</strong> 278/4 Đ. Cách mạng Tháng 8, P.10, Q.3</p>
                <p>📍 <strong>CN3:</strong> 366/6 Hoàng Diệu, P.6, Q.4</p>
                <p>📍 <strong>CN4:</strong> 888/8/3 Trần Hưng Đạo, P.1, Q.5</p>
                <p>📍 <strong>CN5:</strong> 520/6 Hồng Bàng, P.9, Q.6</p>
                <p>📍 <strong>CN6:</strong> 74 Nguyễn Cao, P.Tân Phong, Q.7</p>
                <p>📍 <strong>CN7:</strong> 856/7 Tạ Quang Bửu, P.5, Q.8</p>
                <p>📍 <strong>CN8:</strong> 48 Võ Văn Kiệt, P. Hiệp Phú, Q.9</p>
              </div>
              <div className="branch-col">
                <p>📍 <strong>CN9:</strong> 341/8 Sư Vạn Hạnh, P.10, Q.10</p>
                <p>📍 <strong>CN10:</strong> 205/11 Lý Thường Kiệt, P.7, Q.11</p>
                <p>📍 <strong>CN11:</strong> 171/3 Trường Chinh, P. Tân Thới Nhất, Q.12</p>
                <p>📍 <strong>CN12:</strong> 285/13/1 Âu Cơ, P. Phú Trung, Tân Phú</p>
                <p>📍 <strong>CN13:</strong> 187/1 An Dương Vương, An Lạc, Bình Tân</p>
                <p>📍 <strong>CN14:</strong> 113 Phan Đăng Lưu, P.7, Phú Nhuận</p>
                <p>📍 <strong>CN15:</strong> 367/1 Trường Chinh, P.14, Tân Bình</p>
                <p>📍 <strong>CN16:</strong> 192/6 Quang Trung, P.10, Gò Vấp</p>
                <p>📍 <strong>CN17:</strong> 216/8 Võ Văn Ngân, P. Bình Thọ, Thủ Đức</p>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Cần Thợ Sửa Nước?</h3>
              <p>Có mặt sau 20 phút - Báo giá miễn phí!</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Chát Zalo Ngay</a>
            </div>

            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Phạm Vi Phục Vụ</h4>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>Chúng tôi có mặt tại tất cả các quận huyện TP.HCM và các tỉnh Phía Nam:</p>
              <ul style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <li>📍 Quận 1, 3, 5, 6, 10, 11, 12...</li>
                <li>📍 Tân Bình, Tân Phú, Phú Nhuận...</li>
                <li>📍 Bình Dương, Long An, Đồng Nai...</li>
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
        .content-img { width: 100%; border-radius: 12px; margin: 20px 0; box-shadow: var(--shadow); }
        .cta-box { color: white; padding: 30px; border-radius: var(--radius); text-align: center; margin-bottom: 30px; }
        .hotline-btn { display: block; width: 100%; margin: 20px 0 10px; font-size: 1.2rem; }
        .zalo-btn { display: block; width: 100%; background: #0084ff; border: none; }
        .info-box { background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .info-box h4 { border-bottom: 2px solid; padding-bottom: 10px; margin-bottom: 15px; }
        .check-list-modern { list-style: none; padding: 0; }
        .check-list-modern li { position: relative; padding-left: 30px; margin-bottom: 12px; color: var(--text-light); line-height: 1.6; font-size: 0.95rem; }
        .check-list-modern li::before { content: '✓'; position: absolute; left: 0; color: var(--primary); font-weight: bold; font-size: 1.2rem; top: -2px; }
        .responsive-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .issue-card { background: #f8fafc; padding: 20px; border-radius: 10px; border-left: 4px solid var(--secondary); }
        .issue-card h4 { margin-bottom: 10px; color: var(--secondary); }
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; gap: 30px; }
          .content { padding: 25px; }
          .responsive-grid-2 { grid-template-columns: 1fr; }
          .branch-grid { grid-template-columns: 1fr !important; }
          .page-header h1 { font-size: 1.8rem; }
          .cta-box { padding: 20px; }
          .hotline-btn { font-size: 1.1rem; }
        }
      `}</style>
    </Layout>
  )
}
