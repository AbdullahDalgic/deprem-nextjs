import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import API from "@/utils/api/apiConfig";
import { WiEarthquake } from "react-icons/wi";
import { IEarthquake } from "@/utils/interfaces/earthquakes";

const LastEarthquakes = () => {
  const [earthquakes, setEarthquakes] = React.useState<IEarthquake[]>();
  React.useEffect(() => {
    API.get(`/earthquakes?limit=15`).then((response) => {
      setEarthquakes(response?.data);
      // console.log("🚀 ~ API.get ~ response:", response);
    });
  }, []);

  return (
    <div className="widget sidebar-widget widget_categories">
      <h4 className="widget-title">Son Depremler</h4>
      <ul
        className="list-wrap"
        style={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}
      >
        {earthquakes &&
          earthquakes.length > 0 &&
          earthquakes
            .sort(
              (a: IEarthquake, b: IEarthquake) =>
                // @ts-ignore
                new Date(b.eventDate) - new Date(a.eventDate)
            )
            .map((earthquake, i) => (
              <li key={i}>
                <Link href="/" style={{ width: "100%" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div className="thumb">
                        <WiEarthquake size={25} />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        {earthquake.location}
                        <span style={{ margin: 0 }}>
                          {dayjs(earthquake.eventDate).format(
                            "DD.MM.YYYY HH:mm"
                          )}
                        </span>
                      </div>
                    </div>
                    <span style={{ width: "25px" }}>
                      {earthquake.magnitude}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
      </ul>
      <div className="xShadow" />
    </div>
  );
};

export default LastEarthquakes;
