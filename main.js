const scriptURL = 'YOUR_APPS_SCRIPT_WEB_APP_URL';
const fawaterkToken = 'YOUR_FAWATERK_TOKEN';

const form = document.getElementById('studentForm');
const paymentStatus = document.getElementById('paymentStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  paymentStatus.textContent = 'جاري معالجة الدفع...';

  try {
    // إرسال طلب إنشاء فاتورة إلى فواتيرك
    const invoiceResponse = await fetch('https://app.fawaterk.com/api/receipt/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${fawaterkToken}`
      },
      body: JSON.stringify({
        customer: {
          name: data.name,
          email: data.email,
          phone: data.phone
        },
        items: [{
          name: data.course,
          quantity: 1,
          price: 100
        }]
      })
    });

    const invoiceData = await invoiceResponse.json();

    if (invoiceData.url) {
      // في حال نجاح إنشاء الفاتورة يتم إرسال البيانات إلى جوجل شيت
      await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data)
      });

      // إعادة توجيه المستخدم إلى صفحة الدفع
      window.location.href = invoiceData.url;
    } else {
      paymentStatus.textContent = 'تعذّر إنشاء الدفع';
    }
  } catch (error) {
    console.error(error);
    paymentStatus.textContent = 'حدث خطأ أثناء معالجة الدفع';
  }
});
