import React from "react";
import NavBar from "../../Components/common/NavBar/NavBar";
import Footer from "../../Components/layout/Footer/Footer";
import './AboutUs.css'
export default function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="AboutUs">
          <h1 className="AboutUs__title">درباره ما</h1>
          <p className="AboutUs__subtitle">بازار خودرو...</p>
          <p className="AboutUs__text">
            شرکت مدیا گستر نت با نام تجاری «باما» در سال ۱۳۸۸ با هدف ایجاد
            شفافیت در بازار خودرو و دسترس پذیرتر کردن این بازار در ایران شروع به
            کار کرد. «باما» با تمرکز بر تغییر الگوی سنتی خرید و فروش خودرو در
            ایران مسیری موفقیت آمیز را به سرعت پیمود و طی سال های ابتدایی فعالیت
            خود، به نمونه ای جایگزین برای بسترهای آفلاین و سنتی آگهی خرید و فروش
            خودرو در ایران تبدیل شد
          </p>
          <p className="AboutUs__text">
            در حال حاضر پلتفرم «باما» به عنوان مرجعی تخصصی و قابل اعتماد در حوزه
            آگهی های خرید و فروش خودروهای سواری، موتورسیکلت و خودروهای سنگین
            فعال است و همچنین جایگاه قابل اتکاترین پایگاه ارائه قیمت خودرو در
            بازار ایران را نیز در اختیار دارد.
          </p>
          <p className="AboutUs__text">
            «باما» همواره با نگاهی رو به جلو، با به کارگیری تکنولوژی های به روز
            و کارآمد و با تمرکز بر روش های توسعه در بازار کسب و کار خودروی ایران
            و همچنین با مطالعه به روزترین راهکارها و محصولات بین المللی، در تلاش
            است نظمی همگام با پیشرفت های جهانی به زنجیره خرید و فروش خودرو در
            ایران ببخشد.
          </p>
          <div className="AboutUs__footer">
          <p>شرکت مدیا گستر نت  <br />امیرعلی شبیری</p>
          <img src="./img/abouteUs.svg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
