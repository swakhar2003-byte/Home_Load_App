import fs from "fs";
const f = "android/app/src/main/AndroidManifest.xml";
let x = fs.readFileSync(f, "utf8");
for (const p of ["USE_EXACT_ALARM", "SCHEDULE_EXACT_ALARM", "POST_NOTIFICATIONS", "RECEIVE_BOOT_COMPLETED"]) {
  if (!x.includes(`android.permission.${p}`))
    x = x.replace("</manifest>", `    <uses-permission android:name="android.permission.${p}" />\n</manifest>`);
}
fs.writeFileSync(f, x);
console.log("manifest patched");
