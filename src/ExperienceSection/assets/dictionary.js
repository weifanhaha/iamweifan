import { ENG, CH } from "../../constants"

let dictionary = {}

dictionary[ENG] = {
    TITLE: "Experience",
    PERIOD1: "03/2025 - present",
    EDUCATION_TITLE1: "Google (Taiwan)",
    EDUCATION_SUBTITLE1: "Software Engineer",
    DESC1: "Working at Pixel AI Department.",
    PERIOD2: "10/2022 - 02/2025",
    EDUCATION_TITLE2: "Apple (Singapore)",
    EDUCATION_SUBTITLE2: "Machine Learning Engineer",
    DESC2:
        "Enhanced Apple Intelligence search systems for App Store, Apple Music, and Apple TV. Implemented deep learning techniques including LoRA-based LLM fine-tuning, knowledge distillation, and domain adaptation. Led a query understanding project for the App Store, initially focusing on improving language understanding and search experience for Japanese users, with a successful rollout to other multilingual markets globally.",
    PERIOD3: "09/2021 - 09/2022",
    EDUCATION_TITLE3: "Shopee (Singapore)",
    EDUCATION_SUBTITLE3: "Machine Learning Engineer",
    DESC3:
        "Extracted key selling points from Shopee e-commerce products using NLP and deep learning techniques. Achieved a 2% CTR uplift by displaying these points on the daily recommendation page. Iteratively refined models and conducted A/B testing to meet business goals.",
    PERIOD4: "07/2020 - 06/2021",
    EDUCATION_TITLE4: "Microsoft (Taiwan)",
    EDUCATION_SUBTITLE4: "Software Engineer Intern (Backend)",
    DESC4:
        "Designed the database, developed backend APIs, and deployed a Kubernetes based service for a geospatial portal, enabling partners to upload their geospatial index into Bing Maps.",
    PERIOD5: "02/2020 - 06/2021",
    EDUCATION_TITLE5: "Academia Sinica (Taiwan)",
    EDUCATION_SUBTITLE5: "Study-based Research Assistant",
    DESC5:
        "Developed a BERT-based model to identify disinformation in Line messages, focusing on explainable classification using source credibility and title-content similarity.",
    PERIOD6: "09/2018 - 09/2019",
    EDUCATION_TITLE6: "Kono Digital Inc. (Taiwan)",
    EDUCATION_SUBTITLE6: "Fullstack Engineer",
    DESC6:
        "Designed and built a content management system from scratch for a startup, including backend API, database, and frontend website. Enhanced the startup's core product, a subscription-based digital magazine platform, developing a fullstack solution using React and Ruby on Rails."
}

dictionary[CH] = {
    TITLE: "相關經歷",
    PERIOD1: "03/2025 - 目前",
    EDUCATION_TITLE1: "Google (台灣)",
    EDUCATION_SUBTITLE1: "軟體工程師",
    DESC1: "現在任職於 Pixel AI 部門。",
    PERIOD2: "10/2022 - 02/2025",
    EDUCATION_TITLE2: "Apple (新加坡)",
    EDUCATION_SUBTITLE2: "機器學習工程師",
    DESC2:
        "負責優化 App Store、Apple Music 和 Apple TV 的搜尋系統。應用深度學習技術（如 LoRA 微調 LLM、知識蒸餾、領域適應）提升查詢理解能力。主導 App Store 的查詢理解專案，改善多語言市場（特別是日語用戶）的搜尋體驗。",
    PERIOD3: "09/2021 - 09/2022",
    EDUCATION_TITLE3: "Shopee (新加坡)",
    EDUCATION_SUBTITLE3: "機器學習工程師",
    DESC3:
        "利用 NLP 與深度學習技術萃取商品賣點。在每日推薦頁面上顯示這些賣點，成功提升了 2% 的 CTR。持續優化模型並進行 A/B 測試以達成商業目標。",
    PERIOD4: "07/2020 - 06/2021",
    EDUCATION_TITLE4: "微軟 (台灣)",
    EDUCATION_SUBTITLE4: "軟體工程師實習生 (後端)",
    DESC4:
        "為地理空間入口網站設計資料庫、開發後端 API，並部署基於 Kubernetes 的服務，讓合作夥伴能將地理空間索引上傳至 Bing Maps。",
    PERIOD5: "02/2020 - 06/2021",
    EDUCATION_TITLE5: "中央研究院 (台灣)",
    EDUCATION_SUBTITLE5: "研究助理",
    DESC5:
        "開發基於 BERT 的模型以識別 Line 訊息中的假訊息，專注於利用來源可信度與標題內容相似度進行可解釋的分類。",
    PERIOD6: "09/2018 - 09/2019",
    EDUCATION_TITLE6: "Kono Digital Inc. (台灣)",
    EDUCATION_SUBTITLE6: "全端工程師",
    DESC6:
        "從零開始設計並建置內容管理系統，包含後端 API、資料庫與前端網站。使用 React 與 Ruby on Rails 開發全端解決方案，優化核心的電子雜誌訂閱平台。"
}

export default dictionary
