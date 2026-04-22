import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaDienNuocTaiNha() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Sửa Điện Nước Tại Nhà TPHCM - Nhanh Chóng, An Toàn, Uy Tín"
      description="Dịch vụ sửa điện nước tại nhà TPHCM chuyên nghiệp. Sửa chập điện, thay thiết bị điện, sửa ống nước rò rỉ, thông tắc cống. Thợ giỏi có mặt sau 20 phút."
    >
      <section className="page-header">
        <div className="container">
          <h1>Sửa Điện Nước Tại Nhà TPHCM</h1>
          <p>Giải pháp hoàn hảo cho mọi nhu cầu sửa chữa điện và nước - Phục vụ 24/7 toàn TP.HCM.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 className="detail-title">DỊCH VỤ SỬA ĐIỆN NƯỚC TẠI NHÀ CHUYÊN NGHIỆP</h2>
            <img src="/4.png" alt="Sửa điện nước tại nhà TPHCM" className="featured-img" />

            <p>Dịch vụ <strong>sửa điện nước tại nhà TPHCM</strong> của Điện nước Bảo Trung mang đến giải pháp hoàn hảo cho mọi nhu cầu sửa chữa điện và nước. Với đội ngũ chuyên viên tay nghề cao, chúng tôi tự hào cung cấp dịch vụ sửa chữa điện, sửa chập điện và sửa nước tại các quận huyện của TP. Hồ Chí Minh, cũng như các tỉnh lân cận như Bình Dương, Đồng Nai, Long An.</p>

            <p>Chúng tôi cam kết mang đến sự nhanh chóng, an toàn và hiệu quả cho mọi sự cố điện nước, từ những vấn đề đơn giản đến phức tạp. Với mức giá hợp lý và dịch vụ khách hàng tận tâm, bạn có thể hoàn toàn yên tâm khi lựa chọn Điện Nước Bảo Trung.</p>

            <img src="/sua-dien-tai-nha.png" alt="Thợ sửa điện đang làm việc" className="content-img" />

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>DỊCH VỤ SỬA CHỮA ĐIỆN TẠI NHÀ</h3>
            <ul className="check-list-modern">
              <li><strong>Sửa chập điện:</strong> Kiểm tra và sửa chữa chập điện âm tường, sửa điện nổi, nhảy CB liên tục, rò rỉ điện.</li>
              <li><strong>Lắp đặt thiết bị:</strong> Lắp đặt công tơ điện, đồng hồ điện cho văn phòng, shop, quán cafe, nhà trọ.</li>
              <li><strong>Hệ thống điện:</strong> Sửa mất điện một pha, mất điện cả nhà hoặc một khu vực cụ thể.</li>
              <li><strong>Nâng cấp hệ thống:</strong> Cân tách nguồn điện 3 pha, đi lại đường điện mới đảm bảo an toàn kỹ thuật.</li>
              <li><strong>Thiết bị điện:</strong> Sửa chữa, thay thế ổ cắm, công tắc, bóng đèn, quạt trần, các thiết bị điện gia dụng khác.</li>
            </ul>

            <img src="/sua-ong-nuoc.png" alt="Thợ sửa nước chuyên nghiệp" className="content-img" />

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>DỊCH VỤ SỬA CHỮA NƯỚC TẠI NHÀ</h3>
            <ul className="check-list-modern">
              <li><strong>Xử lý rò rỉ:</strong> Khắc phục sự cố rò rỉ nước, đường ống nước bị vỡ, bục gãy âm tường.</li>
              <li><strong>Thay thế thiết bị:</strong> Thay mới vòi nước, vòi hoa sen, lavabo, bồn rửa bát, két nước bồn cầu.</li>
              <li><strong>Thông tắc:</strong> Thông tắc cống, bồn cầu, lavabo, chậu rửa bát nhanh chóng bằng máy lò xo.</li>
              <li><strong>Lắp đặt hệ thống:</strong> Thiết kế và lắp đặt hệ thống đường nước mới, lắp máy bơm nước, bình nóng lạnh.</li>
              <li><strong>Máy lọc nước:</strong> Sửa chữa và thay lõi máy lọc nước, đảm bảo nguồn nước sạch cho gia đình.</li>
            </ul>

            <img src="/1.png" alt="Công tác lắp đặt thiết bị điện nước" className="content-img" />

            <div className="process-box" style={{ marginTop: '40px', background: '#fef9f0', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>QUY TRÌNH SỬA ĐIỆN NƯỚC TẠI BẢO TRUNG</h3>
              <div className="process-list">
                {[
                  { step: 1, title: 'Liên hệ', desc: 'Khách hàng liên hệ qua Hotline 0353.422.680 để cung cấp thông tin sự cố.' },
                  { step: 2, title: 'Tư vấn & Báo giá', desc: 'Kỹ thuật viên tư vấn phương án và báo giá sơ bộ dựa trên tình hình thực tế.' },
                  { step: 3, title: 'Khảo sát', desc: 'Thợ đến tận nơi kiểm tra, xác định nguyên nhân và đề xuất giải pháp tối ưu.' },
                  { step: 4, title: 'Sửa chữa', desc: 'Sau khi thống nhất, tiến hành sửa chữa nhanh chóng, đảm bảo an toàn chất lượng.' },
                  { step: 5, title: 'Bảo hành', desc: 'Nghiệm thu, bàn giao và viết phiếu bảo hành hậu mãi dài hạn cho khách hàng.' }
                ].map((item) => (
                  <div key={item.step} style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>{item.step}</div>
                    <div><strong>{item.title}:</strong> {item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <img src="/2.png" alt="Nghiệm thu công trình sửa điện nước" className="content-img" />

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>TẠI SAO NÊN CHỌN ĐIỆN NƯỚC BẢO TRUNG?</h2>
            <div className="why-grid">
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>👷 Thợ Chuyên Nghiệp</h4>
                <p style={{ fontSize: '0.9rem' }}>Đội ngũ thợ tay nghề cao, kinh nghiệm dày dặn, được đào tạo bài bản và luôn tận tình với khách hàng.</p>
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>💰 Giá Thành Tiết Kiệm</h4>
                <p style={{ fontSize: '0.9rem' }}>Thông báo rõ ràng về giá trước khi làm, không chi phí phát sinh, mức giá luôn cạnh tranh nhất thị trường.</p>
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>🛡️ Bảo Hành Dài Hạn</h4>
                <p style={{ fontSize: '0.9rem' }}>Chế độ bảo hành lâu dài, hỗ trợ khắc phục sự cố nhanh chóng ngay khi nhận được yêu cầu.</p>
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>📄 Hóa Đơn Minh Bạch</h4>
                <p style={{ fontSize: '0.9rem' }}>Cung cấp đầy đủ hợp đồng, chứng từ và hóa đơn rõ ràng khi khách hàng có yêu cầu.</p>
              </div>
            </div>

            <img src="/sua-ong-nuoc-bi-vo-7.png" alt="sửa điện nước tại nhà hcm" className="content-img" />


            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>ĐỊA CHỈ LIÊN HỆ KHI CẦN SỬA ĐIỆN NƯỚC TP.HCM</h2>
            <p>Chúng tôi phục vụ tại tất cả các quận huyện TP.HCM: Quận 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, Bình Thạnh, Gò Vấp, Tân Bình, Tân Phú, Phú Nhuận, Thủ Đức...</p>

            <div className="branch-grid">
              <div className="branch-col">
                <p>📍 Sửa điện nước tại nhà Quận 1</p>
                <p>📍 Sửa điện nước tại nhà Quận 2</p>
                <p>📍 Sửa điện nước tại nhà Quận 3</p>
                <p>📍 Sửa điện nước tại nhà Quận 4</p>
                <p>📍 Sửa điện nước tại nhà Quận 5</p>
                <p>📍 Sửa điện nước tại nhà Quận 6</p>
                <p>📍 Sửa điện nước tại nhà Quận 7</p>
                <p>📍 Sửa điện nước tại nhà Quận 8</p>
                <p>📍 Sửa điện nước tại nhà Quận 9</p>
              </div>
              <div className="branch-col">
                <p>📍 Sửa điện nước tại nhà Quận 10</p>
                <p>📍 Sửa điện nước tại nhà Quận 11</p>
                <p>📍 Sửa điện nước tại nhà Quận 12</p>
                <p>📍 Sửa điện nước tại nhà Quận Tân Phú</p>
                <p>📍 Sửa điện nước tại nhà Quận Bình Tân</p>
                <p>📍 Sửa điện nước tại nhà Quận Phú Nhuận</p>
                <p>📍 Sửa điện nước tại nhà Quận Tân Bình</p>
                <p>📍 Sửa điện nước tại nhà Quận Gò Vấp</p>
                <p>📍 Sửa điện nước tại nhà Quận Thủ Đức</p>
              </div>
            </div>
            <img src="/7.png" alt="sửa điện nước hcm" className="content-img" />
            <div style={{ marginTop: '40px', padding: '25px', background: 'var(--secondary)', borderRadius: '12px', color: 'white' }}>
              <p style={{ margin: 0, color: 'white', fontStyle: 'italic' }}>"Điện nước Bảo Trung - Đối tác tin cậy mang lại sự an toàn cho ngôi nhà của bạn. Gọi ngay để được hỗ trợ sửa điện nước nhanh nhất!"</p>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Sửa Điện Nước Tại Nhà</h3>
              <p>Phục vụ 24/7 - Có mặt sau 20 phút!</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Tư Vấn Ngay</a>
            </div>

            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Cam Kết Phục Vụ</h4>
              <ul style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <li>✅ Phục vụ tất cả các ngày lễ.</li>
                <li>✅ Thợ tay nghề giỏi, làm việc sạch sẽ.</li>
                <li>✅ Bảo hành từ 6-24 tháng tùy hạng mục.</li>
                <li>✅ Hoàn tiền nếu khách không hài lòng.</li>
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
        .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 20px; }
        .branch-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px; font-size: 0.85rem; }

        .detail-title { font-size: 2rem; margin-bottom: 20px; color: var(--primary); }
        .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 20px; }
        .branch-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px; font-size: 0.85rem; }

        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; gap: 30px; }
          .content { padding: 25px; }
          .detail-title { font-size: 1.5rem !important; }
          .why-grid, .branch-grid { grid-template-columns: 1fr !important; }
          .page-header h1 { font-size: 1.8rem; }
          .content p { font-size: 0.95rem; }
        }
      `}</style>
    </Layout>
  )
}
