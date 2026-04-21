import Layout from '../components/Layout'
import Link from 'next/link'

export default function ThoSuaMayBomNuoc() {
  const hotline = "0353.422.680";
  const hotlineFull = "0353422680";

  return (
    <Layout
      title="Thợ Sửa Máy Bơm Nước TP.HCM - Phục Vụ 24/24 Nhanh Chóng"
      description="Chuyên Thợ sửa máy bơm nước, máy bơm không lên nước, máy bơm không chạy, sửa máy bơm nước gia đình, máy bơm tăng áp, sửa máy bơm hút chân không, máy bơm công nghiệp,… Điện nước Bảo Trung phục vụ sửa máy bơm nước 24/24 tại TP. HCM."
    >
      <section className="page-header">
        <div className="container">
          <h1>THỢ SỬA MÁY BƠM NƯỚC</h1>
          <p>Đội ngũ thợ tay nghề cao - Phục vụ 24/7 - Có mặt nhanh chóng tại khắp TP.HCM.</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container service-grid">
          <div className="content">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--primary)' }}>THỢ SỬA MÁY BƠM NƯỚC CHUYÊN NGHIỆP TẠI TPHCM</h2>
            <img src="/sua-may-bom-tai-nha-1.png" alt="Thợ sửa máy bơm nước chuyên nghiệp" className="featured-img" />

            <p>Chuyên Thợ sửa máy bơm nước, máy bơm không lên nước, máy bơm không chạy, sửa máy bơm nước gia đình, máy bơm tăng áp, sửa máy bơm hút chân không, máy bơm công nghiệp,… Điện nước Bảo Trung phục vụ sửa máy bơm nước 24/24 - đơn vị uy tín lâu năm tại TP. HCM.</p>
            <p>Thợ sửa máy bơm nước tại nhà là nhu cầu tìm kiếm của đa số khách hàng khi máy bơm nước trong nhà tự nhiên bị hư hỏng, khiến gia đình bạn không có nước sử dụng. Việc tìm kiếm được người thợ sửa máy bơm gần nhà đảm bảo thời gian có mặt nhanh nhất, từ đó sớm khắc phục sửa chữa máy bơm để gia đình bạn có sử dụng.</p>

            <img src="/tho-sua-may-bom-1.png" alt="Thợ sửa máy bơm" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Các sự cố máy bơm nước thường gặp</h2>
            <ul className="check-list-modern">
              <li>Máy bơm nước bị chạm chập điện làm cho Aptomat tự động ngắt, cầu chì bị cháy đứt ngay khi mở máy.</li>
              <li>Động cơ máy bơm bị cháy.</li>
              <li>Có điện cấp nhưng không hoạt động.</li>
              <li>Máy bơm bị rò điện ra vỏ.</li>
              <li>Máy bơm không vào điện.</li>
              <li>Hư hỏng phao cơ, phao điện đóng ngắt tự động.</li>
              <li>Máy bơm hỏng van 1 chiều.</li>
              <li>Máy bơm hỏng rơ le tăng áp.</li>
              <li>Máy chạy yếu hoặc chạy nhưng không lên nước, mất áp.</li>
              <li>Tụ hỏng, vòng bi và cánh bơm nước hỏng.</li>
            </ul>

            <img src="/tho-sua-may-bom-2.png" alt="Thợ sửa máy bơm" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Ưu điểm dịch vụ sửa máy bơm tại Bảo Trung</h2>
            <ul className="check-list-modern">
              <li>Dịch vụ sửa chữa máy bơm nước tại nhà nhanh chó Làm việc 24/7 cả ngày nghỉ và lễ tết.</li>
              <li>Luôn đặt lợi ích của khách hàng lên hàng đầu.</li>
              <li>Kiểm tra, tư vấn, báo giá trước khi sửa.</li>
              <li>Sửa máy bơm nước hiệu quả, khắc phục triệt để sự cố với mức chi phí tiết kiệm nhất.</li>
              <li>Sửa xong có chế độ bảo hành chu đáo.</li>
            </ul>

            <img src="/sua-may-bom-tai-nha-6.png" alt="Thợ sửa máy bơm" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Dịch vụ lắp đặt máy bơm chuyên nghiệp</h2>
            <ul className="check-list-modern">
              <li>Dịch vụ lắp đặt máy bơm tăng áp tại TPHCM, sửa chữa máy bơm tăng áp, cao áp tại TPHCM một cách nhanh chóng và hiểu quả triệt để.</li>
              <li>Lắp đặt máy bơm cứu hỏa tại TPHCM theo đúng tiêu chuẩn yêu cầu.</li>
              <li>Cung cấp Thợ lắp đặt máy bơm nước giếng TPHCM chuyên nghiệp, trình độ cao và đã được đào tạo bài bản.</li>
              <li>Lắp máy bơm chìm đảm bảo chính hãng, chất lượng cao.</li>
            </ul>

            <img src="/tho-sua-may-bom-4.png" alt="Thợ sửa máy bơm" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Khu vực phục vụ thợ sửa máy bơm tại TP.HCM</h2>
            <p>Chúng tôi chuyên cung cấp thợ sửa máy bơm nước tại nhà TPHCM cho:</p>
            <div className="branch-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '0.85rem' }}>
              <div className="branch-col">
                <p>📍 Thợ sửa máy bơm tại Quận 1, Quận 2, Quận 3, Quận 4</p>
                <p>📍 Thợ sửa máy bơm tại Quận 5, Quận 6, Quận 7, Quận 8</p>
                <p>📍 Thợ sửa máy bơm tại Quận 9, Quận 10, Quận 11, Quận 12</p>
                <p>📍 Thợ sửa máy bơm tại Quận Tân Bình, Tân Phú, Bình Tân</p>
              </div>
              <div className="branch-col">
                <p>📍 Thợ sửa máy bơm tại Quận Bình Thạnh, Phú Nhuận, Thủ Đức</p>
                <p>📍 Thợ sửa máy bơm tại Huyện Bình Chánh, Huyện Hóc Môn, Quận Củ Chi</p>
                <p>📍 Thợ sửa máy bơm tại Bình Dương, Đồng Nai, Long An</p>
              </div>
            </div>

            <img src="/tho-sua-may-bom-5.png" alt="Thợ sửa máy bơm" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Quy trình thi công tại Điện nước Bảo Trung</h2>
            <div className="process-box" style={{ background: '#f8f9fa', padding: '30px', borderRadius: 'var(--radius)' }}>
              <p><strong>Bước 1:</strong> Khi quý khách có nhu cầu thay máy bơm hoặc cần thợ sửa máy bơm tại nhà, vui lòng liên hệ với chúng tôi qua số điện thoại 0353.422.680 để được hỗ trợ.</p>
              <p><strong>Bước 2:</strong> Tư vấn viên sẽ lắng nghe các yêu cầu của quý khách và đánh giá tình trạng hiện tại để hướng dẫn khắc phục sự cố tạm thời.</p>
              <p><strong>Bước 3:</strong> Thợ sửa máy bơm nước của Bảo Trung sẽ tiếp nhận địa chỉ và số điện thoại liên hệ để đến hỗ trợ quý khách.</p>
              <p><strong>Bước 4:</strong> Nhân viên của điện cơ Bảo Trung sẽ đến tận nhà để kiểm tra tình trạng máy bơm, tư vấn hướng khắc phục và cung cấp báo giá rõ ràng trước khi bắt đầu công việc.</p>
              <p><strong>Bước 5:</strong> Sau khi đạt được thỏa thuận về giá cả, chúng tôi sẽ tiến hành lắp đặt hoặc sửa chữa máy bơm nước theo đúng yêu cầu đã thỏa thuận.</p>
              <p><strong>Bước 6:</strong> Hoàn tất công việc, chúng tôi sẽ đưa máy bơm vào sử dụng để quý khách kiểm tra trước khi thanh toán và viết phiếu bảo hành.</p>
            </div>

            <img src="/sua-may-bom-tai-nha-5.png" alt="Thợ sửa máy bơm" className="content-img" />

            <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--primary)' }}>Cam kết dịch vụ tại Điện nước Bảo Trung</h2>
            <ul className="check-list-modern">
              <li>Đến tận nhà khảo sát, tư vấn và đưa ra các phương án xử lý cho khách hàng tham khảo.</li>
              <li>Đội ngũ kỹ thuật với trình độ chuyên môn cao trong lĩnh vực sửa chữa máy bơm nước, đảm bảo thực hiện thi công hiệu quả.</li>
              <li>Bảo Trung cam kết mang đến dịch vụ sửa chữa máy bơm nước chuyên nghiệp và tận tâm.</li>
              <li>Giá cả hợp lý, phù hợp với tài chính của khách hàng.</li>
              <li>Đội ngũ thợ sửa máy bơm nước có nhiều năm kinh nghiệm lắp đặt, sửa chữa.</li>
              <li>Phục vụ quý khách nhanh chóng bởi có đội ngũ thợ tại các quận Hồ Chí Minh.</li>
              <li>Khắc phục xong mới tính phí, sử dụng các thiết bị chính hãng khi lắp đặt.</li>
              <li>Bảo hành công việc rõ ràng, máy mới thời hạn bảo hành theo nhà sản xuất.</li>
            </ul>

            <img src="/sua-may-bom-tai-nha-3.png" alt="Thợ sửa máy bơm" className="content-img" />

            <p style={{ marginTop: '20px' }}>Quý khách đang có máy bơm nước cần sửa chữa, sao phải chần chừ và tốn nhiều thời gian tìm kiếm. Hãy nhấc máy lên và gọi ngay cho chúng tôi qua hotline <strong>039.330.3524 - 0353.422.680</strong>. Điện nước Bảo Trung sẽ thi công sửa chữa máy bơm tốt nhất, đảm bảo quyý khách hài lòng.</p>

            <div style={{ marginTop: '40px', padding: '25px', background: 'var(--secondary)', borderRadius: '12px', color: 'white' }}>
              <p style={{ margin: 0, color: 'white', fontStyle: 'italic' }}>"Điện nước Bảo Trung - Phục vụ tận tâm, mang lại sự an tâm tuyệt đối cho khách hàng!"</p>
            </div>
          </div>

          <div className="sidebar">
            <div className="cta-box" style={{ background: 'var(--primary)' }}>
              <h3 style={{ color: 'white' }}>Thợ Sửa Máy Bơm</h3>
              <p>Phục vụ 24/7 - Uy tín - Giá rẻ</p>
              <a href={`tel:${hotlineFull}`} className="btn btn-secondary hotline-btn">{hotline}</a>
              <a href={`https://zalo.me/${hotlineFull}`} className="btn btn-primary zalo-btn">Tư Vấn Ngay</a>
            </div>

            <div className="info-box">
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Tại Sao Chọn Thợ Bảo Trung?</h4>
              <ul style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                <li>✅ Thợ trực tại các quận.</li>
                <li>✅ Kiểm tra báo giá miễn phí.</li>
                <li>✅ Linh kiện thay thế chính hãng.</li>
                <li>✅ Bảo hành 6 - 12 tháng.</li>
                <li>✅ Phục vụ cả ngày lễ, chủ nhật.</li>
              </ul>
            </div>

            <div className="info-box" style={{ marginTop: '20px' }}>
              <h4 style={{ color: 'var(--primary)', borderBottomColor: 'var(--primary)' }}>Khách Hàng Nói Gì?</h4>
              <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#666' }}>"Thợ đến nhanh, sửa máy bơm tăng áp chạy êm ru, giá cả rất hợp lý. Sẽ ủng hộ tiếp!" - Anh Tuấn, Q.7</p>
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
