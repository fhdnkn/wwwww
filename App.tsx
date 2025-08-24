import React, { useMemo, useState, useEffect } from "react";

// =================================================================================
// الأيقونات (INLINE SVG ICONS)
// تم استبدال مكتبة lucide-react بأيقونات SVG مباشرة لجعل الكود يعمل بشكل مستقل
// =================================================================================
const Check = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 6 9 17l-5-5" /></svg>;
const ChevronLeft = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6" /></svg>;
const ChevronRight = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>;
const CreditCard = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>;
const Plus = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="M12 5v14" /></svg>;
const Trash2 = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>;
const ReceiptText = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" /><path d="M14 8H8" /><path d="M16 12H8" /><path d="M13 16H8" /></svg>;
const GraduationCap = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>;
const KeyRound = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" /><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /></svg>;
const Download = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>;
const Loader2 = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>;
const AlertCircle = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>;
const ChevronDown = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6" /></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const WhatsappIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;


// !! ملاحظة هامة لإنشاء ملفات PDF !!
// لتفعيل دعم اللغة العربية في ملف PDF، يجب تحويل ملف خط Amiri
// (Amiri-Regular.ttf) إلى سلسلة نصية بصيغة Base64
// ثم وضع هذه السلسلة في الثابت التالي المسمى AmiriFont
const AmiriFont = '...'; // <-- ضع هنا السلسلة النصية المشفرة للخط بصيغة Base64

// =================================================================================
// واجهات TypeScript للأنواع (TYPESCRIPT INTERFACES)
// =================================================================================
interface BaseInfo {
  name: string;
  phone: string;
  year: 1 | 2 | 3 | 4;
  division: "credit" | "general";
  term: 1 | 2 | 3; // 3 يمثل السمر كورس
  specialty?: string;
}

interface PickedCourse {
  key: string;
  name: string;
  year: 1 | 2 | 3 | 4;
  term: 1 | 2 | 3;
  specialty?: string;
}

interface ExtraSet {
  id: string;
  year: 1 | 2 | 3 | 4;
  term: 1 | 2 | 3;
  specialty?: string;
  selected: string[];
}

interface PricingDetails {
  count: number;
  subtotal: number;
  rate: number;
  discount: number;
  afterDiscount: number;
  total: number;
}

// =================================================================================
// البيانات والإعدادات (DATA & CONFIG)
// =================================================================================
const PRICES: { [key: number]: number } = { 1: 400, 2: 500, 3: 600, 4: 700 };
const SPECIALTIES: string[] = ["نظم معلومات", "محاسبة", "إدارة"];
const COURSES: { [key: string]: string[] } = {
  "1-1": ["مدخل إلى الإدارة", "اقتصاد جزئي", "رياضة مالية 1", "محاسبة 1", "مبادئ تسويق", "مقدمة نظم معلومات", "مهارات تواصل"],
  "1-2": ["اقتصاد كلي", "رياضة مالية 2", "محاسبة 2", "سلوك تنظيمي", "مبادئ تمويل", "قواعد بيانات 1", "كتابة أكاديمية"],
  "1-3": ["مبادئ الإحصاء", "قانون أعمال", "لغة إنجليزية للأعمال", "أساسيات البرمجة"], // Summer Courses
  "2-1": ["محاسبة تكاليف", "إحصاء تطبيقي", "إدارة موارد بشرية", "تحليل مالي", "برمجة أعمال 1", "قواعد بيانات 2", "قانون تجاري"],
  "2-2": ["محاسبة شركات", "بحوث عمليات", "إدارة إنتاج", "تمويل شركات", "برمجة أعمال 2", "شبكات حاسوبية", "مهارات تفاوض"],
  "2-3": ["إدارة الجودة الشاملة", "تسويق خدمات", "نظم دعم القرار", "اقتصاديات نقود وبنوك"], // Summer Courses
  "3-1": ["مراجعة حسابات", "إدارة سلاسل الإمداد", "تحليل بيانات للأعمال", "التسويق الرقمي", "تحليل قرارات", "ريادة أعمال", "أمن معلومات"],
  "3-2": ["محاسبة ضريبية", "إدارة مشاريع", "تصميم نظم معلومات", "تحليلات متقدمة", "نمذجة مالية", "تجارة إلكترونية", "أخلاقيات مهنية"],
  "3-3": ["إدارة استراتيجية", "تمويل دولي", "ذكاء أعمال", "إدارة المعرفة"], // Summer Courses
  ...Object.fromEntries(
    SPECIALTIES.flatMap((spec) => [
      [`4-1-${spec}`, [`${spec}: موضوعات متقدمة 1`, `${spec}: نظم معلومات متخصصة`, `${spec}: مشروع مصغر 1`, `${spec}: تطبيقات عملية 1`, `${spec}: منهجية بحث`, `${spec}: تحليل حالات`, `${spec}: تدريب ميداني`]],
      [`4-2-${spec}`, [`${spec}: موضوعات متقدمة 2`, `${spec}: نظم معلومات تطبيقية`, `${spec}: مشروع تخرج`, `${spec}: تطبيقات عملية 2`, `${spec}: محاكاة واتخاذ قرار`, `${spec}: ريادة وابتكار`, `${spec}: تدريب ميداني 2`]],
      [`4-3-${spec}`, [`${spec}: أمن النظم المتقدمة`, `${spec}: إدارة البيانات الضخمة`, `${spec}: حوكمة تكنولوجيا المعلومات`, `${spec}: استشارات إدارية`]] // Summer Courses
    ])
  ),
};

