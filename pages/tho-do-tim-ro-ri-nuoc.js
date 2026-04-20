import Layout from '../components/Layout'
import Link from 'next/link'

export default function ThoDoTimRoRiNuoc() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Thợ Dò Tìm Rò Rỉ Nước TP.HCM - Siêu Âm Đường Ống Bể Ngầm"
      description="Dịch vụ thợ dò tìm rò rỉ nước chuyên nghiệp tại TP.HCM. Sử dụng máy siêu âm định vị chính xác điểm vỡ âm tường, dưới nền đất. Giảm tiền nước tuyệt đối."
    >
      <section className="page-header">
        <div className="container">
          <h1>Dò Tìm Rò Rỉ Nước TP.HCM</h1>
          <p>Sử dụng công nghệ siêu âm hiện đại - Tìm đúng điểm vỡ, không đục phá lan man.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>THỢ DÒ TÌM RÒ RỈ NƯỚC CHUYÊN NGHIỆP</h2>
            <img src="/tho-do-tim-ro-ri-nuoc.png" alt="Dò tìm rò rỉ nước" className="featured-img" />
            
            <p>Rò rỉ nước từ các đường ống là một nguồn lãng phí đáng kể đối với các hộ gia đình và doanh nghiệp. Một số sự cố rò rỉ nước có thể nhìn thấy bằng mắt thường, tuy nhiên cũng có một số rò rỉ ngầm không thể quan sát được như đường ống âm tường, đường ống nằm sâu dưới mặt đất. <strong>Điện Nước Bảo Trung</strong> cung cấp giải pháp siêu âm đường ống giúp định vị chính xác vị trí vỡ để sửa chữa dứt điểm.</p>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>DẤU HIỆU CẦN ĐẾN DỊCH VỤ DÒ TÌM RÒ RỈ</h3>
            <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #eee' }}>
                <strong style={{ color: 'var(--primary)' }}>💵 Tiền nước tăng vọt:</strong> Hóa đơn tiền nước đột ngột tăng gấp 2, gấp 3 dù lượng người sử dụng không đổi.
              </div>
              <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #eee' }}>
                <strong style={{ color: 'var(--primary)' }}>🔄 Đồng hồ quay liên tục:</strong> Đồng hồ nước vẫn quay đều dù bạn đã khóa tất cả các vòi nước trong nhà.
              </div>
              <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #eee' }}>
                <strong style={{ color: 'var(--primary)' }}>🧱 Tường bị ẩm mốc:</strong> Khu vực tường hoặc sàn nhà có dấu hiệu ẩm ướt, mốc xanh dọc theo đường ống nước ngầm.
              </div>
              <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #eee' }}>
                <strong style={{ color: 'var(--primary)' }}>🏢 Bồn chứa nhanh cạn:</strong> Bồn nước trên cao nhanh hết hoặc máy bơm tăng áp chạy liên tục dù không dùng nước.
              </div>
            </div>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>CÔNG NGHỆ CHÚNG TÔI SỬ DỤNG</h3>
            <p>Chúng tôi trang bị các loại máy móc hiện đại nhất để phục vụ khách hàng:</p>
            <ul>
              <li><strong>Máy siêu âm khuếch đại âm thanh:</strong> Nghe tiếng nước phun dưới nền đất hoặc trong tường cực kỳ chính xác.</li>
              <li><strong>Máy đo áp lực đường ống:</strong> Xác định đoạn ống nào đang bị sụt áp để thu hẹp vùng tìm kiếm.</li>
              <li><strong>Camera nội soi đường ống:</strong> Quan sát các điểm nứt vỡ trong lòng ống nước thải hoặc ống thoát sàn.</li>
            </ul>

            <div className="process-box" style={{ marginTop: '40px', background: '#fdf8f0', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>QUY TRÌNH DÒ TÌM TRIỆT ĐỂ</h3>
              <p>📍 <strong>Bước 1:</strong> Tiếp nhận thông tin và tư vấn khách hàng cách khóa van tạm thời.</p>
              <p>📍 <strong>Bước 2:</strong> Thợ đến tận nơi kiểm tra tổng thể hệ thống vòi và thiết bị vệ sinh.</p>
              <p>📍 <strong>Bước 3:</strong> Tiến hành nén áp lực và sử dụng máy siêu âm để định vị điểm vỡ ngầm.</p>
              <p>📍 <strong>Bước 4:</strong> Báo giá sửa chữa (vá ống) ngay sau khi tìm thấy vị trí chính xác.</p>
              <p>📍 <strong>Bước 5:</strong> Thi công sửa chữa, kiểm tra lại áp lực và bàn giao cho khách hàng.</p>
            </div>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>TẦM QUAN TRỌNG CỦA VIỆC PHÁT HIỆN SỚM</h2>
            <p>Việc rò rỉ nước lâu ngày không chỉ làm hao tiền tốn của mà còn gây ảnh hưởng nghiêm trọng đến kết cấu công trình:</p>
            <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '15px' }}>
              <div style={{ padding: '15px', background: '#fff5f5', borderRadius: '8px' }}>❌ <strong>Sụt lún móng:</strong> Nước ngấm sâu làm rỗng nền đất, gây sụt lún công trình cực kỳ nguy hiểm.</div>
              <div style={{ padding: '15px', background: '#fff5f5', borderRadius: '8px' }}>❌ <strong>Hư hại nội thất:</strong> Ẩm mốc làm hỏng sàn gỗ, tủ âm tường và các thiết bị điện tử.</div>
              <div style={{ padding: '15px', background: '#fff5f5', borderRadius: '8px' }}>❌ <strong>Lãng phí tài nguyên:</strong> Hàng khối nước sạch bị mất đi vô ích mỗi ngày.</div>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Đặt Lịch Siêu Âm</h3>
              <p>Tìm đúng điểm - Sửa đúng chỗ. Tiết kiệm chi phí cho bạn!</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Tư Vấn Miễn Phí</a>
            </div>
            
            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Cam Kết 100%</h4>
              <ul style={{ fontSize: '0.85rem' }}>
                <li>✅ Tìm thấy rò rỉ mới lấy phí.</li>
                <li>✅ Không đục phá quá diện tích cần thiết.</li>
                <li>✅ Bảo hành đường hàn ống lâu dài.</li>
                <li>✅ Thợ tay nghề 10 năm kinh nghiệm.</li>
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
        .info-box ul li { margin-bottom: 10px; font-size: 0.9rem; padding-left: 20px; position: relative; }
        .info-box ul li::before { content: '⚡'; position: absolute; left: 0; }
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; }
          .info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
