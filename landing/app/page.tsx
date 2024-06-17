import Image from "next/image";

import {
  PhoneIcon,
  RouteIcon,
  MedalIcon,
  CarFrontIcon,
  PersonStandingIcon,
  HistoryIcon,
} from "lucide-react";

import dynamic from "next/dynamic";
const Reviews = dynamic(() => import("@/components/reviews"));

export default function Home() {
  return (
    <div className="text-black">
      <div className="bg-yellow-400 py-1 text-center text-black">
        نحن هنا لمساعدتك لبدأ في القيادة
      </div>

      <nav className="sticky top-0 z-30 bg-black py-2">
        <div className="mx-auto flex items-center justify-between px-3 text-white lg:container lg:text-lg">
          <a className="flex items-center space-x-2 space-x-reverse rounded-md bg-yellow-400 px-2 py-1 text-black">
            <span>0758469875</span>
            <PhoneIcon />
          </a>

          <ul className="hidden flex-1 items-center justify-center space-x-4 space-x-reverse font-bold text-[#FFED07] lg:flex">
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

          <a className="shrink-0 font-bold" href="#">
            Salim Autoécole
          </a>
        </div>
      </nav>

      <div className="relative z-20 bg-white">
        <div className="mx-auto flex flex-col justify-center gap-4 px-4 pb-36 pt-12 lg:flex-row lg:px-20">
          <div className="flex-1">
            <h1 className="max-w-lg text-3xl font-bold leading-tight lg:text-5xl">
              تحصل على رخصة سياقة{" "}
              <span className="underline decoration-yellow-400 underline-offset-1">
                من المرة الأولى
              </span>{" "}
              مع مدربيين مختصيين
            </h1>

            <p className="mt-4 max-w-lg text-xl">
              مدرستنا المتواجد بالشراقة الجزائر العاصمة تساعدك على تعلم و اجتياز
              امتحان رخصة السياقة من المرة الأولى وهذا من خلال مدربيين مختصيين
              في تعليم الكود وسياقة وركن السيارة. انضم لأزيد من 1000 سائق تعلم
              من خلال مدرستنا
            </p>

            <div className="mt-6 inline-flex w-full flex-col items-center gap-4 lg:flex-row">
              <button className="w-full rounded-lg bg-black px-6 py-2 text-xl font-bold text-white ring-2 ring-black/95 lg:w-auto">
                احجز مكانك
              </button>

              <a href="#why"  className="block text-center w-full rounded-lg px-6 py-2 text-xl font-bold ring-2 ring-gray-800 lg:w-auto">
                لماذا نحن
              </a>
            </div>
          </div>
          <div className="flex-1">
            <Image
              alt="hero"
              fill
              priority
              src="/hero.png"
              className="!relative float-left !h-auto !w-full max-w-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 bg-black p-4 text-black lg:grid-cols-4">
          <div className="flex aspect-video flex-col items-center justify-around rounded-lg bg-white lg:aspect-[11/9]">
            <div className="aspect-square rounded-full bg-black p-4 text-yellow-400">
              <CarFrontIcon className="size-12" />
            </div>

            <p className="text-4xl font-bold">15</p>

            <h2 className="text-xl">سنوات خبرة</h2>
          </div>

          <div className="flex aspect-video flex-col items-center justify-around rounded-lg bg-white lg:aspect-[11/9]">
            <div className="aspect-square rounded-full bg-black p-4 text-yellow-400">
              <RouteIcon className="size-12" />
            </div>

            <p className="text-4xl font-bold">98%</p>

            <h2 className="text-xl"> نجحو من المرة الأولى </h2>
          </div>

          <div className="flex aspect-video flex-col items-center justify-around rounded-lg bg-white lg:aspect-[11/9]">
            <div className="aspect-square rounded-full bg-black p-4 text-yellow-400">
              <PersonStandingIcon className="size-12" />
            </div>

            <p className="text-4xl font-bold">1,000+</p>

            <h2 className="text-xl">شحص عادي الى سائق</h2>
          </div>

          <div className="flex aspect-video flex-col items-center justify-around rounded-lg bg-white lg:aspect-[11/9]">
            <div className="aspect-square rounded-full bg-black p-4 text-yellow-400">
              <HistoryIcon className="size-12" />
            </div>

            <p className="text-4xl font-bold">10,000+</p>

            <h2 className="text-xl">إجمالي ساعات التدريب</h2>
          </div>
        </div>

        <div className="w-full px-4 pb-36 pt-20 lg:px-20">
          <h1 className="text-center text-4xl font-bold lg:text-5xl">
            ابدأ دروس القيادة الخاصة بك
          </h1>

          <p className="mt-2 text-center text-lg">
            خيارات للمراهقين والبالغين والإعداد لاختبار الطريق في مقاطعة ميرسر
            وميدلسكس
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="overflow-hidden rounded-xl bg-black ring-2 ring-black">
              <img
                className="aspect-video w-full"
                src="https://usdrivingschool.com/wp-content/uploads/2023/05/6-hour-program-services.jpg"
              />

              <div className="px-4 py-3 text-white">
                <h2 className="text-3xl font-bold">سيارة سياحية</h2>

                <p className="my-4 text-lg text-white/80">
                  من خلال مرحلتين سوف تتعلم الجانب النضري من اشارات المرور
                  والاولويات ثم تتعلم قيادة السيارة قبل نهاية الشهر تتحصل على
                  رخصتك
                </p>

                <button className="rounded-lg bg-white px-6 py-1 text-lg text-black">
                  احجز مكانك
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-black ring-2 ring-black">
              <img
                className="aspect-video w-full"
                src="https://helpfixmywreck.com/wp-content/uploads/2023/11/Different-Types-of-Motorcycle-Licenses-in-Texas_-A-Complete-Guide-1280x853.jpg"
              />

              <div className="px-4 py-3 text-white">
                <h2 className="text-3xl font-bold">دراجة نارية</h2>

                <p className="my-4 text-lg text-white/80">
                  من خلال اتباعك لمسار حصول على رخصة قيادة الدراجة النارية تصبح
                  على دراية جانب النظري مع خبرة تطبيقية
                </p>

                <button className="rounded-lg bg-white px-6 py-1 text-lg text-black">
                  احجز مكانك
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-black ring-2 ring-black">
              <img
                className="aspect-video w-full"
                src="https://emilypost.com/client_media/images/blogs/everyday-driving.jpg"
              />

              <div className="px-4 py-3 text-white">
                <h2 className="text-3xl font-bold">ساعات قيادة اضافية</h2>

                <p className="my-4 text-lg text-white/80">
                  تحصلت على رخصتك وتريد الوصول من جيد جدا في القيادة الى سائق
                  ممتاز نوفر لك ساعات اضافية تتعلم فيها تطبيقيا
                </p>

                <button className="rounded-lg bg-white px-6 py-1 text-lg text-black">
                  احجز مكانك
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="traingleblackbluesm lg:traingleblackblue flex w-full flex-col gap-4 bg-black px-4 py-12 text-white lg:h-screen lg:flex-row lg:px-20 lg:py-0">
          <div className="flex flex-col items-start justify-center">
            <h1 className="flex items-center space-x-2 space-x-reverse text-5xl font-bold">
              <span>مهمتنا</span>

              <MedalIcon className="text-yellow-500" />
            </h1>

            <p className="mt-12 max-w-lg text-xl">
              في مدرسة القيادة الأمريكية، نحن في مهمة لجعل طرق نيوجيرسي أكثر
              أمانًا للجميع. في كل عام، تكشف الإحصائيات المثيرة للقلق أن هناك
              280 ألف حادث سيارة في ولايتنا، ومن المؤسف أن 600 منها تؤدي إلى
              الوفاة. نحن نؤمن إيمانًا راسخًا بأن سلوك الشخص في القيادة يتأثر
              بشدة بمشاعره ومواقفه وأنشطته اليومية.
            </p>

            <button className="mt-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-1 text-lg text-black">
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

        <div  className="w-full px-4 pb-12 pt-20 lg:px-20 lg:pb-36">
          <h1 id="why" className="scroll-m-4 text-center text-4xl font-bold lg:text-5xl">
            اكتشف لماذا اختار أكثر من{" "}
            <span className="underline decoration-yellow-500 decoration-4 underline-offset-1">
              15000 طالب من 
            </span>{" "}
            من الجزائر لتلقي دروس القيادة
          </h1>

          <p className="mt-4 text-center text-lg">
            اكتشف ما يميزنا عن المدارس الأخرى
          </p>

          <div className="mt-12 grid justify-center gap-12 lg:mt-24 lg:grid-cols-4 lg:gap-28">
            <div className="space-y-2">
              <div className="inline-block aspect-square rounded-lg bg-black p-2">
                <Image
                  width={20}
                  height={20}
                  alt="icon"
                  className="w-10 object-cover"
                  src="/check.gif"
                />
              </div>
              <h4 className="text-xl font-bold">مدربين قيادة مختصيين</h4>
              <p>
                بالإضافة إلى ذلك، فإن كل مدرب لدينا ليس معتمدًا ومرخصًا فحسب، بل
                أكمل أيضًا برنامجًا تدريبيًا صارمًا بنجاح.
              </p>
            </div>

            <div className="space-y-2">
              <div className="inline-block aspect-square rounded-lg bg-black p-2">
                <Image
                  width={20}
                  height={20}
                  alt="icon"
                  className="w-10 object-cover"
                  src="/scheduler.gif"
                />
              </div>
              <h4 className="text-xl font-bold">جدول توقيت مرن</h4>
              <p>
                اختر من بين مجموعة واسعة من أوقات الدرس بما في ذلك الصباح الباكر
                والمساء وعطلات نهاية الأسبوع.
              </p>
            </div>
            <div className="space-y-2">
              <div className="inline-block aspect-square rounded-lg bg-black p-2">
                <Image
                  width={20}
                  height={20}
                  alt="icon"
                  className="w-10 object-cover"
                  src="/gear.gif"
                />
              </div>
              <h4 className="text-xl font-bold">
              سيارات يتمت صيانتها بشكل جيد
              </h4>
              <p>جميع سياراتنا نظيفة ويتم فحصها كل شهر.</p>
            </div>
            <div className="space-y-2">
              <div className="inline-block aspect-square rounded-lg bg-black p-2">
                <Image
                  width={20}
                  height={20}
                  alt="icon"
                  className="w-10 object-cover"
                  src="/like.gif"
                />
              </div>
              <h4 className="text-xl font-bold">فريق الدعم</h4>
              <p>
                سيقدم فريق الدعم المخصص لدينا إرشادات شخصية، بدءًا من جدولة
                الدروس وحتى التنقل في عملية الترخيص/التصريح، مما يضمن حصولك على
                الدعم في كل خطوة على الطريق.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 pb-36 pt-20 lg:px-20">
          <h1 className="text-center text-4xl font-bold lg:text-5xl">
            ماذا يقول طلابنا عن دروس القيادة...
          </h1>

          <Reviews />
        </div>

        <div className="sticky bottom-0 z-10 -mt-[100%] h-dvh">
          <div className="absolute bottom-0 w-full bg-black/90 py-3 text-center text-2xl font-bold text-yellow-400 backdrop-blur-sm">
            احجز مكانك
          </div>
        </div>

        <section className="relative z-40 w-full overflow-hidden bg-black pt-28 text-center text-white">
          <h3 className="text-center text-4xl font-bold lg:text-5xl">
            مازل لديك اسئلة؟
          </h3>

          <p className="mx-auto mt-8 max-w-md text-center text-lg font-light">
            نحن ندرك أنك قد تظل حذرًا بشأن اختيارك، وسنكون كذلك أيضًا.
            <br />
            <br className="hidden lg:inline" />
            نحن نقدم استشارات مجانية مدتها 30 دقيقة لمعرفة ما إذا كان مدرستنا هي
        الخيار الأفضل لتبدأ القيادة.
          </p>
          <button className="relative mt-12 rounded-full bg-white px-10 py-3 font-medium text-black">
            احجز استشارة معنا
            <span className="absolute right-4 top-1/2 size-3 -translate-y-1/2 animate-pulse rounded-full bg-black"></span>
          </button>

          <footer className="container mx-auto mt-14 border-t border-zinc-700 py-14">
            <div className="flex flex-col-reverse items-center justify-between gap-4 lg:flex-row">
              <div className="inline-flex items-center space-x-4 space-x-reverse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>الجزائر العاصمة</span>
              </div>

              <a href="#" className="text-3xl font-bold">
                Salime Autoécole
              </a>
            </div>

            <div className="mt-14 flex flex-col items-center justify-between gap-4 text-sm font-light lg:flex-row">
              <div className="">برمجة من طرف نبيل العقريب</div>

              <p dir="ltr">©Etrepro 2024. All rights reserved.</p>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}
