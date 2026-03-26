import Breadcrumb from "@/components/theme/Breadcrumb";
import { EMAIL, SITE_URL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import { RiShieldCheckLine, RiCalendarLine, RiMailLine, RiLockLine } from "react-icons/ri";

export const generateMetadata = async () => {
  return SeoData({
    title: "Gizlilik Politikası - Deprem Wiki",
    description: "Deprem Wiki gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.",
    url: `${SITE_URL}/sayfalar/gizlilik-politikasi`,
  });
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Breadcrumb
          breadcrumbCategory="Sayfalar"
          breadcrumbCategoryLink="/sayfalar"
          breadcrumbPostTitle="Gizlilik Politikası"
          breadcrumbPostUrl="/sayfalar/gizlilik-politikasi"
        />
      </div>

      <section className="py-8 md:py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
              <RiShieldCheckLine className="text-4xl text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Gizlilik Politikası
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
                  Deprem Wiki olarak, kullanıcılarımızın gizliliğine saygı gösteriyor ve kişisel verilerin korunmasına önem veriyoruz. Bu gizlilik politikası, web sitemizi (deprem.wiki) ve ilgili uygulamalarımızı (Chrome uzantısı gibi) kullandığınızda topladığımız verilerle ilgili bilgilendirme amacı taşımaktadır.
                </p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      1. Toplanan Veriler
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Deprem Wiki, kullanıcılarımızdan şu verileri toplamaktadır:
                    </p>
                    <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 ml-6">
                      <li className="list-disc">
                        <strong className="text-gray-900 dark:text-white">Kayıt Verileri:</strong> E-posta adresi ve parola, kullanıcı hesabı oluşturmak için zorunludur. İsim, soyisim ve profil fotoğrafı isteğe bağlıdır.
                      </li>
                      <li className="list-disc">
                        <strong className="text-gray-900 dark:text-white">IP Adresi ve Konum Bilgisi:</strong> Deprem haberleri ve analizleri için kullanılır. Bu veriler, sadece kullanıcıların bulunduğu bölgeye özel bilgilendirme sağlamak amacıyla toplanmaktadır.
                      </li>
                      <li className="list-disc">
                        <strong className="text-gray-900 dark:text-white">Çerezler (Cookies):</strong> Web sitemizde Google Analytics gibi üçüncü taraf hizmetler tarafından çerezler kullanılmaktadır. Bu çerezler, site performansını analiz etmek amacıyla kullanılır. Ayrıca, kullanıcı giriş bilgilerini <strong className="text-gray-900 dark:text-white">local storage</strong> üzerinde saklıyoruz.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      2. Verilerin Kullanım Amaçları
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Topladığımız veriler şu amaçlar doğrultusunda kullanılmaktadır:
                    </p>
                    <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 ml-6">
                      <li className="list-disc">
                        <strong className="text-gray-900 dark:text-white">Kullanıcı Hesap Yönetimi:</strong> E-posta ve parola gibi bilgileri kullanıcı hesabı oluşturmak ve oturum açma işlemlerini gerçekleştirmek için kullanıyoruz. İsteğe bağlı olarak sağlanan isim, soyisim ve profil fotoğrafı, kullanıcıların yorumları sırasında görüntülenir.
                      </li>
                      <li className="list-disc">
                        <strong className="text-gray-900 dark:text-white">Deprem Bilgilendirmesi:</strong> IP adresi ve konum bilgisi, kullanıcıların bulunduğu bölgeye özel deprem haberleri ve analizleri sağlamak için kullanılmaktadır.
                      </li>
                      <li className="list-disc">
                        <strong className="text-gray-900 dark:text-white">Site Performansı ve Analiz:</strong> Google Analytics gibi araçlar, site performansını değerlendirmek için çerezler kullanmaktadır.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      3. Verilerin Saklanma Süresi
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      Kullanıcı verileri en fazla <strong className="text-gray-900 dark:text-white">3 ay</strong> süreyle saklanmaktadır. Bu sürenin sonunda, veriler güvenli bir şekilde silinir veya anonim hale getirilir. Kullanıcı hesabı silindiğinde, ilgili kişisel veriler derhal sistemimizden kaldırılır.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <RiLockLine className="text-primary" />
                      4. Verilerin Güvenliği
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Deprem Wiki olarak, kullanıcı bilgilerinin güvenliğini sağlamak için çeşitli önlemler almaktayız:
                    </p>
                    <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 ml-6">
                      <li className="list-disc">
                        <strong className="text-gray-900 dark:text-white">SSL Sertifikası:</strong> Web sitemizde tüm veri iletişimi SSL sertifikası ile şifrelenmektedir.
                      </li>
                      <li className="list-disc">
                        <strong className="text-gray-900 dark:text-white">Local Storage:</strong> Kullanıcı oturum bilgileri güvenli bir şekilde tarayıcının <strong className="text-gray-900 dark:text-white">local storage</strong> alanında saklanır.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      5. Üçüncü Taraflarla Veri Paylaşımı
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      Deprem Wiki, kullanıcı verilerini herhangi bir üçüncü taraf ile <strong className="text-gray-900 dark:text-white">paylaşmamaktadır</strong>. Toplanan veriler sadece yukarıda belirtilen amaçlar doğrultusunda kullanılmaktadır.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      6. Çerezler ve Benzer Teknolojiler
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      Google Analytics gibi üçüncü taraf hizmet sağlayıcıları, kullanıcı deneyimini geliştirmek ve site trafiğini analiz etmek amacıyla çerezler kullanmaktadır. Kullanıcılar, tarayıcı ayarlarından çerezleri yönetebilir ve engelleyebilir.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      7. Kullanıcı Hakları
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Kullanıcılar, aşağıdaki haklara sahiptir:
                    </p>
                    <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 ml-6">
                      <li className="list-disc">
                        <strong className="text-gray-900 dark:text-white">Verilere Erişim:</strong> Kişisel verilerinize erişim talep edebilirsiniz.
                      </li>
                      <li className="list-disc">
                        <strong className="text-gray-900 dark:text-white">Veri Düzeltme:</strong> Yanlış veya eksik bilgileri düzeltilmesini isteyebilirsiniz.
                      </li>
                      <li className="list-disc">
                        <strong className="text-gray-900 dark:text-white">Veri Silme:</strong> Kişisel verilerinizin silinmesini talep edebilirsiniz.
                      </li>
                      <li className="list-disc">
                        <strong className="text-gray-900 dark:text-white">Veri İşleme Sınırlandırması:</strong> Belirli durumlarda verilerinizin işlenmesini sınırlama hakkına sahipsiniz.
                      </li>
                    </ul>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                      Bu haklarınızı kullanmak için bizimle{" "}
                      <a href={`mailto:${EMAIL}`} className="text-primary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                        <strong>{EMAIL}</strong>
                      </a>{" "}
                      adresi üzerinden iletişime geçebilirsiniz.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <RiMailLine className="text-primary" />
                      8. Gizlilik Politikasındaki Değişiklikler
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      Deprem Wiki, bu gizlilik politikasında zaman zaman güncellemeler yapabilir. Herhangi bir değişiklik olduğunda, bu sayfa üzerinden kullanıcıları bilgilendireceğiz.
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
