import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaCongToDien() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Sửa Công Tơ Điện - Lắp Đặt Đồng Hồ Điện TP.HCM | Bảo Trung"
      description="Điện Nước Bảo Trung chuyên sửa công tơ điện uy tín tại TP.HCM và các tỉnh lân cận. Đội ngũ kỹ thuật tay nghề cao, phục vụ nhanh chóng, giá cả hợp lý."
    >
      <section className="page-header">
        <div className="container">
          <h1>SỬA CÔNG TƠ ĐIỆN</h1>
          <p>Dịch vụ sửa chữa, kiểm tra và lắp đặt công tơ điện chuyên nghiệp tại TP.HCM.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--primary)' }}>SỬA CÔNG TƠ ĐIỆN CHUYÊN NGHIỆP</h2>
            <img src="/sua-cong-to-dien.png" alt="Sửa công tơ điện" className="featured-img" />

            <p>Điện Nước Bảo Trung chuyên cung cấp dịch vụ sửa chữa công tơ điện uy tín, chuyên nghiệp tại TP.HCM và các khu vực lân cận như Bình Dương, Đồng Nai, Long An. Với đội ngũ kỹ thuật viên lành nghề, chúng tôi cam kết mang lại giải pháp tối ưu cho mọi vấn đề về công tơ điện, từ các lỗi đơn giản như hỏng hóc dây dẫn đến những sự cố phức tạp liên quan đến hệ thống điện. Điện Nước Bảo Trung tự hào là đối tác đáng tin cậy của hàng nghìn khách hàng nhờ vào sự tận tâm, giá cả hợp lý và chế độ hậu mãi chu đáo.</p>

            <img src="/lap-dong-ho-dien.png" alt="Lắp đặt đồng hồ điện" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Những nguyên nhân gây nên sự cố của công tơ điện</h2>
            <ul className="check-list-modern">
              <li><strong>Lão hóa thiết bị:</strong> Sau thời gian dài sử dụng, các bộ phận của công tơ điện như dây dẫn, tiếp điểm hoặc bo mạch có thể bị lão hóa, gây ra các sự cố không mong muốn.</li>
              <li><strong>Quá tải điện:</strong> Việc sử dụng nhiều thiết bị điện có công suất lớn cùng lúc dẫn đến quá tải, khiến công tơ hoạt động quá công suất, dễ bị hỏng hóc.</li>
              <li><strong>Lắp đặt không đúng kỹ thuật:</strong> Công tơ được lắp đặt sai vị trí, không tuân thủ tiêu chuẩn kỹ thuật có thể dẫn đến đo lường sai hoặc không hoạt động ổn định.</li>
              <li><strong>Yếu tố ngoại cảnh:</strong> Công tơ điện bị ảnh hưởng bởi môi trường khắc nghiệt như nhiệt độ cao, ẩm thấp hoặc côn trùng làm tổ cũng có thể gây hư hại.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Lợi ích của việc sửa chữa công tơ điện</h2>
            <p>Tủ công tơ điện được dùng để đo đếm các thông số điện năng thương mại hoặc thông số điện năng kỹ thuật. Do vậy, phạm vi sử dụng của tủ công tơ điện tương đối đa dạng. Thiết bị này có thể được dùng trong các tòa nhà cao tầng, chung cư, trường học, quảng trưởng, bến xe, bến tàu, cầu cảng, sân bay… hoặc tại các phòng kỹ thuật điện của tòa nhà.</p>
            <p>Trong quá trình sử dụng, tủ công tơ điện có thể gặp phải một số lỗi vận hành, lỗi hiển thị thậm chí là ngưng hoạt động. Nếu không được phát hiện và sửa chữa kịp thời thì các lỗi này có thể trở trở nên trầm trọng và làm gián đoạn chức năng đo đếm điện năng của thiết bị. Vì vậy, cần thường xuyên bảo dưỡng tủ điện công tơ để nhanh chóng phát hiện và sửa chữa các lỗi cũng như đảm bảo tốt quá trình vận hành của thiết bị. Ngoài việc gián đoạn chức năng đo đếm điện năng của thiết bị thì:</p>

            <ul className="check-list-modern">
              <li>Sửa công tơ điện bị hỏng, quay nhanh hoặc không quay</li>
              <li>Sửa công tơ điện lúc quay lúc không, tính số điện không chính xác</li>
              <li>Lắp đồng hồ điện tận nơi, đảm bảo quá trình lắp đặt an toàn, nhanh chóng.</li>
              <li>Kiểm tra, tách hệ thống điện.</li>
              <li>Sửa chữa các vấn đề liên quan đến đồng hồ điện.</li>
              <li>Lắp đồng hồ điện đa dạng chủng loại, hình thức: 1 pha, 3 pha cho nhà trọ, hộ kinh doanh cho thuê nhà, thuê mặt bằng, nhà xưởng,…</li>
              <li>Thực hiện vệ sinh, bảo dưỡng, kiểm tra hoạt động của đồng hồ điện cũ.</li>
              <li>Cung cấp các loại đồng hồ điện chính hãng, chất lượng tốt, xuất xứ rõ ràng.</li>
              <li>Hỗ trợ một vài vấn đề khác liên quan đến đồng hồ điện.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Tại Điện Nước Bảo Trung, chúng tôi thực hiện quy trình sửa công tơ điện chuyên nghiệp</h2>
            <div className="process-box" style={{ background: '#f8f9fa', padding: '30px', borderRadius: 'var(--radius)' }}>
              <p><strong>Bước 1:</strong> Kiểm tra độ an toàn của các thiết bị, dụng cụ và môi trường làm việc. Để đảm bảo an toàn cho người bảo dưỡng, tốt nhất là nên tắt nguồn điện tại aptomat tổng. Ngoài ra, người bảo dưỡng cũng cần dùng đồng hồ đo điện hoặc bút thử điện để kiểm tra trạng thái nghỉ của thiết bị.</p>
              <p><strong>Bước 2:</strong> Bảo dưỡng vỏ tủ điện công tơ. Dùng khăn sạch lau chùi khung tủ và bề mặt vỏ tủ. Chú ý đến các biển chỉ dẫn hoặc các khung giấy ghi chú thông số kỹ thuật của tủ. Nếu chúng bị bong, tróc thì cần dùng băng dính dán lại.</p>
              <p><strong>Bước 3:</strong> Bảo dưỡng các thiết bị bên trong tủ điện công tơ. Kiểm tra các thiết bị bên trong tủ đặc biệt là các đồng hồ đo thông số điện. Nếu phát hiện các ốc vít bị lỏng hoặc lệch vị trí chuẩn, hãy dùng kìm và tua vít để chỉnh lại. Ngoài ra, nếu phát hiện các thiết bị bị hỏng hóc nghiêm trọng thì cần nhanh chóng sửa chữa hoặc thay mới để đảm bảo sự vận hành an toàn và hiệu quả của tủ điện.</p>
              <p><strong>Bước 4:</strong> Dùng máy hút bụi để làm sạch mọi bụi bẩn bám trên bề mặt và các kẽ hở, ngóc ngách của tủ điện. Tuyệt đối không dùng khăn ướt hay các dung dịch tẩy rửa không chuyên dụng. Bởi các chất lỏng có thể ngấm vào thiết bị đo đếm điện năng, làm tủ điện công tơ bị chập, hỏng hoặc hiển thị sai lệch kết quả.</p>
              <p><strong>Bước 5:</strong> Đóng tủ điện và bật aptomat, kiểm tra sự vận hành của tủ công tơ điện sau khi bảo dưỡng.</p>
            </div>

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Cam kết dịch vụ tại Điện Nước Bảo Trung</h2>
            <p>Để đảm bảo sự ổn định và an toàn cho hệ thống điện của quý khách, Điện Nước Bảo Trung cam kết cung cấp dịch vụ lắp công tơ điện chất lượng cao tại TP. HCM và các tỉnh lân cận. Chúng tôi không chỉ mang đến sự chuyên nghiệp và uy tín mà còn cam kết với quý khách hàng về chất lượng và độ bền thông qua chính sách bảo hành tận tâm.</p>

            <ul className="check-list-modern">
              <li><strong>Chất lượng đảm bảo:</strong> Đồng hồ điện của chúng tôi được chọn lựa từ những nhà sản xuất uy tín, đảm bảo chất lượng và độ chính xác cao nhất trên thị trường.</li>
              <li><strong>Bảo hành dài hạn:</strong> Chúng tôi tự tin về chất lượng của sản phẩm và dịch vụ của mình nên áp dụng chính sách bảo hành dài hạn, giúp khách hàng yên tâm sử dụng.</li>
              <li><strong>Sự linh hoạt trong bảo hành:</strong> Nếu phát sinh vấn đề trong quá trình sử dụng, chúng tôi cam kết đáp ứng nhanh chóng và linh hoạt trong việc sửa chữa hoặc thay thế.</li>
              <li><strong>Liên hệ ngay để nhận hỗ trợ nhanh chóng:</strong> Để đảm bảo quý khách hàng luôn nhận được sự hỗ trợ tốt nhất, chúng tôi có đội ngũ nhân viên chăm sóc khách hàng 24/7 sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.</li>
            </ul>

            <p style={{ marginTop: '30px' }}>Hãy để Điện Nước Bảo Trung đồng hành cùng bạn trong việc khắc phục các sự cố điện, giúp hệ thống công tơ điện của bạn luôn vận hành an toàn và ổn định. Liên hệ ngay qua Hotline: <strong>0353.422.680 - 039.330.3524</strong> để nhận được sự hỗ trợ nhanh chóng và tận tâm nhất.</p>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>Phục Vụ Toàn Tp.Hồ Chí Minh Và Các Tỉnh Lân Cận</h2>
            <div className="branch-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px', fontSize: '0.85rem' }}>


              <p><strong>Có mặt nhanh chóng, kịp thời sau 20 phút</strong></p>

            </div>

            <div style={{ marginTop: '40px', padding: '25px', background: 'var(--secondary)', borderRadius: '12px', color: 'white' }}>
              <p style={{ margin: 0, color: 'white', fontStyle: 'italic' }}>"Điện nước Bảo Trung - giải pháp điện nước toàn diện cho mọi gia đình!"</p>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Sửa Công Tơ Điện</h3>
              <p>Phục vụ 24/7 - Uy tín - Giá cả cạnh tranh</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Tư Vấn Ngay</a>
            </div>

            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Vì Sao Chọn Bảo Trung?</h4>
              <ul style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <li>✅ Thợ tay nghề cao, kinh nghiệm.</li>
                <li>✅ Giá dịch vụ tiết kiệm.</li>
                <li>✅ Chế độ bảo hành dài hạn.</li>
                <li>✅ Minh bạch về hóa đơn.</li>
              </ul>
            </div>

            <div className="info-box" style={{ marginTop: '20px' }}>
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Hotline Hỗ Trợ 24/7</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Gọi ngay để được kỹ thuật viên tư vấn miễn phí:</p>
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
          .why-grid { grid-template-columns: 1fr !important; }
          .branch-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
