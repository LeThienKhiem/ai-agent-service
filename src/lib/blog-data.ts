export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "chatbot" | "automation" | "analytics" | "custom" | "general";
  coverImage: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export const categoryLabels: Record<string, string> = {
  chatbot: "AI Chatbot",
  automation: "Tự động hóa",
  analytics: "Phân tích dữ liệu",
  custom: "Giải pháp tùy chỉnh",
  general: "AI Trends",
};

export const categoryColors: Record<string, string> = {
  chatbot: "bg-primary/10 text-primary",
  automation: "bg-secondary/10 text-secondary",
  analytics: "bg-neon-green/10 text-neon-green",
  custom: "bg-accent/10 text-accent",
  general: "bg-neon-blue/10 text-neon-blue",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-chatbot-thay-doi-cskh-doanh-nghiep-viet",
    title: "AI Chatbot: Cách Doanh Nghiệp Việt Giảm 80% Tải CSKH Chỉ Trong 30 Ngày",
    excerpt:
      "Khám phá cách các doanh nghiệp Việt Nam đang ứng dụng AI Chatbot để tự động hóa chăm sóc khách hàng, tăng tốc phản hồi và tiết kiệm chi phí nhân sự đáng kể.",
    content: `## Bài toán chăm sóc khách hàng của doanh nghiệp Việt

Mỗi ngày, một doanh nghiệp vừa và nhỏ tại Việt Nam nhận trung bình **200-500 tin nhắn** từ khách hàng qua Zalo, Facebook, và Website. Đội ngũ CSKH 5-10 người thường xuyên quá tải, phản hồi chậm, và khách hàng mất kiên nhẫn.

**Kết quả?** Mất khách, đánh giá xấu, và chi phí nhân sự tăng liên tục.

## AI Chatbot — Giải pháp đã được chứng minh

AI Chatbot hiện đại không chỉ trả lời theo kịch bản. Với công nghệ NLP (Natural Language Processing) tiên tiến, chatbot có thể:

- **Hiểu ngữ cảnh tiếng Việt** — bao gồm cả tiếng lóng, viết tắt, và phương ngữ
- **Xử lý đa kênh** — Zalo, Facebook Messenger, Website live chat, thậm chí cả Hotline
- **Tự học từ dữ liệu** — càng tương tác càng thông minh
- **Chuyển giao thông minh** — biết khi nào cần chuyển cho nhân viên thật

## Case Study: Công ty Logistics giảm 85% câu hỏi lặp lại

Một công ty logistics tại TP.HCM với 300+ cuộc gọi/ngày đã triển khai AI Chatbot:

**Trước:** 12 nhân viên CSKH, thời gian phản hồi trung bình 15 phút, tỷ lệ hài lòng 72%.

**Sau 30 ngày:** AI xử lý 85% yêu cầu, thời gian phản hồi dưới 5 giây, tỷ lệ hài lòng 94%. Chỉ cần 4 nhân viên xử lý các case phức tạp.

## Chi phí triển khai — Thấp hơn bạn nghĩ

Với AI Agent Services, chi phí triển khai AI Chatbot bắt đầu từ **5-15 triệu đồng/tháng** — rẻ hơn nhiều so với chi phí thuê thêm 2-3 nhân viên CSKH. ROI thường đạt được trong **tháng đầu tiên**.

## Bắt đầu ngay hôm nay

Đừng để đối thủ đi trước. Liên hệ AI Agent Services để được tư vấn miễn phí và demo AI Chatbot cho doanh nghiệp của bạn.`,
    category: "chatbot",
    coverImage: "https://otrs.com/wp-content/uploads/customer_service_management-1024x683.jpg",
    author: "AI Agent Services",
    publishedAt: "2026-03-28",
    readTime: "5 phút",
    tags: ["AI Chatbot", "CSKH", "Tự động hóa", "Tiếng Việt"],
  },
  {
    slug: "tu-dong-hoa-quy-trinh-doanh-nghiep-truyen-thong",
    title: "5 Quy Trình Doanh Nghiệp Truyền Thống Cần Tự Động Hóa Ngay Bằng AI",
    excerpt:
      "Doanh nghiệp truyền thống đang lãng phí hàng tỷ đồng mỗi năm cho các quy trình thủ công. Khám phá 5 quy trình nên ưu tiên tự động hóa AI đầu tiên.",
    content: `## Tại sao doanh nghiệp truyền thống lại chậm đổi mới?

Theo khảo sát của Vietnam Report, **73% doanh nghiệp vừa và nhỏ** tại Việt Nam vẫn đang vận hành phần lớn quy trình bằng thủ công: nhập liệu bằng tay, gửi email từng cái, tạo báo cáo trên Excel mỗi tuần.

Lý do? "Cứ chạy tốt mà", "Không biết bắt đầu từ đâu", "Sợ tốn kém".

**Nhưng sự thật là:** Chi phí KHÔNG tự động hóa còn lớn hơn nhiều.

## Top 5 quy trình cần AI hóa ngay

### 1. Xử lý đơn hàng & hóa đơn
Thay vì nhân viên nhập tay từng đơn hàng từ email/Zalo vào hệ thống, AI có thể tự động đọc, phân loại, và nhập dữ liệu với độ chính xác 99.5%.

**Tiết kiệm:** 4-6 giờ/ngày cho đội ngũ bán hàng.

### 2. Tạo báo cáo định kỳ
Báo cáo doanh thu, tồn kho, hiệu suất nhân viên — AI tự động tổng hợp từ nhiều nguồn và gửi email mỗi sáng thứ Hai.

**Tiết kiệm:** 8-10 giờ/tuần cho quản lý.

### 3. Quản lý email & thông báo
AI phân loại email theo mức độ ưu tiên, tự trả lời các email mẫu, và chỉ chuyển email quan trọng cho người phụ trách.

**Tiết kiệm:** 2-3 giờ/ngày cho mỗi nhân viên.

### 4. Quy trình phê duyệt nội bộ
Đơn xin nghỉ, đề xuất mua hàng, phê duyệt chi phí — AI tự route đến đúng người, nhắc nhở deadline, và theo dõi trạng thái.

**Tiết kiệm:** Giảm 70% thời gian phê duyệt.

### 5. Đồng bộ dữ liệu đa hệ thống
Từ POS → ERP → Kế toán → CRM — AI đảm bảo dữ liệu luôn nhất quán, real-time, không cần nhập lại.

**Tiết kiệm:** Loại bỏ 100% lỗi do nhập liệu trùng lặp.

## Bắt đầu từ đâu?

Không cần tự động hóa tất cả cùng lúc. Hãy bắt đầu từ **1 quy trình tốn nhiều thời gian nhất**, đo lường kết quả, rồi mở rộng dần.

AI Agent Services sẽ giúp bạn xác định quy trình ưu tiên và triển khai trong **2-4 tuần**.`,
    category: "automation",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    author: "AI Agent Services",
    publishedAt: "2026-03-27",
    readTime: "7 phút",
    tags: ["Workflow", "Tự động hóa", "Doanh nghiệp truyền thống", "ROI"],
  },
  {
    slug: "ai-phan-tich-du-lieu-giup-ra-quyet-dinh-chinh-xac",
    title: "Từ Dữ Liệu Thô Đến Quyết Định Kinh Doanh: AI Analytics Thay Đổi Cuộc Chơi",
    excerpt:
      "Doanh nghiệp bạn đang ngồi trên 'mỏ vàng' dữ liệu nhưng không biết khai thác? AI Analytics giúp biến mọi con số thành hành động cụ thể.",
    content: `## Dữ liệu nhiều nhưng insight ít

Đa số doanh nghiệp Việt Nam thu thập rất nhiều dữ liệu: đơn hàng, khách hàng, tồn kho, doanh thu, chi phí... Nhưng phần lớn dữ liệu này nằm im trong Excel, Google Sheets, hoặc các hệ thống rời rạc.

**Kết quả:** Quyết định kinh doanh vẫn dựa trên trực giác, không phải dữ liệu.

## AI Analytics — Đọc dữ liệu như chuyên gia

Hệ thống AI phân tích dữ liệu có thể:

- **Tổng hợp dữ liệu đa nguồn** — POS, ERP, Website, Social Media, tất cả về một dashboard
- **Phát hiện xu hướng** — sản phẩm nào đang tăng/giảm, mùa nào bán chạy nhất
- **Dự báo doanh thu** — dựa trên dữ liệu lịch sử và yếu tố thị trường
- **Cảnh báo bất thường** — doanh thu đột ngột giảm, chi phí tăng bất thường, tồn kho sắp hết

## Case Study: Chuỗi F&B tối ưu 40% lãng phí nguyên liệu

Một chuỗi nhà hàng 5 chi nhánh tại Hà Nội ứng dụng AI Analytics:

- **Dự báo lượng khách** theo ngày/giờ để chuẩn bị nguyên liệu chính xác
- **Phân tích menu** — biết món nào margin cao, món nào nên loại bỏ
- **Tối ưu nhân sự** — xếp ca dựa trên dự báo lượng khách

**Kết quả:** Giảm 40% lãng phí nguyên liệu, tăng 25% lợi nhuận gộp sau 3 tháng.

## Dashboard trực quan — Ai cũng hiểu được

Không cần biết coding hay Excel nâng cao. AI tự tạo dashboard trực quan với:

- Biểu đồ doanh thu real-time
- Bản đồ nhiệt khách hàng
- Bảng xếp hạng sản phẩm
- Dự báo 30/60/90 ngày

Tất cả có thể truy cập từ điện thoại, mọi lúc mọi nơi.

## Bạn đã sẵn sàng để ra quyết định bằng dữ liệu?

Liên hệ AI Agent Services — chúng tôi sẽ demo dashboard analytics cho dữ liệu thực của bạn trong buổi tư vấn miễn phí.`,
    category: "analytics",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    author: "AI Agent Services",
    publishedAt: "2026-03-26",
    readTime: "6 phút",
    tags: ["Data Analytics", "Dashboard", "Dự báo", "F&B"],
  },
  {
    slug: "giai-phap-ai-tuy-chinh-cho-tung-nganh",
    title: "Giải Pháp AI Tùy Chỉnh: Mỗi Ngành Nghề Cần Một AI Agent Khác Nhau",
    excerpt:
      "Không có giải pháp AI 'one size fits all'. Tìm hiểu cách AI Agent Services xây dựng giải pháp riêng biệt cho từng ngành: sản xuất, bán lẻ, F&B, logistics.",
    content: `## Tại sao giải pháp AI 'một cho tất cả' không hiệu quả?

Mỗi ngành nghề có quy trình, dữ liệu, và thách thức riêng. Một AI chatbot cho nhà hàng khác hoàn toàn với chatbot cho công ty logistics. Dùng giải pháp generic sẽ chỉ giải quyết được 30-40% vấn đề.

## AI Agent theo ngành nghề

### Sản xuất & Nhà máy
- **OCR chứng từ:** Tự động đọc và nhập liệu từ hóa đơn, phiếu xuất kho, chứng từ nhập hàng
- **Kiểm soát chất lượng:** AI vision phát hiện lỗi sản phẩm trên dây chuyền
- **Dự báo bảo trì:** Phát hiện sớm máy móc cần sửa chữa trước khi hỏng

### Bán lẻ & Thương mại điện tử
- **Hệ thống đề xuất:** "Khách hàng mua sản phẩm A thường mua thêm B"
- **Tối ưu giá:** Điều chỉnh giá dynamic theo nhu cầu thị trường
- **Quản lý inventory:** Dự báo hàng tồn kho, tự đề xuất nhập hàng

### F&B & Nhà hàng
- **Dự báo nguyên liệu:** Tránh lãng phí bằng dự đoán chính xác lượng khách
- **Menu analytics:** Phân tích món nào lãi cao, món nào nên cải thiện
- **Đặt bàn thông minh:** AI tối ưu sắp xếp bàn cho nhà hàng luôn đầy

### Logistics & Vận chuyển
- **Tối ưu tuyến đường:** Giảm 20-30% chi phí vận chuyển
- **Tracking thông minh:** Cập nhật real-time và dự đoán thời gian giao
- **Quản lý kho:** AI sắp xếp kho tối ưu, giảm thời gian pick & pack

## Quy trình xây dựng giải pháp tùy chỉnh

1. **Khảo sát chuyên sâu (1 tuần):** Hiểu rõ quy trình, pain points, và mục tiêu
2. **Thiết kế & Prototype (1-2 tuần):** Xây dựng bản demo với dữ liệu thật
3. **Triển khai & Đào tạo (2-4 tuần):** Go-live và huấn luyện đội ngũ
4. **Tối ưu liên tục:** AI càng dùng càng thông minh

## Liên hệ để nhận giải pháp riêng cho ngành của bạn

Mỗi doanh nghiệp là duy nhất. AI Agent Services cam kết xây dựng giải pháp phù hợp nhất, không phải giải pháp dễ nhất.`,
    category: "custom",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    author: "AI Agent Services",
    publishedAt: "2026-03-25",
    readTime: "8 phút",
    tags: ["Custom AI", "Sản xuất", "Bán lẻ", "F&B", "Logistics"],
  },
  {
    slug: "tai-sao-doanh-nghiep-viet-can-ai-agent-2026",
    title: "2026: Năm Bùng Nổ AI Agent Tại Việt Nam — Doanh Nghiệp Bạn Đã Sẵn Sàng?",
    excerpt:
      "AI Agent không còn là tương lai — nó đang là hiện tại. Tìm hiểu xu hướng AI Agent 2026 và tại sao doanh nghiệp Việt cần hành động ngay.",
    content: `## AI Agent — Xu hướng không thể bỏ qua năm 2026

Năm 2025 đánh dấu bước ngoặt khi AI Agent (AI tự hành) trở nên đủ thông minh để xử lý các tác vụ phức tạp một cách tự chủ. Đến 2026, xu hướng này đang bùng nổ tại Việt Nam.

## Số liệu thực tế

- **68%** doanh nghiệp FDI tại Việt Nam đã triển khai ít nhất 1 giải pháp AI
- **45%** doanh nghiệp Việt Nam có kế hoạch đầu tư AI trong 2026
- Chi phí triển khai AI giảm **60%** so với 2023
- ROI trung bình của AI Agent: **300%** trong năm đầu tiên

## AI Agent khác gì AI truyền thống?

**AI truyền thống:** Trả lời câu hỏi, phân loại dữ liệu — cần người ra lệnh từng bước.

**AI Agent:** Tự hiểu mục tiêu, tự lên kế hoạch, tự thực hiện, và tự đánh giá kết quả. Ví dụ:

- Bạn nói: "Tăng doanh thu Q2 lên 20%"
- AI Agent tự: phân tích dữ liệu → xác định cơ hội → đề xuất chiến lược → thực thi marketing automation → báo cáo kết quả

## Doanh nghiệp truyền thống — Cơ hội hay nguy cơ?

Đây là **cơ hội vàng** cho doanh nghiệp truyền thống. Tại sao?

1. **Lợi thế dữ liệu:** Bạn có hàng năm dữ liệu khách hàng, đơn hàng, vận hành — AI chỉ cần dữ liệu này để tạo ra giá trị
2. **Cải thiện nhanh chóng:** Doanh nghiệp chưa tối ưu sẽ thấy improvement lớn nhất khi ứng dụng AI
3. **Chi phí hợp lý:** Giải pháp AI-as-a-Service cho phép bắt đầu từ 5 triệu đồng/tháng

## 3 bước để bắt đầu ngay

1. **Đánh giá hiện trạng:** Xác định quy trình nào tốn thời gian nhất
2. **Pilot nhỏ:** Triển khai AI cho 1 quy trình, đo kết quả trong 30 ngày
3. **Mở rộng:** Scale up dựa trên kết quả thực tế

## Hành động ngay, đừng chờ đợi

Liên hệ AI Agent Services để được tư vấn chiến lược AI transformation miễn phí cho doanh nghiệp.`,
    category: "general",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
    author: "AI Agent Services",
    publishedAt: "2026-03-24",
    readTime: "6 phút",
    tags: ["AI Trends", "2026", "Chuyển đổi số", "Doanh nghiệp Việt Nam"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "all") return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}
