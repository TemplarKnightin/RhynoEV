import React from "react";

const RefundPolicy = () => {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Refund Policy</h1>
      
      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Introduction</h2>
        <p>
          At Rhyno EV, customer satisfaction is our top priority. If you are not
          entirely satisfied with your purchase, we're here to help.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Returns</h2>
        <p>
          You have 30 calendar days to return an item from the date you received
          it. To be eligible for a return, your item must be unused and in the
          same condition that you received it. Your item must be in the original
          packaging. Your item needs to have the receipt or proof of purchase.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Refunds</h2>
        <p>
          Once we receive your item, we will inspect it and notify you that we
          have received your returned item. We will immediately notify you of
          the status of your refund after inspecting the item. If your return is
          approved, we will initiate a refund to your credit card (or original
          method of payment). You will receive the credit within a certain
          amount of days, depending on your card issuer's policies.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Shipping</h2>
        <p>
          You will be responsible for paying for your own shipping costs for
          returning your item. Shipping costs are non-refundable. If you receive
          a refund, the cost of return shipping will be deducted from your
          refund.
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
