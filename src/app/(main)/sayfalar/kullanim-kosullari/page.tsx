import Breadcrumb from "@/components/theme/Breadcrumb";
import { EMAIL, SITE_URL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import { RiFileTextLine, RiCalendarLine, RiMailLine } from "react-icons/ri";

export const generateMetadata = async () => {
  return SeoData({
    title: "Kullanım Koşulları - Deprem Wiki",
    description: "Deprem Wiki kullanım koşulları ve şartları. Web sitesi ve uygulamalarımızı kullanırken uyulması gereken kurallar.",
    url: `${SITE_URL}/sayfalar/kullanim-kosullari`,
  });
};

export default function TermsOfUse() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Breadcrumb
          breadcrumbCategory="Sayfalar"
          breadcrumbCategoryLink="/sayfalar"
          breadcrumbPostTitle="Kullanım Koşulları"
          breadcrumbPostUrl="/sayfalar/kullanim-kosullari"
        />
      </div>

      <section className="py-8 md:py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
              <RiFileTextLine className="text-4xl text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Kullanım Koşulları
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <RiCalendarLine className="text-lg" />
              <span className="font-medium">Yürürlük Tarihi: 30 Eylül 2024</span>
            </div>
          </div>

          {/* Content */}
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-6 md:px-8 py-8 md:py-10">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Bu web sitesine (deprem.wiki) ve ilişkili uygulamalara (örneğin, Chrome uzantısı) erişim sağlayarak, aşağıda belirtilen kullanım koşullarını kabul etmiş olursunuz. Bu koşullar, Deprem Wiki tarafından sunulan hizmetlerin kullanımını düzenler ve web sitesini veya uygulamalarını kullanmanız durumunda geçerli olacaktır.
                </p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      1. Hizmetin Kapsamı
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      Deprem Wiki, deprem haberleri ve analizlerine anlık olarak erişim sağlamayı amaçlayan bir platformdur. Sağlanan bilgiler genel bilgilendirme amaçlıdır ve yalnızca kullanıcıları deprem faaliyetleri hakkında bilgilendirmek amacıyla sunulmaktadır.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      2. Kullanıcı Hesapları
                    </h2>
                    <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 ml-6">
                      <li className="list-disc">
                        Web sitemizde veya uygulamalarımızda bir hesap oluşturduğunuzda, doğru ve eksiksiz bilgi vermeyi kabul edersiniz.
                      </li>
                      <li className="list-disc">
                        Hesap açmak için zorunlu bilgiler e-posta adresi ve paroladır. İsim, soyisim ve profil fotoğrafı isteğe bağlıdır.
                      </li>
                      <li className="list-disc">
                        Hesabınızdan yapılan tüm faaliyetlerden siz sorumlusunuz. Hesabınızı korumak için şifrenizi gizli tutmalısınız. Şifrenizi üçüncü taraflarla paylaşmamalısınız.
                      </li>
                      <li className="list-disc">
                        Deprem Wiki, kullanıcı hesaplarını gerektiğinde askıya alma veya kapatma hakkını saklı tutar.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      3. Kullanıcı Yorumları
                    </h2>
                    <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 ml-6">
                      <li className="list-disc">
                        Kullanıcılar, deprem haberleri altına yorum yapabilirler. Yorumlar, kullanıcı adı ve varsa profil fotoğrafı ile birlikte yayınlanır.
                      </li>
                      <li className="list-disc">
                        Yorumlarınızda başkalarının haklarını ihlal etmemeli, hakaret, tehdit, yasa dışı içerik veya yanıltıcı bilgiler paylaşmamalısınız.
                      </li>
                      <li className="list-disc">
                        Deprem Wiki, uygun görmediği yorumları kaldırma veya düzenleme hakkını saklı tutar.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      4. Toplanan Veriler ve Gizlilik
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Deprem Wiki, kullanıcılarından topladığı verileri <strong className="text-gray-900 dark:text-white">Gizlilik Politikası</strong>'nda belirtildiği şekilde kullanır. Web sitemizi ve uygulamalarımızı kullanarak, Gizlilik Politikası'nda açıklanan veri işleme süreçlerini kabul etmiş olursunuz.
                    </p>
                    <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 ml-6">
                      <li className="list-disc">
                        IP adresi ve konum bilgileri, deprem haberleri ve analizler sağlamak amacıyla toplanmaktadır.
                      </li>
                      <li className="list-disc">
                        Verilerinizi korumak için gerekli güvenlik önlemleri alınmaktadır. Detaylar için lütfen <strong className="text-gray-900 dark:text-white">Gizlilik Politikası</strong>'nı inceleyin.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      5. Sorumluluk Reddi
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Deprem Wiki platformunda sunulan deprem haberleri ve analizleri, üçüncü taraf veri sağlayıcılarından alınmakta olup, olabildiğince güncel ve doğru bilgiler sunmaya çalışıyoruz. Ancak:
                    </p>
                    <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 ml-6">
                      <li className="list-disc">
                        Sağlanan bilgilerde eksiklikler, gecikmeler veya hatalar olabilir.
                      </li>
                      <li className="list-disc">
                        Deprem haberlerinin doğruluğu, zamanlaması veya güncelliği konusunda herhangi bir garanti vermiyoruz.
                      </li>
                      <li className="list-disc">
                        Deprem Wiki platformunu kullanarak, bu bilgilerin kullanımıyla ilgili herhangi bir zarardan sorumlu olmadığımızı kabul edersiniz.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      6. Üçüncü Taraf Bağlantıları
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      Deprem Wiki web sitesi veya uygulaması, üçüncü taraf sitelere veya hizmetlere bağlantılar içerebilir. Bu üçüncü taraf sitelerin içeriklerinden veya gizlilik politikalarından sorumlu değiliz. Üçüncü taraf bağlantıları kullanırken dikkatli olmanız ve o sitelerin koşullarını incelemeniz önerilir.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      7. Fikri Mülkiyet Hakları
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      Deprem Wiki'nin içeriği, tasarımı ve sunduğu hizmetler telif hakkı veya diğer fikri mülkiyet hakları kapsamında korunmaktadır. Kullanıcılar, Deprem Wiki'nin içeriklerini izinsiz çoğaltamaz, dağıtamaz, değiştiremez veya ticari amaçla kullanamaz.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      8. Kullanım Koşullarının Değiştirilmesi
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      Deprem Wiki, bu kullanım koşullarını zaman zaman güncelleyebilir. Herhangi bir değişiklik durumunda, kullanıcılarımızı bu sayfa üzerinden bilgilendireceğiz. Web sitemizi ve uygulamalarımızı kullanmaya devam etmeniz, yeni kullanım koşullarını kabul ettiğiniz anlamına gelecektir.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <RiMailLine className="text-primary" />
                      9. İletişim
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      Bu kullanım koşulları hakkında sorularınız veya endişeleriniz varsa, bizimle{" "}
                      <a href={`mailto:${EMAIL}`} className="text-primary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                        <strong>{EMAIL}</strong>
                      </a>{" "}
                      adresi üzerinden iletişime geçebilirsiniz.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
