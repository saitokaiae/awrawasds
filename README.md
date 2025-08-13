# Postback Telegram Trafee (Netlify)

Project ini adalah serverless function untuk menerima **postback dari Trafee** dan mengirim laporan lead ke Telegram.

## 🚀 Panduan Deploy di Netlify

### 1️⃣ Persiapan File Project
1. Download file ZIP project ini.
2. Extract ZIP ke folder di laptop kamu.

### 2️⃣ Upload ke GitHub
1. Login ke [GitHub](https://github.com).
2. Klik **New Repository**.
3. Isi:
   - **Repository name** → misalnya `postback-traffee`.
   - Centang **Add a README file**.
4. Klik **Create repository**.
5. Upload semua file hasil extract ZIP ini:
   - Klik **Add file → Upload files**.
   - Pilih semua file (bukan folder ZIP).
   - Commit langsung ke branch default (`main` atau `master`).

### 3️⃣ Cek Nama Branch
- Di halaman repo, lihat dropdown branch.
- Kalau branch **bukan** `main` (misalnya `master`), ingat nama branch ini untuk setting di Netlify.

### 4️⃣ Deploy ke Netlify
1. Login ke [Netlify](https://app.netlify.com).
2. Klik **Add new site → Import an existing project**.
3. Pilih GitHub → Authorize akses.
4. Pilih repo yang tadi dibuat.
5. **Build settings**:
   - **Build command** → kosongkan.
   - **Publish directory** → kosongkan.
   - **Branch to deploy** → pilih sesuai branch GitHub.
6. Klik **Deploy site**.

### 5️⃣ Tambahkan Environment Variables
Masuk **Site settings → Environment variables**:
- `TELEGRAM_TOKEN` → Token bot Telegram (dari [BotFather](https://t.me/BotFather)).
- `CHAT_ID` → ID chat atau grup.

Klik **Save** lalu **Redeploy** site.

### 6️⃣ Setting Postback di Trafee
Masuk dashboard Trafee → **Settings → Postback**:

```
https://<nama-site>.netlify.app/.netlify/functions/postback?offer_name={offer_name}&payout_usd={payout_usd}&subid1={subid1}&subid2={subid2}&country={country}&status={status}&datetime={datetime}
```

---

✅ **Selesai!** Setiap ada lead dari Trafee, bot Telegram kamu akan mengirim laporan realtime.
