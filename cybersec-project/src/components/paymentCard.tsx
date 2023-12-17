"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useState } from "react";
import sendData from "@/util/sendData";

export default function PaymentCard() {
  const [data, setData] = useState({
    cardOwner: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    CVV: "",
  });
  return (
    <section className={paymentCard.paymentCardFrame}>
      <div>
        <Image className={paymentCard.logo} src={logo} alt="PayTR LOGO" />
      </div>
      <div className={paymentCard.paymentCardWrapper}>
        <div className={paymentCard.inputWrapper}>
          <label htmlFor="cardOwner">Full Name:</label>
          <input
            className={paymentCard.input}
            type="text"
            name=""
            id=""
            placeholder="ex: John Doe"
            onChange={(event) =>
              setData((state) => ({
                ...state,
                cardOwner: event.target.value,
              }))
            }
          />
        </div>
        <div className={paymentCard.inputWrapper}>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            className={paymentCard.input}
            type="text"
            placeholder="xxxx xxxx xxxx xxxx"
            onChange={(event) =>
              setData((state) => ({
                ...state,
                cardNumber: event.target.value,
              }))
            }
          />
        </div>
        <div className={paymentCard.dateAndCVV}>
          <div className={paymentCard.inputWrapper}>
            <label htmlFor="expDate">Expiration Date:</label>
            <div className={paymentCard.dateWrapper}>
              <input
                onChange={(event) =>
                  setData((state) => ({
                    ...state,
                    expMonth: event.target.value,
                  }))
                }
                className={paymentCard.input}
                type="text"
                maxLength={2}
              />
              <span>/</span>
              <input
                onChange={(event) =>
                  setData((state) => ({
                    ...state,
                    expYear: event.target.value,
                  }))
                }
                className={paymentCard.input}
                type="text"
                maxLength={2}
              />
            </div>
          </div>
          <div className={paymentCard.inputWrapper}>
            <label htmlFor="cvv">CVV</label>
            <input
              onChange={(event) =>
                setData((state) => ({
                  ...state,
                  CVV: event.target.value,
                }))
              }
              className={paymentCard.input}
              type="text"
              maxLength={3}
            />
          </div>
        </div>
        <button
          onClick={() => {
            sendData(data).then((result) =>
              result ? alert("Success!") : alert("Error!")
            );
          }}
          className={paymentCard.order}
        >
          Complete Order
        </button>
      </div>
    </section>
  );
}

const paymentCard = {
  logo: "w-4/5",
  paymentCardFrame:
    "w-full flex flex-col justify-center items-center bg-gray-100 lg:w-1/3",
  paymentCardWrapper: "w-full flex flex-col gap-2 p-2",
  inputWrapper: "flex flex-col w-full",
  dateAndCVV: "flex gap-4",
  input: "w-full p-1 border border-primary",
  dateWrapper: "flex justify-center items-center gap-2",
  order: "w-full bg-primary px-2 py-1 text-white",
};
