import { ImageResponse } from "next/og";

export const alt = "GoGoCash - ช้อปฉลาด รับเงินคืนทันที";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "linear-gradient(135deg, #006c4f 0%, #00cc99 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: "bold", marginBottom: 20 }}>
          GoGoCash
        </div>
        <div style={{ fontSize: 40, opacity: 0.9 }}>
          ช้อปฉลาด รับเงินคืนทันที
        </div>
        <div style={{ fontSize: 30, marginTop: 30, opacity: 0.8 }}>
          220+ ร้านค้าพันธมิตร
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
