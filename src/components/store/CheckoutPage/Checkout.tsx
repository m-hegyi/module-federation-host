import Input from "../UI/Input";

const Checkout = () => (
  <div className="bg-white mt-6 rounded-xl shadow max-w-4xl w-full p-6">
    <div>
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
    </div>
    <section>
      <h2>Billing information</h2>
      <div className="flex gap-4">
        <div>
          <Input label="First name" />
        </div>
        <div>
          <Input label="Last name" />
        </div>
      </div>
      <div>
        <Input label="Email adddress" />
      </div>
      <div>
        <Input label="Phone Number" />
      </div>
      <div>
        <Input label="Address" />
      </div>
    </section>
    <section>
      <h2>Payment information</h2>
      <div>
        <Input label="Card number" />
      </div>
      <div>
        <Input label="Name on card" />
      </div>
      <div>
        <div>
          <Input label="Expiration date" />
        </div>
        <div>
          <Input label="CCV" />
        </div>
      </div>
    </section>
    <section>
      <h2>Summary</h2>
      <div>Summary</div>
    </section>
  </div>
);

export default Checkout;
