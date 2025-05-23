
import Link from "next/link";
import styles from "./gardenresources.module.css";
import Head from "next/head";


function GardenResources() {





  return (
    <div className={styles.GardenResources}>
      <Head>
        <title>Garden Resources - Jericho Nursery</title>
        <meta
          name="description"
          content="Explore a collection of helpful garden resources and guides provided by Jericho Nursery."
        />
        <meta
          property="og:title"
          content="Garden Resources - Jericho Nursery"
        />
        <meta
          property="og:description"
          content="Explore a collection of helpful garden resources and guides provided by Jericho Nursery."
        />
        <meta
          property="og:image"
          content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className={styles.gr_welcome}>
        <h1>Gardening Resources</h1>
        <p>
          Check out some of the great gardening knowledge provided by the
          Jericho Nursery Staff. These tidbits are must-haves for growing your
          gardening knowledge.
        </p>
      </div>

      <div className={styles.gr_gallery}></div>

      <div className={styles.gr_body_main}>
        <div className={styles.gr_body_top}>
          <div className={styles.fbt_header}>
            <h1>Know Your Zone</h1>
          </div>
          <p>
            Most people don't realize New Mexico has 6 different Planting Zones
            across the state from Gallup to Carlsbad; but even fewer might
            realize these zones can have subsections, giving New Mexicans 10
            different zones to keep track of depending on where you live.
            <br />
            <br />
            Nothing to fear, our Gardening Angels have you covered. Check out
            these resources to familiarize yourself with every zone New Mexico
            has to offer.
          </p>
          <div className={styles.gr_body_top_img}>
            <img
              alt="New Mexico Garden Zone Map"
              target="_blank"
              rel="noreferrer"
              src="https://treevitalize.com/wp-content/uploads/2022/06/New-Mexico-Plant-Hardiness-Zone-Map.png"
            />
          </div>

          <Link href="https://treevitalize.com/planting-zones-new-mexico/">
            <button className={styles.yellow_gr_button}>
              Read More from Treevitalize
            </button>
          </Link>
          <Link href="https://www.plantmaps.com/interactive-new-mexico-usda-plant-zone-hardiness-map.php">
            <button className={styles.yellow_gr_button}>
              Check out your town or city specifically with Plant Maps
            </button>
          </Link>
        </div>

        <div className={styles.gr_body_bottom}>
          <h1>
            Did you know the Albuquerque and Bernallio County Public Library
            offer a seed library?
          </h1>
          <div className={styles.gr_bb_bottom}>
            <div className={styles.gr_bt_img}>
              <img
                alt="Bernallio Country Seed Library"
                target="_blank"
                rel="noreferrer"
                src="https://images.unsplash.com/photo-1591989331039-f645c3d7888c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=1171&q=80"
              />
            </div>
            <h3>Check it out for yourself!</h3>

            <p>
              "The ABQ-BERNCO Seed Library was established in 2014 and has a
              mission of encouraging a community of water-wise home gardeners.
              The Seed Library aims to provide the access, helpful hints, and
              skills to enable everyone to participate in this gardening
              community by offering free vegetable, herb and flower seeds to
              card holders and by offering free monthly garden-related programs
              to foster all levels of gardeners through growing, harvesting,
              seed saving and more—all within our unique high desert
              environment."
            </p>

            <Link href="https://abqlibrary.org/seeds/Overview">
              <button className={styles.green_gr_button}>
                Click Here to visit the ABQ Seed Library Information Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GardenResources;
