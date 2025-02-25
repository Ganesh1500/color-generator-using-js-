# 🎨 Random Background Color Changer

This project changes the background color of a `div` element every second when the "Start" button is clicked and displays the hex code of the current color in the center.

## 📷 Preview
<img src="https://github.com/user-attachments/assets/9ef0cb17-36ee-4c9c-9355-e10f25c427d3" alt="Output Preview" width="500">


## 📌 Features
✅ Generates a random hex color every second.  
✅ Updates the background color dynamically.  
✅ Displays the hex code of the current color.  
✅ Stops the color change when the "Stop" button is clicked.  

## 📂 Project Structure

_

## 🚀 How It Works
1. The `randomno()` function generates a random hex color.
2. Clicking the **"Start"** button starts an interval that updates:
   - The `div` background color.
   - The displayed hex code of the current color.
3. Clicking the **"Stop"** button stops the color change.

## 🛠 Technologies Used
- HTML
- CSS
- JavaScript

## 📜 Code Explanation
### **JavaScript Logic (script.js)**
```javascript
document.getElementById('start').addEventListener('click', function() {
    let h = setInterval(function() {
        const randomno = function() {
            let hex = "0123456789abcdef";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += hex[Math.floor(Math.random() * 16)];
            }
            return color;
        };

        document.getElementById('div').style.backgroundColor = randomno();
        document.getElementById('color').innerText = randomno();
        document.getElementById('color').style.color = 'white';
        document.getElementById('color').style.display = 'flex';
        document.getElementById('color').style.justifyContent = 'center';
        document.getElementById('color').style.alignItems = 'center';
        document.getElementById('color').style.fontSize = '1.5rem';

    }, 1000);

    document.getElementById('stop').addEventListener('click', function() {
        clearInterval(h);
    });
});

