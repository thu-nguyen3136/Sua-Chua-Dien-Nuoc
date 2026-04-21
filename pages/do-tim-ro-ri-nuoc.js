import Layout from '../components/Layout'
import Link from 'next/link'

export default function DoTimRoRiNuoc() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Thợ Dò Tìm Rò Rỉ Nước TP.HCM - Siêu Âm Chính Xác Điểm Bục Vỡ"
      description="Dịch vụ thợ dò tìm rò rỉ nước chuyên nghiệp tại TP.HCM. Sử dụng máy siêu âm công nghệ cao định vị điểm vỡ âm tường, dưới nền đất. Tiết kiệm chi phí, không đục phá lan man."
    >
      <section className="page-header">
        <div className="container">
          <h1>Thợ Dò Tìm Rò Rỉ Nước Chuyên Nghiệp</h1>
          <p>Định vị chính xác vị trí rò rỉ ngầm bằng công nghệ siêu âm hiện đại nhất hiện nay.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>GIẢI PHÁP DÒ TÌM RÒ RỈ NƯỚC HIỆU QUẢ</h2>
            <img src="/tho-do-tim-ro-ri-nuoc.png" alt="Dò tìm rò rỉ nước bằng máy siêu âm" className="featured-img" />

            <p><strong>Rò rỉ nước</strong> từ các đường ống âm tường, âm nền là một nguyên nhân gây lãng phí tài chính đáng kể cho các hộ gia đình và doanh nghiệp. Có những sự cố có thể nhìn thấy, nhưng phần lớn là rò rỉ ngầm khó quan sát bằng mắt thường. <strong>Điện Nước Bảo Trung</strong> cung cấp giải pháp máy siêu âm dò tìm chính xác 100% vị trí bục vỡ để xử lý dứt điểm.</p>

            <p>Đừng để tiền nước tăng cao vô lý! Liên hệ ngay Hotline <strong>039.330.3524 - 0353.422.680</strong>, đội thợ chuyên nghiệp của chúng tôi sẽ có mặt sau 20 phút để hỗ trợ bạn.</p>

            <img src="/tho-do-tim-ro-ri-nuoc-2.png" alt="Kiểm tra đồng hồ nước bị rò rỉ" className="content-img" />

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>TẠI SAO CẦN GỌI THỢ DÒ TÌM RÒ RỈ NƯỚC CHUYÊN NGHIỆP?</h3>
            <p>Hầu hết đường ống nước hiện nay đều được thi công âm tường hoặc âm nền. Khi xảy ra bục vỡ ngầm, bạn khó có thể phát hiện nếu không có hiểu biết chuyên môn và thiết bị hỗ trợ vì:</p>
            <ul className="check-list-modern">
              <li><strong>Phát hiện khó khăn:</strong> Nước rò rỉ ngấm sâu vào móng hoặc chảy vào cống thoát nên không thấy vết ướt trên bề mặt.</li>
              <li><strong>Sửa chữa phức tạp:</strong> Việc xác định đúng vị trí giúp hạn chế tối đa việc đục phá gạch, tường nhà bạn.</li>
              <li><strong>Kinh nghiệm xử lý:</strong> Thợ chuyên môn sẽ biết cách bịt điểm vỡ một cách bền vững, tránh tái phát.</li>
            </ul>

            <img src="/tho-do-tim-ro-ri-nuoc-3.png" alt="Thợ điện nước sử dụng máy dò tìm hiện đại" className="content-img" />

            <h2 style={{ fontSize: '1.8rem', marginTop: '30px', color: 'var(--secondary)' }}>CÁCH KIỂM TRA PHÁT HIỆN RÒ RỈ NƯỚC ĐƠN GIẢN</h2>
            <p>Bạn có thể tự kiểm tra hệ thống nước tại nhà qua 3 dấu hiệu sau:</p>
            <div className="issue-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)' }}>📈 Tiền nước tăng vọt</h4>
                <p style={{ fontSize: '0.9rem' }}>Hóa đơn tiền nước tăng đột ngột mặc dù nhu cầu sử dụng của gia đình không thay đổi.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)' }}>⏲️ Đồng hồ nước quay</h4>
                <p style={{ fontSize: '0.9rem' }}>Đồng hồ nước vẫn quay đều khi bạn đã khóa tất cả các vòi nước và thiết bị trong nhà.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)' }}>🏗️ Bồn chứa nhanh cạn</h4>
                <p style={{ fontSize: '0.9rem' }}>Nước ở bồn chứa bị cạn vào buổi sáng một cách vô lý hoặc máy bơm tăng áp chạy liên tục.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)' }}>🧱 Thấm mốc đột ngột</h4>
                <p style={{ fontSize: '0.9rem' }}>Tường hoặc sàn nhà bỗng nhiên bị ẩm mốc, loang nổ nước dọc theo hộp kỹ thuật hoặc đường ống.</p>
              </div>
            </div>

            <img src="/tho-do-tim-ro-ri-nuoc-4.png" alt="Phát hiện sự cố rò rỉ nước âm nền" className="content-img" />

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>ƯU ĐIỂM CỦA VIỆC DÒ ỐNG NƯỚC BỂ NGẦM</h3>
            <ul className="check-list-modern">
              <li><strong>Tiết kiệm chi phí:</strong> Chi phí dò và vá ống điểm vỡ rẻ hơn nhiều so với việc thi công lại toàn bộ hệ thống nước mới.</li>
              <li><strong>Thời gian nhanh chóng:</strong> Khắc phục sự cố ngay trong ngày, giúp bạn có nước sinh hoạt ổn định trở lại.</li>
              <li><strong>Đảm bảo thẩm mỹ:</strong> Chỉ đục đúng 1 viên gạch tại vị trí vỡ để sửa chữa, thay vì đi lại ống nổi lằng nhằng.</li>
            </ul>

            <img src="/tho-do-tim-ro-ri-nuoc-5.png" alt="Sửa chữa ống nước sau khi dò tìm chính xác" className="content-img" />

            <div className="process-box" style={{ marginTop: '40px', background: '#fef9f0', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>ƯU ĐIỂM DỊCH VỤ TẠI BẢO TRUNG</h3>
              <ul className="check-list-modern" style={{ columns: 1 }}>
                <li>Quy trình làm việc rõ ràng, thợ tác phong chuyên nghiệp.</li>
                <li>Kiểm tra, khảo sát và tư vấn giải pháp hoàn toàn miễn phí.</li>
                <li>Sử dụng các loại máy dò tìm rò rỉ hiện đại nhất (siêu âm khuếch đại tần số).</li>
                <li>Tìm thấy vị trí rò rỉ mới tính phí dịch vụ.</li>
                <li>Bảo hành lâu dài cho vị trí đã khắc phục.</li>
              </ul>
            </div>

            <img src="/tho-do-tim-ro-ri-nuoc-6.png" alt="Hoàn thiện công tác dò tìm rò rỉ" className="content-img" />

            <div style={{ marginTop: '40px', padding: '25px', background: 'var(--secondary)', borderRadius: '12px', color: 'white' }}>
              <p style={{ margin: 0, color: 'white', fontStyle: 'italic' }}>"Điện nước Bảo Trung - Đơn vị chuyên bảo trì, sửa chữa điện nước, máy nước nóng chuyên nghiệp. Chúng tôi trực 24/24 ở khắp các quận huyện TP.HCM, cam kết có mặt sau 20 phút gọi!"</p>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Dò Tìm Rò Rỉ Ngay</h3>
              <p>Phí ưu đãi - Cam kết tìm thấy điểm vỡ!</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Tư Vấn Qua Zalo</a>
            </div>

            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Cam Kết Chất Lượng</h4>
              <ul style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <li>✅ Định vị chính xác 100%.</li>
                <li>✅ Thợ có lý lịch rõ ràng.</li>
                <li>✅ Thiết bị máy móc hiện đại.</li>
                <li>✅ Có mặt tại Q1, Q3, Q7, Q9, Thủ Đức...</li>
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
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; }
          .issue-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
