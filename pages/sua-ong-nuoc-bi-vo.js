import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaOngNuocBiVo() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Sửa Ống Nước Bị Vỡ TP.HCM - Xử Lý Nhanh Triệt Để 24/7"
      description="Dịch vụ sửa ống nước bị vỡ, bục gãy chuyên nghiệp tại TP.HCM. Xử lý nhanh các sự cố rò rỉ nước âm tường, đảm bảo hệ thống nước hoạt động ổn định."
    >
      <section className="page-header">
        <div className="container">
          <h1>Sửa Ống Nước Bị Vỡ TP.HCM</h1>
          <p>Xử lý triệt để mọi sự cố bục vỡ đường ống nước - Cứu hộ khẩn cấp 24/24.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>CỨU HỘ ĐƯỜNG ỐNG NƯỚC BỊ VỠ KHẨN CẤP</h2>
            <img src="/sua-ong-nuoc-bi-vo.png" alt="Sửa ống nước bị vỡ" className="featured-img" />
            
            <p><strong>Điện Nước Bảo Trung</strong> cung cấp dịch vụ sửa ống nước bị vỡ chuyên nghiệp tại TP.HCM. Chúng tôi chuyên xử lý nhanh chóng và triệt để mọi sự cố bục vỡ đường ống cấp thoát nước, đảm bảo hệ thống nước của gia đình bạn hoạt động ổn định và an toàn nhất.</p>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>DẤU HIỆU ĐƯỜNG ỐNG NƯỚC BỊ VỠ NGẦM</h3>
            <ul>
              <li><strong>Tiền nước tăng đột biến:</strong> Dù nhu cầu sử dụng không đổi nhưng hóa đơn tiền điện nước vẫn tăng cao liên tục.</li>
              <li><strong>Áp lực nước yếu:</strong> Vòi nước chảy lờ đờ hoặc không có nước dù bồn chứa vẫn đầy.</li>
              <li><strong>Tường nhà bị thấm:</strong> Xuất hiện các vết loang lổ, ẩm mốc hoặc rỉ nước tại các vị trí dọc theo đường ống âm tường.</li>
              <li><strong>Tiếng nước chảy lạ:</strong> Nghe thấy tiếng róc rách hoặc tiếng nước chảy ngầm trong tường khi đã khóa hết van.</li>
            </ul>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>CHÚNG TÔI XỬ LÝ NHƯ THẾ NÀO?</h3>
            <div className="step-box" style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #eee' }}>
              <p>📍 <strong>Dò tìm vị trí vỡ:</strong> Sử dụng máy siêu âm công nghệ cao để định vị chính xác điểm bục vỡ âm tường mà không cần đục phá lan man.</p>
              <p>📍 <strong>Vá ống chuyên dụng:</strong> Áp dụng các kỹ thuật hàn ống nhiệt PPR hoặc thay thế đoạn ống bị lão hóa bằng vật liệu chất lượng cao.</p>
              <p>📍 <strong>Gia cố hệ thống:</strong> Kiểm tra áp lực và gia cố các mối nối xung quanh để đảm bảo không tái phát sự cố.</p>
            </div>

            <div className="process-box" style={{ marginTop: '40px', background: '#fff9f0', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>QUY TRÌNH LÀM VIỆC CHUYÊN NGHIỆP</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>BƯỚC 1</div>
                  <p style={{ fontSize: '0.85rem' }}>Tiếp nhận cuộc gọi qua Hotline</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>BƯỚC 2</div>
                  <p style={{ fontSize: '0.85rem' }}>Tư vấn giải pháp & báo giá sơ bộ</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>BƯỚC 3</div>
                  <p style={{ fontSize: '0.85rem' }}>Khảo sát điểm vỡ thực tế</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>BƯỚC 4</div>
                  <p style={{ fontSize: '0.85rem' }}>Tiến hành sửa chữa an toàn</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>BƯỚC 5</div>
                  <p style={{ fontSize: '0.85rem' }}>Nghiệm thu & Bảo hành</p>
                </div>
              </div>
            </div>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>CAM KẾT CỦA BẢO TRUNG</h2>
            <div className="row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <div style={{ padding: '15px', border: '1px dashed var(--primary)', borderRadius: '8px' }}>
                <strong>🚀 Siêu tốc:</strong> Có mặt ngay sau 20-30 phút tại các quận nội thành TP.HCM.
              </div>
              <div style={{ padding: '15px', border: '1px dashed var(--primary)', borderRadius: '8px' }}>
                <strong>💰 Tiết kiệm:</strong> Báo giá rõ ràng, không vẽ vời thêm hạng mục không cần thiết.
              </div>
              <div style={{ padding: '15px', border: '1px dashed var(--primary)', borderRadius: '8px' }}>
                <strong>🛡️ Chất lượng:</strong> Sử dụng linh kiện, ống nước chính hãng đạt chuẩn quốc tế.
              </div>
              <div style={{ padding: '15px', border: '1px dashed var(--primary)', borderRadius: '8px' }}>
                <strong>🧑‍🔧 Tận tâm:</strong> Thợ làm việc sạch sẽ, lễ phép và luôn đặt lợi ích khách hàng lên hàng đầu.
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Cứu Hộ Khẩn Cấp</h3>
              <p>Ống nước bị vỡ? Đừng lo, chúng tôi ở đây!</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Gửi Hình Ảnh Sự Cố</a>
            </div>
            
            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Lưu Ý Quan Trọng</h4>
              <p style={{ fontSize: '0.85rem', color: '#ff4d4f', fontWeight: 'bold' }}>Khi phát hiện ống nước vỡ:</p>
              <ul style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <li>❌ Khóa ngay van nước tổng.</li>
                <li>❌ Rút nguồn các thiết bị điện gần điểm rò rỉ.</li>
                <li>✅ Gọi ngay thợ chuyên nghiệp hỗ trợ.</li>
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
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; }
          .row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
