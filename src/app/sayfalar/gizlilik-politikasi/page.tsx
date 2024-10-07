import SectionTitle from "@/components/elements/SectionTitle";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { EMAIL, SITE_URL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import { Grid2, Container, Typography, Box } from "@mui/material";

export const generateMetadata = async () => {
  return SeoData({
    title: "Gizlilik Politikası",
    description: "Deprem.wiki gizlilik politikası",
    url: `${SITE_URL}/sayfalar/gizlilik-politikasi`,
    robots: false,
  });
};

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb
        breadcrumbCategory="Sayfalar"
        breadcrumbCategoryLink="/sayfalar"
        breadcrumbPostTitle="Gizlilik Politikası"
        breadcrumbPostUrl="/sayfalar/gizlilik-politikasi"
      />

      <Container maxWidth="lg" sx={{ mt: "2rem", mb: "4rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography variant="h3" component="h1">
            Deprem Wiki Gizlilik Politikası
          </Typography>
          <Typography variant="body1">
            <strong>Yürürlük Tarihi:</strong> 30 Eylül 2024
          </Typography>

          <Typography variant="body1">
            Deprem Wiki olarak, kullanıcılarımızın gizliliğine saygı gösteriyor
            ve kişisel verilerin korunmasına önem veriyoruz. Bu gizlilik
            politikası, web sitemizi (deprem.wiki) ve ilgili uygulamalarımızı
            (Chrome uzantısı gibi) kullandığınızda topladığımız verilerle ilgili
            bilgilendirme amacı taşımaktadır.
          </Typography>

          <Typography variant="h4" component="h2">
            1. Toplanan Veriler
          </Typography>

          <Typography variant="body1">
            Deprem Wiki, kullanıcılarımızdan şu verileri toplamaktadır:
          </Typography>
          <ul>
            <li>
              <strong>Kayıt Verileri:</strong> E-posta adresi ve parola,
              kullanıcı hesabı oluşturmak için zorunludur. İsim, soyisim ve
              profil fotoğrafı isteğe bağlıdır.
            </li>
            <li>
              <strong>IP Adresi ve Konum Bilgisi:</strong> Deprem haberleri ve
              analizleri için kullanılır. Bu veriler, sadece kullanıcıların
              bulunduğu bölgeye özel bilgilendirme sağlamak amacıyla
              toplanmaktadır.
            </li>
            <li>
              <strong>Çerezler (Cookies):</strong> Web sitemizde Google
              Analytics gibi üçüncü taraf hizmetler tarafından çerezler
              kullanılmaktadır. Bu çerezler, site performansını analiz etmek
              amacıyla kullanılır. Ayrıca, kullanıcı giriş bilgilerini{" "}
              <strong>local storage</strong> üzerinde saklıyoruz.
            </li>
          </ul>

          <Typography variant="h4" component="h2">
            2. Verilerin Kullanım Amaçları
          </Typography>

          <Typography variant="body1">
            Topladığımız veriler şu amaçlar doğrultusunda kullanılmaktadır:
          </Typography>
          <ul>
            <li>
              <strong>Kullanıcı Hesap Yönetimi:</strong> E-posta ve parola gibi
              bilgileri kullanıcı hesabı oluşturmak ve oturum açma işlemlerini
              gerçekleştirmek için kullanıyoruz. İsteğe bağlı olarak sağlanan
              isim, soyisim ve profil fotoğrafı, kullanıcıların yorumları
              sırasında görüntülenir.
            </li>
            <li>
              <strong>Deprem Bilgilendirmesi:</strong> IP adresi ve konum
              bilgisi, kullanıcıların bulunduğu bölgeye özel deprem haberleri ve
              analizleri sağlamak için kullanılmaktadır.
            </li>
            <li>
              <strong>Site Performansı ve Analiz:</strong> Google Analytics gibi
              araçlar, site performansını değerlendirmek için çerezler
              kullanmaktadır.
            </li>
          </ul>

          <Typography variant="h4" component="h2">
            3. Verilerin Saklanma Süresi
          </Typography>

          <Typography variant="body1">
            Kullanıcı verileri en fazla <strong>3 ay</strong> süreyle
            saklanmaktadır. Bu sürenin sonunda, veriler güvenli bir şekilde
            silinir veya anonim hale getirilir. Kullanıcı hesabı silindiğinde,
            ilgili kişisel veriler derhal sistemimizden kaldırılır.
          </Typography>

          <Typography variant="h4" component="h2">
            4. Verilerin Güvenliği
          </Typography>

          <Typography variant="body1">
            Deprem Wiki olarak, kullanıcı bilgilerinin güvenliğini sağlamak için
            çeşitli önlemler almaktayız:
          </Typography>
          <ul>
            <li>
              <strong>SSL Sertifikası:</strong> Web sitemizde tüm veri iletişimi
              SSL sertifikası ile şifrelenmektedir.
            </li>
            <li>
              <strong>Local Storage:</strong> Kullanıcı oturum bilgileri güvenli
              bir şekilde tarayıcının <strong>local storage</strong> alanında
              saklanır.
            </li>
          </ul>

          <Typography variant="h4" component="h2">
            5. Üçüncü Taraflarla Veri Paylaşımı
          </Typography>

          <Typography variant="body1">
            Deprem Wiki, kullanıcı verilerini herhangi bir üçüncü taraf ile{" "}
            <strong>paylaşmamaktadır</strong>. Toplanan veriler sadece yukarıda
            belirtilen amaçlar doğrultusunda kullanılmaktadır.
          </Typography>

          <Typography variant="h4" component="h2">
            6. Çerezler ve Benzer Teknolojiler
          </Typography>

          <Typography variant="body1">
            Google Analytics gibi üçüncü taraf hizmet sağlayıcıları, kullanıcı
            deneyimini geliştirmek ve site trafiğini analiz etmek amacıyla
            çerezler kullanmaktadır. Kullanıcılar, tarayıcı ayarlarından
            çerezleri yönetebilir ve engelleyebilir.
          </Typography>

          <Typography variant="h4" component="h2">
            7. Kullanıcı Hakları
          </Typography>

          <Typography variant="body1">
            Kullanıcılar, aşağıdaki haklara sahiptir:
          </Typography>
          <ul>
            <li>
              <strong>Verilere Erişim:</strong> Kişisel verilerinize erişim
              talep edebilirsiniz.
            </li>
            <li>
              <strong>Veri Düzeltme:</strong> Yanlış veya eksik bilgileri
              düzeltilmesini isteyebilirsiniz.
            </li>
            <li>
              <strong>Veri Silme:</strong> Kişisel verilerinizin silinmesini
              talep edebilirsiniz.
            </li>
            <li>
              <strong>Veri İşleme Sınırlandırması:</strong> Belirli durumlarda
              verilerinizin işlenmesini sınırlama hakkına sahipsiniz.
            </li>
          </ul>

          <Typography variant="body1">
            Bu haklarınızı kullanmak için bizimle{" "}
            <a href={`mailto:${EMAIL}`}>
              <strong>{EMAIL}</strong>
            </a>{" "}
            adresi üzerinden iletişime geçebilirsiniz.
          </Typography>

          <Typography variant="h4" component="h2">
            8. Gizlilik Politikasındaki Değişiklikler
          </Typography>

          <Typography variant="body1">
            Deprem Wiki, bu gizlilik politikasında zaman zaman güncellemeler
            yapabilir. Herhangi bir değişiklik olduğunda, bu sayfa üzerinden
            kullanıcıları bilgilendireceğiz.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
