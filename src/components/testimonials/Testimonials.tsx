import Courosel from "./Courosel";
import "./testimonials.style.css";

export default function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <div className="container">
          <div className="content-area">
            <div>
              <p>nossos clientes</p>
              <hr />
              <h2>
                Trabalhamos <br /> com os <span> maiores</span>
              </h2>
            </div>
          </div>

          <Courosel />
        </div>
      </section>
    </>
  );
}
