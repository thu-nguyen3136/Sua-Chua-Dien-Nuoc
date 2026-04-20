import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaOngNuocTaiNha() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Sửa Ống Nước Tại Nhà TP.HCM - Xử Lý Triệt Để Rò Rỉ, Tắc Nghẽn"
      description="Dịch vụ sửa chữa ống nước chuyên nghiệp tại TP.HCM. Xử lý ống nước rò rỉ, thông tắc bồn cầu, chậu rửa, lắp đặt thiết bị vệ sinh. Thợ giỏi, có mặt ngay sau 20 phút."
    >
      <section className="page-header">
        <div className="container">
          <h1>Sửa Ống Nước Tại Nhà TP.HCM</h1>
          <p>Khắc phục mọi sự cố về đường ống cấp thoát nước - Uy tín, Tận tâm, Giá rẻ 24/7.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>GIẢI PHÁP SỬA CHỮA ĐƯỜNG ỐNG NƯỚC TOÀN DIỆN</h2>
            <img src="/sua-ong-nuoc.png" alt="Sửa ống nước chuyên nghiệp" className="featured-img" />
            
            <p><strong>Điện nước Bảo Trung</strong> chuyên nhận sửa ống nước bị rò rỉ, ống nước bị tắc, thủng đường ống cấp thoát nước âm tường, âm nền tại các quận huyện TP. Hồ Chí Minh và các tỉnh lân cận. Chúng tôi cam kết mang lại sự hài lòng tuyệt đối với quy trình làm việc khoa học và đội ngũ thợ tay nghề cao.</p>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>CÁC SỰ CỐ ĐƯỜNG ỐNG NƯỚC THƯỜNG GẶP</h3>
            <div className="issue-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)' }}>🚫 Đường ống bị chặn</h4>
                <p style={{ fontSize: '0.9rem' }}>Do thức ăn thừa, rác thải hoặc tóc rụng tích tụ lâu ngày làm bồn rửa, cống thoát nước bị nghẹt không thoát được nước.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)' }}>🚽 Sự cố nhà vệ sinh</h4>
                <p style={{ fontSize: '0.9rem' }}>Hệ thống ống xả bồn cầu bị tắc hoặc hư hỏng bộ xả khiến nước tràn ra ngoài hoặc không thể dội sạch.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)' }}>💧 Đường ống bị rò rỉ</h4>
                <p style={{ fontSize: '0.9rem' }}>Vết nứt trên đường ống âm tường làm thất thoát nước, gây thấm mốc và tăng tiền nước hàng tháng một cách bất thường.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--secondary)' }}>🛠️ Thiết bị hư hỏng</h4>
                <p style={{ fontSize: '0.9rem' }}>Van vòi nước, sen tắm, bồn rửa tay lavabo bị gãy, rò rỉ nước hoặc chảy yếu do cặn bẩn bám lâu ngày.</p>
              </div>
            </div>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>HẠNG MỤC THI CÔNG CHI TIẾT</h3>
            <ul>
              <li><strong>Sửa chữa & Thay thế:</strong> Bồn cầu, chậu rửa, sen vòi, lavabo, van vòi nước các loại.</li>
              <li><strong>Xử lý rò rỉ:</strong> Dò tìm và khắc phục triệt để đường ống nước bị bể, rò rỉ âm tường, âm nền.</li>
              <li><strong>Lắp đặt hệ thống mới:</strong> Thi công đường ống nước nóng lạnh (ống PPR), hàn ống chịu nhiệt cho máy nước năng lượng mặt trời.</li>
              <li><strong>Thông tắc chuyên nghiệp:</strong> Thông nghẹt bồn cầu, chậu rửa chén, thoát sàn bằng máy móc hiện đại, không đục phá.</li>
              <li><strong>Cải tạo hệ thống:</strong> Lắp đặt máy bơm tăng áp, lắp đồng hồ nước riêng cho phòng trọ, căn hộ.</li>
            </ul>

            <div className="process-box" style={{ marginTop: '40px', background: '#fef9f0', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>QUY TRÌNH TIẾP NHẬN & XỬ LÝ</h3>
              <div className="process-list">
                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ width: '30px', height: '30px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
                  <div><strong>Tiếp nhận:</strong> Ghi nhận tình trạng sự cố và phân tích các hạng mục công việc cần thực hiện.</div>
                </div>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ width: '30px', height: '30px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
                  <div><strong>Tư vấn:</strong> Hướng dẫn khách hàng khóa van tổng hoặc xử lý tạm thời để tránh thiệt hại lan rộng.</div>
                </div>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ width: '30px', height: '30px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
                  <div><strong>Khảo sát:</strong> Thợ trực tiếp đến hiện trường để kiểm tra, báo giá công khai trước khi thi công.</div>
                </div>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ width: '30px', height: '30px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>4</div>
                  <div><strong>Thi công:</strong> Thực hiện công việc nhanh chóng, đảm bảo vệ sinh sạch sẽ khu vực làm việc.</div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ width: '30px', height: '30px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>5</div>
                  <div><strong>Bàn giao:</strong> Kiểm tra lại hệ thống, nghiệm thu kết quả và viết phiếu bảo hành chu đáo.</div>
                </div>
              </div>
            </div>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>TẠI SAO HÀNG NGÀN KHÁCH HÀNG TIN CHỌN CHÚNG TÔI?</h2>
            <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>🌟 Chất Lượng Tuyệt Đối</h4>
                <p style={{ fontSize: '0.9rem' }}>Lấy chữ TÍN làm trọng, chúng tôi luôn đề cao chất lượng và đảm bảo quyền lợi tối đa cho khách hàng.</p>
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>💸 Giá Cả Cạnh Tranh</h4>
                <p style={{ fontSize: '0.9rem' }}>Dịch vụ bình dân, giá rẻ và ổn định nhất thị trường, phù hợp với mọi gia đình và hộ kinh doanh.</p>
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>🕛 Phục Vụ 24/24</h4>
                <p style={{ fontSize: '0.9rem' }}>Làm việc xuyên suốt các ngày lễ, Tết để đảm bảo sinh hoạt của khách hàng không bị gián đoạn.</p>
              </div>
              <div className="why-item">
                <h4 style={{ color: 'var(--secondary)' }}>🛡️ Bảo Hành Rõ Ràng</h4>
                <p style={{ fontSize: '0.9rem' }}>Chính sách hậu mãi dài hạn, luôn có mặt đúng hẹn khi nhận được yêu cầu bảo hành từ quý khách.</p>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Cần Thợ Sửa Nước?</h3>
              <p>Có mặt sau 20 phút - Báo giá miễn phí!</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Chát Zalo Ngay</a>
            </div>
            
            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Phạm Vi Phục Vụ</h4>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>Chúng tôi có mặt tại tất cả các quận huyện TP.HCM và các tỉnh Phía Nam:</p>
              <ul style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <li>📍 Quận 1, 3, 5, 6, 10, 11, 12...</li>
                <li>📍 Tân Bình, Tân Phú, Phú Nhuận...</li>
                <li>📍 Bình Dương, Long An, Đồng Nai...</li>
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
        .info-box ul li::before { content: '📍'; position: absolute; left: 0; }
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; }
          .issue-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
