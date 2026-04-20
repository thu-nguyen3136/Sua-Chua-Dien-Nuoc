import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaChapDien() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Sửa Chập Điện Tại Nhà TP.HCM - Xử Lý Nhanh, An Toàn 24/7"
      description="Dịch vụ sửa chập điện, nhảy aptomat khẩn cấp tại TP.HCM. Thợ giỏi xử lý triệt để chập điện âm tường, rò rỉ điện. Có mặt sau 20 phút, báo giá minh bạch."
    >
      <section className="page-header">
        <div className="container">
          <h1>Sửa Chập Điện Tại Nhà TP.HCM</h1>
          <p>Xử lý triệt để các sự cố cháy nổ điện, nhảy aptomat khẩn cấp 24/7 - An toàn cho gia đình bạn.</p>
        </div>
      </section>


      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>DỊCH VỤ SỬA CHẬP ĐIỆN KHẨN CẤP 24/7</h2>
            <img src="/sua-chap-dien.png" alt="Sửa chập điện chuyên nghiệp" className="featured-img" />
            
            <p>Trong sinh hoạt hàng ngày, sự cố chập điện là một trong những rủi ro nguy hiểm nhất, có thể gây hỏa hoạn và đe dọa tính mạng. Khi gặp tình trạng nhảy aptomat liên tục hoặc có mùi khét, hãy ngắt cầu dao tổng và gọi ngay cho <strong>Điện Nước Bảo Trung</strong> để được hỗ trợ kịp thời.</p>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>TẠI SAO PHẢI XỬ LÝ CHẬP ĐIỆN TRIỆT ĐỂ?</h3>
            <p>Việc sửa chữa điện nhanh chóng và triệt để không chỉ là khắc phục sự cố tức thời mà còn mang lại nhiều lợi ích quan trọng:</p>
            <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div className="feature-item" style={{ background: '#fff5f5', padding: '15px', borderRadius: '8px' }}>
                <strong style={{ color: '#e53e3e' }}>🛡️ Đảm bảo an toàn:</strong> Giảm tối đa nguy cơ cháy nổ, giật điện bảo vệ con người và tài sản.
              </div>
              <div className="feature-item" style={{ background: '#fff5f5', padding: '15px', borderRadius: '8px' }}>
                <strong style={{ color: '#e53e3e' }}>🔌 Ngăn chặn lan rộng:</strong> Xử lý sớm giúp hệ thống tránh bị quá tải hoặc hư hỏng linh kiện khác.
              </div>
              <div className="feature-item" style={{ background: '#fff5f5', padding: '15px', borderRadius: '8px' }}>
                <strong style={{ color: '#e53e3e' }}>💡 Vận hành ổn định:</strong> Duy trì hiệu suất và kéo dài tuổi thọ của các thiết bị điện trong nhà.
              </div>
              <div className="feature-item" style={{ background: '#fff5f5', padding: '15px', borderRadius: '8px' }}>
                <strong style={{ color: '#e53e3e' }}>💰 Tiết kiệm chi phí:</strong> Ngăn chặn hư hỏng nặng giúp bạn tiết kiệm được những khoản chi lớn về sau.
              </div>
            </div>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>CÁC NGUYÊN NHÂN GÂY CHẬP CHÁY ĐIỆN PHỔ BIẾN</h3>
            <ul>
              <li><strong>Quá tải hệ thống:</strong> Sử dụng quá nhiều thiết bị công suất lớn (máy lạnh, máy tắm nóng) vượt định mức dây dẫn.</li>
              <li><strong>Chập mạch (Short circuit):</strong> Do dây pha bị hở chạm đất hoặc các pha chạm vào nhau phát sinh tia lửa điện.</li>
              <li><strong>Mối nối dây không tốt:</strong> Điểm nối lỏng lẻo gây nóng đỏ và cháy lớp vỏ bảo vệ bên ngoài.</li>
              <li><strong>Truyền nhiệt từ thiết bị:</strong> Các thiết bị tỏa nhiệt mạnh đặt cạnh vật dễ cháy trong thời gian dài.</li>
              <li><strong>Thiếu kiểm tra định kỳ:</strong> Bụi bẩn thấm dầu nhớt bám trong quạt, motor lâu ngày gây kẹt và phát hỏa.</li>
            </ul>

            <div className="process-box" style={{ marginTop: '40px', background: '#fef9f0', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>QUY TRÌNH XỬ LÝ CHẬP ĐIỆN CHUYÊN NGHIỆP</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>📞</div>
                  <h4 style={{ fontSize: '0.85rem', marginBottom: '5px' }}>BƯỚC 1</h4>
                  <p style={{ fontSize: '0.75rem' }}>Tiếp nhận sự cố qua Hotline</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>💬</div>
                  <h4 style={{ fontSize: '0.85rem', marginBottom: '5px' }}>BƯỚC 2</h4>
                  <p style={{ fontSize: '0.75rem' }}>Tư vấn & báo giá sơ bộ</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🔍</div>
                  <h4 style={{ fontSize: '0.85rem', marginBottom: '5px' }}>BƯỚC 3</h4>
                  <p style={{ fontSize: '0.75rem' }}>Khảo sát điểm chập thực tế</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🛠️</div>
                  <h4 style={{ fontSize: '0.85rem', marginBottom: '5px' }}>BƯỚC 4</h4>
                  <p style={{ fontSize: '0.75rem' }}>Tiến hành sửa chữa an toàn</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>✅</div>
                  <h4 style={{ fontSize: '0.85rem', marginBottom: '5px' }}>BƯỚC 5</h4>
                  <p style={{ fontSize: '0.75rem' }}>Nghiệm thu & bàn giao hệ thống</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🛡️</div>
                  <h4 style={{ fontSize: '0.85rem', marginBottom: '5px' }}>BƯỚC 6</h4>
                  <p style={{ fontSize: '0.75rem' }}>Kích hoạt bảo hành hậu mãi</p>
                </div>
              </div>
            </div>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>VÌ SAO CHỌN ĐIỆN NƯỚC BẢO TRUNG?</h2>
            <p>Hàng ngàn hộ gia đình và doanh nghiệp tại TP.HCM tin tưởng lựa chọn chúng tôi dựa trên các giá trị thật:</p>
            <div className="why-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>
              <div className="why-col">
                <h4 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>👨‍🔧 Thợ Tay Nghề Cao</h4>
                <p style={{ fontSize: '0.9rem' }}>Đội ngũ thợ dày dặn kinh nghiệm, được đào tạo bài bản, thái độ làm việc tận tâm và trách nhiệm.</p>
              </div>
              <div className="why-col">
                <h4 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>💰 Giá Cả Tiết Kiệm</h4>
                <p style={{ fontSize: '0.9rem' }}>Cam kết giá cả phải chăng, báo giá cụ thể trước khi làm, không phát sinh chi phí ngoài hợp đồng.</p>
              </div>
              <div className="why-col">
                <h4 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>🛡️ Bảo Hành Dài Hạn</h4>
                <p style={{ fontSize: '0.9rem' }}>Chế độ bảo hành kéo dài nhiều năm tùy theo hạng mục. Luôn có mặt ngay khi nhận được yêu cầu bảo hành.</p>
              </div>
              <div className="why-col">
                <h4 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>📄 Chứng Từ Minh Bạch</h4>
                <p style={{ fontSize: '0.9rem' }}>Cung cấp đầy đủ hợp đồng, hóa đơn VAT theo yêu cầu cho các cơ quan, doanh nghiệp.</p>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Báo Sự Cố Chập Điện</h3>
              <p>Hotline khẩn cấp phục vụ 24/24 tại TP.HCM.</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Chát Zalo Khẩn Gấp</a>
            </div>
            
            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Lưu Ý Khẩn Cấp</h4>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '15px' }}>Tuyệt đối an toàn là trên hết:</p>
              <ul style={{ fontSize: '0.85rem' }}>
                <li>❌ Không tự ý tháo dỡ bảng điện khi đang có điện.</li>
                <li>⚠️ Ngắt Aptomat tổng khi thấy tia lửa điện hoặc mùi khét.</li>
                <li>❌ Không dùng nước dập lửa nếu chưa ngắt nguồn điện.</li>
                <li>📞 Gọi ngay thợ điện chuyên nghiệp hỗ trợ.</li>
              </ul>
            </div>
            
            <div className="info-box" style={{ marginTop: '20px' }}>
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Hỗ Trợ Mọi Khu Vực</h4>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>Chúng tôi phủ sóng 24 quận huyện TP.HCM:</p>
              <ul style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <li>📍 Quận 1, 2, 3, 4, 5, 6, 7, 8, 9...</li>
                <li>📍 Bình Thạnh, Gò Vấp, Thủ Đức</li>
                <li>📍 Tân Bình, Tân Phú, Bình Tân...</li>
              </ul>
              <div style={{ textAlign: 'center', marginTop: '15px', color: 'var(--primary)', fontWeight: 'bold' }}>
                CAM KẾT CÓ MẶT SAU 20 PHÚT
              </div>
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
        
        .feature-box { background: #fff5f5; padding: 30px; border-radius: var(--radius); border-left: 5px solid #e53e3e; margin: 30px 0; }
        .check-list li { margin-bottom: 12px; position: relative; padding-left: 25px; }
        .check-list li::before { content: '✓'; position: absolute; left: 0; color: var(--primary); font-weight: bold; }

        .cta-box { color: white; padding: 30px; border-radius: var(--radius); text-align: center; margin-bottom: 30px; }
        .hotline-btn { display: block; width: 100%; margin: 20px 0 10px; font-size: 1.2rem; }
        .zalo-btn { display: block; width: 100%; background: #0084ff; border: none; }

        .info-box { background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .info-box h4 { border-bottom: 2px solid; padding-bottom: 10px; margin-bottom: 15px; }
        .info-box ul li { margin-bottom: 10px; font-size: 0.9rem; padding-left: 20px; position: relative; }
        .info-box ul li::before { content: '⚡'; position: absolute; left: 0; }

        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; }
          .feature-grid { grid-template-columns: 1fr !important; }
          .why-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
