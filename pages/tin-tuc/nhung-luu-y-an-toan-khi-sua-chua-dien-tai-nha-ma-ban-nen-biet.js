import Layout from '../../components/Layout'

export default function Article3() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Lưu ý an toàn khi sửa điện tại nhà - Bảo Trung"
      description="Tổng hợp những lưu ý quan trọng giúp bạn tự kiểm tra và sửa chữa điện tại nhà một cách thông minh và an toàn nhất."
    >
      <section className="page-header">
        <div className="container">
          <h1>NHỮNG LƯU Ý AN TOÀN KHI SỬA ĐIỆN TẠI NHÀ</h1>
          <p>Mẹo nhỏ giúp bạn tránh khỏi những rủi ro điện năng tiềm ẩn.</p>
        </div>
      </section>

      <section className="article-detail">
        <div className="container article-grid">
          <div className="content">
            <img src="/nhung-luu-y.png" alt="Lưu ý sửa điện an toàn" className="featured-img" />
            
            <p>Ngoài các quy tắc cơ bản, việc tự sửa điện tại nhà còn đòi hỏi sự tỉ mỉ và những kinh nghiệm thực tế. Trang bị thêm những lưu ý dưới đây sẽ giúp bạn trở thành một "thợ điện gia đình" chuyên nghiệp và an toàn hơn.</p>

            <h2>1. Kiểm tra định kỳ các ổ cắm và mối nối</h2>
            <p>Đa số các vụ cháy nổ điện bắt nguồn từ việc ổ cắm bị lỏng hoặc mối nối bị oxy hóa gây ra tia lửa điện. Hãy dành thời gian kiểm tra và siết chặt lại các ốc vít ở ổ cắm, phích cắm ít nhất 1 lần mỗi năm.</p>
            <p><strong>Dấu hiệu cần thay ngay:</strong> Ổ cắm có vết đen, mùi khét hoặc phích cắm khi cắm vào có cảm giác rất lỏng lẻo.</p>

            <h2>2. Hiểu rõ sơ đồ điện nhà mình</h2>
            <p>Trước khi khoan tường để treo tranh hay bắt kệ, hãy chắc chắn bạn biết đường dây điện đi ở vị trí nào. Rất nhiều trường hợp tai nạn xảy ra do khoan trúng dây điện âm tường gây chập cháy cục bộ.</p>
            <p><strong>Mẹo:</strong> Sử dụng máy dò kim loại và dây điện chuyên dụng nếu bạn không có sơ đồ bản vẽ kỹ thuật của ngôi nhà.</p>

            <h2>3. Lựa chọn thiết bị bảo vệ phù hợp</h2>
            <p>Sử dụng Aptomat (CB) có chỉ số dòng cắt phù hợp với công suất tiêu thụ của các thiết bị trong phòng. Lắp thêm CB chống giật (ELCB) cho các khu vực ẩm ướt như nhà tắm, bếp là một khoản đầu tư xứng đáng cho sự an toàn.</p>

            <h2>4. Cảnh giác với các thiết bị công suất lớn</h2>
            <p>Các thiết bị như máy lạnh, máy nước nóng, bếp điện từ nên có đường dây điện riêng và CB riêng. Tuyệt đối không dùng chung ổ cắm nối cho nhiều thiết bị công suất lớn cùng lúc vì dễ gây quá tải, nóng chảy dây dẫn.</p>

            <h2>5. Biết khi nào cần dừng lại</h2>
            <p>Đừng cố gắng tự sửa nếu sự cố nằm sâu trong tường hoặc liên quan đến tủ điện tổng nếu bạn không có chuyên môn. Những sai sót nhỏ trong đấu nối có thể dẫn đến hậu quả nghiêm trọng về lâu dài.</p>

            <div className="cta-box" style={{ background: '#fff5f5', borderLeft: '5px solid #e53e3e', padding: '30px', marginTop: '40px' }}>
              <h3>Cảnh báo chập điện?</h3>
              <p>Nếu thấy hiện tượng nhảy aptomat liên tục hoặc có mùi khét, hãy ngắt điện tổng và gọi ngay cho thợ kỹ thuật để được hỗ trợ kịp thời.</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-primary" style={{ marginTop: '10px', background: '#e53e3e', borderColor: '#e53e3e' }}>📞 Hỗ trợ khẩn cấp: {hotline}</a>
            </div>
          </div>

          <div className="sidebar">
            <div className="info-box">
              <h4>Chuyên mục tin tức</h4>
              <ul>
                <li><a href="/tin-tuc/nguyen-nhan-dan-den-ong-nuoc-hu-hong-va-cach-khac-phuc">Hỏng ống nước và cách sửa</a></li>
                <li><a href="/tin-tuc/cac-quy-tac-va-nguyen-tac-an-toan-khi-sua-chua-dien-dan-dung-tai-nha">Quy tắc an toàn điện</a></li>
                <li><a href="/tin-tuc/kinh-nghiem-lap-dat-su-chua-dien-nuoc">Kinh nghiệm từ thợ giỏi</a></li>
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
