import Layout from '../components/Layout'

export default function LienHe() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Liên Hệ - Dịch Vụ Sửa Điện Nước Tại Nhà 24/7"
      description="Liên hệ ngay với chúng tôi để được thợ sửa điện nước đến hỗ trợ nhanh nhất tại TP.HCM. Hotline 24/7 phục vụ tận tâm."
    >
      <section className="page-header">
        <div className="container">
          <h1 style={{ color: '#ff9100' }}>LIÊN HỆ</h1>
          <p style={{ color: 'gray' }}>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn mọi lúc, mọi nơi.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          {/* CỘT BÊN TRÁI: THÔNG TIN LIÊN HỆ (GIỮ NGUYÊN) */}
          <div className="contact-info">
            <h2 style={{ color: '#ff9100' }}>Thông Tin Liên Hệ</h2>
            <div className="info-list">
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Địa chỉ chính:</h4>
                  <p>76 Nguyễn Đình Chính, P.15, Q. Phú Nhuận, TP.HCM</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Hotline hỗ trợ 24/24:</h4>
                  <p>{hotline}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email:</h4>
                  <p>diennuocbaotrung@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">⏰</span>
                <div>
                  <h4>Giờ làm việc:</h4>
                  <p>Phục vụ 24/7 (Kể cả ngày lễ, Tết)</p>
                </div>
              </div>
            </div>

            <div className="branch-section">
              <h3>Hệ thống chi nhánh khắp TP.HCM</h3>
              <ul className="branch-list">
                <li><strong>Quận 1:</strong> 157/3 Nguyễn Văn Hưởng, P. Thảo Điền</li>
                <li><strong>Quận 3:</strong> 278/4 Cách Mạng Tháng 8, P.10</li>
                <li><strong>Quận 7:</strong> 74 Nguyễn Cao, P. Tân Phong</li>
                <li><strong>Gò Vấp:</strong> 192/6 Quang Trung, P.10</li>
                <li><strong>Bình Thạnh:</strong> 113 Phan Đăng Lưu, P.7</li>
                <li><strong>Tân Bình:</strong> 367/1 Trường Chinh, P.14</li>
              </ul>
            </div>
          </div>

          {/* CỘT BÊN PHẢI: BẢN ĐỒ (THAY THẾ FORM) */}
          <div className="contact-map-container">
            <h2>Vị Trí Cửa Hàng</h2>
            <p className="mb-4 text-gray-600">Bấm vào bản đồ để xem đường đi chi tiết đến cơ sở của chúng tôi.</p>

            <div className="map-wrapper" style={{
              width: '100%',
              height: '400px',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2818789311134!2d106.6775618758385!3d10.790477158948068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4ef47e4b9%3A0x6b4507022830833a!2s76%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Ch%C3%ADnh%2C%20Ph%C6%B0%E1%BB%9Dng%2015%2C%20Ph%C3%BA%20Nhu%E1%BD%ADn%2C%20H%E1%BB%93%20Ch%C3%AD Minh!5e0!3m2!1svi!2s!4v1711234567890!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Địa chỉ sửa điện nước tại nhà Phú Nhuận"
              ></iframe>
            </div>

            <div className="quick-call mt-6">
              <p className="font-bold text-gray-700">Bạn cần thợ đến ngay?</p>
              <a href={`tel:${hotlineFull}`} className="call-now-btn" style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '12px 30px',
                backgroundColor: '#e62117',
                color: '#fff',
                borderRadius: '50px',
                fontWeight: 'bold',
                textDecoration: 'none'
              }}>
                📞 Gọi: {hotline}
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-header { background: var(--accent); color: white; padding: 60px 0; text-align: center; }
        .contact-section { padding: 80px 0; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        
        .contact-info h2 { color: var(--primary); margin-bottom: 30px; }
        .info-list { margin-bottom: 40px; }
        .info-item { display: flex; gap: 20px; margin-bottom: 25px; }
        .info-item .icon { font-size: 1.5rem; background: #f0f7ff; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: var(--primary); }
        .info-item h4 { margin-bottom: 5px; color: var(--text-dark); }
        
        .branch-section { background: #f8f9fa; padding: 30px; border-radius: var(--radius); }
        .branch-section h3 { font-size: 1.1rem; margin-bottom: 15px; color: var(--primary); }
        .branch-list { font-size: 0.9rem; list-style: disc; padding-left: 20px; }
        .branch-list li { margin-bottom: 8px; }
        .branch-note { font-style: italic; font-size: 0.8rem; margin-top: 15px; color: var(--text-light); }

        .contact-form-container { background: white; padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow-lg); border-top: 4px solid var(--primary); }
        .contact-form-container h2 { margin-bottom: 10px; }
        .contact-form-container p { margin-bottom: 25px; color: var(--text-light); }
        
        .form-group { margin-bottom: 20px; }
        .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 12px 15px; border: 1px solid #ddd; border-radius: 5px; font-family: inherit; }
        .contact-form button { width: 100%; padding: 15px; font-size: 1rem; }

        .quick-call { margin-top: 30px; text-align: center; border-top: 1px dashed #ddd; padding-top: 20px; }
        .call-now-btn { display: inline-block; margin-top: 10px; font-size: 1.8rem; font-weight: 800; color: var(--accent); }

        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
      `}</style>
    </Layout>
  )
}
