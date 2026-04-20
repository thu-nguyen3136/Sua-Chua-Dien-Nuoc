import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaDienNuocGeneral() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Sửa Điện Nước Tại Nhà TP.HCM - Nhanh Chóng, Giá Rẻ | Điện Nước Bảo Trung"
      description="Dịch vụ sửa chữa điện nước tại nhà chuyên nghiệp khắp 24 quận huyện TP.HCM. Thợ đến sau 15-30 phút. Báo giá minh bạch, linh kiện chính hãng."
    >
      <section className="page-header">
        <div className="container">
          <h1>Sửa Điện Nước Tổng Hợp 24/7</h1>
          <p>Giải pháp sửa chữa điện nước trọn gói cho hộ gia đình, văn phòng, nhà hàng tại TP.HCM.</p>
        </div>
      </section>


      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>TỔNG KHO DỊCH VỤ ĐIỆN NƯỚC TẠI NHÀ TP.HCM</h2>
            <img src="/sua-dien-tai-nha.png" alt="Sửa điện nước tại nhà" className="featured-img" />
            <p>Chào mừng bạn đến với <strong>Điện Nước Bảo Trung</strong>. Chúng tôi thấu hiểu rằng khi hệ thống điện hay nước gặp sự cố, dù là nhỏ nhất cũng khiến cuộc sống của bạn trở nên bất tiện. Với đội ngũ thợ đông đảo phủ khắp 24 quận huyện, chúng tôi cam kết mang lại giải pháp khắc phục triệt để, an toàn và tiết kiệm nhất.</p>
            
            <div className="feature-box">
              <h3>Vì sao nên chọn dịch vụ trọn gói của chúng tôi?</h3>
              <ul className="check-list">
                <li><strong>Đa năng:</strong> Thợ điện nước Bảo Trung có thể xử lý cả điện và nước trong 1 lần đến.</li>
                <li><strong>Kỹ thuật cao:</strong> 100% thợ đều có trên 5 năm kinh nghiệm thực chiến.</li>
                <li><strong>Báo giá rõ ràng:</strong> Luôn khảo sát và báo giá trước khi làm, không phát sinh.</li>
                <li><strong>Tiết kiệm:</strong> Giảm ngay 10-20% phí nhân công cho các gói bảo trì trọn gói.</li>
              </ul>
            </div>

            <div className="process-box" style={{ marginTop: '40px', background: '#f8f9fa', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '20px', textAlign: 'center' }}>QUY TRÌNH PHỤC VỤ CHUẨN MỰC</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>📱</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 1</h4>
                  <p style={{ fontSize: '0.8rem' }}>Tiếp nhận cuộc gọi và sắp xếp lịch thợ thợ gần nhất</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🔍</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 2</h4>
                  <p style={{ fontSize: '0.8rem' }}>Thợ đến kiểm tra, tìm nguyên nhân và báo giá</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🏗️</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 3</h4>
                  <p style={{ fontSize: '0.8rem' }}>Triển khai sửa chữa nhanh gọn, an toàn kỹ thuật</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>✨</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 4</h4>
                  <p style={{ fontSize: '0.8rem' }}>Vệ sinh hiện trường và bàn giao kết quả</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🎫</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 5</h4>
                  <p style={{ fontSize: '0.8rem' }}>Ghi phiếu bảo hành và thanh toán theo hợp đồng</p>
                </div>
              </div>
            </div>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>CAM KẾT TỪ CHỦ ĐIỆN NƯỚC BẢO TRUNG</h2>
            <p>Sự hài lòng của quý khách là thước đo thành công của chúng tôi. Chúng tôi cam kết:</p>
            <ul>
              <li><strong>Phản ứng nhanh:</strong> Có mặt sau 15 phút tại các quận nội thành.</li>
              <li><strong>Chất lượng:</strong> Sửa đúng bệnh, không vẽ việc để lấy thêm tiền khách hàng.</li>
              <li><strong>Thái độ:</strong> Thợ luôn lịch sự, trung thực và trách nhiệm cao với công việc.</li>
              <li><strong>Bảo hành:</strong> Bảo hành dài hạn, có mặt xử lý ngay nếu lỗi cũ tái phát.</li>
            </ul>
          </div>

          <div className="sidebar">
            <div className="cta-box">
              <h3>Đặt Lịch Thợ Ngay</h3>
              <p>Hotline phục vụ xuyên suốt ngày đêm, Thứ 7, CN và lễ tết.</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Chát Zalo Tư Vấn</a>
            </div>
            
            <div className="info-box">
              <h4>Chính Sách Hợp Tác</h4>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '15px' }}>Hợp đồng bảo trì dành cho:</p>
              <ul style={{ fontSize: '0.85rem' }}>
                <li>✅ Chung cư, Tòa nhà văn phòng</li>
                <li>✅ Nhà hàng, Khách sạn, Spa</li>
                <li>✅ Hệ thống chuỗi cửa hàng tiện lợi</li>
                <li>✅ Trường học, Bệnh viện, Cơ quan</li>
              </ul>
            </div>
            
            <div className="info-box" style={{ marginTop: '20px' }}>
              <h4>Tại Sao Gọi Là Bảo Trung?</h4>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>Chúng tôi hướng tới việc <strong>Bảo</strong> vệ hệ thống của bạn và đặt sự <strong>Trung</strong> thực lên hàng đầu.</p>
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                ⭐ ⭐ ⭐ ⭐ ⭐
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
        .content p { margin-bottom: 20px; color: var(--text-light); line-height: 1.8; }
        
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
          content: '✔';
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
        .info-box ul li::before { content: '💠'; position: absolute; left: 0; }

        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Layout>
  )
}
