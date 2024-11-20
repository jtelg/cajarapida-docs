import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Rapidez en las Ventas",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Agiliza las transacciones para ofrecer una mejor experiencia a tus
        clientes.
      </>
    ),
  },
  {
    title: "Gestión Sencilla",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Controla tus productos, gestiona el stock y realiza un seguimiento
        diario de caja con facilidad.
      </>
    ),
  },
  {
    title: "Eficiencia Total",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Simplifica la administración y gana tiempo para enfocarte en lo que
        realmente importa: <b>hacer crecer tu negocio.</b>
      </>
    ),
  },
  // {
  //   title: "Soporte 24/7",
  //   Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
  //   description: (
  //     <>
  //       Nuestro equipo está siempre disponible para ayudarte cuando lo
  //       necesites.
  //     </>
  //   ),
  // },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
