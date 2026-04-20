import Layout from '../components/Layout'
import Link from 'next/link'

export default function LapDongHoDien() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout 
      title="Lắp Đồng Hồ Điện Tại Nhà TP.HCM - 1 Pha, 3 Pha Chính Xác | Bảo Trung"
      description="Dịch vụ lắp đặt đồng hồ điện, công tơ điện phụ cho phòng trọ, căn hộ, hộ kinh doanh. Thợ giỏi lắp đặt nhanh, an toàn, cam kết đồng hồ chính hãng có kiểm định."
    >
      <section className="page-header">
        <div className="container">
          <h1>Lắp Đặt Đồng Hồ Điện TP.HCM</h1>
          <p>Giải pháp tách nguồn điện riêng biệt cho phòng trọ, mặt bằng kinh doanh - Nhanh chóng & Minh bạch.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>DỊCH VỤ LẮP ĐẶT ĐỒNG HỒ ĐIỆN TẬN NHÀ</h2>
            <img src="/lap-dong-ho-dien.png" alt="Lắp đồng hồ điện" className="featured-img" />
            
            <p>Dịch vụ lắp đồng hồ điện tại nhà của <strong>Điện nước Bảo Trung</strong> đáp ứng mọi nhu cầu từ lắp đồng hồ điện 1 pha cho gia đình đến lắp đồng hồ điện 3 pha cho văn phòng, nhà xưởng tại TP.HCM. Chúng tôi cam kết lắp đặt nhanh chóng, an toàn, giúp bạn kiểm soát điện năng tiêu thụ một cách chính xác nhất.</p>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>KHI NÀO BẠN CẦN LẮP ĐỒNG HỒ ĐIỆN PHỤ?</h3>
            <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div style={{ background: '#f0f7ff', padding: '15px', borderRadius: '8px' }}>
                <strong>🏢 Cho thuê phòng trọ:</strong> Cần tách riêng chỉ số điện để tính tiền cho từng khách thuê một cách công khai.
              </div>
              <div style={{ background: '#f0f7ff', padding: '15px', borderRadius: '8px' }}>
                <strong>🏪 Cho thuê mặt bằng:</strong> Tách hệ thống điện khi một căn nhà có nhiều hộ kinh doanh khác nhau.
              </div>
              <div style={{ background: '#f0f7ff', padding: '15px', borderRadius: '8px' }}>
                <strong>⚙️ Nâng cấp hệ thống:</strong> Thay thế đồng hồ cũ chạy không chính xác hoặc nâng cấp lên đồng hồ điện tử hiện đại.
              </div>
              <div style={{ background: '#f0f7ff', padding: '15px', borderRadius: '8px' }}>
                <strong>📏 Tách nguồn điện:</strong> Cải tạo lại mạng lưới điện trong nhà để quản lý tải cho các thiết bị công suất lớn.
              </div>
            </div>

            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '15px', color: 'var(--secondary)', margin: '30px 0 15px' }}>DỊCH VỤ CỦA CHÚNG TÔI BAO GỒM</h3>
            <ul>
              <li>Nhận khảo sát, tách hệ thống điện cho quý khách có nhu cầu cho thuê phòng trọ, chung cư mini.</li>
              <li>Lắp đặt đồng hồ điện 1 pha, 3 pha chuyên dụng cho hộ gia đình và nhà xưởng sản xuất.</li>
              <li>Thay thế các loại đồng hồ cũ, chạy không chính xác, lúc chạy lúc dừng hoặc bị kẹt số.</li>
              <li>Cung cấp đa dạng chủng loại: đồng hồ cơ truyền thống hoặc công tơ điện tử có độ chính xác cực cao.</li>
              <li>Tất cả thiết bị đều có kiểm định và tem bảo hành chính hãng từ nhà sản xuất.</li>
            </ul>

            <div className="process-box" style={{ marginTop: '40px', background: '#fff9f0', padding: '30px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '20px', textAlign: 'center' }}>QUY TRÌNH THI CÔNG 6 BƯỚC CHUẨN KỸ THUẬT</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ fontSize: '0.9rem' }}><strong>1. Chuẩn bị:</strong> Chuẩn bị đầy đủ máy khoan, thiết bị bảo vệ, dây cáp và ống đựng dây chuyên dụng.</div>
                <div style={{ fontSize: '0.9rem' }}><strong>4. Lắp đặt:</strong> Chọn vị trí khô ráo, dễ quan sát để tiến hành lắp đặt và kết nối dây điện an toàn.</div>
                <div style={{ fontSize: '0.9rem' }}><strong>2. Kiểm tra:</strong> Rà soát lại đường dây và các thiết bị cung cấp điện như máy biến áp hoặc hộp phân phối.</div>
                <div style={{ fontSize: '0.9rem' }}><strong>5. Đo đạc:</strong> Kiểm tra các thông số điện áp, dòng điện và xác định các tiêu chuẩn an toàn kỹ thuật.</div>
                <div style={{ fontSize: '0.9rem' }}><strong>3. Lựa chọn:</strong> Tư vấn chọn loại đồng hồ (1 pha/3 pha, cơ/điện tử) phù hợp nhất với nhu cầu sử dụng.</div>
                <div style={{ fontSize: '0.9rem' }}><strong>6. Bàn giao:</strong> Hướng dẫn khách hàng xem chỉ số và kích hoạt chế độ bảo trì định kỳ.</div>
              </div>
            </div>

            <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>TẠI SAO NÊN CHỌN ĐIỆN NƯỚC BẢO TRUNG?</h2>
            <div className="commitment" style={{ marginTop: '20px' }}>
              <p>📍 <strong>Thợ giỏi:</strong> Đội ngũ thợ giàu kinh nghiệm, lắp đặt thẩm mỹ, đúng tiến độ cam kết.</p>
              <p>📍 <strong>Miễn phí:</strong> Tư vấn khảo sát và báo giá hoàn toàn không tốn phí.</p>
              <p>📍 <strong>Bảo hành:</strong> Sản phẩm và dịch vụ được bảo hành dài hạn, xử lý sự cố ngay lập tức.</p>
              <p>📍 <strong>Minh bạch:</strong> Xuất hóa đơn, phiếu thu rõ ràng sau khi hoàn thành công việc.</p>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Liên Hệ Lắp Ngay</h3>
              <p>Giải quyết vấn đề điện năng minh bạch cho ngôi nhà của bạn.</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Chát Zalo Nhận Báo Giá</a>
            </div>
            
            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Dịch Vụ Đi Kèm</h4>
              <ul style={{ fontSize: '0.85rem' }}>
                <li>✅ Lắp đặt tủ điện phân phối</li>
                <li>✅ Thay thế CB, Aptomat chống rò</li>
                <li>✅ Thi công đường điện âm tường</li>
                <li>✅ Kiểm tra cân pha hệ thống 3 pha</li>
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
        .commitment p { background: #fdfdfd; padding: 12px; border-radius: 6px; margin-bottom: 10px; border-left: 4px solid var(--secondary); }
        .cta-box { color: white; padding: 30px; border-radius: var(--radius); text-align: center; margin-bottom: 30px; }
        .hotline-btn { display: block; width: 100%; margin: 20px 0 10px; font-size: 1.2rem; }
        .zalo-btn { display: block; width: 100%; background: #0084ff; border: none; }
        .info-box { background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); }
        .info-box h4 { border-bottom: 2px solid; padding-bottom: 10px; margin-bottom: 15px; }
        .info-box ul li { margin-bottom: 10px; font-size: 0.9rem; padding-left: 20px; position: relative; }
        .info-box ul li::before { content: '✔️'; position: absolute; left: 0; }
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
