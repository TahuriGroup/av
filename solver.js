const TwoCaptcha = require("@2captcha/captcha-solver");
const solver = new TwoCaptcha.Solver("your_api_key");


async function solveRecaptcha() {
  try {
    const res = await solver.recaptcha({
      pageurl: "https://app.appleville.xyz/",
      googlekey: "6LcRCKYrAAAAAEcLKaQ4Yk41S4lwpVd2a0YUTR94",
    });
    // console.log("Token reCAPTCHA:", res.data);
    return res.data; // hasil token
  } catch (err) {
    console.error("Gagal solve recaptcha:", err);
    throw err;
  }
}
// solveRecaptcha()
module.exports = { solveRecaptcha };
