import QRCode from "qrcode";

console.log(QRCode);
export const generateQR = async (text) => {
  try {
    let test = await QRCode.toDataURL(text);

    console.log(test)
  } catch (err) {
    console.log(err)
  }

};

generateQR("this is test");

document.querySelector(".final-level-groups").addEventListener("click", () => {
  console.log("run..");
  (async function saveHtml2Image() {
    document.getElementById("qr-code").style.display = "block";
    const canvas = await html2canvas(document.querySelector(".matches"), {
      allowTaint: false,
      useCORS: true,
    });
    console.log(canvas)
    generateQR(canvas);
  })();
  // }
});
