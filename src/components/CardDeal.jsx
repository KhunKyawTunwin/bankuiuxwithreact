import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few esay
        steps .
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Now available for download across the country, With just a few taps on
        your phone, whether you wish to pay, transfer, cash in or cash out –
        it’s easy with KBZPay!
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
