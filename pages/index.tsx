import React, {
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { SearchBar } from "components/SearchBar/SearchBar";
import { BlankCard } from "components/BlankCard/BlankCard";
import L from "leaflet";
const InfoDisplay = ({
  heading = "",
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h2>{heading}</h2>
      {children}
    </div>
  );
};
const useIsBrowserEnv = () => {
  const [isBrowserEnv, setIsBrowserEnv] = useState(false);
  useEffect(() => {
    setIsBrowserEnv(true);
  }, []);

  return isBrowserEnv;
};
// https://stackoverflow.com/questions/57704196/leaflet-with-next-js
// https://epicreact.dev/why-you-shouldnt-put-refs-in-a-dependency-array/
// https://epicreact.dev/the-latest-ref-pattern-in-react/
export default function Home() {
  const mapRef = useRef<any>(null);
  const isBrowserEnv = useIsBrowserEnv();
  useEffect(() => {
    if (isBrowserEnv && mapRef?.current) {
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    }
  }, [isBrowserEnv]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>IP Address Tracker</h1>
        <SearchBar
          className={styles["search-bar"]}
          placeholder="Search for any IP address or domain"
          onTrigger={() => {
            console.log("Searching");
          }}
        />
        <BlankCard className={styles.card}>
          <InfoDisplay heading="IP Address">
            <p>192.212.174.101</p>
          </InfoDisplay>
          <InfoDisplay heading="Location">
            <p>Brooklyn, NY 10001</p>
          </InfoDisplay>
          <InfoDisplay heading="Timezone">
            <p>UTC -05:00</p>
          </InfoDisplay>
          <InfoDisplay heading="ISP">
            <p>SpaceX Starlink</p>
          </InfoDisplay>
        </BlankCard>
      </header>
      <div ref={mapRef} style={{}} />
    </div>
  );
}
/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div> */
