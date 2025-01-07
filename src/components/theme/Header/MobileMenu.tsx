import { SOCIAL } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";
import { generateAssetsUrl } from "@/utils/helpers/urls";

interface IMobileMenu {
  handleMobileMenuClose: () => void;
}

const MobileMenu = ({ handleMobileMenuClose }: IMobileMenu) => {
  // const [isActive, setIsActive] = useState({
  //   status: false,
  //   key: "",
  // });

  // const handleToggle = (key: string) => {
  //   if (isActive.key === key) {
  //     setIsActive({
  //       ...isActive,
  //       status: false,
  //     });
  //   } else {
  //     setIsActive({
  //       status: true,
  //       key,
  //     });
  //   }
  // };

  return (
    <>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn" onClick={handleMobileMenuClose}>
            <i className="fas fa-times" />
          </div>
          <div className="nav-logo">
            <Link href="/" className="logo-dark">
              <Image
                src={generateAssetsUrl(`/assets/img/logo/logo.png`)}
                alt="Logo"
                width={50}
                height={50}
                priority={false}
                style={{ width: "auto" }}
              />
            </Link>
            <Link href="/" className="logo-light">
              <Image
                src={`/assets/img/logo/w_logo.png`}
                alt="Logo"
                width={150}
                height={50}
                priority={false}
                style={{ width: "auto" }}
              />
            </Link>
          </div>
          {/* <div className="tgmobile__search">
            <form action="#">
              <input type="text" placeholder="Search here..." />
              <button>
                <i className="far fa-search" />
              </button>
            </form>
          </div> */}
          <div className="tgmobile__menu-outer">
            <ul className="navigation">
              <li>
                <Link href="/">Anasayfa</Link>
              </li>
              <li>
                <Link href="/haberler">Haberler</Link>
              </li>
              <li>
                <Link href="/depremler">Depremler</Link>
              </li>
              <li>
                <Link href="/apps">Uygulamalar</Link>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="list-wrap">
              {Object.entries(SOCIAL).map(([key, value], i) => (
                <li key={i}>
                  <Link href={value} aria-label={key} rel="noreferrer nofollow">
                    <i className={`fab fa-${key}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div
        className="tgmobile__menu-backdrop"
        onClick={handleMobileMenuClose}
      />
    </>
  );
};

export default MobileMenu;
