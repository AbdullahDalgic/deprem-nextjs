import { SITE_URL } from "../constants";
import { IEarthquake } from "../interfaces/earthquakes";

export const earthquakeTitle = (earthquake: IEarthquake) => {
  return `${earthquake.location} ${earthquake.magnitude} Büyüklüğünde Deprem`;
};

export const earthquakeDescription = (earthquake: IEarthquake) => {
  return `${earthquake.location} bölgesinde ${earthquake.magnitude} büyüklüğünde deprem meydana geldi. Deprem hakkında detaylı bilgiyi buradan öğrenebilirsiniz.`;
};

export const earthquakeMetaImage = (earthquake?: IEarthquake) => {
  return `${SITE_URL}/assets/img/logo/logo.png`;
};
