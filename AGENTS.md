# Trek-Mate AI Agent Instructions & Architecture Guidelines

> **IMPORTANT FOR ALL AI AGENTS:**  
> โปรเจกต์นี้ใช้สถาปัตยกรรม **Mobile-First Feature-Based Architecture** โดยแบ่งแยกส่วน **Frontend**, **Backend**, และ **Shared** ออกจากกันอย่างเด็ดขาด  
> ทุกครั้งที่ทำการเพิ่มโค้ด, แก้ไข, หรือสร้างฟีเจอร์ใหม่ **ต้องยึดโครงสร้างและกฎตามเอกสารฉบับนี้เป็นหลักเท่านั้น** ห้ามวางไฟล์สะเปะสะปะนอกโครงสร้างที่กำหนดไว้

---

## 1. Project Directory Overview

```text
Walk with Tree/
├── frontend/             # Next.js App Router (เน้น Mobile UX/UI เลียนแบบแอปมือถือ)
├── backend/              # Node.js + Express API Service & WebSocket (Modular Layer)
├── shared/               # TypeScript interfaces, DTOs, Enums ที่ใช้ร่วมกันระหว่าง FE และ BE
├── .gitignore            # Git ignore ระดับ Root
└── AGENTS.md             # เอกสารนี้ (Source of Truth สำหรับ AI Agent ทุกตัว)
```

---

## 2. Frontend Architecture Guidelines (`frontend/`)

Frontend ใช้แนวคิด **Feature-Based Architecture (Vertical Slice)** ร่วมกับ Next.js App Router

### 2.1 โครงสร้างโฟลเดอร์หลัก
```text
frontend/
├── app/                           # บางเฉียบ (Thin Routing Layer)
│   ├── (main)/                    # Route Group สำหรับหน้าที่มี BottomTabBar 5 ปุ่ม
│   │   ├── layout.tsx             # ครอบด้วย MobileContainer + BottomTabBar
│   │   ├── home/page.tsx          # แสดงผล <HomePage /> จาก features/home
│   │   ├── explore/page.tsx       # แสดงผล <ExplorePage /> จาก features/explore
│   │   ├── find/page.tsx          # แสดงผล <FindPage /> จาก features/find
│   │   ├── chat/page.tsx          # แสดงผล <ChatPage /> จาก features/chat
│   │   └── profile/page.tsx       # แสดงผล <ProfilePage /> จาก features/profile
│   ├── layout.tsx                 # Root HTML Layout & Global Fonts
│   └── page.tsx                   # Redirect -> /home
│
└── src/
    ├── features/                  # ★ หัวใจหลักของ Logic & Feature Components
    ├── components/                # ส่วนประกอบ UI ส่วนกลางที่ใช้ข้าม Features (Shared)
    │   ├── ui/                    # Design System Atoms (Button, Avatar, Badge, Card, ฯลฯ)
    │   ├── navigation/            # BottomTabBar, TopAppBar
    │   └── layout/                # MobileContainer, SafeAreaView
    ├── hooks/                     # Global Hooks (useDebounce, useLocalStorage, ฯลฯ)
    ├── services/                  # apiClient (Fetch wrapper), API_ENDPOINTS
    ├── stores/                    # Global State (Auth, Navigation, Theme)
    ├── constants/                 # routes, regions, theme tokens
    ├── utils/                     # formatters, validators
    └── types/                     # Shared Frontend TypeScript Interfaces
```

### 2.2 กฎสำหรับ 5 หน้าหลักใน `src/features/`
แต่ละ Feature จะต้องเป็นโมดูลอิสระ (Self-contained) โดยมีโครงสร้างภายในดังนี้:
- `components/`: คอมโพเนนต์เฉพาะของหน้านั้น
- `hooks/`: Custom Hooks ประจำ Feature
- `services/`: ฟังก์ชันเรียก API ประจำ Feature
- `types/`: Types / Interfaces ประจำ Feature
- `index.ts`: Public API export ของ Feature

