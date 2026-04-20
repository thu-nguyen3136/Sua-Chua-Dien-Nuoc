import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaNuoc() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Sửa Ống Nước Tại Nhà TP.HCM - Dò Tìm Rò Rỉ Nước Âm Tường"
      description="Thợ sửa ống nước tại nhà giá rẻ chuyên nghiệp tại TP.HCM. Sửa rò rỉ nước, bục vỡ ống nước, thay vòi sen, bồn cầu, máy nước nóng. Gọi 24/7 có mặt ngay."
    >
      <section className="page-header">
        <div className="container">
          <h1>Sửa Nước Tại Nhà TP.HCM</h1>
          <p>Khắc phục mọi sự cố về hệ thống cấp thoát nước, thiết bị vệ sinh nhanh chóng.</p>
        </div>
      </section>


      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>DỊCH VỤ SỬA NƯỚC TẠI NHÀ CHUYÊN NGHIỆP 24/7</h2>
            <img src="/sua-ong-nuoc.png" alt="Thợ sửa nước chuyên nghiệp tại TP.HCM" className="featured-img" />
            <p>Hệ thống cấp thoát nước gặp sự cố không chỉ gây lãng phí tài nguyên mà còn ảnh hưởng trực tiếp đến chất lượng cuộc sống và kết cấu ngôi nhà bạn. <strong>Điện Nước Bảo Trung</strong> tự hào là đối tác tin cậy chuyên cung cấp dịch vụ sửa nước tại nhà, xử lý mọi hư hỏng từ nhỏ nhất đến phức tạp nhất.</p>

            <div className="feature-box" style={{ borderLeftColor: '#2980b9', background: '#f0f7ff' }}>
              <h3>Các hạng mục sửa nước chủ đạo:</h3>
              <ul className="check-list">
                <li>Dò tìm rò rỉ nước âm tường, âm nền bằng máy siêu âm nhập khẩu hiện đại.</li>
                <li>Sửa chữa đường ống nước bị bục vỡ, rò rỉ gây thất thoát nước, thấm tường.</li>
                <li>Lắp đặt, thay thế thiết bị vệ sinh: Bồn cầu, lavabo, vòi sen, bồn rửa chén...</li>
                <li>Sửa chữa và lắp đặt máy nước nóng năng lượng mặt trời, máy nước nóng điện.</li>
                <li>Thông nghẹt đường ống thoát nước, bồn cầu, chậu rửa bằng máy lò xo không đục phá.</li>
                <li>Lắp đặt bồn nước, thay phao cơ, phao điện tự động ngắt nước cao cấp.</li>
              </ul>
            </div>

            <div className="process-box" style={{ marginTop: '40px', background: '#f8f9fa', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '20px', textAlign: 'center' }}>QUY TRÌNH SỬA NƯỚC KHÉP KÍN</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>📱</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 1</h4>
                  <p style={{ fontSize: '0.8rem' }}>Tiếp nhận báo sự cố 24/24</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🔍</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 2</h4>
                  <p style={{ fontSize: '0.8rem' }}>Kiểm tra & Tư vấn giải pháp tối ưu</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>👷</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 3</h4>
                  <p style={{ fontSize: '0.8rem' }}>Thực hiện sửa chữa đúng kỹ thuật</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🚿</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 4</h4>
                  <p style={{ fontSize: '0.8rem' }}>Kiểm tra áp lực nước & Bàn giao</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🧾</div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>BƯỚC 5</h4>
                  <p style={{ fontSize: '0.8rem' }}>Viết phiếu bảo hành & Thanh toán</p>
                </div>
              </div>
            </div>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>CAM KẾT THỢ NƯỚC BẢO TRUNG</h2>
            <p>Chúng tôi hiểu rằng sự tin tưởng của khách hàng được xây dựng từ chất lượng dịch vụ thực tế:</p>
            <ul>
              <li><strong>Chất lượng vật tư:</strong> Chỉ sử dụng linh kiện, ống nước chính hãng (Bình Minh, Tiền Phong...).</li>
              <li><strong>Kỹ thuật chuyên sâu:</strong> Thợ dày dặn kinh nghiệm, nắm vững sơ đồ cấp thoát nước.</li>
              <li><strong>Vệ sinh sạch sẽ:</strong> Thi công gọn gàng, dọn dẹp sạch sẽ mặt bằng sau khi hoàn thành.</li>
              <li><strong>Hỗ trợ tận tâm:</strong> Sẵn sàng có mặt xử lý mọi khiếu nại bảo hành trong vòng 2 giờ.</li>
            </ul>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3>Sự Cố Nước?</h3>
              <p>Gọi ngay thợ nước gần nhất để xử lý kịp thời.</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Chát Zalo Tư Vấn</a>
            </div>

            <div className="info-box">
              <h4>Chính Sách Ưu Đãi</h4>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '15px' }}>Dành cho khách hàng tin tưởng Bảo Trung:</p>
              <ul style={{ fontSize: '0.85rem' }}>
                <li>✅ Kiểm tra sự rò rỉ miễn phí</li>
                <li>✅ Giảm 15% khi thay trọn bộ thiết bị</li>
                <li>✅ Bảo hành đường ống vĩnh viễn*</li>
                <li>✅ Xuất hóa đơn VAT cho Công ty</li>
              </ul>
            </div>

            <div className="info-box" style={{ marginTop: '20px' }}>
              <h4>Khu Vực Phục Vụ</h4>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>Chúng tôi phủ sóng rộng khắp các quận huyện TP.HCM với đội ngũ thợ túc trực sẵn sàng.</p>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)', textAlign: 'center', marginTop: '10px' }}>
                📍 TOÀN TP.HCM
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
        .content h2 { color: var(--primary); margin: 30px 0 15px; }
        .content p { margin-bottom: 20px; color: var(--text-light); }
        
        .feature-box { background: #fef9f0; padding: 30px; border-radius: var(--radius); border-left: 5px solid var(--primary); margin: 30px 0; }
        .check-list li { margin-bottom: 12px; position: relative; padding-left: 25px; }
        .check-list li::before { content: '✓'; position: absolute; left: 0; color: var(--primary); font-weight: bold; }

        .cta-section { background: #f9f9f9; padding: 25px; border-radius: var(--radius); margin-top: 30px; }
        .cta-section h3 { margin-bottom: 15px; font-size: 1.1rem; }

        .cta-box { background: var(--primary); color: white; padding: 30px; border-radius: var(--radius); text-align: center; margin-bottom: 30px; }
        .hotline-btn { display: block; width: 100%; margin: 20px 0 10px; font-size: 1.2rem; }
        .zalo-btn { display: block; width: 100%; background: #0084ff; border: none; }

        .info-box { background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .info-box h4 { border-bottom: 2px solid var(--secondary); padding-bottom: 10px; margin-bottom: 15px; }
        .info-box ul li { margin-bottom: 10px; font-size: 0.9rem; padding-left: 20px; position: relative; }
        .info-box ul li::before { content: '💧'; position: absolute; left: 0; }

        @media (max-width: 768px) { .service-grid { grid-template-columns: 1fr; } }
      `}</style>
    </Layout>
  )
}
