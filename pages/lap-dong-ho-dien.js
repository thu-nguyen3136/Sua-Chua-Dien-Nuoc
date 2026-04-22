import Layout from '../components/Layout'
import Link from 'next/link'

export default function LapDongHoDien() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Lắp Đồng Hồ Điện Tại Nhà - Thợ Lắp Đồng Hồ 1 Pha, 3 Pha | Bảo Trung"
      description="Dịch vụ lắp đồng hồ điện tại nhà uy tín tại TP.HCM – chuyên lắp đồng hồ điện 1 pha, 3 pha cho gia đình, văn phòng, nhà xưởng. Gọi ngay Điện nước Bảo Trung để được hỗ trợ!"
    >
      <section className="page-header">
        <div className="container">
          <h1>LẮP ĐỒNG HỒ ĐIỆN</h1>
          <p>Dịch vụ chuyên nghiệp - An toàn - Chính xác - Phục vụ nhanh chóng tại TP.HCM.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--primary)' }}>DỊCH VỤ LẮP ĐỒNG HỒ ĐIỆN TẠI NHÀ UY TÍN</h2>
            <img src="/lap-dong-ho-dien.png" alt="Lắp đồng hồ điện tại nhà" className="featured-img" />

            <p>Dịch vụ lắp đồng hồ điện tại nhà của Điện nước Bảo Trung đáp ứng mọi nhu cầu từ lắp đồng hồ điện 1 pha cho gia đình đến lắp đồng hồ điện 3 pha cho văn phòng, nhà xưởng tại TP.HCM. Với đội ngũ kỹ thuật viên tay nghề cao, chúng tôi cam kết lắp đặt nhanh chóng, an toàn, đúng tiêu chuẩn kỹ thuật, giúp khách hàng sử dụng điện hiệu quả và ổn định. Hãy lựa chọn chúng tôi để trải nghiệm dịch vụ chuyên nghiệp, giá cả hợp lý và chính sách bảo hành uy tín.</p>

            <img src="/lap-dong-ho-dien-1.png" alt="Thợ lắp đồng hồ điện 1 pha" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Khi nào cần lắp đồng hồ điện?</h2>
            <ul className="check-list-modern">
              <li>Với các hộ dân đang kinh doanh thuê trọ. Chắc chắn mỗi phòng đều có một đồng hồ điện để tiện tính điện sinh hoạt cho công khai.</li>
              <li>Với những khách hàng đang thuê nhà để kinh doanh nhưng nhà quá rộng. Cần cho thuê trọ và phải tách đồng hồ điện ra để rõ ràng trong quá trình sử dụng.</li>
              <li>Đồng hồ điện cũ và hỏng hóc: Nếu đồng hồ điện đã hoạt động trong một thời gian dài và bắt đầu bị hỏng hoặc không hoạt động đúng cách, thì cần phải thay đồng hồ điện mới để đảm bảo tính chính xác của việc đo lường và hiển thị năng lượng tiêu thụ.</li>
              <li>Cải tạo hoặc nâng cấp hệ thống điện: Nếu bạn thực hiện cải tạo hoặc nâng cấp hệ thống điện của mình. Thì cần phải thay đồng hồ điện để phù hợp với các cấu trúc mới.</li>
            </ul>

            <img src="/lap-dong-ho-dien-2.png" alt="Lắp đặt hệ thống đồng hồ điện phòng trọ" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Các hạng mục lắp đồng hồ điện tại Điện nước Bảo Trung bao gồm</h2>
            <ul className="check-list-modern">
              <li>Nhận kiểm tra, tách hệ thống điện có quý khách có nhu cầu cho thuê phòng trọ .</li>
              <li>Kiểm tra hệ thống điện cho phòng trọ đã lắp đồng hồ điện nhưng chạy không chính xác .</li>
              <li>Lắp đồng hồ điện 1 pha, 3 pha cho nhà trọ, hộ kinh doanh cho thuê nhà, thuê mặt bằng, nhà xưởng,...</li>
              <li>Thay thế các đồng hỗ cũ, chạy không chính xác hay lúc chạy lúc dừng.</li>
              <li>Cung cấp các loại đồng hồ 1 pha, 3 pha có kiểm định lẫn không kiểm định nhưng chạy chính xác .</li>
            </ul>
            <p>Đến với chúng tôi Quý Khách vô cùng yên tâm với hơn nhiều năm kinh nghiệm trong lĩnh vực điện nước, trong đó có dịch vụ lắp đặt đồng hồ công tơ điện tại nhà.</p>

            <img src="/lap-dong-ho-dien-3.png" alt="Thợ thi công tách điện lắp đồng hồ" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Quy trình lắp đặt đồng hồ điện tiêu chuẩn</h2>
            <div className="process-box" style={{ background: '#f8f9fa', padding: '30px', borderRadius: 'var(--radius)' }}>
              <p><strong>Bước 1: Chuẩn bị trước khi lắp đồng hồ điện:</strong> Trước khi bắt đầu lắp đặt đồng hồ điện tại nhà, bạn cần phải chuẩn bị các dụng cụ cần thiết như máy khoan cầm tay, dụng cụ cắt, công tơ điện, thiết bị bảo vệ, dây cáp, ống đựng dây. Và các vật liệu khác tùy theo yêu cầu của từng hệ thống điện.</p>

              <img src="/lap-dong-ho-dien-4.png" alt="Chuẩn bị thiết bị lắp đồng hồ" className="content-img" />

              <p><strong>Bước 2: Kiểm tra đường dây điện và thiết bị cung cấp điện:</strong> Trước khi lắp đồng hồ điện, bạn cần kiểm tra đường dây và các thiết bị như máy biến áp hoặc hộp phân phối. Đảm bảo chúng đang hoạt động bình thường.</p>

              <p><strong>Bước 3: Lựa chọn đồng hồ điện phù hợp:</strong> Tùy vào nhu cầu sử dụng điện của phòng trọ, bạn cần lựa chọn đồng hồ điện phù hợp với công suất và loại đếm thời gian. Ngoài ra cũng lựa chọn công tơ điện 1 pha hay 3 pha, công tơ điện tử hay loại cơ. Quan trọng hơn là phải lựa chọn đúng loại đồng hồ chính hãng có kiểm định đầy đủ.</p>


              <p><strong>Bước 4: Tìm vị trí và tiến hành lắp công tơ điện:</strong> Tìm một vị trí phù hợp để lắp đặt đồng hồ điện. Vị trí này cần phải đảm bảo an toàn và tiện lợi cho việc kiểm tra đồng hồ điện. Sau đó, bạn cần tiến hành lắp đặt và kết nối các dây điện đến đồng hồ.</p>

              <p><strong>Bước 5: Kiểm tra lại đồng hồ điện:</strong> Sau khi lắp đặt xong, bạn cần kiểm tra chức năng của đồng hồ điện. Bằng cách sử dụng thiết bị bảo vệ và đo đạc để xác định các thông số điện áp, dòng điện, công suất, hệ số công suất, tần số,… Các thông số này phải đáp ứng các yêu cầu kỹ thuật và tiêu chuẩn an toàn.</p>

              <img src="/lap-dong-ho-dien-6.png" alt="Kiểm tra đồng hồ sau khi lắp" className="content-img" />

              <p><strong>Bước 6: Bảo trì và sửa chữa đồng hồ điện:</strong> Để đảm bảo đồng hồ điện hoạt động tốt trong thời gian dài. Bạn cần thực hiện bảo trì định kỳ, kiểm tra và sửa chữa khi cần thiết. Đồng thời, nếu phát hiện các lỗi hoặc vấn đề về đồng hồ điện. Bạn cần phải sửa chữa ngay lập tức để tránh các nguy hiểm liên quan đến điện.</p>
            </div>

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Cam kết dịch vụ từ Điện nước Bảo Trung</h2>
            <ul className="check-list-modern">
              <li>Đội ngũ thợ điện chuyên nghiệp, nhiệt tình, giàu kinh nghiệm, đáng tin cậy</li>
              <li>Tư vấn khảo sát, báo giá miễn phí</li>
              <li>Lắp đặt, thi công đúng kỹ thuật, đúng tiến độ</li>
              <li>Bảo hành sản phẩm, dịch vụ dài hạn và chu đáo</li>
              <li>Xuất hóa đơn thanh toán rõ ràng khi hoàn thành công việc</li>
            </ul>

            <img src="/lap-dong-ho-dien-7.png" alt="Lắp đặt đồng hồ điện 3 pha" className="content-img" />

            <p style={{ marginTop: '20px' }}>Liên hệ ngay với thợ lắp đặt đồng hồ điện 1 pha, 3 pha tại nhà trọ, nhà cho thuê, lắp đồng hồ phụ của Điện nước Bảo Trung. Chúng tôi cung cấp dịch vụ giá rẻ, uy tín, chuyên nghiệp, chất lượng, bảo hành tốt. Liên hệ ngay <strong>039.330.3524 - 0353.422.680</strong>.</p>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>KHU VỰC PHỤC VỤ TẠI TP.HCM</h2>


            <div style={{ marginTop: '40px', padding: '25px', background: 'var(--secondary)', borderRadius: '12px', color: 'white' }}>
              <p style={{ margin: 0, color: 'white', fontStyle: 'italic' }}>"Điện nước Bảo Trung - giải pháp điện nước toàn diện cho mọi gia đình!"</p>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Lắp Đồng Hồ Điện</h3>
              <p>Phục vụ 24/7 - Uy tín - Giá rẻ</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Tư Vấn Ngay</a>
            </div>

            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Ưu Điểm Dịch Vụ</h4>
              <ul style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <li>✅ Thợ giàu kinh nghiệm.</li>
                <li>✅ Tư vấn báo giá miễn phí.</li>
                <li>✅ Thi công đúng kỹ thuật.</li>
                <li>✅ Bảo hành dài hạn.</li>
                <li>✅ Hóa đơn minh bạch.</li>
              </ul>
            </div>

            <div className="info-box" style={{ marginTop: '20px' }}>
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Hotline Hỗ Trợ</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Chúng tôi trực 24/7 tại TPHCM:</p>
              <p style={{ fontWeight: 'bold', color: 'var(--primary)', marginTop: '5px' }}>0353.422.680 - 039.330.3524</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-header { background: var(--primary); color: white; padding: 60px 0; text-align: center; }
        .page-header h1 { font-size: 2.5rem; margin-bottom: 10px; }
        .service-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; align-items: start; }
        .content { background: white; padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .content h2 { margin: 30px 0 15px; }
        .content p { margin-bottom: 20px; color: var(--text-light); line-height: 1.8; }
        .featured-img { width: 100%; border-radius: 12px; margin-bottom: 25px; box-shadow: var(--shadow); }
        .content-img { width: 100%; border-radius: 12px; margin: 20px 0; box-shadow: var(--shadow); }
        .sidebar { position: sticky; top: 100px; }
        .cta-box { color: white; padding: 30px; border-radius: var(--radius); text-align: center; margin-bottom: 30px; }
        .hotline-btn { display: block; width: 100%; margin: 20px 0 10px; font-size: 1.2rem; }
        .zalo-btn { display: block; width: 100%; background: #0084ff; border: none; }
        .info-box { background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .info-box h4 { border-bottom: 2px solid; padding-bottom: 10px; margin-bottom: 15px; }
        .check-list-modern { list-style: none; padding: 0; }
        .check-list-modern li { position: relative; padding-left: 30px; margin-bottom: 12px; color: var(--text-light); line-height: 1.6; font-size: 0.95rem; }
        .check-list-modern li::before { content: '✓'; position: absolute; left: 0; color: var(--primary); font-weight: bold; font-size: 1.2rem; top: -2px; }
        @media (max-width: 992px) {
          .service-grid { grid-template-columns: 1fr; }
          .sidebar { position: static; }
        }
        @media (max-width: 768px) {
          .branch-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
