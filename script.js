// กำหนดรหัสผ่าน
const correctPassword = "PASSWORD1";

// หาตัวแปร DOM
const inputField = document.getElementById("passwordInput");
const checkButton = document.getElementById("checkButton");
const resultText = document.getElementById("result");

// ตัวแปรนับจำนวนครั้ง
let attemptCount = 0;

// เพิ่มเหตุการณ์เมื่อคลิกปุ่ม
checkButton.addEventListener("click", function() {
    const userInput = inputField.value;
    attemptCount++; // เพิ่มจำนวนครั้งเมื่อคลิก

    // ตรวจสอบรหัสผ่าน
    if (userInput === correctPassword) {
        resultText.textContent = `รหัสผ่านถูกต้อง! คุณพยายาม ${attemptCount} ครั้ง`;
        resultText.style.color = "green";
    } else {
        resultText.textContent = `รหัสผ่านผิด! คุณพยายาม ${attemptCount} ครั้ง`;
        resultText.style.color = "red";
    }
});