| Feature | หน้าที่และองค์ประกอบสำคัญตามดีไซน์ UI |
| :--- | :--- |
| **`home`** | Header ค้นหาพร้อมตัวกรอง, Highlight Cards (เช่น Mae Tia Waterfall, Doi Khun Tan), Quick Actions (Add Yours, History, Social, Watchlist, Medal), Feed แท็บ (For you / Friend), PostCard |
| **`explore`** | ค้นหา "Where you want to go ?", เข็มทิศ (CompassWidget), แผนที่ประเทศไทย Dotted/Halftone Map, Pins จุดเดินป่า, ปุ่ม Zoom (+ / -) |
| **`find`** | แถบค้นหาทริป, ชิปตัวกรองภูมิภาค (Northern, Central, Southern, Eastern, Western, Northeastern, All), TripCard (รายละเอียดทริป, สมาชิก 2/5, วันที่จัดทริป) |
| **`chat`** | แถบค้นหาเพื่อน/ทริป, รายการห้องแชต (Direct & Group chats, unread badge, เวลา, ข้อความล่าสุด), MessageBubble |
| **`profile`** | หน้าบัญชีสไตล์ IG: ProfileHeader (Avatar, @username, Verified badge, 40 friends, 5 trips), Medals Bar (เหรียญรางวัล), History Slider (ประวัติเดินป่า), Feed โพสต์ของผู้ใช้, Floating Action Button (+) |

> [!CAUTION]
> **ข้อห้ามสำหรับ Frontend:**
> - ห้ามนำ Business Logic หรือ State ที่ซับซ้อนไปใส่ไว้ในไฟล์ `app/**/page.tsx` เด็ดขาด! ไฟล์ใน `app/` ต้องทำหน้าที่เป็นเพียง Routing Entry Point ที่เรียก Component จาก `@/features/<feature_name>` เท่านั้น
> - ห้ามนำ UI Components ที่ใช้เฉพาะหน้าใดหน้าหนึ่งไปใส่ใน `src/components/ui/` ให้ใส่ไว้ใน `src/features/<feature_name>/components/` เสมอ

---

## 3. Backend Architecture Guidelines (`backend/`)

Backend ใช้ **Modular Layered Architecture** (แยกตาม Domain / Feature เดียวกันกับ Frontend)

### 3.1 โครงสร้างโฟลเดอร์หลัก
```text
backend/src/
├── config/                # app.config.ts, database.config.ts
├── middlewares/           # auth.middleware, error.middleware, logger.middleware
├── models/                # Database Entities / Models (User, Trip, Post, ChatRoom, Message)
├── modules/               # ★ Modular Feature Domains
│   ├── auth/              # auth.controller.ts, auth.service.ts, auth.dto.ts
│   ├── users/             # user.controller.ts, user.service.ts, user.dto.ts
│   ├── trips/             # trip.controller.ts, trip.service.ts, trip.dto.ts
│   ├── feed/              # feed.controller.ts, feed.service.ts, feed.dto.ts
│   ├── explore/           # explore.controller.ts, explore.service.ts, explore.dto.ts
│   └── chat/              # chat.controller.ts, chat.service.ts, chat.gateway.ts, chat.dto.ts
├── utils/                 # apiResponse.ts (sendSuccess, sendError), logger.ts
└── server.ts              # Express Server, Middleware setup & Route registration
```

### 3.2 กฎสำหรับ Backend:
- **Controller**: มีหน้าที่รับ Request, Validate Input และส่ง Response ผ่าน `sendSuccess` / `sendError` จาก `utils/apiResponse.ts` เท่านั้น
- **Service**: บรรจุ Business Logic ทั้งหมด และติดต่อกับ Database Models
- **DTO**: กำหนดโครงสร้างข้อมูล Request/Response Body ให้ชัดเจน

---

## 4. UI Design & Theme Guidelines (โทนสีและฟีลลิ่งของแอป)

- **Platform Target:** เน้นความเป็น Mobile Application (รันบนมือถือ หรือแสดงผลในกรอบมือถือ `MobileContainer` บน Desktop)
- **โทนสีหลัก (Theme Tokens):**
  - Background Dark: `#0e1811` (Deep Forest Green)
  - Background Light / Cream: `#f2eedf` (Ivory Sand / Cream)
  - Card Dark: `#142217`
  - Card Light: `#e7e2d0`
  - Accent Green: `#2d5a3c`
  - Accent Red/Pin: `#ff5a5f`
  - Gold/Badge: `#d4af37`
- **สไตล์การออกแบบ:** มีลูกเล่น Glassmorphism (เบลอด้านหลัง), ขอบโค้งมนสูง (Rounded-2xl / Rounded-3xl), Icon แบบลายเส้นมินิมอลที่สะอาดตา

---

## 5. Development & Testing Commands

- **Frontend Development:**
  ```bash
  cd frontend
  npm run dev      # http://localhost:3000
  npm run build    # ตรวจสอบ build correctness
  ```

- **Backend Development:**
  ```bash
  cd backend
  npm run dev      # http://localhost:5000 (ใช้ tsx watch)
  npm run build    # compile TypeScript
  ```
