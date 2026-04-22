import Layout from '../components/Layout'
import Link from 'next/link'

export default function LapDatMayBom() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Lắp Đặt Máy Bơm Nước TP.HCM - Tăng Áp, Đẩy Cao, Tưới Tiêu"
      description="Dịch vụ lắp đặt máy bơm nước gia đình, máy bơm công nghiệp tại TP.HCM. Tư vấn chọn bơm phù hợp, lắp đặt đúng kỹ thuật, an toàn và thẩm mỹ cao."
    >
      <section className="page-header">
        <div className="container">
          <h1>Lắp Đặt Máy Bơm Nước TP.HCM</h1>
          <p>Giải pháp cấp nước mạnh mẽ cho mọi công trình - Tư vấn tận tâm & Chuyên nghiệp.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>DỊCH VỤ LẮP ĐẶT MÁY BƠM NƯỚC TRỌN GÓI</h2>
            <img src="/sua-may-bom-tai-nha.png" alt="Lắp đặt máy bơm nước" className="featured-img" />

            <p>Việc lựa chọn và lắp đặt máy bơm đúng kỹ thuật đóng vai trò sống còn trong việc đảm bảo nguồn nước ổn định và độ bền của thiết bị. <strong>Điện nước Bảo Trung</strong> cung cấp dịch vụ lắp đặt máy bơm nước trọn gói, từ khảo sát nhu cầu, tư vấn chọn máy đến thi công hoàn thiện hệ thống đường ống kết nối.</p>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>CÁC LOẠI MÁY BƠM CHÚNG TÔI CHUYÊN LẮP ĐẶT</h3>
            <div className="install-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              <div style={{ background: '#f0f4f8', padding: '20px', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--secondary)', fontSize: '1.1rem' }}>🚀 Máy Bơm Tăng Áp</h4>
                <p style={{ fontSize: '0.85rem' }}>Giúp áp lực nước tại vòi sen, máy giặt, bồn rửa luôn mạnh mẽ, khắc phục tình trạng nước yếu ở các tầng cao.</p>
              </div>
              <div style={{ background: '#f0f4f8', padding: '20px', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--secondary)', fontSize: '1.1rem' }}>🏢 Máy Bơm Đẩy Cao</h4>
                <p style={{ fontSize: '0.85rem' }}>Chuyên dụng để đưa nước từ bể ngầm lên bồn chứa trên sân thượng của các tòa nhà cao tầng, nhà phố.</p>
              </div>
              <div style={{ background: '#f0f4f8', padding: '20px', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--secondary)', fontSize: '1.1rem' }}>🚿 Máy Bơm Hút Sâu</h4>
                <p style={{ fontSize: '0.85rem' }}>Lắp đặt cho các giếng khoan, giếng đào có mực nước tĩnh sâu, đảm bảo hút nước ổn định.</p>
              </div>
              <div style={{ background: '#f0f4f8', padding: '20px', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--secondary)', fontSize: '1.1rem' }}>🌱 Máy Bơm Tưới Tiêu</h4>
                <p style={{ fontSize: '0.85rem' }}>Lắp đặt hệ thống bơm cho sân vườn, khu vực nông nghiệp với công suất phù hợp theo diện tích.</p>
              </div>
            </div>
            <img src="/tho-sua-may-bom-nuoc.png" alt="Lắp đặt máy bơm nước cho hộ gia đình" className="featured-img" />

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>TIÊU CHUẨN LẮP ĐẶT CỦA BẢO TRUNG</h3>
            <ul>
              <li><strong>Vị trí lắp đặt:</strong> Chọn nơi khô ráo, bằng phẳng, gần nguồn nước và thuận tiện cho việc bảo trì sau này.</li>
              <li><strong>Kỹ thuật kết nối:</strong> Sử dụng rắc co, van khóa ở hai đầu bơm để dễ dàng tháo lắp khi cần sửa chữa.</li>
              <li><strong>An toàn điện:</strong> Luôn lắp đặt kèm CB (Aptomat) riêng cho máy bơm để chống quá tải và chập cháy.</li>
              <li><strong>Đường ống:</strong> Tính toán kích thước ống hút và ống đẩy chuẩn theo thông số kỹ thuật của từng loại máy.</li>
            </ul>

            <div className="advice-box" style={{ marginTop: '40px', background: '#fff9f0', padding: '30px', borderRadius: 'var(--radius)', borderLeft: '10px solid var(--primary)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>LỜI KHUYÊN TỪ CHUYÊN GIA</h3>
              <p style={{ fontStyle: 'italic', color: '#555' }}>"Đừng chỉ nhìn vào công suất (W) mà hãy quan tâm đến lưu lượng (L/phút) và cột áp (H). Một chiếc máy bơm quá lớn sẽ gây lãng phí điện và hư hại đường ống, trong khi bơm quá nhỏ sẽ không đáp ứng được nhu cầu sử dụng. Hãy để chúng tôi tư vấn miễn phí cho bạn!"</p>
            </div>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>CAM KẾT DỊCH VỤ</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
              <span style={{ padding: '8px 20px', background: '#e1f5fe', borderRadius: '20px', fontSize: '0.9rem' }}>🛡️ Bảo hành 12-24 tháng</span>
              <span style={{ padding: '8px 20px', background: '#e8f5e9', borderRadius: '20px', fontSize: '0.9rem' }}>✅ Hỗ trợ 24/7</span>
              <span style={{ padding: '8px 20px', background: '#fff3e0', borderRadius: '20px', fontSize: '0.9rem' }}>💯 Hoàn tiền nếu không hài lòng</span>
              <span style={{ padding: '8px 20px', background: '#f3e5f5', borderRadius: '20px', fontSize: '0.9rem' }}>🔩 Linh kiện cao cấp</span>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Tư Vấn Lắp Đặt</h3>
              <p>Khảo sát tận nơi - Báo giá ngay trong ngày!</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Gửi Yêu Cầu Khảo Sát</a>
            </div>

            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Hỗ Trợ Mọi Thương Hiệu</h4>
              <p style={{ fontSize: '0.85rem' }}>Thợ chúng tôi thành thạo lắp đặt các dòng máy bơm của: <strong>Panasonic, Pentax, Ebara, Lepono, Lucky Pro, Wilo, Hanil...</strong></p>
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
          .install-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
