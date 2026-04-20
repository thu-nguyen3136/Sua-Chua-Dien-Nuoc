import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaCongToDien() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Sửa Công Tơ Điện - Kiểm Tra Đồng Hồ Điện Chính Xác | Điện Nước Bảo Trung"
      description="Dịch vụ kiểm tra, sửa chữa công tơ điện chạy sai, quay nhanh hoặc không quay. Lắp đặt đồng hồ điện phụ cho phòng trọ, hộ kinh doanh tại TP.HCM."
    >
      <section className="page-header">
        <div className="container">
          <h1>Sửa & Kiểm Tra Công Tơ Điện</h1>
          <p>Giải pháp đo đếm điện năng chính xác, minh bạch cho gia đình và hộ kinh doanh.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>DỊCH VỤ KIỂM TRA ĐỒNG HỒ ĐIỆN CHUYÊN NGHIỆP</h2>
            <img src="/sua-cong-to-dien.png" alt="Sửa công tơ điện" className="featured-img" />
            
            <p><strong>Điện Nước Bảo Trung</strong> chuyên cung cấp dịch vụ sửa chữa công tơ điện uy tín tại TP.HCM và các tỉnh lân cận. Chúng tôi giúp bạn giải quyết triệt để nỗi lo hóa đơn tiền điện tăng cao bất thường do đồng hồ chạy sai hoặc các sự cố kỹ thuật phức tạp.</p>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>TẠI SAO CÔNG TƠ ĐIỆN CỦA BẠN GẶP SỰ CỐ?</h3>
            <ul>
              <li><strong>Lão hóa thiết bị:</strong> Sau thời gian dài sử dụng, bo mạch và các tiếp điểm bị oxy hóa dẫn đến đo lường sai lệch.</li>
              <li><strong>Quá tải hệ thống:</strong> Sử dụng quá nhiều thiết bị công suất lớn khiến công tơ phải hoạt động quá công suất định mức.</li>
              <li><strong>Lắp đặt sai kỹ thuật:</strong> Công tơ không được đấu nối đúng tiêu chuẩn gây hiện tượng rò rỉ điện hoặc hỏng hóc.</li>
              <li><strong>Yếu tố môi trường:</strong> Nhiệt độ cao, độ ẩm hoặc côn trùng xâm nhập làm tổ gây chập cháy bên trong tủ điện.</li>
            </ul>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>CÁC HẠNG MỤC SỬA CHỮA CHÚNG TÔI CUNG CẤP</h3>
            <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div className="feature-item" style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', borderLeft: '3px solid var(--primary)' }}>
                <strong>⚙️ Hiệu chỉnh:</strong> Sửa công tơ quay nhanh, quay chậm hoặc không quay.
              </div>
              <div className="feature-item" style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', borderLeft: '3px solid var(--primary)' }}>
                <strong>🔌 Lắp đặt:</strong> Gắn đồng hồ điện phụ 1 pha, 3 pha cho phòng trọ, mặt bằng.
              </div>
              <div className="feature-item" style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', borderLeft: '3px solid var(--primary)' }}>
                <strong>🔍 Kiểm tra:</strong> Dò tìm rò rỉ điện âm tường gây hao phí điện năng hàng tháng.
              </div>
              <div className="feature-item" style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', borderLeft: '3px solid var(--primary)' }}>
                <strong>✨ Bảo dưỡng:</strong> Vệ sinh, siết chặt các đầu nối trong tủ điện công tơ.
              </div>
            </div>

            <div className="process-box" style={{ marginTop: '40px', background: '#fff9f0', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>QUY TRÌNH BẢO DƯỠNG & SỬA CHỮA</h3>
              <div className="step-list">
                <div style={{ marginBottom: '15px' }}><strong>Bước 1: Kiểm tra an toàn</strong> - Ngắt nguồn điện tổng, dùng bút thử điện kiểm tra trạng thái nghỉ của thiết bị.</div>
                <div style={{ marginBottom: '15px' }}><strong>Bước 2: Bảo dưỡng vỏ tủ</strong> - Lau chùi bề mặt, dán lại các biển chỉ dẫn và thông số kỹ thuật bị bong tróc.</div>
                <div style={{ marginBottom: '15px' }}><strong>Bước 3: Kiểm tra linh kiện</strong> - Siết chặt các ốc vít, thay thế các thiết bị hư hỏng nghiêm trọng bên trong.</div>
                <div style={{ marginBottom: '15px' }}><strong>Bước 4: Làm sạch hút bụi</strong> - Sử dụng máy hút bụi chuyên dụng để làm sạch mọi ngóc ngách, tuyệt đối không dùng khăn ướt.</div>
                <div style={{ marginBottom: '5px' }}><strong>Bước 5: Vận hành thử</strong> - Đóng điện và kiểm tra lại độ chính xác của công tơ trước khi bàn giao.</div>
              </div>
            </div>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>CAM KẾT TỪ ĐIỆN NƯỚC BẢO TRUNG</h2>
            <p>Sự minh bạch và chính xác là ưu tiên số 1 của chúng tôi khi xử lý các vấn đề liên quan đến đo đếm điện năng:</p>
            <div className="why-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>
              <div className="why-col">
                <h4>✅ Chất lượng đảm bảo</h4>
                <p style={{ fontSize: '0.9rem' }}>Đồng hồ điện thay thế đều là hàng chính hãng từ các nhà sản xuất uy tín, độ chính xác cao nhất.</p>
              </div>
              <div className="why-col">
                <h4>🛡️ Bảo hành dài hạn</h4>
                <p style={{ fontSize: '0.9rem' }}>Chính sách bảo hành tận tâm, hỗ trợ xử lý ngay lập tức nếu phát sinh vấn đề sau sửa chữa.</p>
              </div>
              <div className="why-col">
                <h4>⚡ Phục vụ 24/7</h4>
                <p style={{ fontSize: '0.9rem' }}>Đội ngũ nhân viên luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn bất kể ngày đêm.</p>
              </div>
              <div className="why-col">
                <h4>💰 Giá cả hợp lý</h4>
                <p style={{ fontSize: '0.9rem' }}>Báo giá công khai, cạnh tranh, cam kết mang lại giải pháp tiết kiệm nhất cho khách hàng.</p>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Đặt Lịch Kiểm Tra</h3>
              <p>Tránh lãng phí điện năng ngay hôm nay!</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Chát Zalo Tư Vấn</a>
            </div>
            
            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Ứng Dụng Tủ Công Tơ</h4>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>Chúng tôi thi công cho:</p>
              <ul style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <li>🏢 Tòa nhà cao tầng, chung cư</li>
                <li>🏫 Trường học, bệnh viện</li>
                <li>🏬 Trung tâm thương mại, bến xe</li>
                <li>🏠 Nhà trọ, hộ kinh doanh cho thuê</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-header { background: var(--primary); color: white; padding: 60px 0; text-align: center; }
        .page-header h1 { font-size: 2.5rem; margin-bottom: 10px; }
        .service-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; }
        .content { background: white; padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .content h2 { margin: 30px 0 15px; }
        .content p { margin-bottom: 20px; color: var(--text-light); line-height: 1.8; }
        .cta-box { color: white; padding: 30px; border-radius: var(--radius); text-align: center; margin-bottom: 30px; }
        .hotline-btn { display: block; width: 100%; margin: 20px 0 10px; font-size: 1.2rem; }
        .zalo-btn { display: block; width: 100%; background: #0084ff; border: none; }
        .info-box { background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .info-box h4 { border-bottom: 2px solid; padding-bottom: 10px; margin-bottom: 15px; }
        .info-box ul li { margin-bottom: 10px; font-size: 0.9rem; padding-left: 20px; position: relative; }
        .info-box ul li::before { content: '💠'; position: absolute; left: 0; }
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; }
          .why-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
