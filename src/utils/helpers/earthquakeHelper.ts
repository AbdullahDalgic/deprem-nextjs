import { IEarthquake } from "../interfaces/earthquakes";
import { generateAssetsUrl } from "./urls";

export const earthquakeTitle = (earthquake: IEarthquake) => {
  return `${earthquake?.location} ${earthquake?.magnitude} Büyüklüğünde Deprem`;
};

export const earthquakeDescription = (earthquake: IEarthquake) => {
  return `${earthquake?.location} bölgesinde ${earthquake?.magnitude} büyüklüğünde deprem meydana geldi. Deprem hakkında detaylı bilgiyi buradan öğrenebilirsiniz.`;
};

export const earthquakeMetaImage = (earthquake?: IEarthquake) => {
  return generateAssetsUrl(`/assets/img/logo/logo.png`);
};
