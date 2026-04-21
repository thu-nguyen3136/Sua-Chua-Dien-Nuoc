import Layout from '../../components/Layout'
import Link from 'next/link'

export default function AnToanDienDanDung() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Các Quy Tắc Và Nguyên Tắc An Toàn Khi Sửa Chữa Điện Dân Dụng Tại Nhà"
      description="Tổng hợp các quy tắc và nguyên tắc an toàn điện quan trọng bạn cần biết trước khi tiến hành sửa chữa hệ thống điện tại nhà để đảm bảo an toàn tuyệt đối."
    >
      <section className="page-header" style={{ background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/cac-quy-tac.png")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ textTransform: 'uppercase', fontSize: '2.2rem', maxWidth: '900px', margin: '0 auto' }}>CÁC QUY TẮC VÀ NGUYÊN TẮC AN TOÀN KHI SỬA CHỮA ĐIỆN DÂN DỤNG TẠI NHÀ</h1>
          <p style={{ marginTop: '15px', opacity: 0.9 }}>An toàn là trên hết - Những điều bắt buộc phải biết khi tiếp xúc với điện.</p>
        </div>
      </section>

      <section className="article-detail" style={{ padding: '60px 0', background: '#f8fafc' }}>
        <div className="container article-grid">
          <div className="content">
            <p>Đối với các trường hợp quý khách tự sửa điện tại nhà thì vấn đề an toàn mọi người nên đặt lên hàng đầu và tham khảo trước khi tiến hành sửa chữa bất cứ thiết bị gì liên quan đến hệ thống điện nhà.</p>
            <p>Một trong những quy hàng đầu trong quá trình thiết kế, sửa điện dân dụng đó là đảm bảo an toàn điện. Vậy quy tắc, nguyên tắc an toàn khi sửa chữa điện dân dụng được quy định ra sao? Điện nước Bảo Trung sẽ tổng hợp các thông tin để quý khách tham khảo.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '30px 0 20px' }}>Thế nào là an toàn điện?</h2>
            <p>An toàn điện là các biện pháp ứng phó, đề phòng các sự cố có thể xảy ra dẫn đến tai nạn điện. Khi áp dụng các biện pháp an toàn điện giúp chúng ta được bảo vệ an toàn hơn, tốt hơn khi tiếp xúc hoặc làm việc trong các môi trường có hệ thống điện như nhà máy, công trường, nhà ở,… tránh các tổn thương do điện gây ra như giật điện, bỏng, cháy, nổ,…</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '30px 0 20px' }}>Nguyên tắc an toàn trong quá trình sửa chữa</h2>
            <p>Khi sửa điện tại nhà quý khách nên tham khảo các nguyên tắc an toàn trong quá trình sửa chữa để thực hiện đúng cách và đảm bảo an toàn điện. Dưới đây là các nguyên tắc quý khách cần tham khảo:</p>
            <ul className="check-list-modern">
                <li>Cần có các kiến thức cơ bản về hệ thống điện khi muốn sửa chữa.</li>
                <li>Nắm rõ nguyên lý hoạt động của hệ thống điện trước khi sửa chữa.</li>
                <li>Phải tuân thủ nguồn điện vào các thiết bị đóng ngắt trước như CB, cầu dao, cầu chì,…</li>
                <li>Dùng đồng hồ vạn năng, ampe kìm để kiểm tra điện trong quá trình sửa chữa.</li>
                <li>Luôn trang bị đầy đủ các dụng cụ bảo hộ, cách điện tốt như găng tay chuyên dụng, giày bảo hộ.</li>
                <li>Dùng tua vít, bút thử điện, kìm cách điện để tiến hành sửa chữa sau khi đã cúp điện.</li>
                <li>Treo bảng báo sửa chữa để đảm bảo không ai tới gần khu vực cúp điện trước đó.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '30px 0 20px' }}>Các quy tắc an toàn điện quan trọng</h2>
            
            <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)', marginBottom: '10px' }}>Lắp thiết bị điện đóng ngắt đúng cách</h3>
            <p>Khi lắp đặt, hoặc thi công hệ thống điện để đảm bảo an toàn thì phải có bản thiết kế mạch điện hoàn chỉnh theo đúng nguyên lý. Quý khách sẽ phải sử dụng các thiết bị đóng ngắt ở các nguồn chính sau đó đến nguồn từng khu vực. Đặc biệt lưu ý đến các khu vực sử dụng thiết bị công suất lớn hãy lắp các CB riêng cho từng thiết bị để tự động đóng ngắt dòng điện khi có sự cố chập điện, quá tải,…</p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)', marginBottom: '10px' }}>Chú ý chọn vị trí lắp đặt ổ điện, công tắc điện phù hợp</h3>
            <p>Quý khách nên lắp đặt công tắc điện ở nơi khô ráo, thoáng mát và có độ cao tối thiểu 70-90cm. Còn với ổ cắm thì 30-50cm so với mặt sàn và chọn các vị trí khô ráo, thông thoáng để lắp đặt.</p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)', marginBottom: '10px' }}>Giữ khoảng cách với nguồn điện và các thiết bị điện trong nhà</h3>
            <p>Đặc biệt là với nhà có trẻ nhỏ hoặc người không am hiểu hệ thống điện. Hãy nên tránh xa với các thiết bị điện trong nhà. Sử dụng các nắp đậy bảo vệ thiết bị điện để an toàn hơn trong quá trình sử dụng.</p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)', marginBottom: '10px' }}>Sử dụng các thiết bị chất lượng</h3>
            <p>Ông cha ta có câu: “tiền nào của đó” nên quý khách khi lắp đặt nên sử dụng các thiết bị điện chất lượng để đảm bảo an toàn và thời gian sử dụng lâu hơn. Chi phí có cao hơn nhưng bù lại thời gian sử dụng được dài hơn.</p>

            <div style={{ background: '#fff7ed', padding: '30px', borderRadius: '15px', borderLeft: '6px solid var(--primary)', margin: '30px 0' }}>
              <p style={{ margin: 0 }}><strong>Lưu ý:</strong> Để đảm bảo an toàn điện quý khách nên thường xuyên bảo dưỡng và thay thế các thiết bị điện trong nhà định kỳ. Sử dụng các thiết bị đo điện để kiểm tra khi có sự cố rò rỉ hoặc hư hỏng điện.</p>
            </div>

            <div className="cta-box" style={{ background: 'var(--secondary)', padding: '40px', borderRadius: '20px', color: 'white', textAlign: 'center', marginTop: '50px' }}>
              <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '15px' }}>SỰ CỐ ĐIỆN PHỨC TẠP? ĐỪNG TỰ SỬA!</h3>
              <p style={{ marginBottom: '25px', opacity: 0.9 }}>Gọi ngay thợ điện Bảo Trung để đảm bảo an toàn tuyệt đối cho gia đình bạn.</p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <a href={`tel:${hotlineFull}`} className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>GỌI THỢ ĐIỆN: {hotline}</a>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="info-box">
              <h4>KIẾN THỨC BỔ ÍCH</h4>
              <ul className="sidebar-links">
                <li><Link href="/tin-tuc/nguyen-nhan-dan-den-ong-nuoc-hu-hong-va-cach-khac-phuc">Nguyên nhân ống nước hỏng</Link></li>
                <li><Link href="/tin-tuc/nhung-luu-y-an-toan-khi-sua-chua-dien-tai-nha-ma-ban-nen-biet">Lưu ý sửa điện an toàn</Link></li>
                <li><Link href="/tin-tuc/kinh-nghiem-lap-dat-su-chua-dien-nuoc">Kinh nghiệm lắp đặt điện nước</Link></li>
              </ul>
            </div>
            
            <div className="info-box" style={{ marginTop: '30px', background: 'var(--primary)', color: 'white' }}>
              <h4 style={{ color: 'white', borderColor: 'white' }}>DỊCH VỤ KHẨN CẤP</h4>
              <ul className="sidebar-links white-links">
                <li><Link href="/sua-chap-dien">Sửa chập điện 24/7</Link></li>
                <li><Link href="/sua-dien-24h">Thợ điện trực đêm</Link></li>
                <li><Link href="/sua-cong-to-dien">Kiểm tra công tơ điện</Link></li>
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
        .check-list-modern li::before { content: '✓'; position: absolute; left: 0; color: var(--primary); font-weight: bold; top: 0; }

        .info-box { background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .info-box h4 { margin-bottom: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px; font-weight: 800; font-size: 1.1rem; }
        .sidebar-links { list-style: none; padding: 0; }
        .sidebar-links li { margin-bottom: 15px; border-bottom: 1px solid #f1f5f9; padding-bottom: 15px; }
        .sidebar-links li:last-child { border-bottom: none; }
        .sidebar-links li a { color: var(--text-dark); font-weight: 600; font-size: 0.95rem; transition: var(--transition); }
        .sidebar-links li a:hover { color: var(--primary); padding-left: 5px; }
        
        .white-links li a { color: white; }
        .white-links li a:hover { color: var(--secondary); }
        .white-links li { border-bottom-color: rgba(255,255,255,0.2); }

        @media (max-width: 992px) {
          .article-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Layout>
  )
}
