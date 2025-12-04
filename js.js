function printBill() {
    let billContent = "";
    let sum = 0;

    cart.forEach((item, index) => {
        let subtotal = item.price * item.qty;
        sum += subtotal;

        billContent += `
            <p>${index + 1}. ${item.name} — SL: ${item.qty} — ${subtotal.toLocaleString()}₫</p>
        `;
    });

    document.getElementById("bill-content").innerHTML = billContent;
    document.getElementById("bill-total").innerText = sum.toLocaleString();

    // Sao chép nội dung hóa đơn sang cửa sổ in
    let printWindow = window.open('', '', 'width=600,height=800');
    printWindow.document.write(`
        <html>
            <head>
                <title>In hóa đơn</title>
                <style>
                    body { font-family: Arial; padding: 20px; }
                    h2 { text-align: center; }
                    p { font-size: 16px; margin: 5px 0; }
                </style>
            </head>
            <body>
                <h2>HÓA ĐƠN THANH TOÁN</h2>
                ${billContent}
                <hr>
                <h3>Tổng cộng: ${sum.toLocaleString()}₫</h3>
                <p style="text-align:center;">Văn Phòng IT</p>
                <script>
                    window.print();
                <\/script>
            </body>
        </html>
    `);
}
