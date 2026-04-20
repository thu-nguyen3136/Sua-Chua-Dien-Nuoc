import Layout from '../../components/Layout'

export default function Article1() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Nguyên nhân ống nước hư hỏng và cách khắc phục - Bảo Trung"
      description="Tìm hiểu các nguyên nhân phổ biến khiến đường ống nước bị bục vỡ, rò rỉ và phương pháp sửa chữa hiệu quả nhất."
    >
      <section className="page-header">
        <div className="container">
          <h1>NGUYÊN NHÂN ỐNG NƯỚC HƯ HỎNG & CÁCH KHẮC PHỤC</h1>
          <p>Kiến thức hữu ích giúp bạn bảo vệ hệ thống cấp thoát nước gia đình.</p>
        </div>
      </section>

      <section className="article-detail">
        <div className="container article-grid">
          <div className="content">
            <img src="/nguyen-nhan.png" alt="Nguyên nhân hư hỏng ống nước" className="featured-img" />
            
            <p>Hệ thống ống nước là "mạch máu" của ngôi nhà, cung cấp nước sinh hoạt và thoát nước thải. Tuy nhiên, sau một thời gian sử dụng, hệ thống này thường gặp phải các sự cố như rò rỉ, bục vỡ. Dưới đây là những nguyên nhân phổ biến và cách xử lý hiệu quả.</p>

            <h2>1. Áp lực nước quá lớn</h2>
            <p>Đây là nguyên nhân hàng đầu gây bục vỡ ống nước, đặc biệt là ở các nhà cao tầng hoặc những khu vực gần trạm bơm tăng áp. Khi áp lực vượt quá giới hạn chịu đựng của ống hoặc các khớp nối, ống nước sẽ bị nứt hoặc vỡ hoàn toàn.</p>
            <p><strong>Cách khắc phục:</strong> Lắp đặt thêm van giảm áp tại các vị trí cần thiết và kiểm tra định kỳ hoạt động của máy bơm tăng áp.</p>

            <h2>2. Sử dụng vật tư kém chất lượng</h2>
            <p>Vì mục tiêu tiết kiệm chi phí, nhiều gia đình chọn mua các loại ống nhựa mỏng, không rõ nguồn gốc. Những loại ống này rất nhanh bị giòn, dễ nứt vỡ dưới tác động của môi trường và áp lực nước.</p>
            <p><strong>Cách khắc phục:</strong> Luôn ưu tiên sử dụng các thương hiệu ống nước uy tín như Bình Minh, Tiền Phong hoặc PPR chịu nhiệt cao cấp.</p>

            <h2>3. Tác động ngoại lực và lún công trình</h2>
            <p>Ống nước đi âm nền, âm tường dễ bị vỡ do nền nhà bị lún hoặc trong quá trình sửa chữa nhà, thợ vô tình khoan trúng đường ống ngầm.</p>
            <p><strong>Cách khắc phục:</strong> Chụp ảnh sơ đồ đường ống nước sau khi thi công để tránh việc khoan trúng sau này. Nếu ống bị vỡ do lún, cần đục tường/nền để nối lại bằng khớp nối chuyên dụng.</p>

            <h2>4. Sự oxy hóa và cặn bẩn</h2>
            <p>Với các loại ống kim loại cũ, sự oxy hóa gây gỉ sét và làm mỏng thành ống. Đối với ống nhựa, cặn bẩn tích tụ lâu ngày làm tắc nghẽn, tăng áp lực cục bộ gây nứt ống.</p>
            <p><strong>Cách khắc phục:</strong> Vệ sinh bồn nước và sục rửa đường ống định kỳ bằng máy chuyên dụng.</p>

            <div className="cta-box" style={{ background: '#fef9f0', borderLeft: '5px solid var(--primary)', padding: '30px', marginTop: '40px' }}>
              <h3>Bạn cần thợ nước hỗ trợ?</h3>
              <p>Nếu gặp sự cố bục vỡ hoặc rò rỉ nước âm tường, hãy gọi ngay cho Bảo Trung để được thợ đến kiểm tra bằng máy siêu âm hiện đại.</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-primary" style={{ marginTop: '10px' }}>📞 Gọi ngay: {hotline}</a>
            </div>
          </div>

          <div className="sidebar">
            <div className="info-box">
              <h4>Bài viết liên quan</h4>
              <ul>
                <li><a href="/tin-tuc/cac-quy-tac-va-nguyen-tac-an-toan-khi-sua-chua-dien-dan-dung-tai-nha">Quy tắc an toàn điện</a></li>
                <li><a href="/tin-tuc/nhung-luu-y-an-toan-khi-sua-chua-dien-tai-nha-ma-ban-nen-biet">Lưu ý khi sửa điện</a></li>
                <li><a href="/tin-tuc/kinh-nghiem-lap-dat-su-chua-dien-nuoc">Kinh nghiệm lắp đặt</a></li>
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