// =================================================================================
// الدوال المساعدة (HELPER FUNCTIONS)
// =================================================================================
const discountRateByCount = (n: number) => (n <= 1 ? 0 : n === 2 ? 0.10 : n === 3 ? 0.15 : n === 4 ? 0.20 : 0.20 + (n - 4) * 0.05);
const fmt = (n: number) => new Intl.NumberFormat("ar-EG", { style: "currency", currency: "EGP" }).format(n);
const yearLabel = (y: number) => (y === 1 ? "الأولى" : y === 2 ? "الثانية" : y === 3 ? "الثالثة" : "الرابعة");
const termLabel = (t: number) => (t === 1 ? "الأول" : t === 2 ? "الثاني" : "سمر كورس");

// =================================================================================
// المكون الرئيسي للتطبيق (MAIN APP COMPONENT)
// =================================================================================
export default function App() {
  const [step, setStep] = useState<number>(1);
  const [studentCode, setStudentCode] = useState<string>("");
  const [codeStatus, setCodeStatus] = useState<{ status: "idle" | "loading" | "success" | "error"; message: string; registrationId: string | null }>({ status: "idle", message: "", registrationId: null });
  
  const [base, setBase] = useState<BaseInfo>({ name: "", phone: "", year: 1, division: "credit", term: 1, specialty: SPECIALTIES[0] });
  const [baseSelected, setBaseSelected] = useState<string[]>([]);
  const [extras, setExtras] = useState<ExtraSet[]>([]);
  
  const [promo, setPromo] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "success" | "error">("idle");
  const [paymentLink, setPaymentLink] = useState<string | null>(null);

  // !!! هام جداً !!!
  // استبدل هذا الرابط بالرابط الذي تحصل عليه بعد نشر Google Apps Script الخاص بك
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_R2fX3Z5aG.../exec"; // <--- استبدل هذا الرابط

  useEffect(() => {
    if (base.division === 'general' && base.term === 3) {
      setBase(b => ({ ...b, term: 1 }));
    }
  }, [base.division, base.term]);

  const baseKey = useMemo<string>(() => {
    if (base.year === 4) return `${base.year}-${base.term}-${base.specialty ?? SPECIALTIES[0]}`;
    return `${base.year}-${base.term}`;
  }, [base.year, base.term, base.specialty]);

  const baseCourses = COURSES[baseKey] ?? [];

  const pickedCourses: PickedCourse[] = useMemo(() => {
    const allCourses = [
      ...baseSelected.map(c => ({ key: `${baseKey}|${c}`, name: c, year: base.year, term: base.term, specialty: base.year === 4 ? base.specialty : undefined })),
      ...extras.flatMap(ex => ex.selected.map(c => ({ key: `${ex.year}-${ex.term}${ex.year === 4 ? `-${ex.specialty}` : ""}|${c}`, name: c, year: ex.year, term: ex.term, specialty: ex.year === 4 ? ex.specialty : undefined })))
    ];
    const uniqueCourses = Array.from(new Map(allCourses.map(course => [course.key, course])).values());
    return uniqueCourses;
  }, [baseKey, baseSelected, base, extras]);

  const pricing = useMemo<PricingDetails>(() => {
    const subtotal = pickedCourses.reduce((acc, pc) => acc + (PRICES[pc.year] || 0), 0);
    const rate = discountRateByCount(pickedCourses.length);
    const discount = subtotal * rate;
    let afterDiscount = subtotal - discount;
    
    if (promo.trim().toLowerCase() === 'yalla gam3a') {
        afterDiscount *= 0.90;
    }

    const total = afterDiscount;
    return { count: pickedCourses.length, subtotal, rate, discount, afterDiscount, total };
  }, [pickedCourses, promo]);

  const isNextDisabled = useMemo<boolean>(() => {
    if (step === 2) return !base.name.trim() || !base.phone.trim();
    if (step === 3) return pickedCourses.length === 0;
    return false;
  }, [step, base.name, base.phone, pickedCourses]);
  
  const handleCodeVerification = async () => {
    setCodeStatus({ status: "loading", message: "جاري التحقق...", registrationId: null });
    try {
        // محاكاة لطلب وهمي
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (studentCode.toUpperCase() === 'CODE123') {
            setCodeStatus({ status: "success", message: "تم التحقق بنجاح", registrationId: "REG-12345" });
            setTimeout(() => setStep(2), 1500);
        } else {
            setCodeStatus({ status: "error", message: "الكود غير صالح", registrationId: null });
        }
    } catch (error) {
        setCodeStatus({ status: "error", message: "حدث خطأ في الشبكة.", registrationId: null });
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setPaymentStatus("idle");
    try {
      // محاكاة لطلب وهمي
      await new Promise(resolve => setTimeout(resolve, 1500));
      setPaymentLink("https://fawaterk.com/dummy-payment-link"); // رابط دفع وهمي
      setPaymentStatus("success");
      setStep(5); // الانتقال للخطوة النهائية
    } catch (e: any) {
      console.error("Submission error:", e);
      setPaymentStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const generatePDF = () => {
    // ملاحظة: هذا الكود يعتمد على تحميل مكتبات jsPDF في ملف index.html الرئيسي للمشروع
    // @ts-ignore
    const { jsPDF } = window.jspdf;
    if (!jsPDF) {
        console.error("مكتبة jsPDF غير متاحة.");
        alert("مكتبة jsPDF غير متاحة. لا يمكن إنشاء الملف.");
        return;
    }
    if (AmiriFont === '...') {
        console.error("خطأ: لم يتم تضمين الخط العربي. لا يمكن إنشاء الملف.");
        alert("خطأ: لم يتم تضمين الخط العربي. لا يمكن إنشاء الملف.");
        return;
    }

    const doc = new jsPDF();
    doc.addFileToVFS("Amiri-Regular.ttf", AmiriFont);
    doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
    doc.setFont("Amiri");

    const rtlText = (text: string, x: number, y: number, options = {}) => {
        doc.text(text, x, y, { align: 'right', ...options });
    };

    rtlText("إيصال تسجيل المواد الدراسية", 200, 20);
    // ... باقي كود إنشاء الملف ...
    doc.save(`receipt-${base.name.replace(/ /g, '_')}.pdf`);
  };

  return (
    <>
      {/* ملاحظة: في تطبيق React حقيقي، يجب وضع هذه الوسوم في ملف public/index.html
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.23/jspdf.plugin.autotable.min.js"></script>
      */}
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-['Cairo'] py-10 px-4">
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
            .animate-spin {
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `}</style>
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 text-center">
            <GraduationCap className="w-12 h-12 mx-auto text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">نموذج تسجيل الطالب</h1>
            <p className="text-gray-500 mt-1">نظام تسجيل مرن وآمن لاختيار موادك الدراسية</p>
          </header>

          <Card>
            <CardHeader>
              <Stepper step={step} />
            </CardHeader>
            <CardContent>
              {step === 1 && (
                  <div className="text-center space-y-6 py-10 px-4 min-h-[400px] flex flex-col justify-center">
                    {codeStatus.status === 'success' ? (
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                <Check className="w-8 h-8 text-green-500" />
                            </div>
                            <p className="text-lg font-semibold text-green-700">{codeStatus.message}</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center space-y-6">
                            <KeyRound className="w-10 h-10 mx-auto text-gray-400" />
                            <h3 className="text-2xl font-bold text-gray-800">التحقق من كود الطالب</h3>
                            <p className="text-gray-600 max-w-md mx-auto">أدخل الكود الذي حصلت عليه من الدعم الفني لبدء التسجيل.</p>
                            <StyledInput placeholder="CODE123" value={studentCode} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentCode(e.target.value.toUpperCase())} disabled={codeStatus.status === 'loading'} className="max-w-xs mx-auto tracking-[0.25em] text-center font-mono text-lg" />
                            <Button onClick={handleCodeVerification} disabled={!studentCode.trim() || codeStatus.status === 'loading'} className="bg-blue-600 text-white hover:bg-blue-700 w-auto mx-auto px-8 py-3 text-base rounded-xl shadow-md hover:shadow-lg transition-shadow disabled:bg-blue-300 disabled:cursor-not-allowed">
                                {codeStatus.status === 'loading' ? (<Loader2 className="w-5 h-5 animate-spin" />) : (<span>تحقق من الكود</span>)}
                            </Button>
                            {codeStatus.status === 'error' && <p className="text-sm mt-2 text-red-600">{codeStatus.message}</p>}
                            <a href="https://wa.me/201204100062" target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-center gap-3">
                                <div className="w-12 h-12 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40">
                                    <WhatsappIcon className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-gray-800">الدعم الفني</p>
                                    <p className="text-sm text-gray-600">للحصول على كود التسجيل</p>
                                </div>
                            </a>
                        </div>
                    )}
                  </div>
              )}

              {step === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6 p-4">
                    <div><Label htmlFor="name">اسم الطالب (ثلاثي)</Label><StyledInput id="name" value={base.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBase({...base, name: e.target.value})} /></div>
                    <div><Label htmlFor="phone">رقم الهاتف</Label><StyledInput id="phone" value={base.phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBase({...base, phone: e.target.value})} /></div>
                    <div><Label>الفرقة</Label><StyledSelect value={base.year} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBase({...base, year: Number(e.target.value) as any, specialty: Number(e.target.value) === 4 ? SPECIALTIES[0] : undefined})}><option value={1}>الأولى</option><option value={2}>الثانية</option><option value={3}>الثالثة</option><option value={4}>الرابعة</option></StyledSelect></div>
                    <div><Label>الشعبة</Label><StyledSelect value={base.division} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBase({...base, division: e.target.value as any})}><option value="credit">كريدت</option><option value="general">جينرال</option></StyledSelect></div>
                    <div><Label>الترم</Label><StyledSelect value={base.term} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBase({...base, term: Number(e.target.value) as any})}><option value={1}>الترم الأول</option><option value={2}>الترم الثاني</option>{base.division === 'credit' && <option value={3}>سمر كورس</option>}</StyledSelect></div>
                    {base.year === 4 && <div className="md:col-span-2"><Label>التخصص</Label><StyledSelect value={base.specialty} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBase({...base, specialty: e.target.value})}>{SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}</StyledSelect></div>}
                  </div>
              )}

              {step === 3 && (
                  <div className="space-y-6 mt-6">
                    <CourseChecklist courses={baseCourses} selected={baseSelected} onToggle={name => setBaseSelected(s => s.includes(name) ? s.filter(c => c !== name) : [...s, name])} />
                    {base.division === 'credit' && <>
                      <Separator />
                      <Button onClick={() => setExtras(p => [...p, {id: Date.now().toString(), year: 1, term: 1, specialty: SPECIALTIES[0], selected:[]}])} className="bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 rounded-xl font-semibold px-4 py-2 transition-colors mx-auto"><Plus className="w-4 h-4"/> إضافة مواد من فرقة أخرى</Button>
                      {extras.map(ex => <ExtraCourseSet key={ex.id} set={ex} onRemove={() => setExtras(p => p.filter(e => e.id !== ex.id))} onUpdate={updated => setExtras(p => p.map(e => e.id === ex.id ? updated : e))} />)}
                    </>}
                  </div>
              )}
              
              {step === 4 && (
                  <div className="space-y-6 mt-6">
                    {pickedCourses.length === 0 ? <Alert variant="destructive"><AlertTitle>لم تختر أي مواد!</AlertTitle><AlertDescription>يجب اختيار مادة واحدة على الأقل للمتابعة.</AlertDescription></Alert> : <InvoiceDetails pickedCourses={pickedCourses} pricing={pricing} promo={promo} setPromo={setPromo} />}
                  </div>
              )}

              {step === 5 && ( // الخطوة النهائية المدمجة
                  <div className="text-center space-y-6 py-10 px-4 min-h-[350px] flex flex-col justify-center items-center">
                    {paymentStatus === 'success' && (
                      <>
                        <Check className="w-16 h-16 mx-auto text-green-500 bg-green-100 rounded-full p-3" />
                        <h3 className="text-2xl font-bold text-gray-800">تم إنشاء طلبك بنجاح!</h3>
                        <p className="text-gray-600 max-w-md mx-auto">يمكنك الآن إتمام عملية الدفع عبر الرابط التالي وتحميل نسخة من إيصال التسجيل.</p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
                            <a href={paymentLink!} target="_blank" rel="noreferrer" className="inline-block">
                                <Button className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 text-base rounded-xl shadow-md hover:shadow-lg transition-shadow"><CreditCard/> إتمام الدفع</Button>
                            </a>
                            <Button onClick={generatePDF} className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-base rounded-xl"><Download/> تحميل الإيصال</Button>
                        </div>
                      </>
                    )}
                    {paymentStatus === 'error' && (
                      <>
                        <AlertCircle className="w-12 h-12 mx-auto text-red-500" />
                        <h3 className="text-xl font-bold">فشلت العملية</h3>
                        <p className="text-gray-600">حدث خطأ أثناء إنشاء رابط الدفع. يرجى المحاولة مرة أخرى.</p>
                      </>
                    )}
                  </div>
              )}
            </CardContent>
            
            {step > 1 && step < 5 && (
              <div className="p-4 md:p-6 bg-gray-50 rounded-b-2xl border-t border-gray-100 flex items-center justify-between">
                <Button onClick={() => setStep(s => s - 1)} disabled={submitting} className="border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"><ChevronRight className="w-4 h-4" /> رجوع</Button>
                <div className="hidden sm:flex flex-grow justify-center items-center gap-4">
                  <SocialLink href="#" className="hover:bg-blue-50 hover:text-blue-600 hover:shadow-blue-500/20"><FacebookIcon /></SocialLink>
                </div>
                {step < 4 && (<Button onClick={() => setStep(s => s + 1)} disabled={isNextDisabled} className="bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors">التالي <ChevronLeft className="w-4 h-4" /></Button>)}
                {step === 4 && (<Button onClick={handleSubmit} disabled={pickedCourses.length === 0 || submitting} className="bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed transition-colors">{submitting && <Loader2 className="w-4 h-4 animate-spin"/>} تأكيد والدفع</Button>)}
              </div>
            )}
          </Card>
           <footer className="mt-8 text-center text-sm text-gray-500 space-y-4">
               <p>© {new Date().getFullYear()} منصة التسجيل — جميع الحقوق محفوظة</p>
           </footer>
        </div>
      </div>
    </>
  );
}


// =================================================================================
// المكونات الفرعية لواجهة المستخدم (UI & SUB-COMPONENTS)
// =================================================================================
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <div className={`border rounded-2xl bg-white shadow-xl shadow-gray-200/50 overflow-hidden ${className}`}>{children}</div>;
const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <div className={`p-4 md:p-6 border-b border-gray-100 ${className}`}>{children}</div>;
const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <div className={`p-4 md:p-6 ${className}`}>{children}</div>;
const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children, ...props }) => <label className="font-semibold text-sm text-gray-700 mb-2 block" {...props}>{children}</label>;
const Separator = () => <hr className="my-4 border-gray-200" />;
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string }> = ({ children, className, variant, size, ...props }) => {
    const baseClasses = "rounded-lg flex items-center justify-center gap-2 transition-all duration-200 font-semibold";
    const sizeClasses = size === 'icon' ? 'w-9 h-9 p-0' : 'px-4 py-2';
    const variantClasses = variant === 'ghost' ? 'bg-transparent border-0' : '';
    return <button className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`} {...props}>{children}</button>;
};
const Badge: React.FC<{ children: React.ReactNode; className?: string; variant: "default" | "secondary" | "destructive" }> = ({ children, className, variant }) => {
  const baseClasses = "px-2.5 py-0.5 text-xs font-semibold rounded-full";
  const variants = { default: "bg-green-100 text-green-800", secondary: "bg-gray-100 text-gray-800", destructive: "bg-red-100 text-red-800" };
  return <span className={`${baseClasses} ${variants[variant]} ${className}`}>{children}</span>;
};
const Alert: React.FC<{ children: React.ReactNode; className?: string; variant: "destructive" | "success" | "default" }> = ({ children, className, variant }) => {
  const variants = { destructive: 'bg-red-50 border-red-300 text-red-800', success: 'bg-green-50 border-green-300 text-green-800', default: 'bg-blue-50 border-blue-300 text-blue-800' };
  return <div className={`p-4 border-l-4 rounded-r-lg ${variants[variant]} ${className}`}>{children}</div>;
};
const AlertTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="font-bold mb-1">{children}</h3>;
const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => <p className="text-sm">{children}</p>;
const SocialLink: React.FC<{ href: string; className?: string; children: React.ReactNode }> = ({ href, className, children }) => (<a href={href} target="_blank" rel="noopener noreferrer" className={`w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-500 transition-all duration-300 ease-in-out hover:shadow-lg ${className}`}>{children}</a>);
const StyledInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (<input {...props} className={`w-full bg-gray-50 border-gray-200 border-2 rounded-xl py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md focus:shadow-lg ${props.className || ''}`} />);
const StyledSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ children, ...props }) => (<div className="relative"><select {...props} className="w-full bg-gray-50 border-gray-200 border-2 rounded-xl py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md focus:shadow-lg appearance-none pr-10">{children}</select><div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-gray-500"><ChevronDown className="w-5 h-5" /></div></div>);

const Stepper = ({ step }: { step: number }) => {
  const steps = ["الكود", "البيانات", "المواد", "الفاتورة", "تأكيد الإرسال"];
  return (
    <div className="flex items-start w-full px-2 md:px-4">
      {steps.map((title, i) => {
        const s = i + 1;
        const isDone = s < step;
        const isActive = s === step;
        return (
          <React.Fragment key={title}>
            <div className="flex flex-col items-center text-center flex-shrink-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 border-2 ${isDone ? 'bg-green-500 border-green-600 text-white' : isActive ? 'bg-white border-blue-500 text-blue-500' : 'bg-gray-200 border-gray-300 text-gray-500'}`}>{isDone ? <Check size={18} /> : s}</div>
              <p className={`mt-2 text-xs md:text-sm transition-colors w-16 ${isActive ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>{title}</p>
            </div>
            {s < steps.length && (<div className={`flex-1 h-1 mt-4 mx-2 transition-colors duration-300 rounded-full ${isDone ? 'bg-green-500' : 'bg-gray-200'}`}></div>)}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const CourseChecklist = ({ courses, selected, onToggle }: { courses: string[], selected: string[], onToggle: (name: string) => void }) => {
  if (!courses || courses.length === 0) return <Alert variant="default"><AlertTitle>لا توجد مواد متاحة</AlertTitle><AlertDescription>يرجى التأكد من اختيار الفرقة والترم الصحيحين.</AlertDescription></Alert>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      {courses.map(name => {
        const isChecked = selected.includes(name);
        return (
            <label key={name} className={`flex items-center justify-end w-full p-4 h-full rounded-xl border-2 cursor-pointer transition-all duration-200 ${isChecked ? "bg-blue-50 border-blue-500 shadow-md" : "bg-white border-gray-200 hover:border-gray-300"}`}>
              <span className="font-normal text-sm text-gray-800 flex-grow text-right mr-3">{name}</span>
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${isChecked ? 'bg-blue-500 border-blue-600' : 'bg-gray-100 border-gray-300'}`}>{isChecked && <Check className="w-4 h-4 text-white" />}</div>
              <input type="checkbox" className="sr-only" checked={isChecked} onChange={() => onToggle(name)} />
            </label>
        );
      })}
    </div>
  );
};

const ExtraCourseSet = ({ set, onRemove, onUpdate }: { set: ExtraSet, onRemove: () => void, onUpdate: (updatedSet: ExtraSet) => void }) => {
    const courses = COURSES[set.year === 4 ? `${set.year}-${set.term}-${set.specialty ?? SPECIALTIES[0]}` : `${set.year}-${set.term}`] ?? [];
    return (
      <Card className="bg-gray-50">
        <CardHeader className="flex items-center justify-between pb-3">
          <h3 className="text-base font-bold">مجموعة إضافية</h3>
          <Button onClick={onRemove} variant="ghost" size="icon" className="text-red-500 hover:bg-red-100"><Trash2 className="w-4 h-4"/></Button>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <StyledSelect value={set.year} onChange={e => onUpdate({...set, year: Number(e.target.value) as any, specialty: Number(e.target.value) === 4 ? SPECIALTIES[0] : undefined, selected: []})}>
              <option value={1}>الأولى</option><option value={2}>الثانية</option><option value={3}>الثالثة</option><option value={4}>الرابعة</option>
            </StyledSelect>
            <StyledSelect value={set.term} onChange={e => onUpdate({...set, term: Number(e.target.value) as any, selected: []})}>
              <option value={1}>الترم الأول</option><option value={2}>الترم الثاني</option><option value={3}>سمر كورس</option>
            </StyledSelect>
            {set.year === 4 && <StyledSelect value={set.specialty} onChange={e => onUpdate({...set, specialty: e.target.value, selected: []})}>{SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}</StyledSelect>}
          </div>
          <CourseChecklist courses={courses} selected={set.selected} onToggle={name => onUpdate({...set, selected: set.selected.includes(name) ? set.selected.filter(n => n !== name) : [...set.selected, name]})} />
        </CardContent>
      </Card>
    );
};

const InvoiceDetails = ({ pickedCourses, pricing, promo, setPromo }: { pickedCourses: PickedCourse[], pricing: PricingDetails, promo: string, setPromo: (value: string) => void }) => (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-4">
      <div className="lg:col-span-3">
        <h4 className="font-bold mb-3 text-lg text-gray-700">قائمة المواد المختارة</h4>
        <div className="overflow-auto border rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-50"><tr className="text-right"><th className="p-3 font-semibold text-gray-600">المادة</th><th className="p-3 font-semibold text-gray-600 text-center w-24">الفرقة</th><th className="p-3 font-semibold text-gray-600 text-center w-24">الترم</th><th className="p-3 font-semibold text-gray-600 text-left w-32">السعر</th></tr></thead>
            <tbody>{pickedCourses.map(pc => (<tr key={pc.key} className="border-b last:border-b-0"><td className="p-3">{pc.name}</td><td className="p-3 text-center">{yearLabel(pc.year)}</td><td className="p-3 text-center">{termLabel(pc.term)}</td><td className="p-3 text-left font-sans">{fmt(PRICES[pc.year])}</td></tr>))}</tbody>
          </table>
        </div>
      </div>
      <div className="lg:col-span-2">
        <h4 className="font-bold mb-3 text-lg text-gray-700">الملخص المالي</h4>
        <Card className="p-4"><CardContent className="space-y-2 text-sm">
            <KeyValue k="عدد المواد" v={`${pricing.count}`} />
            <KeyValue k="إجمالي قبل الخصم" v={fmt(pricing.subtotal)} />
            <KeyValue k={`خصم الكمية (${(pricing.rate * 100).toFixed(0)}%)`} v={`- ${fmt(pricing.discount)}`} isDiscount />
            <Separator className="my-2"/>
            <KeyValue k="الإجمــالي للدفع" v={fmt(pricing.total)} isTotal />
            <div className="py-2 space-y-2">
              <StyledInput placeholder="كود الخصم (Yalla Gam3a)" value={promo} onChange={e => setPromo(e.target.value)} className="text-sm text-center" />
              {promo.trim().toLowerCase() === 'yalla gam3a' && <Badge variant="default" className="mt-2">تم تطبيق خصم Yalla Gam3a</Badge>}
            </div>
        </CardContent></Card>
      </div>
    </div>
);

const KeyValue = ({ k, v, isDiscount, isTotal }: { k: string; v: string; isDiscount?: boolean; isTotal?: boolean; }) => (
    <div className={`flex justify-between items-baseline py-1.5 border-b border-gray-100 ${isTotal ? 'pt-3' : ''}`}>
      <span className={`text-gray-600 ${isTotal ? 'text-lg font-bold' : ''}`}>{k}</span>
      <span className={`font-sans font-semibold ${isDiscount ? 'text-red-600' : 'text-gray-900'} ${isTotal ? 'text-xl' : ''}`}>{v}</span>
    </div>
);

