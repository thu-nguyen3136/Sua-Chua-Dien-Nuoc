import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaDien() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Sửa Điện Tại Nhà TP.HCM - Xử Lý Chập Điện, Mất Điện 24/7"
      description="Dịch vụ sửa điện tại nhà uy tín tại TP.HCM. Chuyên sửa chập điện, thay aptomat, lắp đồng hồ điện, sửa bóng đèn, ổ cắm. Thợ giỏi, giá rẻ, bảo hành lâu dài."
    >
      <section className="page-header">
        <div className="container">
          <h1>Sửa Điện Tại Nhà TP.HCM</h1>
          <p>Dịch vụ sửa chữa điện dân dụng an toàn, chuyên nghiệp, phục vụ tận nơi 24/7.</p>
        </div>
      </section>


      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>DỊCH VỤ SỬA ĐIỆN TẠI NHÀ CHUYÊN NGHIỆP 24/7</h2>
            <img src="/sua-dien-tai-nha.png" alt="Thợ sửa điện chuyên nghiệp tại TP.HCM" className="featured-img" />
            <p>Trong cuộc sống hiện đại, điện năng là yếu tố không thể thiếu. Một sự cố nhỏ về điện cũng có thể gây gián đoạn sinh hoạt và tiềm ẩn nguy cơ cháy nổ cực kỳ nguy hiểm. <strong>Điện Nước Bảo Trung</strong> cung cấp giải pháp sửa điện tại nhà cấp tốc, giúp bạn xử lý mọi rắc rối chỉ trong "một nốt nhạc".</p>
            
            <div className="feature-box">
              <h3>Các hạng mục sửa điện ưu tú:</h3>
              <ul className="check-list">
                <li>Dò tìm và xử lý chập điện âm tường, cháy nổ hệ thống dây dẫn.</li>
                <li>Khắc phục tình trạng mất điện cục bộ hoặc mất điện toàn phần không rõ nguyên nhân.</li>
                <li>Lắp đặt, thay thế các thiết bị điện: CB, Aptomat, ổ cắm, bóng đèn, quạt trần...</li>
                <li>Lắp đặt đồng hồ điện (công tơ điện) phụ cho nhà trọ, căn hộ cho thuê.</li>
                <li>Đi lại đường dây điện mới, thi công điện âm/nổi thẩm mỹ cho văn phòng, shop.</li>
                <li>Bảo trì hệ thống điện định kỳ, kiểm tra tải cho các thiết bị công suất lớn.</li>
              </ul>
            </div>

            <div className="process-box" style={{ marginTop: '40px', background: '#f8f9fa', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '20px', textAlign: 'center' }}>QUY TRÌNH LÀM VIỆC CHUẨN 5 SAO</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>📞</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 1</h4>
                  <p style={{ fontSize: '0.8rem' }}>Tiếp nhận yêu cầu qua Hotline/Zalo</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🕵️</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 2</h4>
                  <p style={{ fontSize: '0.8rem' }}>Khảo sát & Báo giá miễn phí 100%</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🛠️</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 3</h4>
                  <p style={{ fontSize: '0.8rem' }}>Tiến hành sửa chữa an toàn, nhanh gọn</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>✅</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 4</h4>
                  <p style={{ fontSize: '0.8rem' }}>Nghiệm thu, dọn dẹp vệ sinh sạch sẽ</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🛡️</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 5</h4>
                  <p style={{ fontSize: '0.8rem' }}>Kích hoạt bảo hành & Chăm sóc sau hàn</p>
                </div>
              </div>
            </div>

            <h2 style={{ marginTop: '40px' }}>TẠI SAO NGƯỜI DÂN TP.HCM TIN DÙNG BẢO TRUNG?</h2>
            <p>Với hơn 10 năm kinh nghiệm thực chiến, chúng tôi thấu hiểu những lo lắng của khách hàng khi gặp sự cố điện:</p>
            <ul>
              <li><strong>An toàn là số 1:</strong> Thợ được đào tạo bài bản, tuân thủ nghiêm ngặt quy tắc an toàn lao động.</li>
              <li><strong>Giá cả minh bạch:</strong> Luôn báo giá trước khi làm, cam kết không phát sinh chi phí ẩn.</li>
              <li><strong>Tốc độ vượt trội:</strong> Đội ngũ thợ túc trực tại tất cả các quận huyện, có mặt sau 15-30 phút.</li>
              <li><strong>Bảo hành uy tín:</strong> Chính sách bảo hành từ 6-12 tháng, xử lý lỗi ngay lập tức.</li>
            </ul>
          </div>

          <div className="sidebar">
            <div className="cta-box">
              <h3>Cần Thợ Gấp?</h3>
              <p>Liên hệ hotline để được tư vấn và báo giá ngay lập tức.</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Chát Zalo Tư Vấn</a>
            </div>
            
            <div className="info-box">
              <h4>Cam Kết Về Giá</h4>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '15px' }}>Chúng tôi luôn hướng tới mức giá cạnh tranh nhất thị trường:</p>
              <ul style={{ fontSize: '0.85rem' }}>
                <li>✅ Miễn phí công khảo sát</li>
                <li>✅ Giảm 10% cho sinh viên & NPP</li>
                <li>✅ Linh kiện thay thế giá gốc</li>
                <li>✅ Hoàn tiền 100% nếu không hài lòng</li>
              </ul>
            </div>
            
            <div className="info-box" style={{ marginTop: '20px' }}>
              <h4>Thời Gian Phục Vụ</h4>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>Chúng tôi làm việc không nghỉ lễ, bao gồm cả Thứ 7 và Chủ Nhật.</p>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)', textAlign: 'center', marginTop: '10px' }}>
                ⏰ 24/7 TP.HCM
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-header {
          background: var(--primary);
          color: white;
          padding: 60px 0;
          text-align: center;
        }
        .page-header h1 { font-size: 2.5rem; margin-bottom: 10px; }
        
        .service-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .content {
          background: white;
          padding: 40px;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
        }
        .content h2 { color: var(--primary); margin: 30px 0 15px; }
        .content p { margin-bottom: 20px; color: var(--text-light); }
        
        .feature-box {
          background: #f0f7ff;
          padding: 30px;
          border-radius: var(--radius);
          border-left: 5px solid var(--primary);
          margin: 30px 0;
        }
        .feature-box h3 { margin-bottom: 15px; font-size: 1.2rem; }
        
        .check-list li {
          margin-bottom: 12px;
          position: relative;
          padding-left: 25px;
        }
        .check-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }

        .cta-box {
          background: var(--primary);
          color: white;
          padding: 30px;
          border-radius: var(--radius);
          text-align: center;
          margin-bottom: 30px;
        }
        .cta-box h3 { color: var(--secondary); margin-bottom: 10px; }
        .hotline-btn { display: block; width: 100%; margin: 20px 0 10px; font-size: 1.2rem; }
        .zalo-btn { display: block; width: 100%; background: #0084ff; border: none; }

        .info-box {
          background: white;
          padding: 30px;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
        }
        .info-box h4 { border-bottom: 2px solid var(--secondary); padding-bottom: 10px; margin-bottom: 15px; }
        .info-box ul li { margin-bottom: 10px; font-size: 0.9rem; padding-left: 20px; position: relative; }
        .info-box ul li::before { content: '⭐'; position: absolute; left: 0; }

        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Layout>
  )
}
