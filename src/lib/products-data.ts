export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  coverImage: string;
  galleryImages: string[];
  category: string;
  icon: string; // emoji or symbol
}

export const products: Product[] = [
  {
    slug: "ai-tro-ly-khach-hang",
    name: "AI Trợ Lý Khách Hàng",
    tagline: "Chăm sóc hoàn hảo, mọi lúc mọi nơi",
    description:
      "Trợ lý AI sang trọng phản hồi khách hàng 24/7 bằng tiếng Việt tự nhiên. Tích hợp Zalo, Facebook, Website — mang đến trải nghiệm dịch vụ đẳng cấp.",
    longDescription:
      "Trong thế giới kinh doanh hiện đại, khách hàng không chờ đợi. AI Trợ Lý Khách Hàng được thiết kế như một concierge kỹ thuật số — lịch thiệp, thông minh và luôn sẵn sàng. Từ việc tư vấn sản phẩm đến xử lý khiếu nại, mỗi cuộc hội thoại đều mang dấu ấn chuyên nghiệp của thương hiệu bạn.\n\nĐược huấn luyện riêng với dữ liệu doanh nghiệp, AI hiểu sâu về sản phẩm, chính sách và phong cách giao tiếp của bạn. Khách hàng sẽ không nhận ra họ đang nói chuyện với AI — chỉ biết rằng họ đang được phục vụ tốt nhất.",
    features: [
      "Hiểu ngữ cảnh tiếng Việt tự nhiên",
      "Tích hợp Zalo, Facebook, Website, Hotline",
      "Tự học và cải thiện từ mỗi cuộc hội thoại",
      "Chuyển giao mượt mà đến nhân viên khi cần",
      "Dashboard phân tích sentiment khách hàng",
      "Hỗ trợ đa ngôn ngữ cho khách quốc tế",
    ],
    benefits: [
      "Giảm 80% tải cho đội ngũ CSKH",
      "Phản hồi dưới 3 giây, 24/7/365",
      "Tăng 45% mức độ hài lòng khách hàng",
      "Tiết kiệm đến 60% chi phí nhân sự CSKH",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&h=1000&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    ],
    category: "Chăm sóc khách hàng",
    icon: "✦",
  },
  {
    slug: "ai-chot-don",
    name: "AI Chốt Đơn",
    tagline: "Biến mọi cuộc trò chuyện thành đơn hàng",
    description:
      "AI bán hàng tinh tế, tự động tư vấn và chốt đơn qua tin nhắn. Như một nhân viên sales xuất sắc làm việc không ngừng nghỉ.",
    longDescription:
      "AI Chốt Đơn không chỉ là chatbot bán hàng — đó là nghệ thuật bán hàng được nâng tầm bằng trí tuệ nhân tạo. Mỗi tin nhắn được cá nhân hóa, mỗi sản phẩm được giới thiệu đúng lúc, đúng người.\n\nTừ việc nhận diện nhu cầu khách hàng qua câu hỏi thông minh, đề xuất sản phẩm phù hợp, đến xử lý từ chối một cách khéo léo — AI Chốt Đơn biến mỗi cuộc hội thoại thành cơ hội doanh thu. Tích hợp sẵn với các sàn TMĐT và kênh bán hàng phổ biến tại Việt Nam.",
    features: [
      "Tư vấn sản phẩm cá nhân hóa",
      "Xử lý từ chối & upsell thông minh",
      "Tích hợp Shopee, Lazada, TikTok Shop",
      "Tự động tạo đơn hàng & gửi link thanh toán",
      "Theo dõi và remarketing khách chưa chốt",
      "Báo cáo conversion rate real-time",
    ],
    benefits: [
      "Tăng 3x tỷ lệ chốt đơn từ tin nhắn",
      "Hoạt động 24/7 không nghỉ phép",
      "Xử lý đồng thời hàng trăm cuộc hội thoại",
      "ROI trung bình 500% sau 3 tháng",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1000&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    ],
    category: "Bán hàng",
    icon: "◆",
  },
  {
    slug: "ai-nhac-viec",
    name: "AI Nhắc Việc",
    tagline: "Không bao giờ bỏ lỡ điều quan trọng",
    description:
      "Trợ lý AI quản lý công việc thông minh, nhắc lịch, theo dõi deadline và phân bổ task tự động. Bí thư riêng cho doanh nghiệp của bạn.",
    longDescription:
      "Trong guồng quay công việc, những chi tiết nhỏ thường bị bỏ qua — nhưng đó lại là những chi tiết quyết định thành bại. AI Nhắc Việc hoạt động như một bí thư riêng tinh tế, nắm bắt mọi deadline, cuộc họp và cam kết.\n\nKhông chỉ nhắc nhở đơn thuần, AI còn phân tích workload của team, đề xuất phân bổ công việc hợp lý và cảnh báo sớm khi deadline có nguy cơ bị trễ. Tích hợp với Google Calendar, Slack, Zalo và các công cụ quản lý dự án phổ biến.",
    features: [
      "Nhắc lịch & deadline thông minh",
      "Phân bổ task tự động cho team",
      "Cảnh báo sớm khi deadline gặp rủi ro",
      "Tích hợp Calendar, Slack, Zalo, Notion",
      "Tóm tắt công việc hàng ngày & tuần",
      "Theo dõi KPI và tiến độ dự án",
    ],
    benefits: [
      "Giảm 90% task bị bỏ quên",
      "Tăng 40% hiệu suất team",
      "Tiết kiệm 2 giờ/ngày cho quản lý",
      "Meeting hiệu quả hơn với brief tự động",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=1000&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
    ],
    category: "Quản lý",
    icon: "❖",
  },
  {
    slug: "ai-ke-toan",
    name: "AI Kế Toán",
    tagline: "Tài chính minh bạch, quyết định sáng suốt",
    description:
      "AI tự động hóa kế toán, đối soát, tạo báo cáo tài chính. Chính xác tuyệt đối, tiết kiệm hàng trăm giờ mỗi tháng.",
    longDescription:
      "Kế toán không nên là gánh nặng — mà phải là nền tảng cho những quyết định kinh doanh sáng suốt. AI Kế Toán tự động hóa 90% công việc sổ sách, từ nhập liệu hóa đơn, đối soát ngân hàng đến tạo báo cáo thuế.\n\nVới khả năng OCR thông minh, AI đọc và phân loại hóa đơn tự động. Hệ thống cảnh báo dòng tiền giúp bạn luôn chủ động tài chính. Báo cáo được tạo tức thì — không cần chờ cuối tháng để biết doanh nghiệp đang ở đâu.",
    features: [
      "OCR hóa đơn & chứng từ tự động",
      "Đối soát ngân hàng real-time",
      "Tạo báo cáo thuế & tài chính tự động",
      "Cảnh báo dòng tiền thông minh",
      "Tích hợp phần mềm kế toán phổ biến",
      "Tuân thủ chuẩn kế toán Việt Nam",
    ],
    benefits: [
      "Giảm 95% lỗi nhập liệu",
      "Tiết kiệm 200+ giờ/tháng",
      "Báo cáo tài chính real-time 24/7",
      "Giảm 70% chi phí kế toán",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=1000&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop",
    ],
    category: "Tài chính",
    icon: "✧",
  },
  {
    slug: "ai-social-post",
    name: "AI Social Post",
    tagline: "Content đẳng cấp, đăng bài tự động",
    description:
      "AI sáng tạo nội dung và quản lý mạng xã hội tự động. Từ viết caption đến lên lịch đăng — thương hiệu luôn hiện diện.",
    longDescription:
      "Thương hiệu của bạn xứng đáng được kể câu chuyện một cách xuất sắc — mỗi ngày, trên mọi nền tảng. AI Social Post là creative director riêng của bạn, hiểu rõ giọng điệu thương hiệu và xu hướng mạng xã hội.\n\nTừ việc lên content calendar, viết caption cuốn hút, đề xuất hashtag trending đến lên lịch đăng bài tối ưu — tất cả được tự động hóa. AI phân tích dữ liệu engagement để liên tục cải thiện chiến lược content.",
    features: [
      "Tạo caption & content tự động theo brand voice",
      "Lên lịch đăng bài đa nền tảng",
      "Đề xuất hashtag & xu hướng trending",
      "Phân tích engagement & điều chỉnh chiến lược",
      "Tạo content calendar hàng tháng",
      "Hỗ trợ Facebook, Instagram, TikTok, LinkedIn",
    ],
    benefits: [
      "Tiết kiệm 15+ giờ/tuần làm content",
      "Tăng 60% engagement rate",
      "Đăng bài đều đặn không bỏ ngày",
      "Content nhất quán với thương hiệu",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1000&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
    ],
    category: "Marketing",
    icon: "◈",
  },
  {
    slug: "ai-tu-van",
    name: "AI Tư Vấn Chiến Lược",
    tagline: "Dữ liệu dẫn lối, chiến lược dẫn đầu",
    description:
      "AI phân tích dữ liệu kinh doanh và đưa ra insight chiến lược. Như có một đội ngũ tư vấn McKinsey riêng cho doanh nghiệp.",
    longDescription:
      "Mỗi quyết định kinh doanh đều nên được hậu thuẫn bởi dữ liệu — không phải cảm tính. AI Tư Vấn Chiến Lược phân tích toàn diện dữ liệu doanh nghiệp: từ doanh thu, hành vi khách hàng, hiệu quả marketing đến xu hướng thị trường.\n\nBáo cáo insight được trình bày rõ ràng, kèm đề xuất hành động cụ thể. Dự báo xu hướng giúp bạn đón đầu cơ hội. Benchmark với đối thủ để luôn duy trì lợi thế cạnh tranh.",
    features: [
      "Dashboard phân tích kinh doanh toàn diện",
      "Dự báo doanh thu & xu hướng thị trường",
      "Phân tích hành vi & segment khách hàng",
      "Benchmark với đối thủ cạnh tranh",
      "Đề xuất chiến lược tăng trưởng",
      "Báo cáo insight tự động hàng tuần",
    ],
    benefits: [
      "Ra quyết định nhanh hơn 10x",
      "Tăng 35% hiệu quả chiến lược",
      "Phát hiện cơ hội thị trường trước đối thủ",
      "Giảm rủi ro kinh doanh đáng kể",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    ],
    category: "Chiến lược",
    icon: "◇",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
