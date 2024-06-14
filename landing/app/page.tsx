import Image from "next/image";

import { PhoneIcon, RouteIcon, MedalIcon } from "lucide-react";

import dynamic from "next/dynamic";
const Reviews = dynamic(() => import("@/components/reviews"));

export default function Home() {
  return (
    <div className="text-black">
      <div className="text-center bg-yellow-400  text-black py-1">
        نحن هنا لمساعد يلبدا في قيادة
      </div>

      <nav className="py-2 z-30 bg-black sticky top-0">
        <div className="container justify-between mx-auto text-lg text-white flex items-center">
          <a className="space-x-reverse  rounded-md bg-yellow-400 text-black py-1 px-2 flex space-x-2 items-center">
            <span>0758469875</span>
            <PhoneIcon />
          </a>

          <ul className=" flex-1 text-[#FFED07] hidden lg:flex items-center justify-center space-x-reverse space-x-4 font-bold">
            <li>
              <a className="text-white" href="#">
                الرئيسية
              </a>
            </li>

            <li>
              <a href="#">نوع الرخصة</a>
            </li>
            <li>
              <a href="#">مهمتنا</a>
            </li>
            <li>
              <a href="#">لماذا نحن</a>
            </li>
          </ul>

          <a className="font-bold" href="#">
            Salim Autoecole
          </a>
        </div>
      </nav>

      <div className="z-20 relative bg-white">
        <div className="px-4 lg:px-20 pt-12 pb-36 gap-4  flex flex-col lg:flex-row justify-center  mx-auto ">
          <div className="flex-1">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight max-w-lg">
              دروس القيادة في مقاطعتي ميرسر{" "}
              <span className="underline-offset-1 decoration-yellow-400 underline">
                وميدلسكس مع
              </span>{" "}
              مدربين معتمدين.
            </h1>

            <p className="max-w-lg text-xl mt-4">
              في مدارسنا في نيوجيرسي في مقاطعة ميرسر وميدلسكس، نقدم دروسًا شاملة
              في القيادة. إن تقديم الطعام للأفراد من سن 16 عامًا إلى البالغين،
              بما في ذلك كبار السن والوافدين من الخارج، يعد نهجنا سهلًا
              واستراتيجيًا.
            </p>

            <div className="inline-flex w-full flex-col lg:flex-row items-center gap-4 mt-6">
              <button className="w-full lg:w-auto ring-2 ring-black/95 text-white bg-black rounded-lg text-xl font-bold px-6 py-2">
                احجز مكانك
              </button>

              <button className="w-full lg:w-auto ring-2 ring-gray-800 rounded-lg text-xl font-bold px-6 py-2">
                اطلع على معملومات اكثر
              </button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              alt="hero"
              fill
              priority
              src="/hero.png"
              className="!relative float-left !w-full max-w-lg !h-auto"
            />
          </div>
        </div>

        <div className="bg-black p-4  grid grid-cols-1 lg:grid-cols-5 gap-4 text-black">
          {Array(5)
            .fill("")
            .map(() => (
              <div className="aspect-video lg:aspect-[11/9] flex flex-col justify-around  items-center rounded-lg bg-white">
                <div className="aspect-square rounded-full bg-black text-yellow-400 p-4">
                  <RouteIcon className="size-12" />
                </div>

                <p className="text-4xl font-bold">15</p>

                <h2 className="text-xl">سنوا خبرة</h2>
              </div>
            ))}
        </div>

        <div className="w-full px-4 lg:px-20 pt-20 pb-36">
          <h1 className="text-4xl lg:text-5xl font-bold text-center">
            ابدأ دروس القيادة الخاصة بك
          </h1>

          <p className="text-center mt-2 text-lg">
            خيارات للمراهقين والبالغين والإعداد لاختبار الطريق في مقاطعة ميرسر
            وميدلسكس
          </p>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 mt-12">
            {Array(3)
              .fill("")
              .map(() => (
                <div className="rounded-xl overflow-hidden bg-black ring-2 ring-black">
                  <img
                    className="w-full aspect-video"
                    src="https://usdrivingschool.com/wp-content/uploads/2023/05/6-hour-program-services.jpg"
                  />

                  <div className="px-4 py-3 text-white">
                    <h2 className="text-3xl font-bold ">صيارا سياحية</h2>

                    <p className="text-lg text-white/80 my-4">
                      تقديم تعليمات مخصصة لأولئك الذين بدأوا للتو، أو صقل
                      مهاراتهم في القيادة، أو الاستعداد لاجتياز اختبار الطريق.
                    </p>

                    <button className=" text-black bg-white rounded-lg text-lg  px-6 py-1">
                      احجز مكانك
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div>
        <div className="w-full py-12 lg:py-0 lg:h-screen bg-black traingleblackbluesm gap-4 lg:traingleblackblue px-4 lg:px-20 flex flex-col lg:flex-row text-white">
          <div className="flex flex-col justify-center items-start">
            <h1 className="flex items-center space-x-2 space-x-reverse font-bold text-5xl">
              <span>مهمتنا</span>

              <MedalIcon className="text-yellow-500" />
            </h1>

            <p className="text-xl max-w-lg mt-12">
              في مدرسة القيادة الأمريكية، نحن في مهمة لجعل طرق نيوجيرسي أكثر
              أمانًا للجميع. في كل عام، تكشف الإحصائيات المثيرة للقلق أن هناك
              280 ألف حادث سيارة في ولايتنا، ومن المؤسف أن 600 منها تؤدي إلى
              الوفاة. نحن نؤمن إيمانًا راسخًا بأن سلوك الشخص في القيادة يتأثر
              بشدة بمشاعره ومواقفه وأنشطته اليومية.
            </p>

            <button className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-lg px-6 py-1">
              ابدأ الان
            </button>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <div className="relative">
              <Image
                width={700}
                height={700}
                alt="car"
                src="/car.png"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full px-4 lg:px-20 pt-20 pb-12 lg:pb-36">
          <h1 className="text-4xl lg:text-5xl font-bold text-center">
            اكتشف لماذا اختار أكثر من{" "}
            <span className="underline underline-offset-1 decoration-yellow-500 decoration-4">
              15000 طالب من ولاية نيوجيرسي
            </span>{" "}
            الولايات المتحدة لتلقي دروس القيادة
          </h1>

          <p className="text-center mt-4 text-lg">
            اكتشف ما يميزنا عن المدارس الأخرى
          </p>

          <div className="mt-12 lg:mt-24 grid lg:grid-cols-4 justify-center gap-12 lg:gap-28">
            <div className="space-y-2">
              <div className="inline-block aspect-square p-2 bg-black rounded-lg ">
                <Image
                  width={20}
                  height={20}
                  alt="icon"
                  className="w-10   object-cover"
                  src="/check.gif"
                />
              </div>
              <h4 className="font-bold text-xl">مدربين قيادة معتمدين</h4>
              <p>
                بالإضافة إلى ذلك، فإن كل مدرب لدينا ليس معتمدًا ومرخصًا فحسب، بل
                أكمل أيضًا برنامجًا تدريبيًا صارمًا بنجاح.
              </p>
            </div>

            <div className="space-y-2">
              <div className="inline-block aspect-square p-2 bg-black rounded-lg ">
                <Image
                  width={20}
                  height={20}
                  alt="icon"
                  className="w-10   object-cover"
                  src="/scheduler.gif"
                />
              </div>
              <h4 className="font-bold text-xl">توافر مرن</h4>
              <p>
                اختر من بين مجموعة واسعة من أوقات الدرس بما في ذلك الصباح الباكر
                والمساء وعطلات نهاية الأسبوع.
              </p>
            </div>
            <div className="space-y-2">
              <div className="inline-block aspect-square p-2 bg-black rounded-lg ">
                <Image
                  width={20}
                  height={20}
                  alt="icon"
                  className="w-10   object-cover "
                  src="/gear.gif"
                />
              </div>
              <h4 className="font-bold text-xl">
                المركبات التي تمت صيانتها بشكل جيد
              </h4>
              <p>جميع سياراتنا نظيفة ويتم فحصها كل شهر.</p>
            </div>
            <div className="space-y-2">
              <div className="inline-block aspect-square p-2 bg-black rounded-lg ">
                <Image
                  width={20}
                  height={20}
                  alt="icon"
                  className="w-10   object-cover"
                  src="/like.gif"
                />
              </div>
              <h4 className="font-bold text-xl">فريق الدعم</h4>
              <p>
                سيقدم فريق الدعم المخصص لدينا إرشادات شخصية، بدءًا من جدولة
                الدروس وحتى التنقل في عملية الترخيص/التصريح، مما يضمن حصولك على
                الدعم في كل خطوة على الطريق.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 lg:px-20 pt-20 pb-36">
          <h1 className="text-4xl lg:text-5xl font-bold text-center">
            ماذا يقول طلابنا عن دروس القيادة...
          </h1>

          <Reviews />
        </div>

        <div className="-mb-24 w-full z-10 py-3 text-center  font-bold bg-black/90 backdrop-blur-sm text-yellow-400 text-2xl sticky bottom-0 ">
          احجز مكانك
        </div>

        <section className=" z-40 relative text-center w-full overflow-hidden bg-black pt-28  text-white">
          <h3 className="text-4xl lg:text-5xl font-bold text-center  ">مازل لديك اسئلة؟</h3>

          <p className="text-lg font-light text-center mt-8 max-w-md mx-auto">
            نحن ندرك أنك قد تظل حذرًا بشأن اختيارك، وسنكون كذلك أيضًا.
            <br />
            <br className="hidden lg:inline" />
            نحن نقدم استشارات مجانية مدتها 30 دقيقة لمعرفة ما إذا كان Etrepro هو
            الخيار الأفضل لتوسيع نطاق أعمالك.
          </p>
          <button className="relative bg-white text-black font-medium px-10 py-3 rounded-full mt-12">
            احجز استشارة معنا

            <span className="absolute size-3 animate-pulse rounded-full right-4 top-1/2 -translate-y-1/2 bg-black"></span>
          </button>

          <footer className="mt-14 py-14 container mx-auto border-t border-zinc-700">
            <div className="flex flex-col-reverse gap-4 lg:flex-row items-center justify-between">
              <div className="inline-flex items-center space-x-reverse space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>الجزائر العاصمة</span>
              </div>

              <a href="#" className="font-bold text-3xl">
                Salime Autoécole
              </a>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row items-center justify-between mt-14 text-sm font-light">
              <div className="">برمجة من طرف نبيل العقريب</div>

              <p dir="ltr">©Etrepro 2024. All rights reserved.</p>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}
