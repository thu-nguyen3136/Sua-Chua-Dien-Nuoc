import Layout from '../../components/Layout'

export default function Article4() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Kinh nghiệm lắp đặt sửa chữa điện nước bền bỉ - Bảo Trung"
      description="Chia sẻ những kinh nghiệm thực tế trong việc lắp đặt và sửa chữa hệ thống điện nước để đảm bảo sự ổn định và tiết kiệm chi phí lâu dài."
    >
      <section className="page-header">
        <div className="container">
          <h1>KINH NGHIỆM LẮP ĐẶT & SỬA CHỮA ĐIỆN NƯỚC</h1>
          <p>Bí quyết xây dựng hệ thống điện nước ổn định, bền bỉ theo thời gian.</p>
        </div>
      </section>

      <section className="article-detail">
        <div className="container article-grid">
          <div className="content">
            <img src="/kinh-nghiem.png" alt="Kinh nghiệm thi công điện nước" className="featured-img" />
            
            <p>Hệ thống điện nước được ví như hệ thần kinh và hệ tuần hoàn của một ngôi nhà. Việc lắp đặt đúng ngay từ đầu không chỉ giúp bạn yên tâm trong quá trình sử dụng mà còn giúp tiết kiệm rất nhiều chi phí sửa chữa sau này. Dưới đây là những kinh nghiệm "xương máu" từ đội ngũ thợ lành nghề của Bảo Trung.</p>

            <h2>1. Thiết kế sơ đồ chi tiết trước khi thi công</h2>
            <p>Đừng bao giờ thi công theo kiểu "vừa làm vừa tính". Hãy yêu cầu một bản vẽ sơ đồ điện nước chi tiết. Điều này giúp thợ thi công chính xác và quan trọng nhất là giúp bạn dễ dàng tìm ra vị trí hỏng hóc hoặc tránh khoan trúng dây/ống khi muốn sửa sang nhà sau này.</p>

            <h2>2. Phân chia lộ trình (Zone) thông minh</h2>
            <p>Hệ thống điện nên được chia thành nhiều nhánh độc lập: Nhánh chiếu sáng, nhánh ổ cắm, nhánh cho các thiết bị công suất lớn (máy lạnh, máy nước nóng). Mỗi nhánh nên có Aptomat bảo vệ riêng. Khi một nhánh gặp sự cố, các khu vực khác vẫn có điện phục vụ sinh hoạt.</p>

            <h2>3. Lựa chọn vật liệu dựa trên độ bền, không phải giá cả</h2>
            <p>Dây điện nên chọn loại có lõi đồng chuẩn (như Cadivi), ống nước nên chọn loại có độ dày tốt (như Bình Minh). Chi phí vật tư cao cấp chỉ chiếm một phần nhỏ trong tổng giá trị ngôi nhà, nhưng giá trị an toàn mà nó mang lại là vô giá.</p>
            <p><strong>Kinh nghiệm:</strong> Đối với đường nước nóng, hãy luôn sử dụng ống PPR chịu nhiệt để tránh việc ống bị biến dạng, rò rỉ sau vài năm sử dụng.</p>

            <h2>4. Chú trọng các vị trí "hiểm yếu"</h2>
            <p>Các vị trí như hộp kỹ thuật, các mối nối âm tường, vị trí lắp đặt máy bơm, bồn nước cần được thi công cực kỳ cẩn thận. Hãy yêu cầu thợ thử áp đường nước và đo độ cách điện của dây dẫn trước khi trát tường/lát nền.</p>

            <h2>5. Bảo trì định kỳ là cách tiết kiệm nhất</h2>
            <p>Đừng đợi đến khi hỏng mới sửa. Việc kiểm tra định kỳ 6 tháng một lần giúp phát hiện sớm các dấu hiệu quá tải điện hoặc rò rỉ nước nhỏ, giúp bạn xử lý nhanh gọn với chi phí thấp nhất.</p>

            <div className="cta-box" style={{ background: '#fef9f0', borderLeft: '5px solid var(--primary)', padding: '30px', marginTop: '40px' }}>
              <h3>Bạn đang xây nhà hoặc muốn cải tạo?</h3>
              <p>Liên hệ Bảo Trung để được tư vấn sơ đồ điện nước tối ưu và thi công chuyên nghiệp với chế độ bảo hành dài hạn nhất tại TP.HCM.</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-primary" style={{ marginTop: '10px' }}>📞 Tư vấn kỹ thuật: {hotline}</a>
            </div>
          </div>

          <div className="sidebar">
            <div className="info-box">
              <h4>Kiến thức liên quan</h4>
              <ul>
                <li><a href="/tin-tuc/nguyen-nhan-dan-den-ong-nuoc-hu-hong-va-cach-khac-phuc">Nguyên nhân hỏng ống nước</a></li>
                <li><a href="/tin-tuc/cac-quy-tac-va-nguyen-tac-an-toan-khi-sua-chua-dien-dan-dung-tai-nha">Quy tắc an toàn điện</a></li>
                <li><a href="/tin-tuc/nhung-luu-y-an-toan-khi-sua-chua-dien-tai-nha-ma-ban-nen-biet">Lưu ý sửa điện an toàn</a></li>
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
