import Layout from '../../components/Layout'
import Link from 'next/link'

export default function NguyenNhanHuHongOngNuoc() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Nguyên Nhân Dẫn Đến Ống Nước Hư Hỏng Và Cách Khắc Phục"
      description="Tìm hiểu các nguyên nhân phổ biến khiến đường ống nước bị hư hỏng và các giải pháp khắc phục hiệu quả giúp bạn bảo vệ hệ thống cấp thoát nước gia đình."
    >
      <section className="page-header" style={{ background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/nguyen-nhan.png")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ textTransform: 'uppercase', fontSize: '2.5rem' }}>NGUYÊN NHÂN DẪN ĐẾN ỐNG NƯỚC HƯ HỎNG VÀ CÁCH KHẮC PHỤC</h1>
          <p style={{ marginTop: '15px', opacity: 0.9 }}>Bí quyết xử lý triệt để sự cố ống nước từ chuyên gia Bảo Trung.</p>
        </div>
      </section>

      <section className="article-detail" style={{ padding: '60px 0', background: '#f8fafc' }}>
        <div className="container article-grid">
          <div className="content">
            <p>Đường ống nước của bạn phát sinh vấn đề? Nếu là những trường hợp đơn giản bản hoàn toàn có thể tự mình giải quyết mà không cần gọi thợ sửa chữa. Ngay sau đây, hãy cùng tìm hiểu nguyên nhân ống nước hư hỏng và các giải quyết hiệu quả cho từng trường hợp.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '30px 0 20px' }}>Các nguyên nhân gây ra sự cố ống nước trong gia đình</h2>
            <ul className="check-list-modern">
              <li><strong>Đường ống nước bị chặn:</strong> Nếu hệ thống ống nước của bạn bị chặn, nó không thể dễ dàng bị tháo ra trong bồn rửa, vì đường ống không được bảo vệ và nhờn, với thức ăn, rác, bụi. tóc.</li>
              <li><strong>Vấn đề hệ thống ống nước trong nhà vệ sinh:</strong> Nếu các đường ống nước trong nhà vệ sinh của nhà bạn bị tắc, nước trong nhà vệ sinh không thể thoát ra và được lấp đầy khắp nơi hoặc trong nhà vệ sinh công cộng vì nhiều lý do. Nhưng hầu hết các nhà vệ sinh không được mọi người sử dụng đúng cách.</li>
              <li><strong>Đường ống nước bị vỡ:</strong> Có thể là do đường ống nước đã sử dụng quá lâu bị xuống cấp nên nứt gãy. Hoặc là do bị va đập mạnh bởi ngoại lực nên xuất hiện tình trạng này.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '30px 0 20px' }}>Đối với đường thoát nước bị tắc các cách sau</h2>
            <ul className="check-list-modern">
              <li>Sử dụng thường kỳ các chế phẩm sinh học thông tắc cống được bán trên thị trường.</li>
              <li><strong>Lưu ý quan trọng:</strong> Không nên sử dụng phương pháp đun ấm nước sôi để đổ xuống đường ống thoát vì nước nóng có thể làm chảy hoặc làm nhanh lão hóa các gioăng cao su tại các đường khớp nối hoặc làm chảy ống nhựa mềm của đường thoát. Việc này về lâu dài sẽ dẫn đến rò rỉ đường ống thoát nước.</li>
              <li>Bạn có thể mua dây lò xo thông cống bên ngoài cửa hàng để tự thông, các cuộn dây có chiều dài 1,5m, 3m, 5m tùy thuộc vào độ dài đường ống thoát mà bạn ước tính. Hơi bẩn chút nhưng việc này cũng dễ dàng, bạn nên tự làm trước khi gọi thợ sửa ống nước đến.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '30px 0 20px' }}>Đối với ống nước rò rỉ</h2>
            <p>Nếu bạn là người không có chuyên môn trong các vấn đề này thì việc xác định nơi nước bị rò rỉ là một việc khá khó khăn. Tuy nhiên, thông thường nước sẽ rò rỉ ra ngoài tại các khớp nối hay những khu vực đường ống có vết nứt hay vỡ. Chính vì vậy bạn hãy tìm đến những nơi này để tiến hành kiểm tra xem nước bị rỉ ra từ đâu nhé.</p>
            <p>Một trong những cách xác định tiếp theo là bạn xem tường nhà có những vết nước loang bất thường nào hay không cũng như theo dõi xem có vũng nước nào đọng trên nền nhà hay không, từ đó tìm đến nơi nước bị rò rỉ ra ngoài nhanh chóng.</p>

            <div style={{ background: '#eef2ff', padding: '30px', borderRadius: '15px', borderLeft: '6px solid #4f46e5', margin: '30px 0' }}>
              <p style={{ margin: 0 }}><strong>Lời khuyên:</strong> Tốt nhất bạn nên thay đường ống nước mới để có thể khôi phục sinh hoạt hằng ngày. Nếu đường ống nước quá dài cần chắp nối thì bạn nên liên hệ đến đơn vị sửa chữa đường ống nước để đảm bảo không phát sinh thêm vấn đề. Và bạn cũng sẽ được bên cung cấp dịch vụ bảo hành nên có thể hoàn toàn an tâm sau khi khắc phục.</p>
            </div>

            <div className="cta-box" style={{ background: 'var(--primary)', padding: '40px', borderRadius: '20px', color: 'white', textAlign: 'center', marginTop: '50px' }}>
              <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '15px' }}>BẠN CẦN THỢ SỬA NƯỚC TẬN NHÀ?</h3>
              <p style={{ marginBottom: '25px', opacity: 0.9 }}>Đội ngũ thợ Bảo Trung có mặt ngay sau 15 phút để xử lý mọi sự cố rò rỉ, tắc nghẽn.</p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <a href={`tel:${hotlineFull}`} className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--primary)', fontSize: '1.2rem', padding: '15px 40px' }}>GỌI NGAY: {hotline}</a>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="info-box">
              <h4>BÀI VIẾT LIÊN QUAN</h4>
              <ul className="sidebar-links">
                <li><Link href="/tin-tuc/cac-quy-tac-va-nguyen-tac-an-toan-khi-sua-chua-dien-dan-dung-tai-nha">Quy tắc an toàn điện</Link></li>
                <li><Link href="/tin-tuc/nhung-luu-y-an-toan-khi-sua-chua-dien-tai-nha-ma-ban-nen-biet">Lưu ý sửa điện an toàn</Link></li>
                <li><Link href="/tin-tuc/kinh-nghiem-lap-dat-sua-chua-dien-nuoc">Kinh nghiệm lắp đặt điện nước</Link></li>
              </ul>
            </div>

            <div className="info-box" style={{ marginTop: '30px', background: 'var(--secondary)', color: 'white' }}>
              <h4 style={{ color: 'white', borderColor: 'var(--primary)' }}>DỊCH VỤ CỦA CHÚNG TÔI</h4>
              <ul className="sidebar-links white-links">
                <li><Link href="/sua-dien-nuoc-tai-nha">Sửa điện nước tại nhà</Link></li>
                <li><Link href="/sua-ro-ri-nuoc">Sửa rò rỉ nước âm tường</Link></li>
                <li><Link href="/sua-may-bom-nuoc-tai-nha">Sửa máy bơm nước</Link></li>
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
        
        .white-links li a { color: rgba(255,255,255,0.9); }
        .white-links li a:hover { color: var(--primary); }
        .white-links li { border-bottom-color: rgba(255,255,255,0.1); }

        @media (max-width: 992px) {
          .article-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Layout>
  )
}
