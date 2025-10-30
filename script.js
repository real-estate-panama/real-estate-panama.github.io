// Translations object with all content in three languages
const translations = {
    es: {
        page_title: "Terreno en Venta - Potencial para Puertos cerca del Canal de Panamá",
        nav_brand: "Oportunidad Única",
        nav_home: "Inicio",
        nav_location: "Ubicación",
        nav_specs: "Especificaciones",
        nav_gallery: "Galería",
        nav_contact: "Contacto",
        hero_title: "Terreno en Venta<br>Potencial para Puertos cerca del Canal de Panamá",
        hero_subtitle: "1,880 hectáreas de oportunidad estratégica en Panamá Este",
        hero_description: "Ubicación privilegiada a pocos kilómetros de la entrada del Canal de Panamá en el Pacífico",
        btn_request_info: "Solicitar Información",
        stat_hectares: "Hectáreas",
        stat_depth: "Pies de Calado",
        stat_beach: "de Playa",
        stat_airport: "de Tocumen",
        location_title: "Ubicación Estratégica",
        location_subtitle: "Una posición geográfica incomparable para desarrollo portuario",
        feature_canal_title: "Entrada del Canal de Panamá",
        feature_canal_desc: "A pocos kilómetros de la entrada del Pacífico al Canal de Panamá, la ruta marítima más importante del mundo",
        feature_airport_title: "Aeropuerto Internacional de Tocumen",
        feature_airport_desc: "A solo 14 kilómetros del hub aéreo más importante de Centroamérica",
        feature_highway_title: "Conexión a Autopistas Principales",
        feature_highway_desc: "Acceso directo a las principales vías de Panamá para logística terrestre eficiente",
        feature_city_title: "Ciudad de Panamá",
        feature_city_desc: "Proximidad al centro financiero de Latinoamérica y servicios de clase mundial",
        specs_title: "Especificaciones Técnicas",
        specs_subtitle: "Características ideales para desarrollo portuario de gran escala",
        spec_access_title: "Acceso Marítimo Profundo",
        spec_draft: "Calado:",
        spec_draft_value: "24 pies (8 metros de profundidad)",
        spec_width: "Ancho del río:",
        spec_width_unit: "metros",
        spec_access_desc: "Uno de los ríos más importantes del área este con capacidad para embarcaciones de gran calado",
        spec_extension_title: "Extensión Total",
        spec_extension_desc: "1,880 hectáreas de terreno con frente al agua",
        spec_beach_title: "Playa Continental",
        spec_beach_desc: "1 kilómetro de playa de arena continental 100% plana",
        spec_resources_title: "Recursos Naturales",
        spec_resources_desc: "Agua natural de uno de los ríos más importantes del área este, rodeado de manglares negros protegidos",
        spec_topography_title: "Topografía Plana",
        spec_topography_desc: "Terreno mayormente plano, ideal para desarrollo de cualquier tipo de proyecto portuario o logístico",
        spec_ecosystem_title: "Ecosistema",
        spec_ecosystem_desc: "Manglares negros en áreas protegidas que aseguran sostenibilidad ambiental",
        visual_title: "Visualización del Potencial",
        visual_subtitle: "Renders conceptuales de puerto de contenedores",
        visual_caption1: "Render conceptual mostrando el potencial para desarrollo de puerto de contenedores de clase mundial con acceso directo al Pacífico y proximidad al Canal de Panamá.",
        visual_caption2: "Vista conceptual de las instalaciones portuarias con grúas de contenedores, muelles y zona de almacenamiento, mostrando la capacidad operativa potencial del desarrollo.",
        visual_ideal: "Ideal Para:",
        use_case_port: "Puerto de Contenedores",
        use_case_marina: "Marina de Yates",
        use_case_logistics: "Centro Logístico",
        use_case_zone: "Zona Franca",
        gallery_title: "Galería de la Propiedad",
        gallery_subtitle: "Imágenes reales del terreno y sus características",
        gallery_caption1: "Playa continental - 1 km de extensión",
        gallery_caption2: "Vista aérea - Manglares y acceso al agua",
        gallery_caption3: "Zona costera con acceso directo",
        gallery_caption4: "Terreno plano ideal para desarrollo",
        gallery_caption5: "Extensas áreas con topografía plana",
        gallery_caption6: "Campos verdes - Vista de la propiedad",
        gallery_caption7: "Acceso interno - Terreno 100% plano",
        gallery_caption8: "Campos abiertos listos para desarrollo",
        btn_see_more: "Ver Más Detalles",
        investment_title: "Oportunidad de Inversión",
        investment_subtitle: "Precio especial considerando áreas de conservación",
        price_original: "Precio Original",
        price_per_hectare: "por hectárea",
        price_special: "Precio Especial",
        price_current: "Oferta Actual",
        price_negotiable: "Negociable",
        investment_note_strong: "Nota importante:",
        investment_note_text: "El precio ha sido ajustado considerando que algunas hectáreas se encuentran en áreas protegidas y no son utilizables para desarrollo. Esta transparencia demuestra nuestro compromiso con inversores serios.",
        btn_consult: "Consultar Disponibilidad",
        advantages_title: "Ventajas Competitivas",
        advantages_subtitle: "Por qué esta propiedad es única para desarrollo portuario",
        adv1_title: "Ubicación Estratégica Global",
        adv1_desc: "Proximidad directa al Canal de Panamá, la ruta marítima que conecta los océanos Atlántico y Pacífico",
        adv2_title: "Profundidad Excepcional",
        adv2_desc: "24 pies de calado permiten acceso a embarcaciones de gran tamaño sin necesidad de dragado inicial significativo",
        adv3_title: "Conectividad Aérea",
        adv3_desc: "14 km del Aeropuerto de Tocumen, hub de las Américas para logística multimodal",
        adv4_title: "Topografía Ideal",
        adv4_desc: "Terreno mayormente plano reduce costos de preparación y construcción significativamente",
        adv5_title: "Acceso Terrestre",
        adv5_desc: "Conexión directa a autopistas principales para distribución eficiente de carga",
        adv6_title: "Recursos Naturales",
        adv6_desc: "Agua natural de uno de los ríos más importantes del área este para operaciones industriales",
        adv7_title: "Proximidad a Ciudad de Panamá",
        adv7_desc: "Acceso a servicios financieros, profesionales y mano de obra calificada",
        adv8_title: "Desarrollo Sostenible",
        adv8_desc: "Áreas de manglar protegidas garantizan cumplimiento ambiental y sostenibilidad del proyecto",
        contact_title: "Información y Consultas",
        contact_subtitle: "Contacte a su asesor de ventas para mayor información",
        contact_message: "Para obtener información detallada sobre esta excepcional oportunidad de inversión, documentación técnica, estudios de viabilidad y programar visitas al terreno, por favor contacte directamente con nuestro equipo de asesores especializados.",
        footer_disclaimer: "Este sitio web presenta información general sobre la propiedad. Toda la información proporcionada es de buena fe y únicamente para fines informativos generales. No hacemos ninguna representación o garantía de ningún tipo, expresa o implícita, sobre la exactitud, adecuación, validez, confiabilidad, disponibilidad o integridad de cualquier información en este sitio. Los interesados deben realizar su propia diligencia debida. Las imágenes y renders son de carácter ilustrativo. Precio sujeto a cambios sin previo aviso.",
        footer_copyright: "© 2025 Real Estate Broker Panamá - Licencia PN-5409. Todos los derechos reservados."
    },
    en: {
        page_title: "Land for Sale - Port Potential near the Panama Canal",
        nav_brand: "Unique Opportunity",
        nav_home: "Home",
        nav_location: "Location",
        nav_specs: "Specifications",
        nav_gallery: "Gallery",
        nav_contact: "Contact",
        hero_title: "Land for Sale<br>Port Potential near the Panama Canal",
        hero_subtitle: "1,880 hectares of strategic opportunity in East Panama",
        hero_description: "Privileged location just kilometers from the Pacific entrance to the Panama Canal",
        btn_request_info: "Request Information",
        stat_hectares: "Hectares",
        stat_depth: "Feet of Draft",
        stat_beach: "of Beach",
        stat_airport: "from Tocumen",
        location_title: "Strategic Location",
        location_subtitle: "An incomparable geographic position for port development",
        feature_canal_title: "Panama Canal Entrance",
        feature_canal_desc: "Just kilometers from the Pacific entrance to the Panama Canal, the world's most important maritime route",
        feature_airport_title: "Tocumen International Airport",
        feature_airport_desc: "Only 14 kilometers from Central America's most important air hub",
        feature_highway_title: "Connection to Main Highways",
        feature_highway_desc: "Direct access to Panama's main roads for efficient land logistics",
        feature_city_title: "Panama City",
        feature_city_desc: "Proximity to Latin America's financial center and world-class services",
        specs_title: "Technical Specifications",
        specs_subtitle: "Ideal characteristics for large-scale port development",
        spec_access_title: "Deep Maritime Access",
        spec_draft: "Draft:",
        spec_draft_value: "24 feet (8 meters depth)",
        spec_width: "River width:",
        spec_width_unit: "meters",
        spec_access_desc: "One of the most important rivers in the eastern area with capacity for deep draft vessels",
        spec_extension_title: "Total Extension",
        spec_extension_desc: "1,880 hectares of waterfront land",
        spec_beach_title: "Continental Beach",
        spec_beach_desc: "1 kilometer of 100% flat continental sandy beach",
        spec_resources_title: "Natural Resources",
        spec_resources_desc: "Natural water from one of the most important rivers in the eastern area, surrounded by protected black mangroves",
        spec_topography_title: "Flat Topography",
        spec_topography_desc: "Mostly flat land, ideal for development of any type of port or logistics project",
        spec_ecosystem_title: "Ecosystem",
        spec_ecosystem_desc: "Black mangroves in protected areas ensure environmental sustainability",
        visual_title: "Potential Visualization",
        visual_subtitle: "Conceptual renders of container port",
        visual_caption1: "Conceptual render showing the potential for world-class container port development with direct access to the Pacific and proximity to the Panama Canal.",
        visual_caption2: "Conceptual view of port facilities with container cranes, docks and storage area, showing the potential operational capacity of the development.",
        visual_ideal: "Ideal For:",
        use_case_port: "Container Port",
        use_case_marina: "Yacht Marina",
        use_case_logistics: "Logistics Center",
        use_case_zone: "Free Zone",
        gallery_title: "Property Gallery",
        gallery_subtitle: "Real images of the land and its features",
        gallery_caption1: "Continental beach - 1 km extension",
        gallery_caption2: "Aerial view - Mangroves and water access",
        gallery_caption3: "Coastal area with direct access",
        gallery_caption4: "Flat land ideal for development",
        gallery_caption5: "Extensive areas with flat topography",
        gallery_caption6: "Green fields - Property view",
        gallery_caption7: "Internal access - 100% flat land",
        gallery_caption8: "Open fields ready for development",
        btn_see_more: "See More Details",
        investment_title: "Investment Opportunity",
        investment_subtitle: "Special price considering conservation areas",
        price_original: "Original Price",
        price_per_hectare: "per hectare",
        price_special: "Special Price",
        price_current: "Current Offer",
        price_negotiable: "Negotiable",
        investment_note_strong: "Important note:",
        investment_note_text: "The price has been adjusted considering that some hectares are in protected areas and are not usable for development. This transparency demonstrates our commitment to serious investors.",
        btn_consult: "Consult Availability",
        advantages_title: "Competitive Advantages",
        advantages_subtitle: "Why this property is unique for port development",
        adv1_title: "Global Strategic Location",
        adv1_desc: "Direct proximity to the Panama Canal, the maritime route connecting the Atlantic and Pacific oceans",
        adv2_title: "Exceptional Depth",
        adv2_desc: "24 feet of draft allows access to large vessels without need for significant initial dredging",
        adv3_title: "Air Connectivity",
        adv3_desc: "14 km from Tocumen Airport, hub of the Americas for multimodal logistics",
        adv4_title: "Ideal Topography",
        adv4_desc: "Mostly flat land significantly reduces preparation and construction costs",
        adv5_title: "Land Access",
        adv5_desc: "Direct connection to main highways for efficient cargo distribution",
        adv6_title: "Natural Resources",
        adv6_desc: "Natural water from one of the most important rivers in the eastern area for industrial operations",
        adv7_title: "Proximity to Panama City",
        adv7_desc: "Access to financial, professional services and qualified workforce",
        adv8_title: "Sustainable Development",
        adv8_desc: "Protected mangrove areas guarantee environmental compliance and project sustainability",
        contact_title: "Information and Inquiries",
        contact_subtitle: "Contact your sales advisor for more information",
        contact_message: "For detailed information about this exceptional investment opportunity, technical documentation, feasibility studies and to schedule site visits, please contact our team of specialized advisors directly.",
        footer_disclaimer: "This website presents general information about the property. All information provided is in good faith and for general informational purposes only. We make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on this site. Interested parties must conduct their own due diligence. Images and renders are illustrative. Price subject to change without notice.",
        footer_copyright: "© 2025 Real Estate Broker Panama - License PN-5409. All rights reserved."
    },
    zh: {
        page_title: "土地出售 - 巴拿马运河附近的港口潜力",
        nav_brand: "独特机会",
        nav_home: "首页",
        nav_location: "位置",
        nav_specs: "规格",
        nav_gallery: "图库",
        nav_contact: "联系",
        hero_title: "土地出售<br>巴拿马运河附近的港口潜力",
        hero_subtitle: "巴拿马东部1,880公顷的战略机遇",
        hero_description: "距离巴拿马运河太平洋入口仅数公里的优越位置",
        btn_request_info: "索取信息",
        stat_hectares: "公顷",
        stat_depth: "英尺吃水深度",
        stat_beach: "海滩",
        stat_airport: "距托库门",
        location_title: "战略位置",
        location_subtitle: "港口开发的无与伦比的地理位置",
        feature_canal_title: "巴拿马运河入口",
        feature_canal_desc: "距离巴拿马运河太平洋入口仅数公里，这是世界上最重要的海运航线",
        feature_airport_title: "托库门国际机场",
        feature_airport_desc: "距离中美洲最重要的航空枢纽仅14公里",
        feature_highway_title: "连接主要高速公路",
        feature_highway_desc: "直接通往巴拿马主要道路，实现高效的陆地物流",
        feature_city_title: "巴拿马城",
        feature_city_desc: "靠近拉丁美洲金融中心和世界级服务",
        specs_title: "技术规格",
        specs_subtitle: "大规模港口开发的理想特性",
        spec_access_title: "深水海洋通道",
        spec_draft: "吃水深度：",
        spec_draft_value: "24英尺（8米深）",
        spec_width: "河流宽度：",
        spec_width_unit: "米",
        spec_access_desc: "东部地区最重要的河流之一，能够容纳大吃水深度的船只",
        spec_extension_title: "总面积",
        spec_extension_desc: "1,880公顷的海滨土地",
        spec_beach_title: "大陆海滩",
        spec_beach_desc: "1公里100%平坦的大陆沙滩",
        spec_resources_title: "自然资源",
        spec_resources_desc: "来自东部地区最重要河流之一的天然水源，周围环绕受保护的黑红树林",
        spec_topography_title: "平坦地形",
        spec_topography_desc: "大部分为平坦土地，非常适合开发任何类型的港口或物流项目",
        spec_ecosystem_title: "生态系统",
        spec_ecosystem_desc: "受保护区域的黑红树林确保环境可持续性",
        visual_title: "潜力可视化",
        visual_subtitle: "集装箱港口概念效果图",
        visual_caption1: "概念效果图展示了世界级集装箱港口开发的潜力，可直接通往太平洋并靠近巴拿马运河。",
        visual_caption2: "港口设施概念视图，包括集装箱起重机、码头和储存区，展示了该开发项目的潜在运营能力。",
        visual_ideal: "理想用途：",
        use_case_port: "集装箱港口",
        use_case_marina: "游艇码头",
        use_case_logistics: "物流中心",
        use_case_zone: "自由贸易区",
        gallery_title: "物业画廊",
        gallery_subtitle: "土地及其特征的真实图像",
        gallery_caption1: "大陆海滩 - 1公里延伸",
        gallery_caption2: "鸟瞰图 - 红树林和水域通道",
        gallery_caption3: "可直接进入的海岸地区",
        gallery_caption4: "非常适合开发的平坦土地",
        gallery_caption5: "地形平坦的广阔区域",
        gallery_caption6: "绿色田野 - 物业视图",
        gallery_caption7: "内部通道 - 100%平坦土地",
        gallery_caption8: "准备开发的开放田野",
        btn_see_more: "查看更多详情",
        investment_title: "投资机会",
        investment_subtitle: "考虑到保护区的特价",
        price_original: "原价",
        price_per_hectare: "每公顷",
        price_special: "特价",
        price_current: "当前优惠",
        price_negotiable: "可协商",
        investment_note_strong: "重要说明：",
        investment_note_text: "价格已经调整，考虑到部分公顷位于保护区内，不能用于开发。这种透明度表明了我们对认真投资者的承诺。",
        btn_consult: "咨询可用性",
        advantages_title: "竞争优势",
        advantages_subtitle: "为什么这处物业对港口开发独一无二",
        adv1_title: "全球战略位置",
        adv1_desc: "直接靠近巴拿马运河，连接大西洋和太平洋的海运航线",
        adv2_title: "卓越深度",
        adv2_desc: "24英尺的吃水深度允许大型船只进入，无需进行重大的初步疏浚",
        adv3_title: "航空连接",
        adv3_desc: "距托库门机场14公里，美洲多式联运物流枢纽",
        adv4_title: "理想地形",
        adv4_desc: "大部分平坦土地大大降低了准备和建设成本",
        adv5_title: "陆地通道",
        adv5_desc: "直接连接主要高速公路，实现高效货物分配",
        adv6_title: "自然资源",
        adv6_desc: "来自东部地区最重要河流之一的天然水源，用于工业运营",
        adv7_title: "靠近巴拿马城",
        adv7_desc: "可获得金融、专业服务和合格劳动力",
        adv8_title: "可持续发展",
        adv8_desc: "受保护的红树林区域保证环境合规性和项目可持续性",
        contact_title: "信息和咨询",
        contact_subtitle: "联系您的销售顾问获取更多信息",
        contact_message: "如需了解这一卓越投资机会的详细信息、技术文档、可行性研究以及安排现场访问，请直接联系我们的专业顾问团队。",
        footer_disclaimer: "本网站提供有关该物业的一般信息。所提供的所有信息均出于善意，仅用于一般信息目的。我们对本网站上任何信息的准确性、充分性、有效性、可靠性、可用性或完整性不作任何明示或暗示的陈述或保证。有兴趣的各方必须进行自己的尽职调查。图像和效果图仅供说明。价格如有变更，恕不另行通知。",
        footer_copyright: "© 2025 巴拿马房地产经纪人 - 许可证PN-5409。保留所有权利。"
    }
};

// Current language (default: Spanish)
let currentLang = 'es';

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update document title
    document.title = translations[lang].page_title;
    
    // Update active language button
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        changeLanguage(savedLang);
    }
    
    // Add event listeners to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize navbar scroll effect
    initNavbarScroll();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Gallery image modal functionality (optional enhancement)
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            // Create modal overlay
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                cursor: pointer;
            `;
            
            // Create modal image
            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 10px;
                box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
            `;
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            
            // Close modal on click
            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
    });
});