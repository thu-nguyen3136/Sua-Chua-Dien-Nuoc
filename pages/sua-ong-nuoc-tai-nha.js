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
          <p>Khắc phục mọi sự cố về đường ống cấp thoát nước - Uy tín, Tận tâm, Giá rẻ 24/7.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>DỊCH VỤ SỬA ỐNG NƯỚC TẠI NHÀ CHUYÊN NGHIỆP</h2>
            <img src="/1.png" alt="Sửa ống nước tại nhà chuyên nghiệp" className="featured-img" />

            <p><strong>Điện Nước Bảo Trung</strong> chuyên nhận sửa ống nước, sửa ống nước bị rò rỉ, ống nước bị tắc, ống không thoát nước, thủng đường ống cấp thoát nước, ống nước hư hỏng,… các vấn đề về ống nước tại các quận huyện TP. Hồ Chí Minh và các tỉnh phía Nam như Bình Dương, Long An, Đồng Nai,…</p>

            <p>Chúng tôi cam kết khắc phục nhanh chóng, an toàn và hiệu quả các sự cố về ống nước mà bạn gặp phải. Hãy liên hệ Hotline <strong>039.330.3524 - 0353.422.680</strong> để được tư vấn và hỗ trợ nhanh nhất!</p>

            <img src="/2.png" alt="Thợ sửa ống nước đang làm việc" className="content-img" />

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>CÁC VẤN ĐỀ VỀ HỆ THỐNG ỐNG NƯỚC THƯỜNG GẶP</h3>
            <div className="issue-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)' }}>🚧 Đường ống nước bị chặn</h4>
                <p style={{ fontSize: '0.9rem' }}>Thức ăn, rác, bụi, tóc tích tụ lâu ngày làm đường ống bị chặn, nước không thể thoát dễ dàng trong bồn rửa hoặc sàn vệ sinh.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)' }}>🚽 Sự cố ống nước nhà vệ sinh</h4>
                <p style={{ fontSize: '0.9rem' }}>Nước trong nhà vệ sinh không thể thoát ra và tràn ra khắp nơi do đường ống bị tắc nghẽn hoặc sử dụng không đúng cách.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)' }}>💧 Đường ống bị rò rỉ</h4>
                <p style={{ fontSize: '0.9rem' }}>Vấn đề phổ biến gây thất thoát nước và tăng hóa đơn tiền nước. Cần thợ chuyên nghiệp xử lý triệt để các vết nứt vỡ âm tường.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)' }}>🔧 Hệ thống cấp nước yếu</h4>
                <p style={{ fontSize: '0.9rem' }}>Nguồn cấp nước bị yếu không đủ áp lực cho sinh hoạt, cần kiểm tra và cải tạo lại hệ thống đường ống hoặc lắp bơm tăng áp.</p>
              </div>
            </div>

            <img src="/3.png" alt="Xử lý rò rỉ nước âm tường" className="content-img" />

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>DỊCH VỤ SỬA ỐNG NƯỚC CỦA CHÚNG TÔI BAO GỒM</h3>
            <div style={{ marginBottom: '30px' }}>
              <ul className="check-list-modern">
                <li>Sửa chữa, thay thế, khắc phục sự cố hệ thống nước, bồn cầu, chậu rửa, sen vòi, lavabo, van vòi nước…</li>
                <li>Khắc phục các sự cố về rò rỉ, mất nước, thủng đường ống cấp và thoát nước. Sửa chữa thay thế hệ thống ống thoát nước bằng gang, ống nhựa chịu nhiệt, hàn ống PPR.</li>
                <li>Lắp đặt, sửa chữa đường ống nước nóng lạnh, hàn ống ppr máy nước nóng năng lượng mặt trời.</li>
                <li>Lắp đặt máy bơm nước gia đình, dân dụng, máy bơm tăng áp, bơm đẩy cao.</li>
                <li>Nhận lắp đặt hệ thống đường nước mới cho hộ gia đình, chung cư, nhà xưởng.</li>
                <li>Nhận lắp đặt đồng hồ điện nước cho gia đình, phòng trọ.</li>
                <li>Kiểm tra, dò tìm rò rỉ nước, phát hiện đường ống nước rò rỉ âm nền bằng máy móc hiện đại.</li>
                <li>Thông tắc cống, thông tắc bồn cầu bị nghẹt, sửa chữa nghẹt ống thoát nước giá rẻ.</li>
                <li>Sửa chữa ống nước âm tường, âm nền chuyên sâu.</li>
              </ul>
            </div>

            <img src="/4.png" alt="Lắp đặt thiết bị vệ sinh" className="content-img" />

            <div className="process-box" style={{ marginTop: '40px', background: '#fef9f0', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>QUY TRÌNH LÀM VIỆC TẠI BẢO TRUNG</h3>
              <div className="process-list">
                {[
                  { step: 1, title: 'Tiếp nhận', desc: 'Tiếp nhận yêu cầu từ khách hàng, phân tích sự cố và xử lý thông tin rõ ràng.' },
                  { step: 2, title: 'Tư vấn', desc: 'Hướng dẫn khách hàng cách xử lý tạm thời trong thời gian chờ kỹ thuật viên đến.' },
                  { step: 3, title: 'Khảo sát & Báo giá', desc: 'Thợ đến đúng hẹn, khảo sát thực tế, phân tích và báo giá công minh bạch trước khi làm.' },
                  { step: 4, title: 'Thi công', desc: 'Tiến hành sửa chữa nhanh chóng, gọn gàng và sạch sẽ, đảm bảo chất lượng.' },
                  { step: 5, title: 'Bàn giao', desc: 'Khách hàng nghiệm thu, thợ viết phiếu bảo hành và hướng dẫn sử dụng an toàn.' }
                ].map((item) => (
                  <div key={item.step} style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>{item.step}</div>
                    <div><strong>{item.title}:</strong> {item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <img src="/5.png" alt="Kiểm tra hệ thống nước" className="content-img" />

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>ƯU ĐIỂM CỦA ĐIỆN NƯỚC BẢO TRUNG</h2>
            <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>👷 Thợ Giỏi Nhiều Kinh Nghiệm</h4>
                <p style={{ fontSize: '0.9rem' }}>Đội ngũ thợ có tay nghề cao, được đào tạo bài bản, giải quyết mọi sự cố khó nhất một cách triệt để.</p>
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>🚀 Phục Vụ Siêu Tốc</h4>
                <p style={{ fontSize: '0.9rem' }}>Bố trí thợ ở tất cả các quận huyện TP.HCM và các tỉnh lân cận, đảm bảo có mặt nhanh nhất khi khách gọi.</p>
                <img src="/7.png" alt="Phục vụ nhanh chóng" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>💰 Giá Thành Bình Dân</h4>
                <p style={{ fontSize: '0.9rem' }}>Cam kết giá rẻ và ổn định, báo giá trước khi thi công, không phát sinh chi phí ẩn.</p>
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>🛠️ Chất Lượng & Bảo Hành</h4>
                <p style={{ fontSize: '0.9rem' }}>Luôn lấy chữ TÍN làm trọng, bảo hành hậu mãi dài hạn và đúng hẹn cho quý khách hàng.</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
              <img src="/6.png" alt="Công trình thực tế 1" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)' }} />
              <img src="/8.png" alt="Công trình thực tế 2" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)' }} />
            </div>

            <div style={{ marginTop: '40px', padding: '25px', background: 'var(--secondary)', borderRadius: '12px', color: 'white' }}>
              <p style={{ margin: 0, color: 'white', fontStyle: 'italic' }}>"Điện nước Bảo Trung - Đối tác tin cậy của hàng trăm khách hàng đã và đang sử dụng dịch vụ trên toàn khu vực phía Nam. Chúng tôi làm việc 24/24 kể cả ngày lễ và chủ nhật để phục vụ bạn tốt nhất!"</p>
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
        .info-box ul li { margin-bottom: 10px; font-size: 0.9rem; padding-left: 20px; position: relative; }
        .info-box ul li::before { content: '📍'; position: absolute; left: 0; }
        .check-list-modern { list-style: none; padding: 0; }
        .check-list-modern li { position: relative; padding-left: 30px; margin-bottom: 12px; color: var(--text-light); line-height: 1.6; font-size: 0.95rem; }
        .check-list-modern li::before { content: '✓'; position: absolute; left: 0; color: var(--primary); font-weight: bold; font-size: 1.2rem; top: -2px; }
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; }
          .issue-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
