import Layout from '../../components/Layout'
import Link from 'next/link'

export default function KinhNghiemLDPhatSuaDienNuoc() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Kinh Nghiệm Lắp Đặt Sửa Chữa Điện Nước Bền Bỉ Và An Toàn"
      description="Chia sẻ những kinh nghiệm vàng trong việc lắp đặt và bảo trì hệ thống điện nước gia đình giúp tăng tuổi thọ thiết bị và đảm bảo an toàn tuyệt đối."
    >
      <section className="page-header" style={{ background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/kinh-nghiem.png")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ textTransform: 'uppercase', fontSize: '2.5rem' }}>KINH NGHIỆM LẮP ĐẶT SỬA CHỮA ĐIỆN NƯỚC</h1>
          <p style={{ marginTop: '15px', opacity: 0.9 }}>Bí quyết để có hệ thống điện nước ổn định, tiết kiệm chi phí bảo trì.</p>
        </div>
      </section>

      <section className="article-detail" style={{ padding: '60px 0', background: '#f8fafc' }}>
        <div className="container article-grid">
          <div className="content">
            <img src="/kinh-nghiem.png" alt="Kinh nghiệm thi công điện nước" className="featured-img" />
            
            <p>Điện nước đóng vai trò quan trọng đối với đời sống hàng ngày của chúng ta. Tuy nhiên để có thể lắp đặt được hệ thống điện nước hoạt động hiệu quả và an toàn, các bạn cần phải hiểu biết về điện nước và kinh nghiệm lắp đặt.</p>
            <p>Trong quá trình sử dụng hệ thống điện nước các bạn cũng sẽ gặp phải những sự cố và hư hỏng điện nước không thể lường trước được. Sửa chữa điện nước Bảo Trung sẽ chia sẻ một số kinh nghiệm lắp đặt, sửa chữa điện nước để các bạn có thể tự mình xây dựng nên một hệ thống hoạt động hiệu quả, an toàn cũng như khắc phục được những hư hỏng bất ngờ.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '30px 0 20px' }}>Kinh nghiệm lắp đặt hệ thống mới</h2>
            <p>Để có một hệ thống điện nước hoạt động hiệu quả và lâu dài, các bạn cần chuẩn bị những thiết bị và dây dẫn tốt nhất, đồng thời lưu ý các điểm sau:</p>
            <ul className="check-list-modern">
                <li><strong>Điện âm tường/sàn:</strong> Cần bọc cách điện và luồn trong ống bảo vệ (hệ thống ống cứng hoặc ruột gà) phù hợp để tránh bị mục, hở dây sau thời gian dài sử dụng.</li>
                <li><strong>Vị trí lắp đặt:</strong> Cầu dao, công tắc, phích cắm nên được lắp ở nơi khô ráo, dễ sử dụng nhưng phải tránh xa tầm tay trẻ nhỏ.</li>
                <li><strong>Tránh khu vực ẩm:</strong> Không nên kéo dây điện ngang qua nhà tắm, nhà vệ sinh nếu không có biện pháp chống thấm và bảo vệ chuyên dụng.</li>
                <li><strong>Chất lượng ống nước:</strong> Nên chọn các loại ống nhựa chịu áp lực tốt (như Bình Minh, Tiền Phong) để tăng tuổi thọ và giảm thiểu sự cố bục vỡ ngầm.</li>
                <li><strong>Lắp đặt ống nước:</strong> Nên đi ống chìm trong tường để hạn chế va chạm cơ học bên ngoài gây nứt vỡ ống.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '30px 0 20px' }}>Kinh nghiệm xử lý sự cố bất ngờ</h2>
            <p>Khi sử dụng, nếu gặp sự cố, hãy bình tĩnh thực hiện theo các bước sau để đảm bảo an toàn:</p>
            <ul className="check-list-modern">
                <li><strong>Khắc phục chập cháy:</strong> Ngay khi có cháy nổ hoặc mùi khét, phải ngắt cầu dao tổng ngay lập tức trước khi kiểm tra hay tiến hành sửa chữa.</li>
                <li><strong>Xác định nguyên nhân:</strong> Luôn tìm hiểu rõ "tại sao nó hỏng" trước khi thay thế. Ví dụ: Máy bơm kêu to có thể do vòng bi, đừng vội thay cả máy.</li>
                <li><strong>Xử lý rò rỉ nước:</strong> Nếu ống nước bục vỡ, hãy khóa van tổng và tìm vị trí rò rỉ. Nếu sự cố âm tường phức tạp, hãy sử dụng dịch vụ dò tìm rò rỉ chuyên nghiệp.</li>
                <li><strong>Liên hệ thợ chuyên môn:</strong> Với các thiết bị khó như máy bơm, máy nước nóng, mạch điện tử... nếu không có chuyên môn, hãy gọi thợ để tránh làm hỏng thêm hoặc gây nguy hiểm.</li>
            </ul>

            <div style={{ background: '#ecfdf5', padding: '30px', borderRadius: '15px', borderLeft: '6px solid #10b981', margin: '30px 0' }}>
              <p style={{ margin: 0 }}><strong>Kết luận:</strong> Một hệ thống điện nước tốt ngay từ đầu sẽ giúp bạn tiết kiệm hàng chục triệu đồng chi phí sửa chữa trong tương lai. Hãy chú trọng vào chất lượng vật tư và trình độ tay nghề của thợ thi công.</p>
            </div>

            <div className="cta-box" style={{ background: 'var(--secondary)', padding: '40px', borderRadius: '20px', color: 'white', textAlign: 'center', marginTop: '50px' }}>
              <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '15px' }}>THI CÔNG & SỬA CHỮA CHUYÊN NGHIỆP</h3>
              <p style={{ marginBottom: '25px', opacity: 0.9 }}>Bảo Trung nhận thi công trọn gói hệ thống điện nước nhà phố, chung cư giá tốt nhất.</p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <a href={`tel:${hotlineFull}`} className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>📞 NHẬN BÁO GIÁ: {hotline}</a>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="info-box">
              <h4>KIẾN THỨC CÙNG CHUYÊN MỤC</h4>
              <ul className="sidebar-links">
                <li><Link href="/tin-tuc/cac-quy-tac-va-nguyen-tac-an-toan-khi-sua-chua-dien-dan-dung-tai-nha">Quy tắc an toàn điện</Link></li>
                <li><Link href="/tin-tuc/nhung-luu-y-an-toan-khi-sua-chua-dien-tai-nha-ma-ban-nen-biet">Lưu ý sửa điện an toàn</Link></li>
                <li><Link href="/tin-tuc/nguyen-nhan-dan-den-ong-nuoc-hu-hong-va-cach-khac-phuc">Nguyên nhân ống nước hỏng</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .article-grid { display: grid; grid-template-columns: 2.5fr 1fr; gap: 50px; }
        .content { background: white; padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .featured-img { width: 100%; border-radius: var(--radius); margin-bottom: 30px; box-shadow: var(--shadow); }
        .content p { line-height: 1.8; color: var(--text-dark); margin-bottom: 20px; }
        
        .check-list-modern { list-style: none; padding: 0; }
        .check-list-modern li { position: relative; padding-left: 30px; margin-bottom: 15px; line-height: 1.7; color: var(--text-dark); }
        .check-list-modern li::before { content: '●'; position: absolute; left: 0; color: var(--primary); font-size: 1.2rem; top: -2px; }

        .info-box { background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .info-box h4 { margin-bottom: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px; font-weight: 800; font-size: 1.1rem; }
        .sidebar-links { list-style: none; padding: 0; }
        .sidebar-links li { margin-bottom: 15px; border-bottom: 1px solid #f1f5f9; padding-bottom: 15px; }
        .sidebar-links li:last-child { border-bottom: none; }
        .sidebar-links li a { color: var(--text-dark); font-weight: 600; font-size: 0.95rem; transition: var(--transition); }
        .sidebar-links li a:hover { color: var(--primary); padding-left: 5px; }

        @media (max-width: 992px) {
          .article-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Layout>
  )
}
