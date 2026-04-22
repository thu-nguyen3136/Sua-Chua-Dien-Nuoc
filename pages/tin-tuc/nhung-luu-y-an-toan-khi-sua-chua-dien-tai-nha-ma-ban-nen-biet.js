import Layout from '../../components/Layout'
import Link from 'next/link'

export default function LuuYAnToanSuaDien() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Những Lưu Ý An Toàn Khi Sửa Chữa Điện Tại Nhà Mà Bạn Nên Biết"
      description="Trang bị kiến thức và lưu ý quan trọng về an toàn điện trước khi tự sửa chữa tại nhà để tránh các rủi ro đáng tiếc như giật điện hay cháy nổ."
    >
      <section className="page-header" style={{ background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/nhung-luu-y.png")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ textTransform: 'uppercase', fontSize: '2.2rem', maxWidth: '900px', margin: '0 auto' }}>NHỮNG LƯU Ý AN TOÀN KHI SỬA CHỮA ĐIỆN TẠI NHÀ</h1>
          <p style={{ marginTop: '15px', opacity: 0.9 }}>Bảo vệ bản thân và gia đình bằng cách tuân thủ nghiêm ngặt các quy tắc điện.</p>
        </div>
      </section>

      <section className="article-detail" style={{ padding: '60px 0', background: '#f8fafc' }}>
        <div className="container article-grid">
          <div className="content">
            <p>Sửa chữa điện là công việc nguy hiểm, tiềm ẩn nguy cơ điện giật, cháy nổ nếu không được thực hiện đúng cách. Việc trang bị kiến thức và kinh nghiệm trước khi tiến hành sửa điện là điều rất cần thiết. Trong bài viết này, Điện Nước Bảo Trung sẽ cùng bạn tìm hiểu những lưu ý quan trọng khi sửa chữa điện tại nhà để đảm bảo an toàn nhé!</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '30px 0 20px' }}>Trang bị đầy đủ thiết bị an toàn</h2>
            <p>Trong quá trình sửa chữa hệ thống điện, cần được trang bị đầy đủ các thiết bị an toàn để đảm bảo an toàn cho bản thân. Mục tiêu quan trọng nhất là ngăn chặn nguy cơ giật điện.</p>
            <p>Bạn nên chuẩn bị một số dụng cụ và thiết bị như sau:</p>
            <ul className="check-list-modern">
                <li><strong>Dụng cụ kiểm tra:</strong> Bút thử điện, ampe kế, đồng hồ vạn năng.</li>
                <li><strong>Dụng cụ cách điện:</strong> Ủng cao su, găng tay cao su chuyên dụng, vách cách điện.</li>
                <li><strong>Dụng cụ sửa chữa:</strong> Cờ lê, tua vít có cán bọc nhựa cách điện.</li>
                <li><strong>Bảo hộ trên cao:</strong> Mũ bảo hộ và quần áo cách điện nếu cần leo trèo.</li>
            </ul>
            <p>Dù là thợ không chuyên, việc tuân thủ nguyên tắc này giúp giảm thiểu tối đa rủi ro. <strong>Lưu ý:</strong> Tuyệt đối không sửa điện khi trời mưa hoặc ở nơi có độ ẩm cao vì nước dẫn điện rất mạnh.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '30px 0 20px' }}>Các bước ngắt nguồn điện an toàn</h2>
            
            <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)', marginBottom: '10px' }}>1. Ngắt cầu dao/cầu chì tổng</h3>
            <p>Đây là bước đầu tiên và quan trọng nhất. Nếu không tìm thấy cầu dao tổng, hãy ngắt cầu chì bảo vệ mạch điện tương ứng. Sau khi ngắt, phải dùng bút thử điện kiểm tra lại một lần nữa để chắc chắn mạch đã hết điện hoàn toàn.</p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)', marginBottom: '10px' }}>2. Tắt bảng điều khiển điện</h3>
            <p>Đừng chủ quan nghĩ tắt nguồn là đủ. Nếu có người vô tình bật lại, bạn sẽ gặp nguy hiểm. Hãy tắt cả bảng điều khiển chính và nếu có thể, hãy khóa tủ điện lại trong suốt quá trình làm việc.</p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)', marginBottom: '10px' }}>3. Gắn biển cảnh báo</h3>
            <p>Sử dụng một miếng băng dính hoặc biển báo nhỏ ghi "ĐANG SỬA ĐIỆN - CẤM BẬT" tại khu vực cầu dao tổng. Điều này giúp người thân trong nhà không vô ý đóng điện gây tai nạn cho bạn.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '30px 0 20px' }}>Lưu ý về dụng cụ và môi trường làm việc</h2>
            <ul className="check-list-modern">
                <li><strong>Thang cách điện:</strong> Chỉ sử dụng thang gỗ hoặc thang sợi thủy tinh có chân bọc cao su. Tránh xa thang nhôm khi làm việc với điện.</li>
                <li><strong>Không làm việc nơi ướt:</strong> Nếu ổ cắm gần khu vực ẩm ướt, bắt buộc phải có thiết bị chống rò GFCI bảo vệ.</li>
                <li><strong>Dụng cụ chuẩn:</strong> Tuyệt đối không dùng tua vít hay kìm có tay cầm bằng kim loại trần.</li>
                <li><strong>Thông báo cho người thân:</strong> Hãy báo cho ít nhất một người trong nhà biết bạn đang sửa điện ở đâu để họ có thể ứng cứu kịp thời khi có sự cố.</li>
            </ul>

            <div style={{ background: '#fff1f2', padding: '30px', borderRadius: '15px', borderLeft: '6px solid #e11d48', margin: '30px 0' }}>
              <p style={{ margin: 0 }}><strong>CẢNH BÁO:</strong> Nếu bạn không tự tin hoặc thiếu kiến thức chuyên môn, đừng cố gắng tự sửa chữa. Điện rất nguy hiểm, chỉ một sai lầm nhỏ cũng có thể dẫn đến hậu quả nghiêm trọng.</p>
            </div>

            <div className="cta-box" style={{ background: 'var(--primary)', padding: '40px', borderRadius: '20px', color: 'white', textAlign: 'center', marginTop: '50px' }}>
              <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '15px' }}>DỊCH VỤ SỬA ĐIỆN TẠI NHÀ 24/7</h3>
              <p style={{ marginBottom: '25px', opacity: 0.9 }}>Bảo Trung luôn sẵn sàng hỗ trợ bạn xử lý mọi sự cố điện một cách an toàn và nhanh nhất.</p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <a href={`tel:${hotlineFull}`} className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--primary)', fontSize: '1.2rem', padding: '15px 40px' }}>GỌI THỢ NGAY: {hotline}</a>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="info-box">
              <h4>KIẾN THỨC BẠN CẦN</h4>
              <ul className="sidebar-links">
                <li><Link href="/tin-tuc/cac-quy-tac-va-nguyen-tac-an-toan-khi-sua-chua-dien-dan-dung-tai-nha">Quy tắc an toàn điện tổng hợp</Link></li>
                <li><Link href="/tin-tuc/nguyen-nhan-dan-den-ong-nuoc-hu-hong-va-cach-khac-phuc">Nguyên nhân ống nước hỏng</Link></li>
                <li><Link href="/tin-tuc/kinh-nghiem-lap-dat-su-chua-dien-nuoc">Kinh nghiệm lắp đặt hệ thống</Link></li>
              </ul>
            </div>
            
            <div className="info-box" style={{ marginTop: '30px', background: 'var(--secondary)', color: 'white' }}>
              <h4 style={{ color: 'white', borderColor: 'var(--primary)' }}>SỬA ĐIỆN KHẨN CẤP</h4>
              <ul className="sidebar-links white-links">
                <li><Link href="/sua-chap-dien">Xử lý chập điện 24h</Link></li>
                <li><Link href="/sua-cong-to-dien">Thay sửa công tơ điện</Link></li>
                <li><Link href="/sua-dien-24h">Thợ điện trực đêm</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .article-grid { display: grid; grid-template-columns: 2.5fr 1fr; gap: 50px; }
        .content { background: white; padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow); }
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
