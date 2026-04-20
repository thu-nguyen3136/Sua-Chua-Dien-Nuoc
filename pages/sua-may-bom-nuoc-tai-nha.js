import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaMayBomNuocTaiNha() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Sửa Máy Bơm Nước Tại Nhà TP.HCM - Nhanh Chóng, Uy Tín | Bảo Trung"
      description="Dịch vụ sửa máy bơm nước tại nhà chuyên nghiệp tại TP.HCM. Khắc phục máy bơm không lên nước, kêu to, cháy motor, hỏng phao. Thợ giỏi có mặt sau 20 phút."
    >
      <section className="page-header">
        <div className="container">
          <h1>Sửa Máy Bơm Nước Tại Nhà TP.HCM</h1>
          <p>Xử lý triệt để mọi sự cố máy bơm - Linh kiện chính hãng - Bảo hành dài hạn.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>CHUYÊN SỬA CHỮA MÁY BƠM NƯỚC TẬN NƠI</h2>
            <img src="/sua-may-bom-tai-nha.png" alt="Sửa máy bơm nước tại nhà" className="featured-img" />
            
            <p><strong>Điện nước Bảo Trung</strong> là đơn vị hàng đầu chuyên cung cấp dịch vụ sửa chữa, bảo dưỡng và lắp đặt máy bơm nước tại nhà khu vực TP.HCM. Chúng tôi am hiểu sâu sắc về các dòng máy bơm phổ biến như Panasonic, Pentax, Ebara, Grundfos, Hanil, Wilo... Cam kết mang lại nguồn nước ổn định cho sinh hoạt và sản xuất của bạn.</p>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>DẤU HIỆU MÁY BƠM ĐANG GẶP SỰ CỐ</h3>
            <div className="fault-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
              <div style={{ background: '#fcfcfc', border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
                🔴 <strong>Chạy nhưng không lên nước:</strong> Có thể do hở đường ống, hư luppe hoặc mất nước mồi.
              </div>
              <div style={{ background: '#fcfcfc', border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
                🔴 <strong>Kêu to, rung lắc mạnh:</strong> Do hỏng vòng bi, bạc đạn hoặc cánh quạt bị gãy, kẹt rác.
              </div>
              <div style={{ background: '#fcfcfc', border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
                🔴 <strong>Bị nóng, mùi khét:</strong> Động cơ hoạt động quá tải hoặc bị cháy cuộn dây đồng.
              </div>
              <div style={{ background: '#fcfcfc', border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
                🔴 <strong>Không tự ngắt:</strong> Hỏng phao cơ/phao điện hoặc hỏng rơ le tăng áp khiến bơm chạy liên tục.
              </div>
              <div style={{ background: '#fcfcfc', border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
                🔴 <strong>Rò rỉ điện ở vỏ:</strong> Cực kỳ nguy hiểm, cần ngắt nguồn và gọi thợ kiểm tra ngay.
              </div>
              <div style={{ background: '#fcfcfc', border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
                🔴 <strong>Bơm kêu tiếng nước không đều:</strong> Có hiện tượng giật cục do hỏng van 1 chiều.
              </div>
            </div>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>HÀNG MỤC DỊCH VỤ CỦA CHÚNG TÔI</h3>
            <ul>
              <li>Sửa chữa máy bơm gia đình, máy bơm tăng áp, máy bơm đẩy cao tầng.</li>
              <li>Sửa máy bơm công nghiệp, máy bơm cứu hỏa cho tòa nhà, xí nghiệp.</li>
              <li>Thay thế linh kiện chính hãng: rơ le, phao điện, tụ khởi động, phớt chặn nước, vòng bi...</li>
              <li>Dịch vụ bảo trì, vệ sinh định kỳ giúp tăng tuổi thọ máy bơm.</li>
              <li>Lắp đặt máy bơm mới, đi đường ống nước cấp và thoát chuyên nghiệp.</li>
            </ul>

            <div className="process-box" style={{ marginTop: '40px', background: '#fef9f0', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>QUY TRÌNH SỬA CHỮA CHUẨN MỰC</h3>
              <div className="flow">
                <p>1️⃣ <strong>Tiếp nhận:</strong> Ghi nhận tình trạng hư hỏng và sắp xếp thợ gần nhất đến hỗ trợ.</p>
                <p>2️⃣ <strong>Kiểm tra:</strong> Thợ trực tiếp test máy, tìm nguyên nhân và báo giá linh kiện cần thay thế.</p>
                <p>3️⃣ <strong>Thực hiện:</strong> Tiến hành sửa chữa tại chỗ hoặc mang về công ty (với lỗi phức tạp, cháy motor).</p>
                <p>4️⃣ <strong>Vận hành:</strong> Test máy sau sửa chữa, đảm bảo bơm chạy êm, nước lên mạnh.</p>
                <p>5️⃣ <strong>Bảo hành:</strong> Dán tem bảo hành và hướng dẫn khách hàng sử dụng máy bền lâu.</p>
              </div>
            </div>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>TẠI SAO CHỌN ĐIỆN NƯỚC BẢO TRUNG?</h2>
            <div style={{ background: 'var(--secondary)', color: 'white', padding: '25px', borderRadius: '12px', marginTop: '20px' }}>
              <p>📍 <strong>Mạng lưới rộng khắp:</strong> Chi nhánh phủ khắp các quận TP.HCM, có mặt chỉ sau 20 phút.</p>
              <p>📍 <strong>Thợ giỏi, tâm huyết:</strong> Đội ngũ kỹ thuật viên giàu kinh nghiệm, bắt đúng "bệnh", sửa đúng chỗ.</p>
              <p>📍 <strong>Gia cả minh bạch:</strong> Luôn báo giá trước khi làm, cam kết không phát sinh chi phí vô lý.</p>
              <p>📍 <strong>Bảo hành dài hạn:</strong> Sự an tâm của khách hàng là ưu tiên số 1 của chúng tôi.</p>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Đặt Lịch Sửa Bơm</h3>
              <p>Đừng để gián đoạn sinh hoạt vì máy bơm hỏng!</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Chát Zalo Nhận Báo Giá</a>
            </div>
            
            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Thương Hiệu Hỗ Trợ</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem' }}>
                <span>✅ Panasonic</span>
                <span>✅ Pentax</span>
                <span>✅ Ebara</span>
                <span>✅ Grundfos</span>
                <span>✅ Wilo</span>
                <span>✅ Hanil</span>
                <span>✅ APP</span>
                <span>✅ Tsurumi</span>
              </div>
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
        .flow p { margin-bottom: 10px; font-size: 0.95rem; }
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; }
          .fault-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
