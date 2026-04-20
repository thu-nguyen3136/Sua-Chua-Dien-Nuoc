import Layout from '../../components/Layout'

export default function Article2() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Quy tắc an toàn khi sửa điện dân dụng tại nhà - Bảo Trung"
      description="Hướng dẫn chi tiết các quy tắc và nguyên tắc an toàn bắt buộc phải tuân thủ khi tự sửa chữa điện tại nhà để tránh tai nạn."
    >
      <section className="page-header">
        <div className="container">
          <h1>QUY TẮC AN TOÀN KHI SỬA ĐIỆN TẠI NHÀ</h1>
          <p>An toàn là trên hết - Nắm vững quy tắc bảo vệ bản thân và gia đình.</p>
        </div>
      </section>

      <section className="article-detail">
        <div className="container article-grid">
          <div className="content">
            <img src="/cac-quy-tac.png" alt="An toàn điện dân dụng" className="featured-img" />
            
            <p>Sửa chữa điện tại nhà là việc làm cần thiết để duy trì sinh hoạt, nhưng nó cũng tiềm ẩn nhiều rủi ro nếu bạn không nắm vững kỹ thuật và quy tắc an toàn. Trước khi bắt tay vào sửa bất kỳ thiết bị nào, hãy học thuộc 5 nguyên tắc vàng dưới đây.</p>

            <h2>1. Ngắt nguồn điện hoàn toàn</h2>
            <p>Đây là nguyên tắc quan trọng nhất. Hãy tắt aptomat tổng hoặc cầu dao cấp điện cho khu vực bạn định sửa chữa. Đừng bao giờ chủ quan chỉ tắt công tắc đèn hay ổ cắm.</p>
            <p><strong>Lưu ý:</strong> Sau khi ngắt điện, hãy dùng bút thử điện kiểm tra lại một lần nữa để chắc chắn dòng điện đã được cắt hoàn toàn.</p>

            <h2>2. Sử dụng dụng cụ cách điện chuẩn</h2>
            <p>Chỉ sử dụng các loại kìm, tua vít có cán bọc nhựa cách điện chuyên dụng. Tránh sử dụng các dụng cụ bị nứt lớp nhựa bảo vệ hoặc dụng cụ cầm tay không có khả năng cách điện.</p>
            <p><strong>Mẹo nhỏ:</strong> Nên đi giày cao su hoặc đứng trên thảm nhựa khô khi làm việc với điện để tăng cường khả năng cách điện với mặt đất.</p>

            <h2>3. Tránh môi trường ẩm ướt</h2>
            <p>Nước là chất dẫn điện cực tốt. Tuyệt đối không sửa chữa điện khi tay đang ướt, chân trần chạm đất hoặc sàn nhà đang có nước đọng. Nếu khu vực sửa chữa bị ẩm, hãy dùng máy sấy hoặc lau khô hoàn toàn trước khi làm việc.</p>

            <h2>4. Không làm việc một mình</h2>
            <p>Khi sửa chữa các sự cố điện phức tạp, bạn nên có ít nhất một người bên cạnh để hỗ trợ. Người này sẽ giúp bạn quan sát, hỗ trợ dụng cụ và đặc biệt là có thể ngắt điện kịp thời nếu có sự cố xảy ra.</p>

            <h2>5. Quy tắc một tay</h2>
            <p>Nếu có thể, hãy cố gắng chỉ dùng một tay khi thao tác với các mối nối điện sống (trong trường hợp bắt buộc cực chẳng đã). Điều này giúp giảm thiểu nguy cơ dòng điện đi qua tim nếu chẳng may xảy ra giật điện.</p>

            <div className="cta-box" style={{ background: '#f0f7ff', borderLeft: '5px solid #0084ff', padding: '30px', marginTop: '40px' }}>
              <h3>Sự cố điện phức tạp?</h3>
              <p>Đừng mạo hiểm nếu bạn cảm thấy không tự tin. Thợ điện Bảo Trung phục vụ 24/7, chuyên xử lý chập điện âm tường an toàn và nhanh chóng.</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary" style={{ marginTop: '10px', background: '#0084ff', color: 'white' }}>📞 Gọi thợ điện: {hotline}</a>
            </div>
          </div>

          <div className="sidebar">
            <div className="info-box">
              <h4>Kinh nghiệm hữu ích</h4>
              <ul>
                <li><a href="/tin-tuc/nguyen-nhan-dan-den-ong-nuoc-hu-hong-va-cach-khac-phuc">Lỗi ống nước thường gặp</a></li>
                <li><a href="/tin-tuc/nhung-luu-y-an-toan-khi-sua-chua-dien-tai-nha-ma-ban-nen-biet">Lưu ý khi sửa điện</a></li>
                <li><a href="/tin-tuc/kinin-nghiem-lap-dat-sua-chua-dien-nuoc">Kinh nghiệm lắp đặt</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-header { background: var(--secondary); color: white; padding: 60px 0; text-align: center; }
        .article-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; padding: 60px 0; }
        .content { background: white; padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .content h2 { color: var(--primary); margin: 30px 0 15px; border-bottom: 2px solid #eee; padding-bottom: 5px; }
        .content p { margin-bottom: 20px; line-height: 1.8; color: var(--text-dark); }
        .featured-img { width: 100%; border-radius: var(--radius); margin-bottom: 30px; }
        
        .sidebar .info-box { background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .sidebar h4 { margin-bottom: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px; }
        .sidebar ul li { margin-bottom: 15px; }
        .sidebar ul li a { color: var(--text-dark); text-decoration: none; font-size: 0.95rem; }
        .sidebar ul li a:hover { color: var(--primary); }

        @media (max-width: 768px) { .article-grid { grid-template-columns: 1fr; } }
      `}</style>
    </Layout>
  )
}
