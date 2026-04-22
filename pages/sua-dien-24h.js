import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaDien24h() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Thợ Sửa Điện 24h Tại Nhà TPHCM - Nhanh Chóng, An Toàn 15-30 Phút"
      description="Dịch vụ thợ sửa điện 24h chuyên nghiệp tại TP.HCM. Sửa chập điện, mất điện đột ngột, cháy nổ hệ thống điện. Phục vụ 24/7 kể cả ngày lễ và đêm khuya."
    >
      <section className="page-header">
        <div className="container">
          <h1>THỢ SỬA ĐIỆN 24H</h1>
          <p>Dịch vụ sửa chữa điện khẩn cấp, phục vụ mọi lúc mọi nơi tại TP. Hồ Chí Minh.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--primary)' }}>THỢ SỬA CHẬP ĐIỆN 24H TẠI NHÀ TPHCM</h2>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '15px' }}>Dịch vụ sửa điện 24h uy tín</h3>
            <img src="/sua-dien-tai-nha.png" alt="Thợ sửa điện 24h tại nhà" className="featured-img" />

            <p>Khi hệ thống điện nhà bạn gặp sự cố như chập điện, cháy nổ, mất điện đột ngột, việc gọi ngay <strong>thợ sửa điện 24h</strong> chuyên nghiệp là vô cùng cần thiết. Bảo Trung chuyên cung cấp dịch vụ thợ sửa điện 24h nhanh chóng, an toàn, phục vụ mọi lúc mọi nơi. Với đội ngũ thợ sửa điện giàu kinh nghiệm, chúng tôi cam kết khắc phục sự cố điện một cách triệt để, đảm bảo an toàn cho gia đình và doanh nghiệp của bạn.</p>

            <img src="/sua-chap-dien-1.png" alt="Sửa chữa hệ thống điện 24/7" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Các dịch vụ Điện Nước Bảo Trung cung cấp</h2>
            <p>Với đội ngũ thợ sửa điện tay nghề cao, chúng tôi tự hào cung cấp dịch vụ sửa chữa điện, sửa chập điện tại các quận huyện của TP. Hồ Chí Minh. Các dịch vụ Điện Nước Bảo Trung cung cấp, bao gồm:</p>
            <ul className="check-list-modern">
              <li>Sửa chữa chập điện, cháy nổ hệ thống điện</li>
              <li>Khắc phục sự cố mất điện, điện chập chờn, nhấp nháy</li>
              <li>Thay thế ổ cắm, công tắc, aptomat bị hỏng</li>
              <li>Lắp đặt, sửa chữa hệ thống điện dân dụng & công nghiệp</li>
              <li>Kiểm tra đoản mạch, rò rỉ điện và bảo trì định kỳ</li>
              <li>Hỗ trợ sửa điện nước kết hợp (nếu cần)</li>
            </ul>

            <img src="/sua-chap-dien-3.png" alt="Khắc phục sự cố chập cháy điện" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Quy trình làm việc của thợ sửa điện 24h</h2>
            <p>Chúng tôi hiểu rằng quy trình làm việc rõ ràng, minh bạch sẽ mang lại sự an tâm cho khách hàng. Để đảm bảo chất lượng và an toàn, quy trình làm việc của thợ sửa điện Bảo Trung được thực hiện theo các bước:</p>
            <div className="process-box" style={{ background: '#f8f9fa', padding: '30px', borderRadius: 'var(--radius)' }}>
              <p><strong>Bước 1: Tiếp nhận thông tin:</strong> Khách hàng gọi hotline, mô tả sự cố. Cử thợ đến ngay: Đội ngũ thợ sửa điện 24h có mặt sau 15-30 phút.</p>
              <p><strong>Bước 2: Kiểm tra & báo giá:</strong> Chẩn đoán nguyên nhân, báo giá trước khi sửa.</p>
              <p><strong>Bước 3: Sửa chữa nhanh chóng:</strong> Khắc phục sự cố bằng thiết bị chuyên dụng.</p>
              <p><strong>Bước 4: Bảo hành dài hạn:</strong> Cam kết hỗ trợ sau sửa chữa.</p>
            </div>

            <img src="/lap-dong-ho-dien-6.png" alt="Quy trình sửa điện chuyên nghiệp" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Lý do nên chọn thợ sửa điện tại Bảo Trung</h2>
            <p>Việc lựa chọn một dịch vụ sửa điện uy tín và chuyên nghiệp là điều hết sức cần thiết. Dưới đây là những lý do rõ ràng để bạn có thể an tâm khi chọn dịch vụ thợ sửa điện 24h của Bảo Trung:</p>
            <ul className="check-list-modern">
              <li>Thợ sửa điện tay nghề cao, nhiều năm kinh nghiệm.</li>
              <li>Phục vụ 24/7, kể cả đêm khuya, ngày lễ.</li>
              <li>Giá cả công khai, không phát sinh chi phí ẩn.</li>
              <li>Thiết bị hiện đại, đảm bảo an toàn tuyệt đối.</li>
              <li>Hỗ trợ bảo hành, tư vấn cách sử dụng điện an toàn.</li>
            </ul>

            <img src="/lap-dong-ho-dien-3.png" alt="Thợ sửa điện Bảo Trung phục vụ tận tâm" className="content-img" />

            <p style={{ marginTop: '20px' }}>Đừng để sự cố điện làm gián đoạn cuộc sống của bạn. Liên hệ ngay với đội ngũ thợ sửa điện tại nhà chuyên nghiệp của chúng tôi qua hotline <strong>039.330.3524 - 0353.422.680</strong> để được hỗ trợ nhanh nhất. Điện Nước Bảo Trung cam kết mang đến giải pháp tối ưu với chất lượng dịch vụ vượt trội và giá cả hợp lý nhất thị trường!</p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Các Khu Vực Thợ Sửa Điện 24h Bảo Trung Phục Vụ Tại TP.HCM</h2>
            <p>Điện Nước Bảo Trung cung cấp dịch vụ thợ sửa điện 24h tại nhiều quận trong TP.HCM, bao gồm:</p>
            <div className="branch-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px', fontSize: '0.85rem' }}>
              <div className="branch-col">
                <p>📍 Thợ sửa điện 24h Quận 1, 2, 3, 4, 5, 6</p>
                <p>📍 Thợ sửa điện 24h Quận 7, 8, 9, 10, 11, 12</p>
                <p>📍 Thợ sửa điện 24h Bình Thạnh, Gò Vấp</p>
              </div>
              <div className="branch-col">
                <p>📍 Thợ sửa điện 24h Tân Bình, Tân Phú</p>
                <p>📍 Thợ sửa điện 24h Phú Nhuận, Thủ Đức</p>
                <p>📍 <strong>Luôn sẵn sàng phục vụ nhanh chóng và hiệu quả.</strong></p>
              </div>
            </div>

            <div style={{ marginTop: '40px', padding: '25px', background: 'var(--secondary)', borderRadius: '12px', color: 'white' }}>
              <p style={{ margin: 0, color: 'white', fontStyle: 'italic' }}>"Điện Nước Bảo Trung luôn sẵn sàng phục vụ bạn với dịch vụ sửa điện nhanh chóng và hiệu quả 24/7!"</p>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Thợ Sửa Điện 24h</h3>
              <p>Có mặt sau 15-30 phút - Phục vụ xuyên đêm!</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Tư Vấn Ngay</a>
            </div>

            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Sự Cố Khẩn Cấp</h4>
              <ul style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <li>❌ Cháy nổ tủ điện, ổ cắm.</li>
                <li>⚠️ Mất điện đột ngột cả nhà.</li>
                <li>⚠️ Aptomat nhảy liên tục.</li>
                <li>⚠️ Có mùi khét từ đường dây.</li>
              </ul>
            </div>

            <div className="info-box" style={{ marginTop: '20px' }}>
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Cam Kết 24/7</h4>
              <ul style={{ fontSize: '0.85rem' }}>
                <li>✅ Phục vụ 24/24.</li>
                <li>✅ Thợ trực tại các quận.</li>
                <li>✅ Giá đêm như giá ngày.</li>
                <li>✅ Bảo hành uy tín.</li>
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
          .branch-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
