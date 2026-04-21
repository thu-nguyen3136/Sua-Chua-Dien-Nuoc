import Layout from '../components/Layout'
import Link from 'next/link'

export default function SuaMayBomNuocTaiNha() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Sửa Máy Bơm Nước Tại Nhà TP.HCM - Nhanh Chóng, Giá Rẻ | Bảo Trung"
      description="Dịch vụ sửa máy bơm nước tại nhà TP.HCM – chuyên sửa chữa máy bơm nước nhanh chóng, giá rẻ, đảm bảo hiệu quả. Liên hệ Điện nước Bảo Trung ngay hôm nay!"
    >
      <section className="page-header">
        <div className="container">
          <h1>SỬA MÁY BƠM NƯỚC TẠI NHÀ</h1>
          <p>Dịch vụ chuyên nghiệp - Phục vụ tận nơi - Giá cả cạnh tranh tại TP. Hồ Chí Minh.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--primary)' }}>DỊCH VỤ SỬA MÁY BƠM CHUYÊN NGHIỆP</h2>
            <img src="/sua-may-bom-tai-nha.png" alt="Sửa máy bơm nước tại nhà TP.HCM" className="featured-img" />

            <p>Điện nước Bảo Trung cung cấp các dịch vụ như sửa chữa, bảo dưỡng, lắp đặt và thay thế linh kiện cho máy bơm nước của nhiều thương hiệu khác nhau như Grundfos, Pentax, Ebara, Wilo, Lowara, hay Flygt…. Với đội ngũ kỹ thuật viên giàu kinh nghiệm và tay nghề cao. Chúng tôi cam kết sửa máy bơm nước tại nhà nhanh chóng, hiệu quả và đảm bảo độ an toàn cho người sử dụng. Đồng thời, công ty cũng cung cấp dịch vụ bảo trì, vệ sinh và kiểm tra định kỳ cho máy bơm nước để đảm bảo hoạt động ổn định và tối ưu nhất.</p>

            <img src="/sua-may-bom-tai-nha-1.png" alt="Kiểm tra máy bơm nước gia đình" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Các vấn đề về hư hỏng máy bơm mà chúng tôi thường xử lý</h2>
            <p>Điện nước Bảo Trung - sửa máy bơm nước tại nhà TP.HCM, chúng tôi chuyên xử lý các vấn để về hư hỏng máy bơm như sau:</p>
            <ul className="check-list-modern">
              <li>Xử lý sự cố máy bơm nước chạy nhưng không lên nước.</li>
              <li>Sửa chữa máy bơm nước gặp sự cố kêu gằn, có mùi két.</li>
              <li>Xử lý sự cố máy bơm nước gia đình kêu to và rung lắc khi chạy.</li>
              <li>Sửa máy bơm nước chạy nhưng không đều, có thể nghe thấy tiếng nước chảy không đều và có hiện tượng bị giật.</li>
              <li>Xử lý sự cố khi ngắt nguồn điện máy bơm nước nhưng aptomat nguồn cấp điện của máy bơm bị cắt hay cầu chì bị cháy, nổ ngay.</li>
              <li>Xử lý sự cố máy bơm nước bị cháy động cơ.</li>
              <li>Sửa máy bơm nước hoạt động nhưng động cơ dễ bị nóng.</li>
              <li>Sửa chữa máy bơm bị rò rỉ điện ở vỏ.</li>
              <li>Xử lý sự cố máy bơm nước không hoạt động mặc dù có nguồn điện cấp vào.</li>
              <li>Xử lý sự cố nguồn điện không vào máy bơm nước.</li>
              <li>Sửa chữa máy bơm nước chạy nhưng không tự ngắt khi nước đã đầy bồn do hỏng phao.</li>
              <li>Xử lý sự cố hư van 1 chiều của máy bơm nước.</li>
              <li>Sửa chữa máy bơm nước bị hỏng quạt, vòng bi, bạc đạn, quá tải, cháy tụ…</li>
              <li>Ngoài ra, còn có dịch vụ lắp đặt máy bơm nước gia đình, lắp máy bơm tăng áp tại nhà, máy bơm cứu hỏa…</li>
            </ul>
            <p>Cam kết sẽ giải quyết nhanh chóng vấn đề trên cho quý khách hàng. Điện nước Bảo Trung tự tin là thợ sửa giỏi nhất. Có kinh nghiệm tốt nhất trong lĩnh vực máy bơm nên quý khách hàng cứ yên tâm.</p>

            <img src="/sua-may-bom-tai-nha-2.png" alt="Sửa máy bơm tăng áp" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Quy trình tiếp nhận yêu cầu và sửa chữa máy bơm nước</h2>
            <div className="process-box" style={{ background: '#f8f9fa', padding: '30px', borderRadius: 'var(--radius)' }}>
              <p><strong>Bước 1: Tiếp nhận thông tin:</strong> Khi máy bơm nhà quý khách gặp sự cố, quý khách có thể liên hệ đến Bảo Trung qua hotline. Nhân viên tư vấn của công ty sẽ tiếp nhận yêu cầu và thông tin của quý khách. Ghi nhận lại thông tin quan trọng. Trao đổi thời gian cụ thể đến kiểm tra máy bơm.</p>

              <img src="/sua-may-bom-tai-nha-3.png" alt="Thợ tiếp nhận sửa máy bơm" className="content-img" />

              <p><strong>Bước 2: Kiểm tra & Báo giá:</strong> Khi đến thời gian đã hẹn, thợ sửa chữa máy bơm nước ở tại nhà của công ty sẽ đến tận nơi kiểm tra máy bơm cho quý khách. Những người thợ hỗ trợ quý khách đều có nhiều năm kinh nghiệm trong nghề, tay nghề cao. Họ sẽ nhanh chóng tìm ra bệnh máy bơm đang gặp phải. Tư vấn về giải pháp sửa chữa, thay thế linh kiện hợp lý. Báo giá chi tiết về dịch vụ sửa máy bơm nước tại nhà.</p>

              <img src="/sua-may-bom-tai-nha-4.png" alt="Báo giá sửa máy bơm minh bạch" className="content-img" />

              <p><strong>Bước 3: Thi công sửa chữa:</strong> Khi khách hàng đồng ý mức giá công ty đưa ra, chúng tôi sẽ bắt đầu sửa chữa máy bơm nước. Với những sự cố không quá nghiêm trọng thì chúng tôi sẽ sửa chữa xong trong vài giờ. Đối với sự cố hư hỏng nghiêm trọng, phức tạp chúng tôi sẽ đưa thiết bị về công ty kiểm tra kỹ lưỡng và khắc phục bằng các loại máy móc hiện đại nhất.</p>

              <img src="/sua-may-bom-tai-nha-5.png" alt="Thợ thi công sửa máy bơm motor" className="content-img" />

              <p><strong>Bước 4: Bàn giao & Thanh toán:</strong> Sau khi sửa chữa xong chúng tôi sẽ vận hành thử thiết bị để kiểm tra hiệu quả. Khách hàng sẽ đánh giá và nhận bàn giao thiết bị. Nếu không còn vấn đề nào xảy ra thì khách sẽ thanh toán chi phí cho chúng tôi.</p>

              <img src="/sua-may-bom-tai-nha-6.png" alt="Vận hành thử nghiệm máy bơm" className="content-img" />

              <p><strong>Bước 5: Bảo hành:</strong> Nhân viên sẽ dán tem bảo hành lên thiết bị. Cam kết bảo hành đúng thời gian quy định, chăm sóc khách hàng chu đáo, tận tình.</p>
            </div>

            <img src="/sua-may-bom-tai-nha-7.png" alt="Lắp đặt máy bơm mới" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Lý do bạn nên chọn dịch vụ sửa máy bơm của Bảo Trung</h2>
            <ul className="check-list-modern">
              <li><strong>Mạng lưới rộng khắp:</strong> Chi nhánh trải đều khắp các quận trên địa bàn TPHCM và các tỉnh lân cận. Với đội ngũ lớn mạnh, sẳn sàng phục vụ nhanh chóng và tận tình cho khách hàng.</li>
              <li><strong>Đội ngũ chuyên nghiệp:</strong> Điện nước Bảo Trung sở hữu đội ngũ kỹ thuật viên có kinh nghiệm và trình độ chuyên môn cao trong lĩnh vực sửa chữa máy bơm nước. Họ có thể xác định được nguyên nhân gây ra sự cố và sửa chữa nhanh chóng.</li>
              <li><strong>Tiết kiệm thời gian:</strong> Đảm bảo hiệu quả và tiết kiệm thời gian cho khách hàng.</li>
              <li><strong>Tư vấn tận tâm:</strong> Chúng tôi cam kết cung cấp dịch vụ sửa chữa máy bơm nước chuyên nghiệp và tận tâm. Tư vấn cho khách hàng các giải pháp tốt nhất để sửa chữa và bảo trì máy bơm nước. Đảm bảo độ bền và hiệu suất hoạt động tối ưu.</li>
              <li><strong>Giá cả cạnh tranh:</strong> Cung cấp dịch vụ sửa chữa máy bơm nước với giá cả hợp lý và cạnh tranh trên thị trường. Đảm bảo mang lại giá trị cao nhất cho khách hàng.</li>
              <li><strong>Phản hồi nhanh:</strong> Có thể đáp ứng nhanh các yêu cầu sửa chữa máy bơm nước của khách hàng. Giúp giảm thiểu thời gian gián đoạn hoạt động và ảnh hưởng đến kinh doanh của khách hàng.</li>
              <li><strong>Bảo hành dài hạn:</strong> Cam kết bảo hành dài hạn cho các dịch vụ sửa chữa máy bơm nước. Đảm bảo sự an tâm và tin tưởng của khách hàng trong quá trình sử dụng.</li>
            </ul>

            <img src="/tho-sua-may-bom-nuoc.png" alt="Bảo trì máy bơm định kỳ" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Dịch vụ khác tại Điện Nước Bảo Trung</h2>
            <ul className="check-list-modern">
              <li>Sửa chữa sự cố chập điện, mất điện toàn bộ hay một phòng,…</li>
              <li>Sửa chữa, thay thế lắp đặt các thiết bị điện: bóng đèn, công tắc điện, đồng hồ điện,…</li>
              <li>Sửa điện tại nhà khu vực TP. Hồ Chí Minh và các tỉnh lân cận</li>
              <li>Sửa ống nước bị bể, rò rỉ, tắc nghẽn, gãy âm nền – âm tường,…</li>
              <li>Sửa các sự cố ống nước tại nhà</li>
              <li>Sửa máy bơm nước tại nhà khu vực phía Nam</li>
              <li>Sửa vòi nước bị lỏng – bị tắc</li>
              <li>Thợ sửa máy bơm nước chuyên nghiệp, tay nghề cao, xử lý linh hoạt,…</li>
            </ul>

            <img src="/sua-may-bom-tai-nha.png" alt="Sửa chữa ống nước vỡ" className="content-img" />

            <p style={{ marginTop: '20px' }}>Máy bơm nước là thiết bị không thể thiếu trong sinh hoạt hàng ngày, và việc sửa chữa kịp thời là điều vô cùng cần thiết khi xảy ra sự cố. Với đội ngũ thợ sửa máy bơm nước giàu kinh nghiệm, Điện nước Bảo Trung tự hào mang đến dịch vụ sửa máy bơm nước tại nhà nhanh chóng, an toàn, và hiệu quả nhất. Liên hệ ngay với Điện nước Bảo Trung: <strong>039.330.3524 - 0353.422.680</strong> để nhận được sự hỗ trợ tận tâm và chuyên nghiệp!</p>

            <div style={{ marginTop: '40px', padding: '25px', background: 'var(--secondary)', borderRadius: '12px', color: 'white' }}>
              <p style={{ margin: 0, color: 'white', fontStyle: 'italic' }}>"Điện nước Bảo Trung - giải pháp điện nước toàn diện cho mọi gia đình!"</p>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Sửa Máy Bơm Nước</h3>
              <p>Phục vụ 24/7 - Uy tín - Giá rẻ</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Tư Vấn Ngay</a>
            </div>

            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Thương Hiệu Hỗ Trợ</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.8rem', marginTop: '10px' }}>
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

            <div className="info-box" style={{ marginTop: '20px' }}>
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Cam Kết</h4>
              <ul style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <li>✅ Thợ giỏi chuyên môn.</li>
                <li>✅ Linh kiện chính hãng.</li>
                <li>✅ Báo giá trước khi làm.</li>
                <li>✅ Bảo hành 6-12 tháng.</li>
              </ul>
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
