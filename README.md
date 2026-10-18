HTML CSS Mini Project for FE
#HTML CSS Mini Project for FE

Landing page สำหรับผลิตภัณฑ์ SaaS / แดชบอร์ดโซเชียล สร้างด้วย HTML และ CSS ล้วน (ไม่ใช้ framework) เน้นโครงสร้าง CSS ที่แยกเป็นไฟล์ตามหน้าที่ และรองรับ responsive ตั้งแต่เดสก์ท็อปจนถึงมือถือ

## จุดเด่น

- แบ่ง CSS ตามหน้าที่ (reset, variables, base, components, แต่ละ section)
- ใช้ design token ผ่าน CSS variables (สี, ฟอนต์, radius, เงา) แก้ธีมที่เดียว
- ตั้งชื่อคลาสแบบ BEM เช่น `.feature__card--blue`
- ภาพแดชบอร์ดจำลองทำจาก CSS ล้วน ไม่ต้องโหลดรูปภาพ
- Responsive ด้วย media query และ `aspect-ratio`
- คำนึงถึง accessibility เช่น label แบบ visually-hidden และ `:focus-visible`

## โครงสร้างโปรเจกต์

```
.
├── index.html
├── css/
│   ├── reset.css                 # ล้างค่าเริ่มต้นของเบราว์เซอร์
│   ├── variables.css             # design token (:root)
│   ├── base.css                  # body, หัวข้อ, .container, .section
│   ├── components.css            # .btn, .card, .section-badge
│   ├── header.css                # แถบนำทาง + เมนูมือถือ
│   ├── hero.css                  # ส่วนหัวหลัก + แดชบอร์ดจำลอง
│   ├── feature.css               # ส่วนฟีเจอร์ (grid 6 คอลัมน์)
│   ├── Everything-you-need.css   # ส่วนจุดขายหลัก
│   ├── intrigrade.css            # Integration + Pricing
│   ├── Testimonial.css           # คำรับรองลูกค้า
│   ├── cta.css                   # Call to action + ฟอร์มอีเมล
│   └── footer.css                # ส่วนท้าย
└── images/
```

## ลำดับการโหลด CSS

ต้องโหลดตามลำดับนี้ เพราะไฟล์หลังใช้ token และคลาสจากไฟล์ก่อนหน้า

1. `reset.css`
2. `variables.css`
3. `base.css`
4. `components.css`
5. ไฟล์ของแต่ละ section

## Breakpoints

| ขนาดจอ | การเปลี่ยนแปลงหลัก |
|---|---|
| ≤ 1500px | ปรับตำแหน่งและขนาดฟอนต์ของ hero |
| ≤ 1200px | Everything-you-need เป็นแนวตั้ง, grid โลโก้เหลือ 3 คอลัมน์ |
| ≤ 1024px | เมนูกลายเป็น dropdown |
| ≤ 760px | เลย์เอาต์มือถือ (hero, CTA, testimonial, footer) |

## วิธีรันในเครื่อง

```bash
git clone <repo-url>
cd <project-folder>
# เปิด index.html ด้วยเบราว์เซอร์ หรือใช้ local server
npx serve .
```

## เทคโนโลยีที่ใช้

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- ฟอนต์: DM Sans, Circular Std


