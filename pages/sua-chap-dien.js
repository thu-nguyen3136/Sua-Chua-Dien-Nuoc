import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaChapDien() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Sửa Chập Điện Tại Nhà TP.HCM - Xử Lý Nhanh, An Toàn Triệt Để"
      description="Dịch vụ sửa chập điện khẩn cấp tại TP.HCM. Thợ giỏi xử lý triệt để chập điện âm tường, cháy dây điện, nhảy aptomat. Có mặt sau 20 phút, báo giá minh bạch, an toàn 24/7."
    >
      <section className="page-header">
        <div className="container">
          <h1>Sửa Chập Điện Tại Nhà TP.HCM</h1>
          <p>Xử lý triệt để các sự cố cháy nổ điện, nhảy aptomat khẩn cấp 24/7 - Đội ngũ thợ tay nghề cao.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>DỊCH VỤ SỬA CHẬP ĐIỆN UY TÍN, CHUYÊN NGHIỆP</h2>
            <img src="/sua-chap-dien.png" alt="Sửa chập điện tại nhà TPHCM" className="featured-img" />

            <p>Dịch vụ <strong>sửa chập điện tại nhà</strong> của Điện nước Bảo Trung là đơn vị cung cấp các giải pháp sửa chữa điện uy tín, chuyên nghiệp tại TP. Hồ Chí Minh và các tỉnh lân cận như Bình Dương, Đồng Nai, Long An. Đội ngũ chuyên viên tay nghề cao của chúng tôi đáp ứng mọi nhu cầu về sự cố điện từ đơn giản đến phức tạp, cam kết nhanh chóng, an toàn và hiệu quả.</p>

            <p>Đừng để các sự cố điện làm gián đoạn cuộc sống và đe dọa an toàn gia đình bạn. Hãy liên hệ ngay Hotline: <strong>0353.422.680 - 039.330.3524</strong> để được tư vấn và hỗ trợ nhanh nhất!</p>


            <img src="/sua-chap-dien-1.png" alt="Sửa chập điện tại nhà" className="content-img" />

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>CÁC NGUYÊN NHÂN GÂY CHẬP CHÁY ĐIỆN THƯỜNG GẶP</h3>
            <p>Phần lớn các sự cố cháy nổ điện trong gia đình thường bắt nguồn từ các nguyên nhân sau:</p>

            <div className="cause-list">
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: 'var(--primary)' }}>1. Cháy dây điện do quá tải</h4>
                <p style={{ fontSize: '0.95rem' }}>Dòng điện các phụ tải tiêu thụ quá lớn so với dòng định mức của dây dẫn hoặc thiết bị đóng cắt. Đây là nguyên nhân hàng đầu gây chập điện trong sinh hoạt.</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: 'var(--primary)' }}>2. Cháy do chập mạch (Short Circuit)</h4>
                <p style={{ fontSize: '0.95rem' }}>Hiện tượng các pha bị chập vào nhau hoặc dây pha chạm đất làm cường độ dòng điện tăng đột ngột, phát sinh tia lửa điện gây hỏa hoạn.</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: 'var(--primary)' }}>3. Mối nối dây không tốt</h4>
                <p style={{ fontSize: '0.95rem' }}>Điện trở tại điểm nối tăng cao làm nóng đỏ và cháy dây dẫn. Mối nối lỏng lẻo dễ phát sinh tia lửa điện phóng qua không khí.</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: 'var(--primary)' }}>4. Truyền nhiệt từ vật tiêu thụ điện</h4>
                <p style={{ fontSize: '0.95rem' }}>Thiết bị tỏa nhiệt mạnh nếu không được kiểm soát hoặc đặt gần vật dễ cháy sẽ biến thành nguồn nhiệt gây hỏa hoạn.</p>
              </div>
            </div>

            <img src="/sua-chap-dien-2.png" alt="Xử lý dây điện bị cháy nổ" className="content-img" />
            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>LỢI ÍCH KHI SỬA CHỮA ĐIỆN KỊP THỜI</h3>
            <ul className="check-list-modern">
              <li><strong>Đảm bảo an toàn:</strong> Giảm nguy cơ hỏa hoạn, giật điện đe dọa tính mạng và tài sản.</li>
              <li><strong>Ngăn chặn lan rộng:</strong> Xử lý sớm tránh hư hỏng hệ thống điện toàn nhà hoặc hư hỏng thiết bị đắt tiền.</li>
              <li><strong>Vận hành ổn định:</strong> Duy trì dòng điện ổn định, kéo dài tuổi thọ cho tủ lạnh, máy giặt, tivi...</li>
              <li><strong>Tiết kiệm chi phí:</strong> Sửa sớm luôn rẻ hơn so với việc phải thay mới toàn bộ đường dây hoặc thiết bị bị cháy.</li>
            </ul>

            <img src="/sua-chap-dien-3.png" alt="thợ xử lý chập điện tại nhà" className="content-img" />
            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>QUY TRÌNH THỰC HIỆN TẠI BẢO TRUNG</h3>
            <div className="process-box" style={{ background: '#f8f9fa', padding: '30px', borderRadius: 'var(--radius)' }}>
              {[
                { step: 'B1', title: 'Liên hệ', desc: 'Tiếp nhận thông tin sự cố qua Hotline 0353.422.680.' },
                { step: 'B2', title: 'Tư vấn', desc: 'Kỹ thuật viên tư vấn phương án và báo giá sơ bộ.' },
                { step: 'B3', title: 'Khảo sát', desc: 'Kiểm tra thực tế tận nơi để xác định chính xác nguyên nhân.' },
                { step: 'B4', title: 'Sửa chữa', desc: 'Tiến hành xử lý, thay thế linh kiện chính hãng nếu cần.' },
                { step: 'B5', title: 'Bàn giao', desc: 'Kiểm tra hệ thống, nghiệm thu và bàn giao cho khách hàng.' },
                { step: 'B6', title: 'Bản hành', desc: 'Viết phiếu bảo hành và hỗ trợ hậu mãi chu đáo.' }
              ].map((item) => (
                <div key={item.step} style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{item.step}:</span>
                  <p style={{ margin: 0 }}><strong>{item.title}:</strong> {item.desc}</p>
                </div>
              ))}
            </div>

            <img src="/sua-chap-dien-4.png" alt="Sửa chập điện tại nhà" className="content-img" />

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>TẦM NHÌN VÀ CAM KẾT</h2>
            <p>Chúng tôi luôn nỗ lực không ngừng để trở thành đối tác tin cậy, bảo vệ sự an toàn và tiện nghi cho ngôi nhà của bạn. Với phương châm <strong>"An toàn của bạn là trách nhiệm của chúng tôi"</strong>, Điện Nước Bảo Trung cam kết:</p>
            <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>👷 Thợ Tay Nghề Cao</h4>
                <p style={{ fontSize: '0.9rem' }}>Đội ngũ thợ được đào tạo bài bản, chuyên nghiệp, thái độ làm việc lịch sự và trung thực.</p>
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>💰 Giá Tiết Kiệm</h4>
                <p style={{ fontSize: '0.9rem' }}>Báo giá công khai, minh bạch trước khi sửa chữa. Cam kết không có chi phí phát sinh.</p>
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>🛡️ Bảo Hành Lâu Năm</h4>
                <p style={{ fontSize: '0.9rem' }}>Chế độ bảo hành dài hạn tùy theo hạng mục sửa chữa. Hỗ trợ 24/7 khi có yêu cầu.</p>
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>📄 Hóa Đơn Rõ Ràng</h4>
                <p style={{ fontSize: '0.9rem' }}>Cung cấp đầy đủ hợp đồng, chứng từ, hóa đơn VAT theo yêu cầu của quý khách.</p>
              </div>
            </div>

            <img src="/sua-chap-dien-5.png" alt="xử lý sự cố chập điện tại nhà" className="content-img" />

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>KHU VỰC PHỤC VỤ TẠI TP.HCM</h2>
            <p>Chúng tôi có thợ trực chiến tại khắp các quận huyện TP.HCM, đảm bảo có mặt nhanh nhất chỉ sau 20 - 30 phút gọi:</p>

            <div className="branch-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px', fontSize: '0.85rem' }}>
              <div className="branch-col">
                <p>📍 Sửa chập điện Quận 1, 2, 3</p>
                <p>📍 Sửa chập điện Quận 4, 5, 6</p>
                <p>📍 Sửa chập điện Quận 7, 8, 9</p>
                <p>📍 Sửa chập điện Quận 10, 11, 12</p>
              </div>
              <div className="branch-col">
                <p>📍 Sửa chập điện Quận Tân Bình, Tân Phú</p>
                <p>📍 Sửa chập điện Quận Bình Thạnh, Gò Vấp</p>
                <p>📍 Sửa chập điện Quận Phú Nhuận, Thủ Đức</p>
                <p>📍 Sửa chập điện Quận Bình Tân, Hóc Môn</p>
              </div>
            </div>

            <img src="/sua-chap-dien-6.png" alt="thợ sửa chập điện tại nhà" className="content-img" />
            <div style={{ marginTop: '20px', padding: '25px', background: 'var(--secondary)', borderRadius: '12px', color: 'white' }}>
              <p style={{ margin: 0, color: 'white', fontStyle: 'italic' }}>"Điện nước Bảo Trung - Luôn đồng hành bảo vệ sự an toàn và tiện nghi cho ngôi nhà của bạn. Hãy để chúng tôi lo lắng về hệ thống điện cho bạn!"</p>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Sửa Chập Điện Khẩn Cấp</h3>
              <p>Thợ chuyên môn cao - Giải quyết triệt để sự cố!</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Tư Vấn Qua Zalo</a>
            </div>

            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Lưu Ý An Toàn</h4>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '15px' }}>Khi có dấu hiệu chập điện:</p>
              <ul style={{ fontSize: '0.85rem' }}>
                <li>❌ Không chạm vào thiết bị hở điện.</li>
                <li>⚠️ Ngắt Aptomat tổng ngay lập tức.</li>
                <li>❌ Không tự ý sửa chữa nếu không có chuyên môn.</li>
                <li>📞 Gọi thợ điện chuyên nghiệp hỗ trợ nhanh.</li>
              </ul>
            </div>

            <div className="info-box" style={{ marginTop: '20px' }}>
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Cam Kết</h4>
              <ul style={{ fontSize: '0.85rem' }}>
                <li>✅ Có mặt sau 20 phút gọi.</li>
                <li>✅ Kiểm tra miễn phí 100%.</li>
                <li>✅ Linh kiện thay thế chính hãng.</li>
                <li>✅ Bảo hành sau sửa chữa chu đáo.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-header { background: var(--primary); color: white; padding: 60px 0; text-align: center; }
        .page-header h1 { font-size: 2.5rem; margin-bottom: 10px; }
        .service-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; align-items: start; }
        .content { background: white; padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .content h2 { margin: 30px 0 15px; }
        .content p { margin-bottom: 20px; color: var(--text-light); line-height: 1.8; }
        .featured-img { width: 100%; border-radius: 12px; margin-bottom: 25px; box-shadow: var(--shadow); }
        .content-img { width: 100%; border-radius: 12px; margin: 20px 0; box-shadow: var(--shadow); }
        .sidebar { position: sticky; top: 100px; }
        .cta-box { color: white; padding: 30px; border-radius: var(--radius); text-align: center; margin-bottom: 30px; }
        .hotline-btn { display: block; width: 100%; margin: 20px 0 10px; font-size: 1.2rem; }
        .zalo-btn { display: block; width: 100%; background: #0084ff; border: none; }
        .info-box { background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .info-box h4 { border-bottom: 2px solid; padding-bottom: 10px; margin-bottom: 15px; }
        .check-list-modern { list-style: none; padding: 0; }
        .check-list-modern li { position: relative; padding-left: 30px; margin-bottom: 12px; color: var(--text-light); line-height: 1.6; font-size: 0.95rem; }
        .check-list-modern li::before { content: '✓'; position: absolute; left: 0; color: var(--primary); font-weight: bold; font-size: 1.2rem; top: -2px; }
        @media (max-width: 992px) {
          .service-grid { grid-template-columns: 1fr; }
          .sidebar { position: static; }
        }
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
