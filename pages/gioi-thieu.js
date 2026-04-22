import Layout from '../components/Layout'

export default function GioiThieu() {
  return (
    <Layout 
      title="Giới Thiệu - Dịch Vụ Sửa Điện Nước Tại Nhà 24/7"
      description="Tìm hiểu về đội ngũ thợ sửa điện nước chuyên nghiệp của chúng tôi tại TP.HCM. Cam kết uy tín, tận tâm, phục vụ khách hàng chu đáo nhất."
    >
      <section className="page-header">
        <div className="container">
          <h1>Về Chúng Tôi</h1>
          <p>Hành trình xây dựng thương hiệu sửa điện nước uy tín hàng đầu tại TP.HCM.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="text-content">
            <h2>Hơn 10 năm đồng hành cùng gia đình Việt</h2>
            <img src="/gioi-thieu.png" alt="Giới thiệu Điện Nước Bảo Trung" className="featured-img" />
            <p>Khởi đầu từ một đội thợ nhỏ tại Quận Phú Nhuận, qua hơn 10 năm hoạt động, chúng tôi đã phát triển thành mạng lưới thợ sửa điện nước rộng khắp 24 quận huyện TP.HCM. Phương châm của chúng tôi luôn là: <strong>"Khách hàng là người thân - Sự hài lòng là mục tiêu"</strong>.</p>
            
            <h3>Sứ mệnh</h3>
            <p>Mang đến giải pháp khắc phục sự cố điện nước nhanh nhất, an toàn nhất với chi phí tiết kiệm nhất cho mọi hộ gia đình và doanh nghiệp. Giúp khách hàng yên tâm tận hưởng cuộc sống mà không phải lo lắng về những hỏng hóc kỹ thuật phiền toái.</p>

            <h3>Đội ngũ thợ của chúng tôi</h3>
            <p>100% thợ sửa chữa tại suadiennuoctainha.net đều có bằng cấp chuyên môn, thực chiến lâu năm và đặc biệt là có lý lịch rõ ràng, trung thực, tận tâm với công việc. Chúng tôi không chỉ sửa máy móc, chúng tôi xây dựng niềm tin.</p>

            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-num">50+</span>
                <span className="stat-text">Thợ Tay Nghề Cao</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">10,000+</span>
                <span className="stat-text">Khách Hàng Tin Dùng</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">30 Phút</span>
                <span className="stat-text">Thời Gian Có Mặt</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-text">Hài Lòng</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-header { background: #34495e; color: white; padding: 60px 0; text-align: center; }
        .about-content { padding: 80px 0; background: white; }
        .text-content { max-width: 800px; margin: 0 auto; }
        .text-content h2 { color: var(--primary); margin-bottom: 20px; }
        .text-content h3 { color: var(--primary); margin: 40px 0 15px; }
        .text-content p { margin-bottom: 20px; font-size: 1.1rem; color: var(--text-dark); }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; margin-top: 50px; text-align: center; }
        .stat-item { padding: 30px; background: #f8f9fa; border-radius: var(--radius); }
        .stat-num { display: block; font-size: 2rem; font-weight: 800; color: var(--secondary); margin-bottom: 5px; }
        .stat-text { font-size: 0.9rem; font-weight: 600; color: var(--text-light); }

        @media (max-width: 768px) {
          .about-content { padding: 40px 0; }
          .text-content h2 { font-size: 1.6rem; }
          .text-content h3 { font-size: 1.3rem; margin: 30px 0 10px; }
          .text-content p { font-size: 1rem; line-height: 1.6; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
          .stat-item { padding: 15px; }
          .stat-num { font-size: 1.5rem; }
        }
      `}</style>
    </Layout>
  )
}
