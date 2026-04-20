import Layout from '../components/Layout'
import Link from 'next/link'

export default function NewsListing() {
  const news = [
    {
      id: 1,
      title: "NGUYÊN NHÂN DẪN ĐẾN ỐNG NƯỚC HƯ HỎNG VÀ CÁCH KHẮC PHỤC",
      slug: "nguyen-nhan-dan-den-ong-nuoc-hu-hong-va-cach-khac-phuc",
      image: "/nguyen-nhan.png",
      excerpt: "Hệ thống ống nước sau thời gian dài sử dụng thường gặp các vấn đề bục vỡ, rò rỉ. Cùng tìm hiểu nguyên nhân chính xác để có phương án xử lý kịp thời."
    },
    {
      id: 2,
      title: "CÁC QUY TẮC VÀ NGUYÊN TẮC AN TOÀN KHI SỬA CHỮA ĐIỆN DÂN DỤNG",
      slug: "cac-quy-tac-va-nguyen-tac-an-toan-khi-sua-chua-dien-dan-dung-tai-nha",
      image: "/cac-quy-tac.png",
      excerpt: "Làm việc với điện luôn tiềm ẩn nguy hiểm. Nắm vững các quy tắc an toàn cơ bản là yếu tố tiên quyết trước khi bạn bắt tay vào sửa chữa tại nhà."
    },
    {
      id: 3,
      title: "NHỮNG LƯU Ý AN TOÀN KHI SỬA CHỮA ĐIỆN TẠI NHÀ MÀ BẠN NÊN BIẾT",
      slug: "nhung-luu-y-an-toan-khi-sua-chua-dien-tai-nha-ma-ban-nen-biet",
      image: "/nhung-luu-y.png",
      excerpt: "Một vài lưu ý nhỏ nhưng vô cùng quan trọng có thể giúp bạn tránh được những tai nạn điện không đáng có trong quá trình thay thế thiết bị."
    },
    {
      id: 4,
      title: "KINH NGHIỆM LẮP ĐẶT SỬA CHỮA ĐIỆN NƯỚC TIẾT KIỆM & BỀN BỈ",
      slug: "kinh-nghiem-lap-dat-sua-chua-dien-nuoc",
      image: "/kinh-nghiem.png",
      excerpt: "Chia sẻ kinh nghiệm từ những thợ lành nghề về cách chọn vật tư và bố trí sơ đồ điện nước sao cho tối ưu nhất cho ngôi nhà của bạn."
    }
  ];

  return (
    <Layout 
      title="Tin Tức & Kinh Nghiệm Điện Nước - Điện Nước Bảo Trung"
      description="Cập nhật các kiến thức bổ ích về sửa chữa điện nước, quy tắc an toàn và mẹo xử lý sự cố tại nhà hiệu quả nhất."
    >
      <section className="page-header">
        <div className="container">
          <h1>TIN TỨC & KINH NGHIỆM</h1>
          <p>Trang bị kiến thức giúp bạn làm chủ hệ thống điện nước trong gia đình.</p>
        </div>
      </section>

      <section className="news-grid-section">
        <div className="container">
          <div className="news-list">
            {news.map((item) => (
              <div key={item.id} className="news-item">
                <div className="news-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-txt">
                  <h3><Link href={`/tin-tuc/${item.slug}`}>{item.title}</Link></h3>
                  <p>{item.excerpt}</p>
                  <Link href={`/tin-tuc/${item.slug}`} className="read-more">Xem chi tiết &raquo;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-header { background: var(--secondary); color: white; padding: 60px 0; text-align: center; }
        .news-grid-section { padding: 80px 0; background: #f9f9f9; }
        .news-list { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .news-item { background: white; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); transition: transform 0.3s; }
        .news-item:hover { transform: translateY(-5px); }
        .news-img img { width: 100%; height: 250px; object-fit: cover; }
        .news-txt { padding: 25px; }
        .news-txt h3 { font-size: 1.2rem; margin-bottom: 15px; line-height: 1.4; height: 3.4rem; overflow: hidden; }
        .news-txt h3 a { color: var(--text-dark); text-decoration: none; }
        .news-txt h3 a:hover { color: var(--primary); }
        .news-txt p { font-size: 0.95rem; color: var(--text-light); margin-bottom: 20px; line-height: 1.6; height: 4.8rem; overflow: hidden; }
        .read-more { color: var(--primary); font-weight: bold; text-decoration: none; font-size: 0.9rem; }
        
        @media (max-width: 768px) {
          .news-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </Layout>
  )
}
