import SectionTitle from "@/components/elements/SectionTitle";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { EMAIL, SITE_URL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import { Grid2, Container, Typography, Box } from "@mui/material";

export const generateMetadata = async () => {
  return SeoData({
    title: "Kullanım Koşulları",
    description: "Deprem.wiki kullanım koşulları",
    url: `${SITE_URL}/kullanim-kosullari`,
    robots: false,
  });
};

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb
        breadcrumbCategory="Sayfalar"
        breadcrumbCategoryLink="/sayfalar"
        breadcrumbPostTitle="Kullanım Koşulları"
        breadcrumbPostUrl="/sayfalar/kullanim-kosullari"
      />

      <Container maxWidth="lg" sx={{ mt: "2rem", mb: "4rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography variant="h3" component="h1">
            Deprem Wiki Kullanım Koşulları
          </Typography>
          <Typography variant="body1">
            <strong>Yürürlük Tarihi:</strong> 30 Eylül 2024
          </Typography>

          <Typography variant="body1">
            Bu web sitesine (deprem.wiki) ve ilişkili uygulamalara (örneğin,
            Chrome uzantısı) erişim sağlayarak, aşağıda belirtilen kullanım
            koşullarını kabul etmiş olursunuz. Bu koşullar, Deprem Wiki
            tarafından sunulan hizmetlerin kullanımını düzenler ve web sitesini
            veya uygulamalarını kullanmanız durumunda geçerli olacaktır.
          </Typography>

          <Typography variant="h4" component="h2">
            1. Hizmetin Kapsamı
          </Typography>
          <Typography variant="body1">
            Deprem Wiki, deprem haberleri ve analizlerine anlık olarak erişim
            sağlamayı amaçlayan bir platformdur. Sağlanan bilgiler genel
            bilgilendirme amaçlıdır ve yalnızca kullanıcıları deprem
            faaliyetleri hakkında bilgilendirmek amacıyla sunulmaktadır.
          </Typography>

          <Typography variant="h4" component="h2">
            2. Kullanıcı Hesapları
          </Typography>
          <ul>
            <li>
              Web sitemizde veya uygulamalarımızda bir hesap oluşturduğunuzda,
              doğru ve eksiksiz bilgi vermeyi kabul edersiniz.
            </li>
            <li>
              Hesap açmak için zorunlu bilgiler e-posta adresi ve paroladır.
              İsim, soyisim ve profil fotoğrafı isteğe bağlıdır.
            </li>
            <li>
              Hesabınızdan yapılan tüm faaliyetlerden siz sorumlusunuz.
              Hesabınızı korumak için şifrenizi gizli tutmalısınız. Şifrenizi
              üçüncü taraflarla paylaşmamalısınız.
            </li>
            <li>
              Deprem Wiki, kullanıcı hesaplarını gerektiğinde askıya alma veya
              kapatma hakkını saklı tutar.
            </li>
          </ul>

          <Typography variant="h4" component="h2">
            3. Kullanıcı Yorumları
          </Typography>
          <ul>
            <li>
              Kullanıcılar, deprem haberleri altına yorum yapabilirler.
              Yorumlar, kullanıcı adı ve varsa profil fotoğrafı ile birlikte
              yayınlanır.
            </li>
            <li>
              Yorumlarınızda başkalarının haklarını ihlal etmemeli, hakaret,
              tehdit, yasa dışı içerik veya yanıltıcı bilgiler
              paylaşmamalısınız.
            </li>
            <li>
              Deprem Wiki, uygun görmediği yorumları kaldırma veya düzenleme
              hakkını saklı tutar.
            </li>
          </ul>

          <Typography variant="h4" component="h2">
            4. Toplanan Veriler ve Gizlilik
          </Typography>
          <Typography variant="body1">
            Deprem Wiki, kullanıcılarından topladığı verileri{" "}
            <strong>Gizlilik Politikası</strong>'nda belirtildiği şekilde
            kullanır. Web sitemizi ve uygulamalarımızı kullanarak, Gizlilik
            Politikası'nda açıklanan veri işleme süreçlerini kabul etmiş
            olursunuz.
          </Typography>
          <ul>
            <li>
              IP adresi ve konum bilgileri, deprem haberleri ve analizler
              sağlamak amacıyla toplanmaktadır.
            </li>
            <li>
              Verilerinizi korumak için gerekli güvenlik önlemleri alınmaktadır.
              Detaylar için lütfen <strong>Gizlilik Politikası</strong>'nı
              inceleyin.
            </li>
          </ul>

          <Typography variant="h4" component="h2">
            5. Sorumluluk Reddi
          </Typography>
          <Typography variant="body1">
            Deprem Wiki platformunda sunulan deprem haberleri ve analizleri,
            üçüncü taraf veri sağlayıcılarından alınmakta olup, olabildiğince
            güncel ve doğru bilgiler sunmaya çalışıyoruz. Ancak:
          </Typography>
          <ul>
            <li>
              Sağlanan bilgilerde eksiklikler, gecikmeler veya hatalar olabilir.
            </li>
            <li>
              Deprem haberlerinin doğruluğu, zamanlaması veya güncelliği
              konusunda herhangi bir garanti vermiyoruz.
            </li>
            <li>
              Deprem Wiki platformunu kullanarak, bu bilgilerin kullanımıyla
              ilgili herhangi bir zarardan sorumlu olmadığımızı kabul edersiniz.
            </li>
          </ul>

          <Typography variant="h4" component="h2">
            6. Üçüncü Taraf Bağlantıları
          </Typography>
          <Typography variant="body1">
            Deprem Wiki web sitesi veya uygulaması, üçüncü taraf sitelere veya
            hizmetlere bağlantılar içerebilir. Bu üçüncü taraf sitelerin
            içeriklerinden veya gizlilik politikalarından sorumlu değiliz.
            Üçüncü taraf bağlantıları kullanırken dikkatli olmanız ve o
            sitelerin koşullarını incelemeniz önerilir.
          </Typography>

          <Typography variant="h4" component="h2">
            7. Fikri Mülkiyet Hakları
          </Typography>
          <Typography variant="body1">
            Deprem Wiki’nin içeriği, tasarımı ve sunduğu hizmetler telif hakkı
            veya diğer fikri mülkiyet hakları kapsamında korunmaktadır.
            Kullanıcılar, Deprem Wiki’nin içeriklerini izinsiz çoğaltamaz,
            dağıtamaz, değiştiremez veya ticari amaçla kullanamaz.
          </Typography>

          <Typography variant="h4" component="h2">
            8. Kullanım Koşullarının Değiştirilmesi
          </Typography>
          <Typography variant="body1">
            Deprem Wiki, bu kullanım koşullarını zaman zaman güncelleyebilir.
            Herhangi bir değişiklik durumunda, kullanıcılarımızı bu sayfa
            üzerinden bilgilendireceğiz. Web sitemizi ve uygulamalarımızı
            kullanmaya devam etmeniz, yeni kullanım koşullarını kabul ettiğiniz
            anlamına gelecektir.
          </Typography>

          <Typography variant="h4" component="h2">
            9. İletişim
          </Typography>
          <Typography variant="body1">
            Bu kullanım koşulları hakkında sorularınız veya endişeleriniz varsa,
            bizimle{" "}
            <a href={`mailto:${EMAIL}`}>
              <strong>{EMAIL}</strong>
            </a>{" "}
            adresi üzerinden iletişime geçebilirsiniz.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
